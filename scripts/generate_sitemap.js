'use strict';

const fs = require('fs');
const path = require('path');
const { SITE_URL, BUSINESS } = require('../data/business');
const regions = require('../data/regions');
const services = require('../data/services');
const blog = require('../data/blog');

const ROOT = path.join(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${SITE_URL}/bolgeler/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/hizmetler/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/blog/`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${SITE_URL}/galeri.html`, priority: '0.7', changefreq: 'monthly' },
  { loc: `${SITE_URL}/hakkimizda.html`, priority: '0.7', changefreq: 'monthly' },
  { loc: `${SITE_URL}/iletisim.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${SITE_URL}/gizlilik-politikasi.html`, priority: '0.3', changefreq: 'yearly' }
];

for (const r of regions) {
  urls.push({ loc: `${SITE_URL}/bolgeler/${r.slug}-oto-cekici.html`, priority: '0.9', changefreq: 'weekly' });
}
for (const s of services) {
  urls.push({ loc: `${SITE_URL}/hizmetler/${s.slug}.html`, priority: '0.8', changefreq: 'monthly' });
}
for (const b of blog) {
  urls.push({ loc: `${SITE_URL}/blog/${b.slug}.html`, priority: '0.7', changefreq: 'monthly' });
}

// 1. sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf8');

// 2. robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf8');

// 3. llms.txt
const llmsTxt = `# ${BUSINESS.name}

> ${BUSINESS.slogan}

## Temel Bilgiler
- Marka: ${BUSINESS.name} (${BUSINESS.legalName})
- Web Sitesi: ${SITE_URL}/
- Telefon (7/24): ${BUSINESS.phoneDisplay} (${BUSINESS.phoneTel})
- WhatsApp: https://api.whatsapp.com/send?phone=${BUSINESS.whatsappNumber}
- Merkez Bölge: ${BUSINESS.address.locality}, ${BUSINESS.address.region}
- Ortalama Varış Süresi: ${BUSINESS.etaMinutes}
- Çalışma Saatleri: ${BUSINESS.hours}

## Hizmetlerimiz (${services.length})
${services.map(s => `- [${s.title}](${SITE_URL}/hizmetler/${s.slug}.html): ${s.summary}`).join('\n')}

## Hizmet Bölgelerimiz (${regions.length})
${regions.map(r => `- [${r.name} Çekici](${SITE_URL}/bolgeler/${r.slug}-oto-cekici.html): ${r.cardSummary}`).join('\n')}

## Sürücü Rehberi (${blog.length})
${blog.map(b => `- [${b.title}](${SITE_URL}/blog/${b.slug}.html)`).join('\n')}
`;
fs.writeFileSync(path.join(ROOT, 'llms.txt'), llmsTxt, 'utf8');

// 4. site.webmanifest (Dinamik marka adı ile)
const manifest = {
  name: BUSINESS.name,
  short_name: BUSINESS.shortName,
  description: BUSINESS.slogan,
  start_url: '/',
  display: 'standalone',
  background_color: '#08142E',
  theme_color: '#1D4ED8',
  icons: [
    {
      src: '/favicon.svg',
      sizes: 'any',
      type: 'image/svg+xml'
    }
  ]
};
fs.writeFileSync(path.join(ROOT, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log(`✅ sitemap.xml (${urls.length} URL), robots.txt, llms.txt ve site.webmanifest üretildi.`);
