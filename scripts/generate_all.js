'use strict';

const fs = require('fs');
const path = require('path');
const { SITE_URL, BUSINESS, waLink, waRegionLink, telLink } = require('../data/business');
const regions = require('../data/regions');
const services = require('../data/services');
const blog = require('../data/blog');
const {
  ICONS,
  escapeHtml,
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
} = require('./partials');

const ROOT = path.join(__dirname, '..');

function writeHtml(relPath, html) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, 'utf8');
}

function haversineKm(a, b) {
  const toRad = d => (d * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

function fitMetaDesc(str, maxLen = 158) {
  const clean = String(str || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const cut = clean.slice(0, maxLen - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 90 ? cut.slice(0, lastSpace) : cut).replace(/[,:;.-]+$/, '') + '.';
}

function buildRegionTitle(r) {
  const t1 = `${r.name} Oto Çekici | 7/24 Yol Yardım — ${BUSINESS.shortName}`;
  if (t1.length <= 65) return t1;
  const t2 = `${r.name} Oto Çekici | 7/24 — ${BUSINESS.shortName}`;
  if (t2.length <= 65) return t2;
  return `${r.name} Oto Çekici | ${BUSINESS.shortName}`;
}

function buildRegionDesc(r) {
  const eta = r.eta || '10-15 dk';
  const lm1 = r.landmarks[0] || r.name;
  const lm2 = r.landmarks[1] || '';
  const cand1 = `${r.name} oto çekici ve 7/24 yol yardım. ${lm1}${lm2 ? ', ' + lm2 : ''} için ${eta} varış, sabit fiyat: ${BUSINESS.phoneDisplay}`;
  if (cand1.length <= 160) return cand1;
  const cand2 = `${r.name} oto çekici ve 7/24 yol yardım. ${lm1} için ${eta} kaskolu araç sevki, sabit fiyat: ${BUSINESS.phoneDisplay}`;
  if (cand2.length <= 160) return cand2;
  return `${r.name} oto çekici ve 7/24 yol yardım. ${eta} hızlı varış, kaskolu taşıma ve sabit fiyat: ${BUSINESS.phoneDisplay}`;
}

// ============================================================================
// ORTAK BİLEŞENLER
// ============================================================================
const GALLERY_ITEMS = [
  { img: 'hero-main', cap: 'Bağcılar ana arterde kayar kasa ile SUV araç yükleme operasyonu' },
  { img: 'saha-otoyol', cap: 'Basın Ekspres ve TEM bağlantı noktasında emniyetli çekici sevki' },
  { img: 'ahtapot-vinc', cap: 'Şarampolden hidrolik ahtapot vinç donanımı ile araç kurtarma' },
  { img: 'saha-cadde', cap: 'Güneşli cadde içi arızalanan binek otomobilin rampaya alınması' },
  { img: 'ticari-panelvan', cap: 'İSTOÇ ve İkitelli hattında uzun şasi ticari panelvan nakli' },
  { img: 'saha-gunbatimi', cap: 'Mahmutbey kavşağında akşam saatlerinde kaskolu araç çekimi' },
  { img: 'saha-suv', cap: 'Bahçelievler ve Merter hattında arızalı SUV kurtarma çalışması' },
  { img: 'saha-sedan', cap: 'Avrupa Yakası servis teslimatı için dört noktadan sabitlenmiş sedan' },
  { img: 'kamyonet-tasima', cap: 'Esenler ve Yüzyıl bölgesinde pickup ve hafif ticari araç transferi' },
  { img: 'kapali-otopark', cap: 'AVM ve site kapalı otoparkından alçak kabinli kurtarıcı ile tahliye' },
  { img: 'motosiklet-cekici', cap: 'Özel tekerlek kızağı ve yumuşak kayışla motosiklet taşıma' },
  { img: 'aku-takviye', cap: 'Akım korumalı dijital booster ile yerinde 12V akü takviye desteği' }
];

const HOME_WHY = [
  {
    icon: ICONS.clock,
    title: '10–15 Dakikada Yerinde Müdahale',
    desc: 'Bağcılar, Basın Ekspres, Mahmutbey ve İkitelli kavşaklarında hazır bekleyen nöbetçi araçlarımız en yakın noktadan çıkar.'
  },
  {
    icon: ICONS.shield,
    title: '%100 Taşıma & Emtia Kaskosu',
    desc: 'Aracınız hidrolik platforma alındığı andan yetkili servise veya adrese indirildiği ana kadar nakliye güvencesi altındadır.'
  },
  {
    icon: ICONS.tag,
    title: 'Telefonda Net ve Sabit Fiyat',
    desc: 'Mesafe, araç tipi ve arıza durumuna göre çağrı sırasında kesin rakam verilir; varışta veya indirmede sürpriz ek ücret çıkmaz.'
  },
  {
    icon: ICONS.truck,
    title: 'Sıfır Eğimli Kayar Kasa Donanımı',
    desc: 'Alçak tamponlu binek, elektrikli ve spor araçlar yere tam paralel inen hidrolik rampa ile tampon sürtmeden yüklenir.'
  },
  {
    icon: ICONS.wrench,
    title: '7/24 Kesintisiz Nöbetçi Kadro',
    desc: 'Gece yarısı, yağışlı havalarda ve resmi tatillerde tek bir merkezi numaradan doğrudan saha operatörüne bağlanırsınız.'
  },
  {
    icon: ICONS.creditCard,
    title: 'Mobil POS & Kurumsal KDV Fatura',
    desc: 'Nakit veya kredi kartı ile yerinde ödeme kolaylığı sağlanır; şirket filoları ve kasko dosyaları için resmi fatura düzenlenir.'
  }
];

const HOME_STEPS = [
  {
    num: '01',
    title: 'İhbar & WhatsApp Konum',
    desc: 'Telefonla arayın veya WhatsApp üzerinden konumunuzu iletin; araç tipi ve varış noktasına göre anında sabit fiyat onaylansın.'
  },
  {
    num: '02',
    title: '10–15 Dk Hızlı İntikal',
    desc: 'Bulunduğunuz caddeye veya gişeye en yakın nöbetçi kurtarıcımız trafik yoğunluğuna göre alternatif güzergahlardan hızla ulaşır.'
  },
  {
    num: '03',
    title: 'Aparatlı Hasarsız Yükleme',
    desc: 'Sarı ikaz lambaları ve reflektör güvenliği alınarak aracınız 4 noktadan tekerlek kayışlarıyla sıfır temas prensibiyle sabitlenir.'
  },
  {
    num: '04',
    title: 'Güvenli Teslimat & Fatura',
    desc: 'Aracınız seçtiğiniz sanayi ustasına, yetkili servise veya evinizin önüne hasarsız indirilir; mobil POS veya fatura ile işlem tamamlanır.'
  }
];

function renderWhyGrid() {
  return `<div class="why-grid">
    ${HOME_WHY.map(
      w => `<div class="why-card">
      <div class="why-icon">${w.icon}</div>
      <h3>${escapeHtml(w.title)}</h3>
      <p>${escapeHtml(w.desc)}</p>
    </div>`
    ).join('\n    ')}
  </div>`;
}

function renderStepsGrid(customSteps = HOME_STEPS) {
  return `<div class="steps-grid">
    ${customSteps
      .map(
        s => `<div class="step-card">
      <div class="step-num">${escapeHtml(s.num)}</div>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.desc)}</p>
    </div>`
      )
      .join('\n    ')}
  </div>`;
}

function renderGalleryGrid(limit = 6) {
  return `<div class="gallery-grid">
    ${GALLERY_ITEMS.slice(0, limit)
      .map(
        g => `<a href="/images/${g.img}.webp" class="gallery-item" data-lightbox="/images/${g.img}.webp" data-caption="${escapeHtml(g.cap)}">
      ${imgTag(g.img, g.cap)}
      <span class="gallery-cap">${escapeHtml(g.cap)}</span>
    </a>`
      )
      .join('\n    ')}
  </div>`;
}

function renderRegionCard(r, extraHidden = false) {
  return `<a href="/bolgeler/${r.slug}-oto-cekici.html" class="region-card${extraHidden ? ' region-extra' : ''}" data-category="${escapeHtml(r.category)}"${extraHidden ? ' hidden' : ''}>
    <div class="rc-top">
      <span class="rc-pin-icon">${ICONS.pin}</span>
      <span class="rc-live-chip"><span class="rc-live-dot" aria-hidden="true"></span>7/24 Aktif</span>
    </div>
    <h3>${escapeHtml(r.name)} Çekici</h3>
    <p>${escapeHtml(r.cardSummary)}</p>
    <div class="rc-foot">
      <span class="rc-link">Bölgeyi İncele ${ICONS.arrowRight}</span>
    </div>
  </a>`;
}

function renderQuoteBox(selectedRegionName = '') {
  const optionsHtml = regions
    .map(
      r =>
        `<option value="${escapeHtml(r.name)}"${r.name === selectedRegionName ? ' selected' : ''}>${escapeHtml(r.name)}</option>`
    )
    .join('\n          ');

  const serviceOptions = services
    .map(s => `<option value="${escapeHtml(s.shortTitle)}">${escapeHtml(s.shortTitle)}</option>`)
    .join('\n          ');

  return `<div class="region-quote-box">
  <div class="quote-box-head">
    <div class="quote-box-title">Hızlı WhatsApp Fiyat Teklifi</div>
    <p class="quote-box-sub">Bölge ve araç tipini seçin, operatörümüz sabit fiyatı saniyeler içinde yazsın.</p>
  </div>
  <form class="js-quote-form quote-form-grid" novalidate>
    <div class="form-field">
      <label for="qf-region">Bulunduğunuz Bölge</label>
      <select id="qf-region" name="region">
        ${optionsHtml}
      </select>
    </div>
    <div class="form-field">
      <label for="qf-service">İhtiyaç Duyulan Hizmet</label>
      <select id="qf-service" name="service">
        ${serviceOptions}
      </select>
    </div>
    <div class="form-field">
      <label for="qf-vehicle">Araç Tipi</label>
      <select id="qf-vehicle" name="vehicle">
        <option value="Binek Otomobil">Binek Otomobil</option>
        <option value="SUV / Jeep / Elektrikli">SUV / Jeep / Elektrikli</option>
        <option value="Hafif Ticari / Panelvan">Hafif Ticari / Panelvan</option>
        <option value="Motosiklet / Scooter">Motosiklet / Scooter</option>
        <option value="Kilitli / Kazalı Araç">Kilitli / Kazalı Araç</option>
      </select>
    </div>
    <div class="form-field">
      <label for="qf-note">Kısa Arıza Notu (Opsiyonel)</label>
      <input id="qf-note" name="note" type="text" placeholder="Örn: Şanzıman kilitli, kapalı otopark">
    </div>
    <div class="form-full">
      <button type="submit" class="btn btn-wa quote-submit-btn">${ICONS.whatsapp}<span>WhatsApp'tan Sabit Fiyat Al</span></button>
    </div>
  </form>
</div>`;
}

// ============================================================================
// 1. ANA SAYFA (index.html)
// ============================================================================
function buildHomePage() {
  const homeFaqs = [
    {
      q: `${BUSINESS.name} Bağcılar ve Avrupa Yakası'na kaç dakikada ulaşır?`,
      a: `Bağcılar Meydan, Basın Ekspres, Mahmutbey Gişeleri ve İkitelli OSB çevresindeki nöbetçi kurtarıcılarımız ihbarın ardından ortalama 10–15 dakika içinde yanınıza ulaşır.`
    },
    {
      q: 'Gece yarısı veya resmi tatillerde çekici ücretleri değişiyor mu?',
      a: 'Tarifemiz 7 gün 24 saat şeffaf kilometre ve operasyon esasına göre belirlenir. Çağrı sırasında sabit fiyat teyit edilir; araç yüklendikten sonra ek masraf talep edilmez.'
    },
    {
      q: 'Otomatik vitesli, elektrikli veya şanzımanı kilitli araçlar hasarsız çekilir mi?',
      a: 'Evet. Tekerlekleri dönmeyen veya elektronik el freni kilitli araçlar kızak aparatı ve ahtapot vinç yardımıyla yere sürtmeden hidrolik platforma alınır.'
    },
    {
      q: 'Kapalı otoparklarda veya AVM garajlarında kalan araçları çıkarabiliyor musunuz?',
      a: '2.10 metre altı tavan yüksekliğine uygun alçak kabinli kurtarıcılarımız ve akü booster ekiplerimizle site, rezidans ve AVM kapalı otoparklarına doğrudan giriyoruz.'
    },
    {
      q: 'Taşıma sırasında aracım sigorta veya kasko kapsamında mı?',
      a: 'Tüm çekici araçlarımız nakliye ve emtia taşıma sigortalıdır. Araç rampaya alındığı andan teslim edilene dek güvence altındadır.'
    },
    {
      q: 'Kredi kartı ile ödeme yapabilir ve şirketim adına fatura alabilir miyim?',
      a: 'Evet. Tüm saha araçlarımızda mobil POS cihazı bulunur; bireysel ve kurumsal müşterilerimize KDV dahil resmi fatura kesilir.'
    }
  ];

  const homeReviews = [
    {
      author: 'Murat K.',
      loc: 'Basın Ekspres Yolu',
      text: `Akşam iş çıkışında soğutma hortumu patlayınca ${BUSINESS.name} ekibini aradım. 12 dakikada gelip aracımı İkitelli Atatürk Oto Sanayi'deki ustama hasarsız bıraktılar.`
    },
    {
      author: 'Selin D.',
      loc: 'Göztepe / Batışehir',
      text: 'Site kapalı otoparkında aküm tamamen bitmişti, vites N konumuna bile geçmiyordu. Alçak kabinli araç ve dijital takviye cihazıyla dakikalar içinde sorunu çözdüler.'
    },
    {
      author: 'Emre T.',
      loc: 'İSTOÇ Oto Ticaret Merkezi',
      text: 'Ticari panelvanımızın debriyajı boşaldı. Telefonda konuştukları sabit fiyat dışında kuruş fazla istemediler, faturalı ve çok düzgün çalıştılar.'
    },
    {
      author: 'Hakan Y.',
      loc: 'Mahmutbey Gişeler',
      text: 'TEM Mahmutbey bağlantısında elektrikli aracım arıza uyarısı verdi. Çekici operatörü tekerlek kayışlarını özenle taktı, tamponda çizik bile olmadı.'
    },
    {
      author: 'Ayşe B.',
      loc: 'Güneşli Meydan',
      text: 'Gece 02:30 civarında lastiğim yarıldı ve bijon kırıldı. Kısa sürede ulaşıp aracı güvenli biçimde lastikçiye kadar taşıdılar, gerçekten güven veriyorlar.'
    },
    {
      author: 'Okan S.',
      loc: 'Bahçelievler / Yenibosna',
      text: 'Ahtapot çekici gerekiyordu çünkü kaza sonrası ön tekerlek kilitlenmişti. İşi bilen tecrübeli bir kadro, hiç panik yaptırmadan aracı profesyonelce aldılar.'
    }
  ];

  const starsHtml = `<span class="stars-row" aria-label="5 üzerinden 5 yıldız">${ICONS.star.repeat(5)}</span>`;

  const mainHtml = `
<section class="hero-section hero-home-luxury">
  <div class="hero-ambient-glow" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div>
      <h1>Bağcılar &amp; Avrupa Yakası <span class="hero-accent">7/24 Acil Oto Çekici</span> ve Yol Yardım</h1>
      <p class="hero-lead">${escapeHtml(BUSINESS.name)} ile yolda kalmak sorun olmaktan çıkar. Basın Ekspres, Mahmutbey, Güneşli, İSTOÇ ve İkitelli hattında nöbetçi kayar kasa ve ahtapot kurtarıcılarımızla dakikalar içinde yanınızdayız.</p>
      <div class="hero-key-pillars">
        <div class="pillar-pill">${ICONS.clock}<span>10–15 Dakika Hızlı İntikal</span></div>
        <div class="pillar-pill">${ICONS.shield}<span>%100 Kaskolu Sıfır Hasar</span></div>
        <div class="pillar-pill">${ICONS.tag}<span>Sabit Fiyat Telefonda Onay</span></div>
      </div>
      <a href="${telLink()}" class="hero-mobile-call" data-placement="hero_mobile">${ICONS.phone}<span><strong>7/24 Acil Çekici:</strong> ${BUSINESS.phoneDisplay}</span></a>
      <div class="hero-desktop-actions">
        <a href="${telLink()}" class="btn btn-orange" data-placement="hero_desktop">${ICONS.phone}<span>Hemen Ara: ${BUSINESS.phoneDisplay}</span></a>
        <a href="${waLink()}" class="btn btn-wa btn-send-location" data-placement="hero_desktop" data-region="Bağcılar" target="_blank" rel="noopener noreferrer">${ICONS.whatsapp}<span>WhatsApp Konum Gönder</span></a>
      </div>
    </div>
    <div>
      ${buildShowcaseCard({
        imageBase: 'hero-main',
        alt: `${BUSINESS.name} Bağcılar ve Avrupa Yakası hidrolik kayar kasa oto çekici operasyonu`,
        badgeRegion: 'Bağcılar Merkez',
        isHero: true
      })}
    </div>
  </div>
</section>

<section class="section" id="hizmetlerimiz">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Profesyonel Filo &amp; Donanım</span>
      <h2>7/24 Oto Çekici ve Yol Yardım Hizmetlerimiz</h2>
      <p>Binek otomobilden elektrikli SUV'lara, motosikletten uzun şasi ticari panelvanlara kadar her arıza ve kaza senaryosuna özel ekipmanla müdahale ediyoruz.</p>
    </div>
    <div class="services-grid">
      ${services
        .map(
          s => `<article class="service-card">
        <div class="service-thumb">
          ${imgTag(s.image, `${BUSINESS.name} — ${s.title}`)}
          <span class="service-tag">${escapeHtml(s.badge)}</span>
        </div>
        <div class="service-body">
          <h3>${escapeHtml(s.shortTitle)}</h3>
          <p>${escapeHtml(s.summary)}</p>
          <ul class="service-bullets">
            ${s.highlights.map(h => `<li>${ICONS.check}<span>${escapeHtml(h)}</span></li>`).join('\n            ')}
          </ul>
          <a href="/hizmetler/${s.slug}.html" class="service-more">Detayları İncele ${ICONS.arrowRight}</a>
        </div>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section section-ice" id="nasil-calisiyoruz">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">4 Adımda Kesintisiz Kurtarma</span>
      <h2>Aracınızı Nasıl Güvenle Teslim Ediyoruz?</h2>
      <p>Karmaşık bekleme hatları olmadan doğrudan en yakın saha ekibini yönlendiren şeffaf operasyon sürecimiz.</p>
    </div>
    ${renderStepsGrid()}
  </div>
</section>

<section class="section section-dark" id="bolgelerimiz">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">${regions.length} Stratejik Nöbet Noktası</span>
      <h2>Hizmet Verdiğimiz Bölgeler</h2>
      <p>Bağcılar merkezli filomuz, Avrupa Yakası'nın en yoğun ana arterlerinde ve sanayi bölgelerinde anlık hazır bekler.</p>
    </div>
    <div class="regions-grid" id="home-regions-grid">
      ${regions.map((r, i) => renderRegionCard(r, i >= 6)).join('\n      ')}
    </div>
    <div class="regions-actions">
      <button type="button" id="toggle-regions-btn" class="btn btn-orange" data-total="${regions.length}" aria-expanded="false">
        <span class="toggle-label">Tüm Bölgeleri Göster (${regions.length} Bölge)</span>
        ${ICONS.chevronDown}
      </button>
      <a href="/bolgeler/" class="btn btn-outline-cobalt">Bölgeler Dizinine Git ${ICONS.arrowRight}</a>
    </div>
  </div>
</section>

<section class="section" id="neden-biz">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Saha Disiplini &amp; Güvence</span>
      <h2>Neden ${escapeHtml(BUSINESS.name)} Tercih Ediliyor?</h2>
      <p>Bölge trafiğini, sanayi sitelerini ve modern araç teknolojilerini tanıyan deneyimli operatör kadrosu.</p>
    </div>
    ${renderWhyGrid()}
  </div>
</section>

<section class="section section-alt" id="galeri">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Gerçek Saha Operasyonları</span>
      <h2>Sahadan Güncel Kurtarma Kareleri</h2>
      <p>Fotoğraflara tıklayarak kayar kasa, ahtapot vinç ve yol yardım operasyonlarımızı yakından inceleyebilirsiniz.</p>
    </div>
    ${renderGalleryGrid(6)}
    <div class="regions-actions">
      <a href="/galeri.html" class="btn btn-cobalt">Tüm Saha Galerisini Gör ${ICONS.arrowRight}</a>
    </div>
  </div>
</section>

<section class="section" id="yorumlar">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Doğrulanmış Sürücü Deneyimleri</span>
      <h2>Bölgeden Müşteri Yorumları</h2>
    </div>
    <div class="reviews-summary">
      <span class="rating-score">${BUSINESS.rating.value}</span>
      <div>
        ${starsHtml}
        <div style="font-size:0.86rem;color:var(--muted);font-weight:600;">${BUSINESS.rating.count} tamamlanan Bağcılar &amp; Avrupa Yakası kurtarma operasyonu</div>
      </div>
    </div>
    <div class="reviews-grid">
      ${homeReviews
        .map(
          rv => `<article class="review-card">
        <div class="review-head">
          <div>
            <div class="review-author">${escapeHtml(rv.author)}</div>
            <div class="review-loc">${escapeHtml(rv.loc)}</div>
          </div>
          ${starsHtml}
        </div>
        <p>${escapeHtml(rv.text)}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section section-ice" id="rehber">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Sürücü Rehberi &amp; Teknik Bilgiler</span>
      <h2>Yolda Kaldığınızda İşinize Yarayacak Rehberler</h2>
      <p>Otomatik şanzıman çekiminden akü takviyesine kadar aracınızı koruyacak pratik bilgiler.</p>
    </div>
    <div class="blog-grid">
      ${blog
        .slice(0, 3)
        .map(
          b => `<article class="blog-card">
        <a href="/blog/${b.slug}.html" class="blog-thumb">${imgTag(b.image, b.title)}</a>
        <div class="blog-body">
          <span class="blog-meta">${escapeHtml(b.category)} &middot; ${escapeHtml(b.readTime)}</span>
          <h3><a href="/blog/${b.slug}.html">${escapeHtml(b.title)}</a></h3>
          <p>${escapeHtml(b.excerpt)}</p>
          <a href="/blog/${b.slug}.html" class="service-more">Rehberi Oku ${ICONS.arrowRight}</a>
        </div>
      </article>`
        )
        .join('\n      ')}
    </div>
    <div class="regions-actions">
      <a href="/blog/" class="btn btn-outline-cobalt">Tüm Sürücü Rehberleri ${ICONS.arrowRight}</a>
    </div>
  </div>
</section>

${buildFaqSection(homeFaqs, 'Oto Çekici ve Yol Yardım Hakkında Merak Edilenler', 'Sıkça Sorulan Sorular', 'section')}

<section class="section section-alt" id="iletisim-harita">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">7/24 Nöbetçi Merkez</span>
      <h2>İletişim &amp; Hızlı Konum Paylaşımı</h2>
    </div>
    <div class="contact-grid">
      <div>${renderQuoteBox('Bağcılar')}</div>
      <div class="map-facade js-map-facade" data-map-src="https://maps.google.com/maps?q=41.0343,28.8567&amp;z=13&amp;output=embed" data-map-title="${escapeHtml(BUSINESS.name)} Bağcılar Merkez Konumu">
        <div class="rc-pin-icon" style="margin-bottom:12px;">${ICONS.pin}</div>
        <h3 style="color:#fff;">Bağcılar &amp; Basın Ekspres İntikal Merkezi</h3>
        <p>Harita ilk açılış hızını korumak için isteğe bağlı yüklenir. Canlı konumu görmek için dokunun.</p>
        <button type="button" class="btn btn-orange js-load-map">İnteraktif Haritayı Yükle</button>
      </div>
    </div>
  </div>
</section>`;

  const html = renderPage({
    headArgs: {
      title: `Bağcılar Oto Çekici & 7/24 Yol Yardım | ${BUSINESS.name}`,
      description: fitMetaDesc(`${BUSINESS.name} — Bağcılar, Basın Ekspres, Mahmutbey, Güneşli, İSTOÇ ve Avrupa Yakası 7/24 kaskolu oto çekici ve yol yardım: ${BUSINESS.phoneDisplay}`, 160),
      canonicalPath: '/',
      preloadHero: 'hero-main',
      ogImage: 'hero-main',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([{ name: 'Ana Sayfa', path: '/' }]),
        faqSchema(homeFaqs)
      ]
    },
    activeNav: 'home',
    bodyRegion: 'Bağcılar',
    mainHtml,
    regions,
    services
  });

  writeHtml('index.html', html);
}

// ============================================================================
// 2. BÖLGELER DİZİNİ (bolgeler/index.html) + TÜM BÖLGE SAYFALARI
// ============================================================================
function buildRegionsDirectory() {
  const dirFaqs = [
    {
      q: `Hizmet verdiğiniz ${regions.length} bölge dışında Avrupa Yakası ilçelerine geliyor musunuz?`,
      a: `Evet. Bağcılar merkezli ${regions.length} ana bölgemize ek olarak Avrupa Yakası geneli ve şehirlerarası güzergahlara planlı veya acil araç transferi sağlıyoruz.`
    },
    {
      q: 'En hızlı hangi bölgelere ulaşabiliyorsunuz?',
      a: 'Bağcılar, Kirazlı, Göztepe, Güneşli, Mahmutbey, Basın Ekspres, İSTOÇ, Yüzyıl ve Tekstilkent bölgelerinde araçlarımız sürekli devriye halindedir ve ortalama 10–15 dakikada varır.'
    },
    {
      q: 'Otoyol ve gişe çıkışlarında güvenli yükleme yapıyor musunuz?',
      a: 'TEM Otoyolu Mahmutbey Gişeleri, Basın Ekspres Yolu ve E-5 (D-100) yan yollarında reflektör ve yüksek görünürlüklü tepe lambalarıyla emniyet şeridi kurallarına uygun yükleme yapılır.'
    },
    {
      q: 'Bölge içi ile ilçeler arası çekici fiyat farkı nasıl hesaplanır?',
      a: 'Başlangıç noktası ve teslim adresi arasındaki net kilometre, araç sınıfı ve ekstra vinç/aparat gereksinimine göre çağrı esnasında sabit fiyat verilir.'
    },
    {
      q: 'Konum göndermeden adres tarifiyle çekici çağırabilir miyim?',
      a: 'Elbette. Bulunduğunuz cadde, kavşak, AVM veya sanayi sitesi adını söylediğinizde yerel saha ekibimiz nokta atışı konuma ulaşır.'
    }
  ];

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>Hizmet Bölgeleri</span>
    </nav>
    <h1>Bağcılar &amp; Avrupa Yakası Hizmet Bölgelerimiz (${regions.length} Bölge)</h1>
    <p class="inner-hero-lead">Her bölge için yerel yol ağına hakim nöbetçi kurtarıcılarımızla 7/24 kesintisiz, kaskolu ve sabit fiyatlı oto çekici hizmeti sunuyoruz.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="region-filter-bar" role="group" aria-label="Bölge kategorisi filtresi">
      <button type="button" class="filter-pill is-active" data-filter="all" aria-pressed="true">Tümü (${regions.length})</button>
      <button type="button" class="filter-pill" data-filter="ilce" aria-pressed="false">İlçeler</button>
      <button type="button" class="filter-pill" data-filter="mahalle" aria-pressed="false">Mahalle &amp; Semtler</button>
      <button type="button" class="filter-pill" data-filter="sanayi" aria-pressed="false">Sanayi &amp; Ticaret</button>
      <button type="button" class="filter-pill" data-filter="otoyol" aria-pressed="false">Otoyol &amp; Ana Arter</button>
    </div>
    <div class="regions-grid regions-directory-grid">
      ${regions.map(r => renderRegionCard(r, false)).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Bölgesel İntikal Disiplini</span>
      <h2>Bölgelerde Nasıl Çalışıyoruz?</h2>
      <p>Her semtte alternatif yan yolları bilen operatörlerimiz yoğun trafikte dahi en kısa rotadan ulaşır.</p>
    </div>
    ${renderStepsGrid()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Yerel Nöbetçi Filo Gücü</span>
      <h2>Neden Bölgenizde ${escapeHtml(BUSINESS.name)}?</h2>
    </div>
    ${renderWhyGrid()}
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Sahadan Kareler</span>
      <h2>Bölgelerimizden Gerçek Operasyonlar</h2>
    </div>
    ${renderGalleryGrid(6)}
  </div>
</section>

${buildFaqSection(dirFaqs, 'Bölgesel Çekici Hizmeti Hakkında SSS', 'Sıkça Sorulan Sorular', 'section')}`;

  const html = renderPage({
    headArgs: {
      title: `Hizmet Bölgelerimiz (${regions.length} Bölge) | ${BUSINESS.name}`,
      description: fitMetaDesc(`Bağcılar, Güneşli, Mahmutbey, Basın Ekspres, İSTOÇ, İkitelli, TEM, E-5 ve ${regions.length} Avrupa Yakası bölgesinde 7/24 oto çekici ve yol yardım.`, 160),
      canonicalPath: '/bolgeler/',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Hizmet Bölgeleri', path: '/bolgeler/' }
        ]),
        faqSchema(dirFaqs)
      ]
    },
    activeNav: 'bolgeler',
    mainHtml,
    regions,
    services
  });

  writeHtml('bolgeler/index.html', html);
}

function buildRegionDetailPage(r, index) {
  // Coğrafi mesafeye göre en yakın 8 komşu bölge (Haversine)
  const neighbors = regions
    .filter(c => c.slug !== r.slug)
    .map(c => ({ region: c, dist: haversineKm(r.geo, c.geo) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 8)
    .map(item => item.region);

  const regionSteps = [
    {
      num: '01',
      title: `${r.name} İhbar & Sabit Fiyat`,
      desc: `${r.name} içindeki konumunuzu ve aracınızın durumunu paylaştığınız anda net taşıma ücreti onaylanır.`
    },
    {
      num: '02',
      title: `${r.eta || '10–15 Dk'} Bölgesel İntikal`,
      desc: `${r.name} nöbetçi noktamızdaki en yakın kayar kasa veya ahtapot araç doğrudan bulunduğunuz sokağa yönlendirilir.`
    },
    {
      num: '03',
      title: 'Kaskolu & Aparatlı Yükleme',
      desc: 'Tampon koruma takozları ve dörtlü tekerlek gerdirme kemerleriyle aracınız sıfır temas prensibiyle yüklenir.'
    },
    {
      num: '04',
      title: 'Servis veya Adrese Teslimat',
      desc: 'İkitelli, Bağcılar, Güngören veya istediğiniz yetkili servise güvenli indirme yapılır; mobil POS ve fatura sunulur.'
    }
  ];

  const mainHtml = `
<section class="hero-section">
  <div class="hero-ambient-glow" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div>
      <nav class="breadcrumb" aria-label="İçerik haritası">
        <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span>
        <a href="/bolgeler/">Hizmet Bölgeleri</a><span class="breadcrumb-sep">/</span>
        <span>${escapeHtml(r.name)}</span>
      </nav>
      <div class="dispatch-tag" data-ads-eyebrow><span class="pulse-dot" aria-hidden="true"></span><span>${escapeHtml(r.name)} 7/24 Nöbetçi Oto Çekici &amp; Kurtarıcı</span></div>
      <h1 data-ads-h1>${escapeHtml(r.name)} Oto Çekici &amp; <span class="hero-accent">7/24 ${escapeHtml(r.name)} Yol Yardım</span></h1>
      <p class="hero-lead">${escapeHtml(r.heroLead)}</p>
      <div class="hero-key-pillars">
        <div class="pillar-pill">${ICONS.clock}<span>${escapeHtml(r.eta || '10–15 Dk')} Hızlı İntikal</span></div>
        <div class="pillar-pill">${ICONS.shield}<span>%100 Kaskolu Sıfır Hasar</span></div>
        <div class="pillar-pill">${ICONS.tag}<span>Sabit Fiyat Telefonda Onay</span></div>
      </div>
      <a href="${telLink()}" class="hero-mobile-call" data-placement="hero_mobile">${ICONS.phone}<span><strong>7/24 Acil Çekici:</strong> ${BUSINESS.phoneDisplay}</span></a>
      <div class="hero-desktop-actions">
        <a href="${telLink()}" class="btn btn-orange" data-placement="region_hero">${ICONS.phone}<span>Hemen Ara: ${BUSINESS.phoneDisplay}</span></a>
        <a href="${waRegionLink(r.name)}" class="btn btn-wa btn-send-location" data-placement="region_hero" data-region="${escapeHtml(r.name)}" target="_blank" rel="noopener noreferrer">${ICONS.whatsapp}<span>${escapeHtml(r.name)} Konum Gönder</span></a>
      </div>
    </div>
    <div class="region-hero-right">
      ${buildShowcaseCard({
        imageBase: r.hero,
        alt: `${r.name} oto çekici ve oto kurtarma saha operasyonu — ${BUSINESS.name}`,
        badgeRegion: r.name,
        isHero: true
      })}
      ${renderQuoteBox(r.name)}
    </div>
  </div>
</section>

<div class="trust-strip">
  <div class="container trust-strip-grid">
    <div class="trust-chip">${ICONS.clock}<span>Ortalama ${escapeHtml(r.eta || '10–15 Dk')} Varış</span></div>
    <div class="trust-chip">${ICONS.shield}<span>%100 Taşıma Kaskosu</span></div>
    <div class="trust-chip">${ICONS.tag}<span>Telefonda Sabit Fiyat</span></div>
    <div class="trust-chip">${ICONS.truck}<span>Aparatlı Sıfır Hasar</span></div>
    <div class="trust-chip">${ICONS.wrench}<span>7/24 ${escapeHtml(r.name)} Filosu</span></div>
  </div>
</div>

<div class="region-landmarks-bar">
  <div class="container">
    <h2 class="landmarks-heading">${escapeHtml(r.name)} En Yakın Çekici &amp; Nöbetçi Noktalarımız</h2>
    <div class="landmark-chips">
      ${r.landmarks.map(l => `<span class="landmark-chip">${ICONS.pin}<span>${escapeHtml(l)}</span></span>`).join('\n      ')}
    </div>
  </div>
</div>

<section class="section">
  <div class="container prose-layout">
    <article class="article-body">
      ${r.articleHtml}

      <div class="region-pricing-card">
        <h2>${escapeHtml(r.name)} Oto Çekici Fiyatları &amp; Hizmet Kapsamı</h2>
        <p>${escapeHtml(r.name)} çekici ücretleri; aracın bulunduğu konum ile bırakılacağı yetkili servis veya sanayi sitesi arasındaki kilometre, araç segmenti ve gereken donanıma göre telefonda netleştirilir. Gece saatlerinde sürpriz ek tarife uygulanmaz; mobil POS ve KDV dahil fatura sunulur.</p>
        <div class="region-intent-links">
          <a href="/bolgeler/${r.slug}-oto-cekici.html?hizmet=oto-cekici" class="intent-chip">${ICONS.truck}<span>${escapeHtml(r.name)} Oto Çekici</span></a>
          <a href="/bolgeler/${r.slug}-oto-cekici.html?hizmet=oto-kurtarma" class="intent-chip">${ICONS.shield}<span>${escapeHtml(r.name)} Oto Kurtarma</span></a>
          <a href="/bolgeler/${r.slug}-oto-cekici.html?hizmet=aku-takviye" class="intent-chip">${ICONS.wrench}<span>${escapeHtml(r.name)} Akü Takviye</span></a>
          <a href="/bolgeler/${r.slug}-oto-cekici.html?hizmet=kapali-otopark" class="intent-chip">${ICONS.pin}<span>${escapeHtml(r.name)} Kapalı Otopark Çekici</span></a>
        </div>
      </div>

      <h2>${escapeHtml(r.name)} Bölgesinde Taşınan Araç Tipleri &amp; Donanım</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Araç Sınıfı</th>
              <th>Kullanılan Donanım</th>
              <th>Güvenlik Protokolü</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Binek &amp; Alçak Spor Araçlar</td>
              <td>Sıfır Eğimli Hidrolik Kayar Kasa</td>
              <td>Tampon uzatma takozu + 4 nokta tekerlek kayışı</td>
            </tr>
            <tr>
              <td>SUV, Hibrit &amp; Elektrikli Araçlar</td>
              <td>Tekerlek Kızaklı Platform &amp; Ahtapot</td>
              <td>Rejeneratif aktarma korumalı tekerlekten kaldırma</td>
            </tr>
            <tr>
              <td>Minibüs, Panelvan &amp; Hafif Ticari</td>
              <td>Uzun Şasi Güçlendirilmiş Kurtarıcı</td>
              <td>Yüksek tonajlı vinç halatı ve dingil sabitleme</td>
            </tr>
            <tr>
              <td>Motosiklet &amp; Maxi Scooter</td>
              <td>Ön Teker Kızağı &amp; Yumuşak Sapan</td>
              <td>Gidon kilitli dikey sabitleme, grenaj koruma</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="field-log-card">
        <div class="field-log-img">
          ${imgTag(r.fieldImage || r.hero, `${r.name} saha kurtarma kaydı — ${BUSINESS.name}`)}
        </div>
        <div>
          <span class="section-eyebrow">${escapeHtml(r.name)} Saha Operasyon Kaydı</span>
          <h3 style="margin-top:4px;">${escapeHtml(r.fieldLogTitle)}</h3>
          <p style="margin-bottom:0;">${escapeHtml(r.fieldLogDesc)}</p>
        </div>
      </div>
    </article>

    <aside class="sidebar-card">
      <h3>${escapeHtml(r.name)} Hızlı Erişim</h3>
      <p>${escapeHtml(r.name)} ve yakın çevresinde aktif olarak sunduğumuz başlıca kurtarma ve yol yardım çözümleri:</p>
      <div class="sidebar-list">
        ${services
          .slice(0, 6)
          .map(s => `<a href="/hizmetler/${s.slug}.html"><span>${escapeHtml(s.shortTitle)}</span>${ICONS.arrowRight}</a>`)
          .join('\n        ')}
      </div>
      <div style="font-size:0.82rem;color:var(--muted);margin-top:10px;">
        <strong style="color:var(--cobalt-deep);">Öncelikli Noktalar:</strong> ${escapeHtml(r.landmarks.join(', '))}
      </div>
    </aside>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">${escapeHtml(r.name)} Operasyon Akışı</span>
      <h2>${escapeHtml(r.name)} Çekici Süreci Nasıl İşler?</h2>
    </div>
    ${renderStepsGrid(regionSteps)}
  </div>
</section>

${buildFaqSection(r.faqs, `${r.name} Oto Çekici Sıkça Sorulan Sorular`, `${r.name} Yerel SSS`, 'section')}

<section class="section section-dark">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Yakın Nöbetçi Noktalar</span>
      <h2>${escapeHtml(r.name)} Çevresindeki Diğer Hizmet Bölgelerimiz</h2>
      <p>Komşu semt ve ana arterlerde de aynı hız ve sabit fiyat güvencesiyle hizmet veriyoruz.</p>
    </div>
    <div class="regions-grid">
      ${neighbors.map(n => renderRegionCard(n, false)).join('\n      ')}
    </div>
  </div>
</section>`;

  const html = renderPage({
    headArgs: {
      title: buildRegionTitle(r),
      description: buildRegionDesc(r),
      canonicalPath: `/bolgeler/${r.slug}-oto-cekici.html`,
      preloadHero: r.hero,
      ogImage: r.hero,
      schemas: [
        localBusinessSchema(r),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Hizmet Bölgeleri', path: '/bolgeler/' },
          { name: `${r.name} Çekici`, path: `/bolgeler/${r.slug}-oto-cekici.html` }
        ]),
        faqSchema(r.faqs)
      ]
    },
    regionCtx: r,
    activeNav: 'bolgeler',
    bodyRegion: r.name,
    mainHtml,
    regions,
    services
  });

  writeHtml(`bolgeler/${r.slug}-oto-cekici.html`, html);
}

// ============================================================================
// 3. HİZMETLER DİZİNİ (hizmetler/index.html) + 8 HİZMET DETAY SAYFASI
//    (Kural 2.2.4: Üst Herolarda Mükerrer CTA Butonu KESİNLİKLE YOK)
// ============================================================================
function buildServicesDirectory() {
  const srvFaqs = [
    {
      q: 'Hangi araç arızalarında oto çekici yerine yerinde yol yardım yeterlidir?',
      a: 'Akü boşalması, lastik patlaması veya sigorta/kutup başı temassızlığı gibi sorunlarda çekiciye gerek kalmadan yerinde mobil ekip desteğiyle yolunuza devam edebilirsiniz.'
    },
    {
      q: 'Ahtapot çekici ile kayar kasa çekici arasındaki fark nedir?',
      a: 'Kayar kasa hidrolik rampa ile yürür aksamı sağlam araçları taşır; ahtapot çekici ise kaza veya şanzıman kilidi nedeniyle tekerlekleri hiç dönmeyen araçları dört tekerleğinden havaya kaldırarak kurtarır.'
    },
    {
      q: 'Şehirlerarası oto çekici hizmeti tek araçlık mı yoksa çoklu taşıma mıdır?',
      a: 'Acil bireysel taleplerde doğrudan adresten adrese tekil özel kayar kasa transferi yapıyoruz; böylece aracınız aktarma görmeden aynı gün teslim edilir.'
    },
    {
      q: 'Motosiklet taşımada aracın devrilme veya çizilme riski var mı?',
      a: 'Motosikletler özel ön tekerlek sabitleme kızağına oturtulur ve grenajlara değmeyen yumuşak gerdirme kayışlarıyla dört yönden sabitlenir.'
    },
    {
      q: 'Hizmet sonrası kasko şirketim için resmi fatura ve belge alabilir miyim?',
      a: 'Evet. Kasko asistans geri ödemelerinde geçerli detaylı taşıma faturası teslimat anında veya dijital olarak tarafınıza iletilir.'
    }
  ];

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>Hizmetlerimiz</span>
    </nav>
    <h1>7/24 Oto Çekici, Oto Kurtarma ve Yol Yardım Hizmetlerimiz</h1>
    <p class="inner-hero-lead">${escapeHtml(BUSINESS.name)} filosu; hidrolik kayar kasa, ahtapot vinç, kapalı otopark kurtarıcısı ve mobil akü/lastik donanımlarıyla tüm yol yardım ihtiyaçlarınızı tek merkezden karşılar.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="services-grid">
      ${services
        .map(
          s => `<article class="service-card">
        <div class="service-thumb">
          ${imgTag(s.image, `${BUSINESS.name} — ${s.title}`)}
          <span class="service-tag">${escapeHtml(s.badge)}</span>
        </div>
        <div class="service-body">
          <h2><a href="/hizmetler/${s.slug}.html" style="font-size:1.12rem;">${escapeHtml(s.title)}</a></h2>
          <p>${escapeHtml(s.summary)}</p>
          <ul class="service-bullets">
            ${s.highlights.map(h => `<li>${ICONS.check}<span>${escapeHtml(h)}</span></li>`).join('\n            ')}
          </ul>
          <a href="/hizmetler/${s.slug}.html" class="service-more">Teknik Detayları İncele ${ICONS.arrowRight}</a>
        </div>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Operasyon Standardımız</span>
      <h2>Nasıl Çalışıyoruz?</h2>
    </div>
    ${renderStepsGrid()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Kurumsal Güvenceler</span>
      <h2>Neden ${escapeHtml(BUSINESS.name)}?</h2>
    </div>
    ${renderWhyGrid()}
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Gerçek Saha Operasyonları</span>
      <h2>Hizmetlerimizden Operasyon Kareleri</h2>
    </div>
    ${renderGalleryGrid(6)}
  </div>
</section>

${buildFaqSection(srvFaqs, 'Hizmetlerimiz Hakkında Sıkça Sorulan Sorular', 'Teknik SSS', 'section')}`;

  const html = renderPage({
    headArgs: {
      title: `Hizmetlerimiz | 7/24 Oto Çekici & Yol Yardım — ${BUSINESS.name}`,
      description: `Oto çekici, ahtapot vinçli kurtarma, kapalı otopark çekici, akü takviye, mobil lastik, motosiklet ve ticari araç taşıma hizmetleri. ${BUSINESS.name}.`,
      canonicalPath: '/hizmetler/',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Hizmetlerimiz', path: '/hizmetler/' }
        ]),
        faqSchema(srvFaqs)
      ]
    },
    activeNav: 'hizmetler',
    mainHtml,
    regions,
    services
  });

  writeHtml('hizmetler/index.html', html);
}

function buildServiceDetailPage(s) {
  const relatedRegions = regions.slice(0, 6);
  const otherServices = services.filter(o => o.slug !== s.slug).slice(0, 5);

  const mainHtml = `
<section class="inner-hero">
  <div class="container inner-hero-split">
    <div>
      <nav class="breadcrumb" aria-label="İçerik haritası">
        <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span>
        <a href="/hizmetler/">Hizmetlerimiz</a><span class="breadcrumb-sep">/</span>
        <span>${escapeHtml(s.shortTitle)}</span>
      </nav>
      <h1>${escapeHtml(s.title)}</h1>
      <p class="inner-hero-lead">${escapeHtml(s.heroLead)}</p>
    </div>
    <div>
      ${buildShowcaseCard({
        imageBase: s.image,
        alt: `${s.title} — ${BUSINESS.name} saha donanımı`,
        badgeRegion: s.shortTitle,
        isHero: true
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container prose-layout">
    <article class="article-body">
      ${s.articleHtml}
    </article>
    <aside class="sidebar-card">
      <h3>Diğer Hizmetlerimiz</h3>
      <p>İhtiyacınıza en uygun kurtarma ve yol yardım donanımını seçin:</p>
      <div class="sidebar-list">
        ${otherServices.map(o => `<a href="/hizmetler/${o.slug}.html"><span>${escapeHtml(o.shortTitle)}</span>${ICONS.arrowRight}</a>`).join('\n        ')}
      </div>
      <h3 style="margin-top:20px;">Başlıca Müdahale Bölgeleri</h3>
      <div class="sidebar-list">
        ${relatedRegions.map(r => `<a href="/bolgeler/${r.slug}-oto-cekici.html"><span>${escapeHtml(r.name)} Çekici</span>${ICONS.arrowRight}</a>`).join('\n        ')}
      </div>
    </aside>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">4 Adımlı Süreç</span>
      <h2>${escapeHtml(s.shortTitle)} Operasyonu Nasıl Yürütülür?</h2>
    </div>
    ${renderStepsGrid(s.steps)}
  </div>
</section>

${buildFaqSection(s.faqs, `${s.shortTitle} Hakkında Sıkça Sorulan Sorular`, 'Hizmet SSS', 'section')}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.shortTitle,
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneTel,
      url: `${SITE_URL}/`
    },
    areaServed: 'Bağcılar ve İstanbul Avrupa Yakası',
    description: s.summary
  };

  const html = renderPage({
    headArgs: {
      title: `${s.shortTitle} | 7/24 Kaskolu Hizmet — ${BUSINESS.shortName}`,
      description: fitMetaDesc(`${s.summary} 10-15 dk varış, sabit fiyat: ${BUSINESS.phoneDisplay}`, 160),
      canonicalPath: `/hizmetler/${s.slug}.html`,
      preloadHero: s.image,
      ogImage: s.image,
      schemas: [
        serviceSchema,
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Hizmetlerimiz', path: '/hizmetler/' },
          { name: s.shortTitle, path: `/hizmetler/${s.slug}.html` }
        ]),
        faqSchema(s.faqs)
      ]
    },
    activeNav: 'hizmetler',
    mainHtml,
    regions,
    services
  });

  writeHtml(`hizmetler/${s.slug}.html`, html);
}

// ============================================================================
// 4. BLOG DİZİNİ & 5 BLOG YAZISI (Üst Herolarda CTA Yok)
// ============================================================================
function buildBlogDirectory() {
  const blogFaqs = [
    {
      q: 'Otoyolda aracım durduğunda reflektörü kaç metre geriye koymalıyım?',
      a: 'Şehir içi caddelerde en az 30 metre, TEM ve Basın Ekspres gibi yüksek hızlı otoyollarda en az 100–150 metre geriye üçgen reflektör yerleştirip dörtlü flaşörleri yakmalısınız.'
    },
    {
      q: 'Otomatik vitesli araç başka bir otomobille halatla çekilebilir mi?',
      a: 'Hayır. Motor çalışmazken şanzıman yağ pompası basınç üretemediği için halatla çekim birkaç yüz metrede ağır şanzıman arızasına yol açar; mutlaka kayar kasa çekici kullanılmalıdır.'
    },
    {
      q: 'Elektrikli aracın bataryası bittiğinde en güvenli taşıma yöntemi nedir?',
      a: 'Elektrikli araçlarda rejeneratif frenleme motorları zarar görebileceği için tekerleklerin yere temas etmediği tam platform kayar kasa veya ahtapot vinçle nakil şarttır.'
    },
    {
      q: 'Çekici çağırmadan önce hangi bilgileri hazır bulundurmalıyım?',
      a: 'Bulunduğunuz bölge veya WhatsApp konumu, aracın marka-model/vites tipi, tekerleklerin dönüp dönmediği ve gitmek istediğiniz servis bilgisini paylaşmanız yeterlidir.'
    }
  ];

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>Sürücü Rehberi</span>
    </nav>
    <h1>Sürücü Rehberi &amp; Yol Yardım Teknik Kılavuzları</h1>
    <p class="inner-hero-lead">Bağcılar, Basın Ekspres ve İstanbul trafiğinde arıza, akü bitmesi, kilitli şanzıman ve güvenli kurtarma süreçlerine dair sahadan derlenen teknik rehberler.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="blog-grid">
      ${blog
        .map(
          b => `<article class="blog-card">
        <a href="/blog/${b.slug}.html" class="blog-thumb">${imgTag(b.image, b.title)}</a>
        <div class="blog-body">
          <span class="blog-meta">${escapeHtml(b.category)} &middot; ${escapeHtml(b.readTime)} &middot; ${escapeHtml(b.datePublished)}</span>
          <h2><a href="/blog/${b.slug}.html" style="font-size:1.08rem;">${escapeHtml(b.title)}</a></h2>
          <p>${escapeHtml(b.excerpt)}</p>
          <a href="/blog/${b.slug}.html" class="service-more">Yazının Tamamını Oku ${ICONS.arrowRight}</a>
        </div>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Acil Durum Kılavuzu</span>
      <h2>Yolda Arıza Anında İlk 5 Dakikada Yapmanız Gerekenler</h2>
    </div>
    ${renderStepsGrid([
      { num: '01', title: 'Emniyet Şeridine Geçin', desc: 'Aracı mümkünse sağ emniyet şeridine alın, direksiyonu bariyere doğru kırın ve dörtlü ikaz lambalarını hemen açın.' },
      { num: '02', title: 'Görünürlüğü Sağlayın', desc: 'Reflektörlü yelek giyin, üçgen reflektörü trafiğin geliş yönüne (otoyolda 100–150 m geriye) konumlandırın.' },
      { num: '03', title: 'Araç Dışında Güvenli Alanda Bekleyin', desc: 'Yolcularla birlikte aracın içinde veya arka tamponunda durmayın; bariyer arkasındaki güvenli alanda bekleyin.' },
      { num: '04', title: 'Konum Paylaşıp Sabit Fiyat Alın', desc: 'WhatsApp konumunuzu ve aracın vites/tekerlek durumunu ileterek doğru donanımlı kurtarıcıyı çağırın.' }
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Teknik Uzmanlık</span>
      <h2>Profesyonel Kurtarıcı Farkı</h2>
    </div>
    ${renderWhyGrid()}
  </div>
</section>

${buildFaqSection(blogFaqs, 'Sık Karşılaşılan Yol Yardım Soruları', 'Rehber SSS', 'section section-alt')}`;

  const html = renderPage({
    headArgs: {
      title: `Sürücü Rehberi & Blog | Yol Yardım Kılavuzları — ${BUSINESS.name}`,
      description: `Otomatik vites araç çekimi, elektrikli araç kurtarma, akü takviye, kapalı otopark tahliyesi ve çekici fiyat hesaplama rehberleri — ${BUSINESS.name}.`,
      canonicalPath: '/blog/',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Sürücü Rehberi', path: '/blog/' }
        ]),
        faqSchema(blogFaqs)
      ]
    },
    activeNav: 'blog',
    mainHtml,
    regions,
    services
  });

  writeHtml('blog/index.html', html);
}

function buildBlogDetailPage(b) {
  const otherPosts = blog.filter(o => o.slug !== b.slug);

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span>
      <a href="/blog/">Sürücü Rehberi</a><span class="breadcrumb-sep">/</span>
      <span>${escapeHtml(b.shortTitle)}</span>
    </nav>
    <h1>${escapeHtml(b.title)}</h1>
    <p class="inner-hero-lead">${escapeHtml(b.excerpt)}</p>
  </div>
</section>

<section class="section">
  <div class="container prose-layout">
    <article class="article-body">
      <div style="margin-bottom:20px;border-radius:14px;overflow:hidden;aspect-ratio:16/10;">
        ${pictureTag(b.image, b.title, { isHero: true })}
      </div>

      <div class="toc-box">
        <div class="toc-title">Bu Rehberde Neler Var?</div>
        <ul class="toc-list">
          ${b.toc.map(t => `<li><a href="#${t.id}">${escapeHtml(t.label)}</a></li>`).join('\n          ')}
        </ul>
      </div>

      ${b.contentHtml}
    </article>

    <aside class="sidebar-card">
      <h3>Diğer Sürücü Rehberleri</h3>
      <div class="sidebar-list">
        ${otherPosts.map(p => `<a href="/blog/${p.slug}.html"><span>${escapeHtml(p.shortTitle)}</span>${ICONS.arrowRight}</a>`).join('\n        ')}
      </div>
      <h3 style="margin-top:20px;">İlgili Hizmet &amp; Bölgeler</h3>
      <div class="sidebar-list">
        ${b.relatedLinks.map(l => `<a href="${l.href}"><span>${escapeHtml(l.label)}</span>${ICONS.arrowRight}</a>`).join('\n        ')}
      </div>
    </aside>
  </div>
</section>

${buildFaqSection(b.faqs, 'Bu Konuda Sıkça Sorulan Sorular', 'Teknik SSS', 'section section-ice')}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: b.title,
    description: b.excerpt,
    image: `${SITE_URL}/images/${b.image}.webp`,
    datePublished: b.datePublished,
    dateModified: b.datePublished,
    author: { '@type': 'Organization', name: BUSINESS.name },
    publisher: { '@type': 'Organization', name: BUSINESS.name, url: `${SITE_URL}/` },
    mainEntityOfPage: `${SITE_URL}/blog/${b.slug}.html`
  };

  const html = renderPage({
    headArgs: {
      title: `${b.shortTitle} | Rehber — ${BUSINESS.shortName}`,
      description: fitMetaDesc(b.excerpt, 160),
      canonicalPath: `/blog/${b.slug}.html`,
      preloadHero: b.image,
      ogImage: b.image,
      schemas: [
        articleSchema,
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Sürücü Rehberi', path: '/blog/' },
          { name: b.shortTitle, path: `/blog/${b.slug}.html` }
        ]),
        faqSchema(b.faqs)
      ]
    },
    activeNav: 'blog',
    mainHtml,
    regions,
    services
  });

  writeHtml(`blog/${b.slug}.html`, html);
}

