'use strict';
/**
 * ============================================================================
 * TEK MERKEZ (SINGLE SOURCE OF TRUTH) — FİRMA, MARKA, DOMAIN & ADS AYARLARI
 * ----------------------------------------------------------------------------
 * Marka adını, domaini veya Google Ads / GA4 kimliklerini değiştirmek için
 * SADECE bu dosyayı güncelleyip şu komutu çalıştırın:
 *   node scripts/generate_all.js && node scripts/generate_sitemap.js
 * ============================================================================
 */

const SITE_URL = 'https://xxxcekici.com';

const BUSINESS = {
  name: 'XXX Çekici',
  shortName: 'XXX Çekici',
  legalName: 'XXX Çekici & Oto Kurtarma',
  slogan: 'Bağcılar & Avrupa Yakası 7/24 Acil Çekici ve Yol Yardım',
  themeId: 'acil-rescue',
  phoneDisplay: '0539 732 57 80',
  phoneTel: '+905397325780',
  whatsappNumber: '905397325780',
  email: '', // Örn: 'info@alanadiniz.com' — İletişim ve KVKK sayfasında otomatik görünür
  hours: '7 Gün 24 Saat Kesintisiz',
  etaMinutes: '10–15 Dk',
  foundedYears: '12+',
  rating: {
    value: '5.0',
    count: '340+'
  },
  address: {
    street: 'Bağcılar Merkez & Basın Ekspres Nöbetçi İntikal Noktası',
    locality: 'Bağcılar',
    region: 'İstanbul',
    postalCode: '34200',
    country: 'TR'
  },
  geo: {
    latitude: 41.0343,
    longitude: 28.8567
  },
  sameAs: [],
  // ---- Google Ads & Analytics (Telefon = Birincil, WhatsApp = Opsiyonel İkincil) ----
  analytics: {
    ga4Id: '',                // Örn: 'G-XXXXXXXXXX'
    adsId: '',                // Örn: 'AW-XXXXXXXXXX'
    adsCallConversion: '',    // Birincil (Primary): 'AW-XXXXXXXXXX/AbCdEfGhIjKlMnOp' (tel: tıklamaları)
    adsWhatsappConversion: '' // İkincil (Secondary / Gözlem): WhatsApp buton & teklif formu dönüşümü
  }
};

function waLink(text) {
  const defaultMsg = `Merhaba ${BUSINESS.name}, acil çekiciye ihtiyacım var. Konumumu hemen paylaşıyorum.`;
  return `https://api.whatsapp.com/send?phone=${BUSINESS.whatsappNumber}&text=${encodeURIComponent(text || defaultMsg)}`;
}

function waRegionLink(regionName) {
  const msg = `Merhaba ${BUSINESS.name}, acil çekiciye ihtiyacım var. Bulunduğum Bölge: ${regionName} (Konumumu hemen ardından paylaşıyorum.)`;
  return waLink(msg);
}

function telLink() {
  return `tel:${BUSINESS.phoneTel}`;
}

module.exports = {
  SITE_URL,
  BUSINESS,
  waLink,
  waRegionLink,
  telLink
};
