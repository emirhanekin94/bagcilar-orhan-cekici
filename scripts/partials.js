'use strict';

const fs = require('fs');
const path = require('path');
const { SITE_URL, BUSINESS, waLink, waRegionLink, telLink } = require('../data/business');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

// WebP gerçek piksel boyutlarını okuyarak tüm <img> etiketlerinde CLS = 0.00 garantisi
const dimCache = new Map();
function getWebpDim(fileName) {
  if (dimCache.has(fileName)) return dimCache.get(fileName);
  const fp = path.join(IMAGES_DIR, fileName);
  let res = { w: 800, h: 600 };
  try {
    const b = fs.readFileSync(fp);
    if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
      const chunk = b.toString('ascii', 12, 16);
      if (chunk === 'VP8 ') {
        res = { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
      } else if (chunk === 'VP8L') {
        const bits = b.readUInt32LE(21);
        res = { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
      } else if (chunk === 'VP8X') {
        res = {
          w: 1 + (b[24] | (b[25] << 8) | (b[26] << 16)),
          h: 1 + (b[27] | (b[28] << 8) | (b[29] << 16))
        };
      }
    }
  } catch (_) {}
  dimCache.set(fileName, res);
  return res;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Saf Inline SVG İkon Seti (Lucide çizgisinde — Sıfır Ham Emoji, Sabit width/height ile 300px patlama korumalı)
const ICONS = {
  logo: `<svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M10 39h25l5-11h10l4 7v8H10v-4z" fill="#FFFFFF"/><path d="M8 34l23-13 4 6-23 11-4-4z" fill="#FB923C"/><circle cx="20" cy="46" r="5" fill="#0B1B3F" stroke="#FFFFFF" stroke-width="2.5"/><circle cx="46" cy="46" r="5" fill="#0B1B3F" stroke="#FFFFFF" stroke-width="2.5"/></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  tag: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>`,
  truck: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  star: `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  creditCard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  wrench: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`
};

function pictureTag(baseName, alt, opts = {}) {
  const isHero = !!opts.isHero;
  const desktopFile = `${baseName}.webp`;
  const mobileFile = `${baseName}-m.webp`;
  const d = getWebpDim(desktopFile);
  const attrs = isHero
    ? `fetchpriority="high" loading="eager" decoding="async"`
    : `loading="lazy" decoding="async"`;
  const cls = opts.className ? ` class="${opts.className}"` : '';
  return `<picture>
    <source media="(max-width: 768px)" srcset="/images/${mobileFile}" type="image/webp">
    <img src="/images/${desktopFile}" alt="${escapeHtml(alt)}" width="${d.w}" height="${d.h}"${cls} ${attrs}>
  </picture>`;
}

function imgTag(baseName, alt, opts = {}) {
  const file = `${baseName}.webp`;
  const d = getWebpDim(file);
  const attrs = opts.isHero
    ? `fetchpriority="high" loading="eager" decoding="async"`
    : `loading="lazy" decoding="async"`;
  const cls = opts.className ? ` class="${opts.className}"` : '';
  return `<img src="/images/${file}" alt="${escapeHtml(alt)}" width="${d.w}" height="${d.h}"${cls} ${attrs}>`;
}

function buildHead({ title, description, canonicalPath, preloadHero, ogImage, schemas = [], noindex = false }) {
  const canonicalUrl = canonicalPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`;
  const ogImgUrl = `${SITE_URL}/images/${ogImage || preloadHero || 'hero-main'}.webp`;

  const preloadTags = preloadHero
    ? `  <link rel="preload" as="image" href="/images/${preloadHero}-m.webp" media="(max-width: 768px)" fetchpriority="high">\n  <link rel="preload" as="image" href="/images/${preloadHero}.webp" media="(min-width: 769px)" fetchpriority="high">`
    : '';

  const schemaBlocks = schemas
    .map(s => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');

  const robotsMeta = noindex ? `<meta name="robots" content="noindex, follow">` : `<meta name="robots" content="index, follow, max-image-preview:large">`;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  ${robotsMeta}
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="theme-color" content="#1D4ED8">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="manifest" href="/site.webmanifest">
  <meta property="og:locale" content="tr_TR">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeHtml(BUSINESS.name)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${ogImgUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${ogImgUrl}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap"></noscript>
${preloadTags}
  <link rel="stylesheet" href="/css/style.css?v=2.3">
${schemaBlocks}
</head>`;
}

/**
 * Dinamik Bölge Navbar — Üst bildirim şeridi (top-bar) KESİNLİKLE YOKTUR!
 * Bölge sayfalarında navbar başlığı o bölgenin adını gösterir (örn: MAHMUTBEY ÇEKİCİ).
 */
function buildHeader(regionCtx = null, activeKey = '') {
  const navTitle = regionCtx ? regionCtx.navbarTitle : BUSINESS.shortName;
  const navSub = regionCtx ? `7/24 ${regionCtx.name} Nöbetçi Filosu` : 'Bağcılar & Avrupa Yakası 7/24';
  const navItems = [
    { key: 'home', label: 'Ana Sayfa', href: '/' },
    { key: 'hizmetler', label: 'Hizmetler', href: '/hizmetler/' },
    { key: 'bolgeler', label: 'Bölgeler', href: '/bolgeler/' },
    { key: 'galeri', label: 'Galeri', href: '/galeri.html' },
    { key: 'blog', label: 'Rehber', href: '/blog/' },
    { key: 'hakkimizda', label: 'Hakkımızda', href: '/hakkimizda.html' },
    { key: 'iletisim', label: 'İletişim', href: '/iletisim.html' }
  ];

  const linksHtml = navItems
    .map(
      item =>
        `<li><a href="${item.href}" class="nav-link${activeKey === item.key ? ' is-active' : ''}">${item.label}</a></li>`
    )
    .join('\n          ');

  return `<a class="skip-link" href="#main-content">İçeriğe geç</a>
<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand-link" aria-label="${escapeHtml(navTitle)} Ana Sayfa">
      <span class="brand-mark">${ICONS.logo}</span>
      <div class="brand-text">
        <span class="brand-title">${escapeHtml(navTitle)}</span>
        <span class="brand-sub">${escapeHtml(navSub)}</span>
      </div>
    </a>
    <nav id="primary-nav" class="primary-nav" aria-label="Ana menü">
      <ul class="nav-list">
          ${linksHtml}
      </ul>
    </nav>
    <a href="${telLink()}" class="header-cta" data-placement="header">${ICONS.phone}<span>${BUSINESS.phoneDisplay}</span></a>
    <button type="button" class="nav-toggle" aria-controls="primary-nav" aria-expanded="false" aria-label="Menüyü aç veya kapat">
      ${ICONS.menu}
    </button>
  </div>
</header>`;
}

/**
 * Kompakt 4 Sütunlu Footer (Pre-footer cta-band YOK, 1. sütunda dev telefon butonu YOK)
 */
function buildFooter(regions, services) {
  const topServices = services.slice(0, 6);
  const topRegions = regions.slice(0, 6);

  return `<footer class="site-footer">
  <div class="container footer-main">
    <div class="f-brand">
      <div class="f-brand-head">
        <span class="brand-mark">${ICONS.logo}</span>
        <div class="f-brand-meta">
          <span class="f-brand-title">${escapeHtml(BUSINESS.name)}</span>
          <span class="f-brand-sub">Bağcılar &amp; Avrupa Yakası 7/24</span>
        </div>
      </div>
      <p>${escapeHtml(BUSINESS.slogan)}. Hidrolik kayar kasa, ahtapot vinç ve kapalı otopark kurtarıcı filomuzla 7/24 kaskolu araç nakli.</p>
      <div class="f-trust-chips">
        <span>${ICONS.shield} %100 Kaskolu</span>
        <span>${ICONS.clock} 7/24 Nöbetçi Filo</span>
      </div>
    </div>
    <div class="f-col">
      <h3>Hizmetlerimiz</h3>
      <ul class="f-links">
        ${topServices.map(s => `<li><a href="/hizmetler/${s.slug}.html">${escapeHtml(s.shortTitle)}</a></li>`).join('\n        ')}
      </ul>
    </div>
    <div class="f-col">
      <h3>Popüler Bölgeler</h3>
      <ul class="f-links">
        ${topRegions.map(r => `<li><a href="/bolgeler/${r.slug}-oto-cekici.html">${escapeHtml(r.name)} Çekici</a></li>`).join('\n        ')}
      </ul>
    </div>
    <div class="f-col f-col-corp">
      <h3>Kurumsal</h3>
      <ul class="f-links f-links-corp">
        <li><a href="/hakkimizda.html">Hakkımızda</a></li>
        <li><a href="/bolgeler/">Tüm Bölgelerimiz (${regions.length})</a></li>
        <li><a href="/galeri.html">Saha Operasyonları</a></li>
        <li><a href="/blog/">Sürücü Rehberi</a></li>
        <li><a href="/iletisim.html">İletişim &amp; Konum</a></li>
        <li><a href="/gizlilik-politikasi.html">Gizlilik &amp; KVKK</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <div class="footer-legal">
        <span>&copy; 2026 ${escapeHtml(BUSINESS.name)}. Tüm hakları saklıdır.</span>
        <span aria-hidden="true">&middot;</span>
        <a href="/gizlilik-politikasi.html">Gizlilik &amp; KVKK Politikası</a>
      </div>
      <a href="https://getpin.co" class="getpin-badge" target="_blank" rel="noopener noreferrer">Crafted with precision by <strong>getpin</strong></a>
    </div>
  </div>
</footer>`;
}

/**
 * Lüks Koyu Cam Yüzen Sabit Acil Aksiyon Kapsülü (TÜM sayfalarda)
 */
function buildStickyActions(regionName = '') {
  const waHref = regionName ? waRegionLink(regionName) : waLink();
  return `<div class="sticky-actions floating-actions" role="region" aria-label="Hızlı iletişim çubuğu">
  <a href="${telLink()}" class="sticky-btn sticky-btn-call" data-placement="sticky_bar" aria-label="Hemen Ara ${BUSINESS.phoneDisplay}">
    ${ICONS.phone}<span>HEMEN ARA</span>
  </a>
  <a href="${waHref}" class="sticky-btn sticky-btn-wa btn-send-location" data-placement="sticky_bar" data-region="${escapeHtml(regionName)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden konum gönder">
    ${ICONS.whatsapp}<span>KONUM AT</span>
  </a>
</div>`;
}

/**
 * Google Ads / GA4 Akıllı Yükleyici + anti-fraud.js + main.js
 * - gclid / wbraid / gbraid / gad_source varsa gtag.js ANINDA yüklenir (ilk saniye dönüşüm kaybı sıfır!)
 * - Normal ziyaretçilerde ilk etkileşim veya 4000ms sonrası ertelenmiş yüklenir (PageSpeed 100!)
 */
function buildScripts() {
  const cfg = {
    ga4Id: BUSINESS.analytics.ga4Id || '',
    adsId: BUSINESS.analytics.adsId || '',
    adsCallConversion: BUSINESS.analytics.adsCallConversion || '',
    brandName: BUSINESS.name,
    phoneDisplay: BUSINESS.phoneDisplay,
    whatsappNumber: BUSINESS.whatsappNumber
  };

  const hasTracking = Boolean(cfg.ga4Id || cfg.adsId);
  const primaryId = cfg.adsId || cfg.ga4Id;

  const gtagBootstrap = hasTracking
    ? `<script>
(function(){
  var C = window.__SITE_CONFIG__ || {};
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  var loaded = false;
  function loadGtag(){
    if (loaded) return;
    loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent('${primaryId}');
    document.head.appendChild(s);
    window.gtag('js', new Date());
    if (C.ga4Id) window.gtag('config', C.ga4Id, { send_page_view: true });
    if (C.adsId) window.gtag('config', C.adsId);
  }
  var qs = window.location.search || '';
  if (/(?:\\?|&)(?:gclid|wbraid|gbraid|gad_source)=/i.test(qs)) {
    loadGtag();
  } else {
    ['pointerdown','click','touchstart','scroll','keydown'].forEach(function(ev){
      window.addEventListener(ev, loadGtag, { once: true, passive: true });
    });
    if ('requestIdleCallback' in window) {
      requestIdleCallback(function(){ setTimeout(loadGtag, 4000); });
    } else {
      setTimeout(loadGtag, 4000);
    }
  }
})();
</script>`
    : '';

  return `<script>window.__SITE_CONFIG__=${JSON.stringify(cfg)};</script>
${gtagBootstrap}
<script src="/js/anti-fraud.js" defer></script>
<script src="/js/main.js" defer></script>`;
}

/**
 * Ortak Kırpılmayan 4:3 Cam Vitrin Kartı (.showcase-card) — PLAKA KESİNLİKLE YAZILMAZ!
 */
function buildShowcaseCard({ imageBase, alt, badgeRegion, isHero = true }) {
  return `<div class="showcase-card">
  <div class="showcase-top-badges">
    <span class="sc-badge">${ICONS.pin}<span>${escapeHtml(badgeRegion)} Saha Operasyonu</span></span>
    <span class="sc-badge sc-badge-live"><span class="pulse-dot" aria-hidden="true"></span><span>Canlı Nöbetçi</span></span>
  </div>
  <div class="showcase-frame">
    ${pictureTag(imageBase, alt, { isHero })}
  </div>
  <div class="showcase-bottom-badges">
    <span class="sc-badge">${ICONS.truck}<span>Kayar Kasa Kurtarıcı</span></span>
    <span class="sc-badge">${ICONS.shield}<span>Hasarsız Taşıma</span></span>
  </div>
</div>`;
}

/**
 * Ortak SSS Akordiyon Listesi + FAQPage Schema
 */
function buildFaqSection(faqs, title, eyebrow, sectionClass = 'section') {
  const items = faqs
    .map(
      (f, idx) => `<div class="faq-item${idx === 0 ? ' is-open' : ''}">
      <button type="button" class="faq-q" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${escapeHtml(f.q)}</span>
        ${ICONS.chevronDown}
      </button>
      <div class="faq-a"><p>${escapeHtml(f.a)}</p></div>
    </div>`
    )
    .join('\n    ');

  return `<section class="${sectionClass}" id="sss">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">${escapeHtml(eyebrow || 'Sıkça Sorulan Sorular')}</span>
      <h2>${escapeHtml(title)}</h2>
    </div>
    <div class="faq-list">
      ${items}
    </div>
  </div>
</section>`;
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${it.path}`
    }))
  };
}

function localBusinessSchema(regionCtx = null) {
  const base = {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'EmergencyService', 'TowingService'],
    name: regionCtx ? `${regionCtx.name} Çekici — ${BUSINESS.name}` : BUSINESS.name,
    url: regionCtx ? `${SITE_URL}/bolgeler/${regionCtx.slug}-oto-cekici.html` : `${SITE_URL}/`,
    telephone: BUSINESS.phoneTel,
    image: `${SITE_URL}/images/${regionCtx ? regionCtx.hero : 'hero-main'}.webp`,
    priceRange: '₺₺',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: regionCtx ? regionCtx.name : BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: regionCtx ? regionCtx.geo.lat : BUSINESS.geo.latitude,
      longitude: regionCtx ? regionCtx.geo.lng : BUSINESS.geo.longitude
    },
    areaServed: regionCtx
      ? { '@type': 'Place', name: `${regionCtx.name}, İstanbul` }
      : { '@type': 'City', name: 'İstanbul Avrupa Yakası' }
  };
  return base;
}

function renderPage({ headArgs, regionCtx = null, activeNav = '', bodyRegion = '', mainHtml, regions, services }) {
  return `${buildHead(headArgs)}
<body data-theme="${BUSINESS.themeId}" data-region="${escapeHtml(bodyRegion)}">
${buildHeader(regionCtx, activeNav)}
<main id="main-content">
${mainHtml}
</main>
${buildFooter(regions, services)}
${buildStickyActions(bodyRegion)}
${buildScripts()}
</body>
</html>
`;
}

module.exports = {
  ICONS,
  escapeHtml,
  getWebpDim,
  pictureTag,
  imgTag,
  buildHead,
  buildHeader,
  buildFooter,
  buildStickyActions,
  buildScripts,
  buildShowcaseCard,
  buildFaqSection,
  faqSchema,
  breadcrumbSchema,
  localBusinessSchema,
  renderPage
};