// ============================================================================
// 5. GALERİ, HAKKIMIZDA (8 BLOK), İLETİŞİM, GİZLİLİK/KVKK, 404
//    (Üst Herolarda Mükerrer CTA Yok)
// ============================================================================
function buildGalleryPage() {
  const galFaqs = [
    {
      q: 'Galerideki fotoğraflar gerçek saha operasyonlarınıza mı ait?',
      a: 'Evet. Sitemizde yer alan tüm görseller binek, SUV, ticari araç, motosiklet ve ahtapot vinçle gerçekleştirilen gerçek kurtarma çalışmalarından derlenmiştir.'
    },
    {
      q: 'Araç platforma sabitlenirken jant veya kaporta temas eder mi?',
      a: 'Hayır. Sabitleme kemerleri yalnızca lastik sırtından ve şasi altındaki fabrika kancalarından geçirilir; jant, tampon ve kaportaya temas etmez.'
    },
    {
      q: 'Gece operasyonlarında aydınlatma ve güvenlik nasıl sağlanır?',
      a: 'Tüm kurtarıcı araçlarımızda yüksek lümenli LED çalışma projektörleri, sarı ikaz tepe lambaları ve otoyol reflektör setleri standart olarak bulunur.'
    },
    {
      q: 'Lüks veya alçak şasili araçların yükleme açısı güvenli mi?',
      a: 'Hidrolik kayar kasalarımız yere sıfır yaklaşma açısıyla iner; ekstra alçak tamponlar için kompozit uzatma rampaları kullanılır.'
    }
  ];

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>Saha Operasyonları Galerisi</span>
    </nav>
    <h1>Gerçek Saha Operasyonları &amp; Filo Galerisi</h1>
    <p class="inner-hero-lead">${escapeHtml(BUSINESS.name)} ekiplerinin Bağcılar, Basın Ekspres, Mahmutbey, İSTOÇ ve Avrupa Yakası genelinde gerçekleştirdiği hasarsız araç kurtarma operasyonları.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${renderGalleryGrid(12)}
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">4 Noktadan Güvenli Sabitleme</span>
      <h2>Hasarsız Yükleme Sürecimiz</h2>
    </div>
    ${renderStepsGrid()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Filo Ekipman Standartları</span>
      <h2>Sahada Kullandığımız Profesyonel Kurtarma Donanımları</h2>
    </div>
    <div class="fleet-grid">
      <div class="fleet-card">
        <h3>Hidrolik Kayar Kasa Platformlar</h3>
        <p>Alçak tamponlu sedan, hibrit ve SUV araçları sıfır sürtme ile yükleyen düşük açılı hidrolik rampalar.</p>
      </div>
      <div class="fleet-card">
        <h3>Ahtapot &amp; Tekerlek Askılı Vinçler</h3>
        <p>Şanzımanı kilitlenen, aksı kırılan veya yol dışına çıkan araçları dört tekerleğinden kaldırıp platforma alan vinç sistemleri.</p>
      </div>
      <div class="fleet-card">
        <h3>Alçak Tavan Kapalı Otopark Araçları</h3>
        <p>AVM, hastane ve rezidans kapalı garaj yüksekliklerine tam uyumlu kompakt kabinli kurtarıcılar.</p>
      </div>
      <div class="fleet-card">
        <h3>Motosiklet Kızağı &amp; Akü Booster Seti</h3>
        <p>Motosiklet dikey sabitleme rayları ve start-stop uyumlu akım korumalı 12V/24V dijital takviye üniteleri.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Donanım &amp; Güvenlik</span>
      <h2>Neden ${escapeHtml(BUSINESS.name)} Donanımı?</h2>
    </div>
    ${renderWhyGrid()}
  </div>
</section>

${buildFaqSection(galFaqs, 'Galeri & Yükleme Güvenliği Hakkında SSS', 'Operasyon SSS', 'section')}`;

  const html = renderPage({
    headArgs: {
      title: `Saha Operasyonları Galerisi | ${BUSINESS.name}`,
      description: `${BUSINESS.name} gerçek saha operasyon fotoğrafları: kayar kasa çekici, ahtapot vinç, kapalı otopark kurtarma, ticari ve motosiklet taşıma.`,
      canonicalPath: '/galeri.html',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Galeri', path: '/galeri.html' }
        ]),
        faqSchema(galFaqs)
      ]
    },
    activeNav: 'galeri',
    mainHtml,
    regions,
    services
  });

  writeHtml('galeri.html', html);
}

function buildAboutPage() {
  const aboutFaqs = [
    {
      q: `${BUSINESS.name} taşıma kaskosu neleri kapsar?`,
      a: 'Araç çekici platformuna yüklenmeye başladığı andan varış adresinde tekerlekleri yere basana kadar meydana gelebilecek tüm taşıma riskleri emtia nakliye sigortamız kapsamındadır.'
    },
    {
      q: 'Telefonda verilen sabit fiyat sonradan değişir mi?',
      a: 'Hayır. Güzergah ve araç durumu doğru paylaşıldığında çağrı sırasında verdiğimiz net tutar dışında indirme, bekleme veya gece sürpriz ücreti talep edilmez.'
    },
    {
      q: 'Kurumsal filo ve şirket araçları için anlaşmalı faturalandırma yapıyor musunuz?',
      a: 'Evet. İSTOÇ, İkitelli OSB, Tekstilkent ve Basın Ekspres bölgesindeki ticari işletmelere KDV dahil kurumsal fatura ve öncelikli filo desteği sağlıyoruz.'
    },
    {
      q: 'Resmi yetki belgeleriniz ve sürücü yeterlilikleriniz mevcut mu?',
      a: 'Filomuzdaki tüm çekiciler K1/K2 yetki belgeli, periyodik hidrolik bakımlı ve SRC belgeli deneyimli operatörler tarafından sevk edilmektedir.'
    },
    {
      q: 'Gece nöbetinde ortalama varış süreniz kaç dakikadır?',
      a: 'Gece saatlerinde trafik yoğunluğu azaldığı için Bağcılar ve çevre ilçelerdeki nöbetçi noktalarımızdan ortalama 10–15 dakikada olay yerine ulaşıyoruz.'
    }
  ];

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>Hakkımızda</span>
    </nav>
    <h1>${escapeHtml(BUSINESS.name)} — Kurumsal Filo &amp; Saha Standartlarımız</h1>
    <p class="inner-hero-lead">Bağcılar merkezli yerel hakimiyetimiz, modern hidrolik filomuz ve telefonda net sabit fiyat ilkemizle Avrupa Yakası'nın ${regions.length} stratejik bölgesinde 7/24 kesintisiz yanınızdayız.</p>
    <div class="about-stats">
      <div class="about-stat-box"><div class="about-stat-val">10–15 Dk</div><div class="about-stat-lbl">Ortalama Varış Süresi</div></div>
      <div class="about-stat-box"><div class="about-stat-val">7/24</div><div class="about-stat-lbl">Kesintisiz Nöbetçi Filo</div></div>
      <div class="about-stat-box"><div class="about-stat-val">%100</div><div class="about-stat-lbl">Taşıma Kaskosu</div></div>
      <div class="about-stat-box"><div class="about-stat-val">${BUSINESS.rating.value} / 5</div><div class="about-stat-lbl">Müşteri Memnuniyeti</div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split-grid">
    <div>
      <span class="section-eyebrow">Biz Kimiz?</span>
      <h2>Yerel Hakimiyet, Dürüst Fiyat ve Sıfır Hasar Disiplini</h2>
      <p>${escapeHtml(BUSINESS.name)}, Bağcılar'ın mahalle içi dar sokaklarından Basın Ekspres ve TEM Mahmutbey gişe trafiğine kadar Avrupa Yakası'nın her kavşağını yakından tanıyan saha kökenli bir oto kurtarma ekibidir.</p>
      <p>Sektörde sürücülerin en çok tedirgin olduğu gizli ücret, uzun bekleme ve amatör yükleme kaynaklı kaporta hasarı sorunlarını tamamen ortadan kaldırmak için kurulduk. Her ihbarda telefonda net fiyat verir, araca en uygun hidrolik donanımı gönderir ve teslimatı kaskolu olarak tamamlarız.</p>
      <div class="why-stat-badge">${ICONS.award}<span>${BUSINESS.foundedYears} Yıllık Kesintisiz Saha Tecrübesi</span></div>
    </div>
    <div>
      ${buildShowcaseCard({
        imageBase: 'saha-istasyon',
        alt: `${BUSINESS.name} kurumsal oto kurtarma filosu ve saha ekibi`,
        badgeRegion: 'Avrupa Yakası Filo',
        isHero: false
      })}
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Donanım Altyapımız</span>
      <h2>Modern Araç Filomuz (5 Özel Kurtarma Sınıfı)</h2>
    </div>
    <div class="fleet-grid">
      <div class="fleet-card">
        <h3>Hidrolik Kayar Kasa Çekiciler</h3>
        <p>Binek, SUV, elektrikli ve alçak şasili spor araçlar için yere paralel yaklaşan tam hidrolik taşıma platformları.</p>
      </div>
      <div class="fleet-card">
        <h3>Ahtapot &amp; Vinç Donanımlı Kurtarıcılar</h3>
        <p>Tekerleği dönmeyen, şanzımanı kilitlenen veya kaza sonrası hareket edemeyen araçlar için tekerlek askılı vinçli kurtarma.</p>
      </div>
      <div class="fleet-card">
        <h3>Alçak Tavanlı Kapalı Otopark Araçları</h3>
        <p>AVM, hastane ve rezidans kapalı garajlarına sürtmeden girebilen alçak kabinli özel çekici araçları.</p>
      </div>
      <div class="fleet-card">
        <h3>Ticari &amp; Ağır Hizmet Taşıyıcıları</h3>
        <p>Minibüs, panelvan, kamyonet ve hafif ticari şirket araçları için güçlendirilmiş uzun şasi kurtarıcı platformlar.</p>
      </div>
      <div class="fleet-card">
        <h3>Mobil Yol Yardım &amp; Akü Booster Donanımı</h3>
        <p>12V/24V pik akım korumalı dijital akü takviye istasyonları ve yerinde lastik değişim ekipmanları.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">4 Aşamalı Standart Süreç</span>
      <h2>Nasıl Çalışıyoruz?</h2>
    </div>
    ${renderStepsGrid()}
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Kurumsal Taahhütlerimiz</span>
      <h2>Müşteri Güvencelerimiz &amp; Yasal Standartlarımız</h2>
    </div>
    ${renderWhyGrid()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">Gerçek Saha Operasyonları</span>
      <h2>Sahadan Güncel Fotoğraflar</h2>
    </div>
    ${renderGalleryGrid(6)}
  </div>
</section>

${buildFaqSection(aboutFaqs, 'Kurumsal Hizmet & Kasko Hakkında SSS', 'Kurumsal SSS', 'section section-ice')}`;

  const html = renderPage({
    headArgs: {
      title: `Hakkımızda & Filomuz | 7/24 Kaskolu Çekici — ${BUSINESS.name}`,
      description: `${BUSINESS.name} kurumsal hikaye, 5 sınıflı modern çekici filosu, K1/K2 yetki belgeleri, taşıma kaskosu ve telefonda sabit fiyat güvencesi.`,
      canonicalPath: '/hakkimizda.html',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Hakkımızda', path: '/hakkimizda.html' }
        ]),
        faqSchema(aboutFaqs)
      ]
    },
    activeNav: 'hakkimizda',
    mainHtml,
    regions,
    services
  });

  writeHtml('hakkimizda.html', html);
}

