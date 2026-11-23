/**
 * Google Ads Click Fraud & Bot Koruması (anti-fraud.js)
 * ----------------------------------------------------------------------------
 * 1. gclid, wbraid, gbraid, gad_source ve utm_medium=cpc parametrelerini izler;
 *    2 saat içinde 2'den fazla mükerrer reklam tıklamasında suspected_click_fraud olayı yollar.
 * 2. Görünmez Honeypot bağlantısı ile otomatik bot taramalarını yakalar (bot_trap_triggered).
 * 3. tel: ve WhatsApp aksiyonlarında 800ms altı flood/spam tıklamalarını capture fazında
 *    engelleyerek (e.preventDefault + e.stopImmediatePropagation) sahte Ads dönüşümünü önler.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'rescue_ad_clicks_v1';
  var SESSION_FRAUD_KEY = 'rescue_fraud_suspect';
  var WINDOW_MS = 2 * 60 * 60 * 1000; // 2 saat
  var DEBOUNCE_MS = 800;
  var lastActionTime = 0;

  try {
    if (sessionStorage.getItem(SESSION_FRAUD_KEY) === '1') {
      window.__FRAUD_SUSPECT__ = true;
    }
  } catch (_) {}

  function safeGtag(eventName, params) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, Object.assign({ transport_type: 'beacon' }, params || {}));
      }
    } catch (_) {}
  }

  // 1. Reklam tıklaması tekrar analizi
  try {
    var qs = new URLSearchParams(window.location.search);
    var isPaid =
      qs.has('gclid') ||
      qs.has('wbraid') ||
      qs.has('gbraid') ||
      qs.has('gad_source') ||
      (qs.get('utm_medium') || '').toLowerCase() === 'cpc';

    if (isPaid) {
      var now = Date.now();
      var raw = localStorage.getItem(STORAGE_KEY);
      var stamps = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(stamps)) stamps = [];
      stamps = stamps.filter(function (t) {
        return typeof t === 'number' && now - t < WINDOW_MS;
      });
      stamps.push(now);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stamps));

      if (stamps.length > 2) {
        window.__FRAUD_SUSPECT__ = true;
        try {
          sessionStorage.setItem(SESSION_FRAUD_KEY, '1');
        } catch (_) {}
        safeGtag('suspected_click_fraud', {
          click_count_2h: stamps.length,
          page_path: window.location.pathname
        });
      }
    }
  } catch (_) {}

  // 2. Honeypot bot tuzağı
  function mountHoneypot() {
    if (!document.body || document.getElementById('hp-bot-trap')) return;
    var trap = document.createElement('a');
    trap.id = 'hp-bot-trap';
    trap.href = '#hp-verify';
    trap.setAttribute('aria-hidden', 'true');
    trap.tabIndex = -1;
    trap.textContent = 'verify';
    trap.style.cssText =
      'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:auto;';
    trap.addEventListener('click', function (e) {
      e.preventDefault();
      window.__BOT_DETECTED__ = true;
      safeGtag('bot_trap_triggered', { page_path: window.location.pathname });
    });
    document.body.appendChild(trap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHoneypot);
  } else {
    mountHoneypot();
  }

  // 3. tel: ve WhatsApp flood / bot koruma (capture phase — main.js'den önce çalışır)
  document.addEventListener(
    'click',
    function (e) {
      var target = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href*="whatsapp.com"], .btn-send-location') : null;
      if (!target) return;

      // Bot yakalandıysa veya otomatik tıklama (isTrusted === false) ise engelle
      if (window.__BOT_DETECTED__ || e.isTrusted === false) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.__fraudBlocked = true;
        safeGtag('blocked_bot_conversion', { page_path: window.location.pathname });
        return;
      }

      var now = Date.now();
      if (now - lastActionTime < DEBOUNCE_MS) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.__fraudBlocked = true;
        return;
      }
      lastActionTime = now;
    },
    true
  );
})();
