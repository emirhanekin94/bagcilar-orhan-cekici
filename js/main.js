/**
 * Ana Etkileşim, Dinamik Ads Eşleştirme & Google Ads Dönüşüm Motoru (main.js)
 * ----------------------------------------------------------------------------
 * - Mobil menü, SSS akordiyon, 6→N bölge toggle, bölge dizini kategori filtresi
 * - Galeri Lightbox, Lazy Google Maps facade
 * - Dinamik ?hizmet= Ads Niyet Eşleştirici (statik güvenli allowlist)
 * - iOS Safari uyumlu senkron WhatsApp açılışı (setTimeout/pop-up engeli YOK)
 * - Birincil Ads dönüşümü: a[href^="tel:"] (anti-fraud korumalı)
 * - Opsiyonel İkincil (Gözlem) Ads dönüşümü: adsWhatsappConversion
 */
(function () {
  'use strict';

  var CFG = window.__SITE_CONFIG__ || {};
  var BRAND = CFG.brandName || 'Çekici';
  var WA_NUMBER = CFG.whatsappNumber || '';
  var ADS_CALL_CONV = (CFG.adsCallConversion || '').trim();
  var ADS_WA_CONV = (CFG.adsWhatsappConversion || '').trim();

  function fireGA4(eventName, params) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, Object.assign({ transport_type: 'beacon' }, params || {}));
      }
    } catch (_) {}
  }

  function fireAdsWhatsapp() {
    if (!ADS_WA_CONV || typeof window.gtag !== 'function' || window.__FRAUD_SUSPECT__ || window.__BOT_DETECTED__) {
      return;
    }
    try {
      window.gtag('event', 'conversion', {
        send_to: ADS_WA_CONV,
        transport_type: 'beacon'
      });
    } catch (_) {}
  }

  /**
   * Google Ads Telefon Araması Dönüşüm Fonksiyonu (Birincil Dönüşüm)
   * Fraud/Bot şüphesi varsa dönüşüm gönderilmez, doğrudan arama yapılır.
   */
  window.gtag_report_conversion = function (url) {
    var navigated = false;
    var go = function () {
      if (navigated) return;
      navigated = true;
      if (typeof url === 'string' && url) {
        window.location.href = url;
      }
    };

    var canReport =
      ADS_CALL_CONV &&
      typeof window.gtag === 'function' &&
      !window.__FRAUD_SUSPECT__ &&
      !window.__BOT_DETECTED__;

    if (canReport) {
      try {
        window.gtag('event', 'conversion', {
          send_to: ADS_CALL_CONV,
          transport_type: 'beacon',
          event_callback: go
        });
      } catch (_) {
        go();
      }
      setTimeout(go, 250);
    } else {
      go();
    }
    return false;
  };

  function buildWhatsAppUrl(message) {
    return 'https://api.whatsapp.com/send?phone=' + WA_NUMBER + '&text=' + encodeURIComponent(message);
  }

  // 0. Dinamik Ads Niyet Eşleştirici (?hizmet=... / ?intent=...) — Sadece statik allowlist
  function initAdsIntentMatcher() {
    var regionName = (document.body && document.body.getAttribute('data-region')) || '';
    var h1El = document.querySelector('[data-ads-h1]');
    if (!regionName || !h1El) return;

    var qs;
    try {
      qs = new URLSearchParams(window.location.search);
    } catch (_) {
      return;
    }
    var rawKey = (qs.get('hizmet') || qs.get('intent') || '').trim().toLowerCase();
    if (!rawKey) return;

    var INTENT_MAP = {
      'oto-cekici': {
        eyebrow: '7/24 Nöbetçi Oto Çekici',
        mainSuffix: 'Oto Çekici &',
        accent: '7/24 Kayar Kasa',
        service: 'Oto Çekici & Kayar Kasa'
      },
      'oto-kurtarma': {
        eyebrow: '7/24 Acil Oto Kurtarma',
        mainSuffix: 'Oto Kurtarma &',
        accent: '7/24 Acil Kurtarıcı',
        service: 'Oto Kurtarma & Kazalı Araç'
      },
      'yol-yardim': {
        eyebrow: '7/24 Mobil Yol Yardım',
        mainSuffix: 'Yol Yardım &',
        accent: '7/24 Acil Oto Çekici',
        service: 'Oto Çekici & Kayar Kasa'
      },
      'en-yakin': {
        eyebrow: 'En Yakın Nöbetçi Çekici',
        mainSuffix: 'En Yakın Çekici —',
        accent: '10–15 Dk Hızlı İntikal',
        service: 'Oto Çekici & Kayar Kasa'
      },
      'aku-takviye': {
        eyebrow: '7/24 Yerinde Akü Takviye',
        mainSuffix: 'Akü Takviye &',
        accent: '7/24 Booster Yol Yardım',
        service: 'Yerinde Akü Takviye'
      },
      lastik: {
        eyebrow: '7/24 Mobil Lastik Yol Yardım',
        mainSuffix: 'Lastik Yol Yardım &',
        accent: '7/24 Acil Değişim',
        service: 'Mobil Lastik Yol Yardım'
      },
      'kapali-otopark': {
        eyebrow: '2.10m Altı Kapalı Otopark Çekici',
        mainSuffix: 'Kapalı Otopark Çekici &',
        accent: 'Alçak Tavan Kurtarıcı',
        service: 'Kapalı Otopark Çekici'
      },
      ahtapot: {
        eyebrow: 'Vinçli Ahtapot Kurtarıcı',
        mainSuffix: 'Ahtapot Çekici &',
        accent: 'Hasarsız Vinçli Kurtarma',
        service: 'Ahtapot & Vinçli Kurtarma'
      },
      motosiklet: {
        eyebrow: 'Özel Kızaklı Motosiklet Çekici',
        mainSuffix: 'Motosiklet Çekici &',
        accent: '7/24 Hasarsız Taşıma',
        service: 'Motosiklet Çekici'
      },
      fiyat: {
        eyebrow: 'Telefonda Sabit Fiyat Güvencesi',
        mainSuffix: 'Oto Çekici Fiyatları —',
        accent: '7/24 Sabit Ücret',
        service: 'Oto Çekici & Kayar Kasa'
      }
    };

    var spec = Object.prototype.hasOwnProperty.call(INTENT_MAP, rawKey) ? INTENT_MAP[rawKey] : null;
    if (!spec) return;

    var eyebrowEl = document.querySelector('[data-ads-eyebrow]');
    if (eyebrowEl) {
      var dot = eyebrowEl.querySelector('.pulse-dot');
      eyebrowEl.textContent = '';
      if (dot) eyebrowEl.appendChild(dot);
      var spanEyebrow = document.createElement('span');
      spanEyebrow.textContent = regionName + ' ' + spec.eyebrow;
      eyebrowEl.appendChild(spanEyebrow);
    }

    h1El.textContent = '';
    h1El.appendChild(document.createTextNode(regionName + ' ' + spec.mainSuffix + ' '));
    var accentEl = document.createElement('span');
    accentEl.className = 'hero-accent';
    accentEl.textContent = spec.accent;
    h1El.appendChild(accentEl);

    var serviceSel = document.getElementById('qf-service');
    if (serviceSel && spec.service) {
      for (var i = 0; i < serviceSel.options.length; i++) {
        if (serviceSel.options[i].value === spec.service) {
          serviceSel.selectedIndex = i;
          break;
        }
      }
    }
  }

  // 1. Mobil Menü Toggle
  function initMobileNav() {
    var btn = document.querySelector('.nav-toggle');
    var menu = document.getElementById('primary-nav');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }

  // 2. SSS Akordiyon
  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        if (!item) return;
        var isOpen = item.classList.contains('is-open');
        var list = item.parentElement;
        if (list) {
          list.querySelectorAll('.faq-item.is-open').forEach(function (other) {
            if (other !== item) {
              other.classList.remove('is-open');
              var ob = other.querySelector('.faq-q');
              if (ob) ob.setAttribute('aria-expanded', 'false');
            }
          });
        }
        item.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });
    });
  }

  // 3. Ana Sayfa 6 → N Bölge İnteraktif Toggle
  function initRegionsToggle() {
    var toggleBtn = document.getElementById('toggle-regions-btn');
    var grid = document.getElementById('home-regions-grid');
    if (!toggleBtn || !grid) return;

    var expanded = false;
    var totalCount = toggleBtn.getAttribute('data-total') || '26';
    var labelEl = toggleBtn.querySelector('.toggle-label');

    toggleBtn.addEventListener('click', function () {
      expanded = !expanded;
      grid.querySelectorAll('.region-extra').forEach(function (card) {
        if (expanded) {
          card.removeAttribute('hidden');
          card.classList.add('is-revealed');
        } else {
          card.setAttribute('hidden', '');
          card.classList.remove('is-revealed');
        }
      });
      toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      toggleBtn.classList.toggle('is-expanded', expanded);
      if (labelEl) {
        labelEl.textContent = expanded
          ? 'Daha Az Göster'
          : 'Tüm Bölgeleri Göster (' + totalCount + ' Bölge)';
      }
    });
  }

  // 4. Bölge Dizini (/bolgeler/) Kategori Filtresi
  function initRegionFilter() {
    var filterBar = document.querySelector('.region-filter-bar');
    var grid = document.querySelector('.regions-directory-grid');
    if (!filterBar || !grid) return;

    var buttons = filterBar.querySelectorAll('.filter-pill');
    var cards = grid.querySelectorAll('.region-card');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-filter') || 'all';
        buttons.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        cards.forEach(function (card) {
          var cardCat = card.getAttribute('data-category') || '';
          var show = cat === 'all' || cardCat.indexOf(cat) !== -1;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // 5. Hızlı WhatsApp Fiyat Teklifi Formu (iOS Safari uyumlu senkron açılış)
  function initQuoteForms() {
    document.querySelectorAll('.js-quote-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (window.__BOT_DETECTED__) return;

        var regionSel = form.querySelector('[name="region"]');
        var serviceSel = form.querySelector('[name="service"]');
        var vehicleSel = form.querySelector('[name="vehicle"]');
        var noteInput = form.querySelector('[name="note"]');

        var region = regionSel ? regionSel.value : 'Bağcılar';
        var service = serviceSel ? serviceSel.value : 'Oto Çekici';
        var vehicle = vehicleSel ? vehicleSel.value : 'Binek Araç';
        var note = noteInput && noteInput.value ? noteInput.value.trim() : '';

        var lines = [
          'Merhaba ' + BRAND + ', hızlı çekici fiyat teklifi almak istiyorum.',
          'Bölge: ' + region,
          'Hizmet: ' + service,
          'Araç Tipi: ' + vehicle
        ];
        if (note) lines.push('Not: ' + note);
        lines.push('(Konumumu hemen ardından paylaşıyorum.)');

        fireGA4('generate_lead', {
          method: 'whatsapp_quote_form',
          region_name: region,
          service_type: service,
          page_path: window.location.pathname
        });
        fireAdsWhatsapp();

        var url = buildWhatsAppUrl(lines.join('\n'));
        var win = window.open(url, '_blank', 'noopener,noreferrer');
        if (!win) {
          window.location.href = url;
        }
      });
    });
  }

  // 6. Telefon & WhatsApp Tıklama Yönetimi (Safari uyumlu, gecikmesiz)
  function initContactTracking() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.__fraudBlocked || window.__BOT_DETECTED__) return;

      // A) TELEFON ARAMASI — Birincil Google Ads Dönüşümü
      var telAnchor = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
      if (telAnchor) {
        var href = telAnchor.getAttribute('href');
        if (!href) return;
        fireGA4('click_call', {
          link_url: href,
          placement: telAnchor.getAttribute('data-placement') || 'page',
          page_path: window.location.pathname
        });
        if (ADS_CALL_CONV && typeof window.gtag === 'function' && !window.__FRAUD_SUSPECT__) {
          e.preventDefault();
          window.gtag_report_conversion(href);
        }
        return;
      }

      // B) WHATSAPP / KONUM GÖNDER — Doğrudan yerel link tıklaması (pop-up engeli yok)
      var waAnchor = e.target && e.target.closest ? e.target.closest('a[href*="whatsapp.com"], .btn-send-location') : null;
      if (waAnchor) {
        var regionAttr = waAnchor.getAttribute('data-region') || document.body.getAttribute('data-region') || '';
        var isLocationBtn = waAnchor.classList.contains('btn-send-location');

        if (isLocationBtn && WA_NUMBER) {
          var msg = regionAttr
            ? 'Merhaba ' + BRAND + ', acil çekiciye ihtiyacım var. Bulunduğum Bölge: ' + regionAttr + ' (Konumumu hemen ardından paylaşıyorum.)'
            : 'Merhaba ' + BRAND + ', acil çekiciye ihtiyacım var. Konumumu hemen ardından paylaşıyorum.';
          waAnchor.setAttribute('href', buildWhatsAppUrl(msg));
        }

        fireGA4(isLocationBtn ? 'konum_at_tiklama' : 'click_whatsapp', {
          region_name: regionAttr || 'genel',
          placement: waAnchor.getAttribute('data-placement') || 'page',
          page_path: window.location.pathname
        });
        fireAdsWhatsapp();
      }
    });
  }

  // 7. Galeri Lightbox
  function initLightbox() {
    var items = document.querySelectorAll('[data-lightbox]');
    if (!items.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Saha operasyon fotoğrafı büyütülmüş görünüm');
    overlay.innerHTML =
      '<div class="lightbox-inner">' +
      '<button type="button" class="lightbox-close" aria-label="Kapat">&times;</button>' +
      '<img src="" alt="" class="lightbox-img" />' +
      '<p class="lightbox-caption"></p>' +
      '</div>';
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector('.lightbox-img');
    var capEl = overlay.querySelector('.lightbox-caption');
    var closeBtn = overlay.querySelector('.lightbox-close');

    function close() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    }

    items.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var src = el.getAttribute('data-lightbox') || (el.querySelector('img') && el.querySelector('img').getAttribute('src'));
        var cap = el.getAttribute('data-caption') || (el.querySelector('img') && el.querySelector('img').getAttribute('alt')) || '';
        if (!src) return;
        imgEl.setAttribute('src', src);
        imgEl.setAttribute('alt', cap);
        capEl.textContent = cap;
        overlay.classList.add('is-open');
        document.body.classList.add('modal-open');
        closeBtn.focus();
      });
    });

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
  }

  // 8. Lazy Harita Facade (İlk yüklemede sıfır maliyet, tıklandığında iframe yükler)
  function initMapFacade() {
    document.querySelectorAll('.js-map-facade').forEach(function (box) {
      var trigger = box.querySelector('.js-load-map');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var src = box.getAttribute('data-map-src');
        var title = box.getAttribute('data-map-title') || 'Konum Haritası';
        if (!src) return;
        var iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.title = title;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.setAttribute('allowfullscreen', '');
        iframe.className = 'map-iframe';
        box.innerHTML = '';
        box.appendChild(iframe);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAdsIntentMatcher();
    initMobileNav();
    initFaq();
    initRegionsToggle();
    initRegionFilter();
    initQuoteForms();
    initContactTracking();
    initLightbox();
    initMapFacade();
  });
})();