function buildContactPage() {
  const contactFaqs = [
    {
      q: 'En hızlı nasıl çekici çağırabilirim?',
      a: `Doğrudan ${BUSINESS.phoneDisplay} numaralı 7/24 nöbetçi hattımızı arayarak veya WhatsApp butonundan canlı konum paylaşarak anında ekip yönlendirmesi başlatabilirsiniz.`
    },
    {
      q: 'WhatsApp üzerinden konum atarken nelere dikkat etmeliyim?',
      a: 'Konumu paylaştıktan sonra aracınızın marka/modelini, vites tipini (otomatik/manuel) ve açık cadde mi yoksa kapalı otopark mı olduğunu yazmanız doğru aracın gelmesini hızlandırır.'
    },
    {
      q: 'Merkez noktanız nerede bulunuyor?',
      a: 'Ana intikal merkezimiz Bağcılar Merkez ve Basın Ekspres bağlantısındadır; buna ek olarak Mahmutbey, Güneşli, İSTOÇ, İkitelli ve Bahçelievler noktalarında hazır araçlarımız bulunur.'
    },
    {
      q: 'Ödemeyi teslimat noktasında kredi kartı ile yapabilir miyim?',
      a: 'Evet, tüm kurtarıcı araçlarımızda temassız destekli mobil POS cihazı mevcuttur ve talebiniz halinde KDV dahil resmi fatura kesilir.'
    }
  ];

  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>İletişim</span>
    </nav>
    <h1>7/24 Acil Çekici İletişim &amp; Konum Hattı</h1>
    <p class="inner-hero-lead">Bağcılar ve Avrupa Yakası'nın ${regions.length} bölgesinde gece gündüz tek numara üzerinden doğrudan saha operatörüne ulaşın.</p>
  </div>
</section>

<section class="section">
  <div class="container contact-grid">
    <div class="contact-card">
      <h2>Doğrudan İletişim Bilgileri</h2>
      <div class="contact-row">
        ${ICONS.phone}
        <div>
          <div class="contact-label">7/24 Acil Çağrı Hattı</div>
          <a href="${telLink()}" class="contact-val" data-placement="contact_page">${BUSINESS.phoneDisplay}</a>
        </div>
      </div>
      <div class="contact-row">
        ${ICONS.whatsapp}
        <div>
          <div class="contact-label">WhatsApp Konum &amp; Teklif</div>
          <a href="${waLink()}" class="contact-val btn-send-location" data-placement="contact_page" data-region="Bağcılar" target="_blank" rel="noopener noreferrer">Canlı Konum Gönder</a>
        </div>
      </div>
      ${BUSINESS.email ? `<div class="contact-row">
        ${ICONS.award}
        <div>
          <div class="contact-label">Kurumsal E-Posta</div>
          <a href="mailto:${escapeHtml(BUSINESS.email)}" class="contact-val">${escapeHtml(BUSINESS.email)}</a>
        </div>
      </div>` : ''}
      <div class="contact-row">
        ${ICONS.pin}
        <div>
          <div class="contact-label">Ana Merkez &amp; Nöbetçi Nokta</div>
          <div class="contact-val">${escapeHtml(BUSINESS.address.street)} (${escapeHtml(BUSINESS.address.postalCode)} ${escapeHtml(BUSINESS.address.locality)}, ${escapeHtml(BUSINESS.address.region)})</div>
        </div>
      </div>
      <div class="contact-row">
        ${ICONS.clock}
        <div>
          <div class="contact-label">Çalışma Saatleri</div>
          <div class="contact-val">${BUSINESS.hours} (Resmi tatiller dahil)</div>
        </div>
      </div>
      <div style="margin-top:20px;">
        ${renderQuoteBox('Bağcılar')}
      </div>
    </div>

    <div class="map-facade js-map-facade" data-map-src="https://maps.google.com/maps?q=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}&amp;z=13&amp;output=embed" data-map-title="${escapeHtml(BUSINESS.name)} Bağcılar Haritası">
      <div class="rc-pin-icon" style="margin-bottom:12px;">${ICONS.pin}</div>
      <h2 style="color:#fff;">Bağcılar Merkez İntikal Haritası</h2>
      <p>Koordinatlar: ${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}. Sayfa hızını korumak için harita tek dokunuşla yüklenir.</p>
      <button type="button" class="btn btn-orange js-load-map">Google Haritayı Göster</button>
    </div>
  </div>
</section>

${buildFaqSection(contactFaqs, 'İletişim & Çağırma Süreci SSS', 'İletişim SSS', 'section section-ice')}`;

  const html = renderPage({
    headArgs: {
      title: `İletişim & 7/24 Konum Hattı | ${BUSINESS.name}`,
      description: `${BUSINESS.name} Bağcılar ve Avrupa Yakası 7/24 acil oto çekici telefonu (${BUSINESS.phoneDisplay}), WhatsApp konum paylaşımı ve merkez haritası.`,
      canonicalPath: '/iletisim.html',
      schemas: [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'İletişim', path: '/iletisim.html' }
        ]),
        faqSchema(contactFaqs)
      ]
    },
    activeNav: 'iletisim',
    mainHtml,
    regions,
    services
  });

  writeHtml('iletisim.html', html);
}

function buildPrivacyPage() {
  const mainHtml = `
<section class="inner-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="İçerik haritası">
      <a href="/">Ana Sayfa</a><span class="breadcrumb-sep">/</span><span>Gizlilik &amp; KVKK Politikası</span>
    </nav>
    <h1>Gizlilik, KVKK ve Çerez Politikası</h1>
    <p class="inner-hero-lead">${escapeHtml(BUSINESS.name)} (${SITE_URL}) ziyaretçilerinin ve yol yardım müşterilerinin kişisel verilerinin korunması hakkında aydınlatma metni.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <article class="article-body" style="max-width:880px;">
      <h2>1. Veri Sorumlusu</h2>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla <strong>${escapeHtml(BUSINESS.legalName)}</strong> tarafından aşağıda açıklanan kapsamda işlenmektedir. Adres: <strong>${escapeHtml(BUSINESS.address.street)}, ${escapeHtml(BUSINESS.address.postalCode)} ${escapeHtml(BUSINESS.address.locality)}/${escapeHtml(BUSINESS.address.region)}</strong>. İletişim hattımız: <strong>${BUSINESS.phoneDisplay}</strong>${BUSINESS.email ? ` &middot; E-posta: <strong>${escapeHtml(BUSINESS.email)}</strong>` : ''}.</p>

      <h2>2. İşlenen Kişisel Veriler ve Amaçları</h2>
      <p>Acil oto çekici, oto kurtarma ve yol yardım hizmeti talep ettiğinizde telefon veya WhatsApp üzerinden paylaştığınız ad-soyad, telefon numarası, konum bilgisi, araç tipi ve fatura bilgileri yalnızca şu amaçlarla işlenir:</p>
      <ul class="article-list">
        <li>Bulunduğunuz noktaya en yakın nöbetçi kurtarıcı ekibin yönlendirilmesi,</li>
        <li>Taşıma ve emtia kaskosu kapsamında güvenli araç teslimatının sağlanması,</li>
        <li>Talep edilen resmi KDV'li fatura ve ödeme işlemlerinin mevzuata uygun düzenlenmesi,</li>
        <li>Site güvenliğinin sağlanması ve kötü niyetli reklam/bot trafiğinin önlenmesi.</li>
      </ul>

      <h2>3. Çerezler (Cookies) ve Ölçümleme Teknolojileri</h2>
      <p>${SITE_URL} üzerinde sayfa performansını ölçmek, kullanıcı deneyimini iyileştirmek ve reklam performansını değerlendirmek amacıyla teknik çerezler ile Google Analytics / Google Ads dönüşüm etiketleri kullanılabilir. Tarayıcı ayarlarınızdan çerez tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.</p>

      <h2>4. Kişisel Verilerin Aktarılması ve Saklama Süresi</h2>
      <p>Kişisel verileriniz üçüncü şahıslara ticari amaçla satılmaz veya paylaşılmaz. Yalnızca kanuni yükümlülükler kapsamında yetkili kamu kurumları veya resmi muhasebe/fatura süreçleri için gerekli olan yasal saklama süreleri boyunca muhafaza edilir.</p>

      <h2>5. KVKK Kapsamındaki Haklarınız</h2>
      <p>KVKK'nın 11. maddesi gereğince verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Talepleriniz için ${BUSINESS.phoneDisplay} numaralı hattımızdan bize ulaşabilirsiniz.</p>
    </article>
  </div>
</section>`;

  const html = renderPage({
    headArgs: {
      title: `Gizlilik & KVKK Politikası | ${BUSINESS.name}`,
      description: fitMetaDesc(`${BUSINESS.name} gizlilik politikası, 6698 sayılı KVKK kapsamında kişisel veri işleme aydınlatma metni ve çerez kullanımı esasları.`, 160),
      canonicalPath: '/gizlilik-politikasi.html',
      schemas: [
        breadcrumbSchema([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Gizlilik & KVKK Politikası', path: '/gizlilik-politikasi.html' }
        ])
      ]
    },
    mainHtml,
    regions,
    services
  });

  writeHtml('gizlilik-politikasi.html', html);
}

function build404Page() {
  const popularSlugs = ['bagcilar', 'basin-ekspres', 'mahmutbey', 'gunesli', 'istoc', 'bahcelievler', 'bakirkoy', 'tem-otoyolu', 'e5'];
  const popularRegions = popularSlugs
    .map(slug => regions.find(r => r.slug === slug))
    .filter(Boolean);

  const html = `${buildHead({
    title: `Sayfa Bulunamadı (404) | ${BUSINESS.name}`,
    description: `Aradığınız sayfa bulunamadı. Bağcılar ve Avrupa Yakası 7/24 acil oto çekici ve yol yardım için hemen arayın: ${BUSINESS.phoneDisplay}`,
    canonicalPath: '/404.html',
    noindex: true
  })}
<body data-theme="${BUSINESS.themeId}">
${buildHeader(null, '')}
<main id="main-content">
  <section class="section" style="text-align:center;padding:72px 0;">
    <div class="container" style="max-width:720px;">
      <span class="section-eyebrow">Hata 404</span>
      <h1 style="font-size:2.4rem;color:var(--cobalt-deep);">Aradığınız Sayfa Bulunamadı</h1>
      <p style="color:var(--muted);margin-bottom:24px;">Sayfa taşınmış veya kaldırılmış olabilir. Acil oto çekici veya yol yardım ihtiyacınız varsa doğrudan bizi arayabilir ya da ana sayfaya dönebilirsiniz.</p>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
        <a href="${telLink()}" class="btn btn-orange" data-placement="page_404">${ICONS.phone}<span>Hemen Ara: ${BUSINESS.phoneDisplay}</span></a>
        <a href="/" class="btn btn-outline-cobalt">Ana Sayfaya Dön</a>
      </div>
      <div class="notfound-regions">
        <p style="font-size:0.86rem;font-weight:700;color:var(--cobalt-deep);margin-bottom:10px;">Popüler Hizmet Bölgelerimiz</p>
        <div class="landmark-chips" style="justify-content:center;">
          ${popularRegions.map(r => `<a href="/bolgeler/${r.slug}-oto-cekici.html" class="landmark-chip">${ICONS.pin}<span>${escapeHtml(r.name)} Çekici</span></a>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>
</main>
${buildFooter(regions, services)}
${buildStickyActions('')}
${buildScripts()}
</body>
</html>
`;
  writeHtml('404.html', html);
}

// ============================================================================
// ÇALIŞTIR
// ============================================================================
function run() {
  buildHomePage();
  buildRegionsDirectory();
  regions.forEach((r, idx) => buildRegionDetailPage(r, idx));
  buildServicesDirectory();
  services.forEach(s => buildServiceDetailPage(s));
  buildBlogDirectory();
  blog.forEach(b => buildBlogDetailPage(b));
  buildGalleryPage();
  buildAboutPage();
  buildContactPage();
  buildPrivacyPage();
  build404Page();

  const total = 1 + 1 + regions.length + 1 + services.length + 1 + blog.length + 5;
  console.log(`✅ Toplam ${total} HTML sayfası (${regions.length} bölge, ${services.length} hizmet, ${blog.length} blog + statik/dizin) başarıyla üretildi!`);
}

run();
