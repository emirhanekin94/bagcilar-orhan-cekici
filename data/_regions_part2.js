'use strict';

const { BUSINESS } = require('./business');

module.exports = [
  {
    slug: 'esenler',
    name: 'Esenler',
    navbarTitle: 'ESENLER ÇEKİCİ',
    category: 'ilce',
    eta: '10–15 Dk',
    geo: { lat: 41.0428, lng: 28.8764 },
    hero: 'saha-sedan',
    fieldImage: 'saha-cadde',
    cardSummary: 'Otogar rampaları, Dörtyol Meydanı ve Atışalanı yokuşlarına hızlı ulaşım. Esenler genelinde 7/24 hasarsız araç kurtarma.',
    heroLead: `Esenler oto çekici ve 7/24 Esenler yol yardım ekibimizle 15 Temmuz Demokrasi Otogarı bağlantılarından Atışalanı ve Nine Hatun'un eğimli sokaklarına kadar en yakın Esenler çekici olarak kesintisiz ulaşırız. Bölge trafiğini bilen ${BUSINESS.name} operatörleri, dar geçişlerde bile aracınızı sabit fiyatla kayar kasaya yükleyip istediğiniz servise teslim eder.`,
    landmarks: [
      '15 Temmuz Demokrasi Otogarı',
      'Esenler Dörtyol Meydanı',
      'Atışalanı Caddesi',
      'Davutpaşa & Litros Yolu',
      'Oruçreis – Giyimkent Sınırı',
      'TEM Metris Bağlantı Kavşağı',
      'Esenler Kadın Doğum ve Çocuk Hastanesi'
    ],
    articleHtml: `
      <h2>Esenler'de Otogar Trafiği ve Mahalle İçi Eğimli Sokaklarda Yol Yardım</h2>
      <p>Esenler, bir yanda Türkiye'nin en hareketli şehirlerarası otobüs terminalini barındırırken diğer yanda sıkışık konut dokusu ve dik yokuşlu mahalleleriyle sürücüler için kendine has riskler taşır. Özellikle 15 Temmuz Demokrasi Otogarı çevresindeki katlı giriş rampaları, sabah erken saatlerde ve gece yarısı yolcu uğurlayan binek araçların yoğunluğuna sahne olur. Uzun yola çıkmadan önce ya da misafir karşıladıktan hemen sonra hararet yükselten, marş basmayan veya debriyaj balatası sıyıran otomobiller otogar döngüsünde trafiği saniyeler içinde kilitleyebilir. ${BUSINESS.name} ekibi, otogar çevre yolundan ve Bağcılar–Esenler sınırından iki ayrı yaklaşımla olay yerine ulaşarak bekleme süresini kısaltır.</p>
      <p>İlçenin iç kesimlerine doğru ilerledikçe tablo tamamen değişir. Atışalanı, Kemer, Nine Hatun, Kazım Karabekir, Fevzi Çakmak, Tuna ve Turgutreis mahallelerinde iki yakaya park edilmiş araçlar nedeniyle pek çok sokak tek şerit genişliğine iner. Üstelik bu sokakların önemli bir bölümü ciddi eğime sahiptir. Yokuş ortasında elektronik el freni kilitlenen ya da otomatik vitesi boşa geçmeyen bir otomobili sıradan yöntemlerle çekmeye kalkışmak tampon ve şanzıman hasarına davetiye çıkarır. Bizim sahada kullandığımız düşük açılı hidrolik kayar platformlar ve tekerlek taşıma kızakları, aracı sürüklemeden yerinden kaldırmak üzere seçilmiştir.</p>
      <h3>Dörtyol, Davutpaşa ve Oruçreis Koridorunda Sık Yaşanan Arızalar</h3>
      <p>Esenler Dörtyol Meydanı çevresindeki tek yönlü akış ve Çinçindere Caddesi boyunca süren yoğun yaya geçişi, gün ortasında dur-kalk trafiğini artırır. Hafta sonları 15 Temmuz Millet Bahçesi çevresinde artan aile aracı hareketliliği ile Bayrampaşa–Kocatepe bağlantı kolundaki kavşak yoğunluğu da ani mekanik sorunlarda hızlı yönlendirme gerektirir. Litros Yolu ve Davutpaşa Caddesi aksı ise tekstil atölyeleri ile lojistik tedarikçilerin yük taşıyan kamyonetleriyle doludur. Oruçreis Mahallesi'nin Giyimkent ve Tekstilkent sınırına komşu noktalarında ise hem hafif ticari panelvanlar hem de filo binek araçları yoğun çalışır. Bu koridorlarda karşılaştığımız başlıca kurtarma başlıkları şunlardır:</p>
      <ul class="article-list">
        <li><strong>Otogar rampa ve alt geçit arızaları:</strong> Uzun süre rölantide bekleyen araçlarda termostat, radyatör hortumu ve akü kaynaklı ani stop durumları.</li>
        <li><strong>Eğimli sokaklarda aktarma sorunları:</strong> Atışalanı, Kazım Karabekir ve Havaalanı Mahallesi yokuşlarında aks kesilmesi, baskı balata bitmesi veya vites halatı kopması.</li>
        <li><strong>TEM Metris bağlantı kazaları:</strong> Otoyol çıkışında ani frenleme sonucu gelişen ön takım ve süspansiyon hasarlarında vinç destekli yükleme.</li>
        <li><strong>Ticari yük ve dağıtım araçları:</strong> Davutpaşa, Litros ve Oruçreis çevresinde çalışan panelvan ve kamyonetlerin sanayi sitelerine güvenli aktarımı.</li>
      </ul>
      <h3>Gece Saatlerinde Güvenli Müdahale ve Şeffaf Ücretlendirme</h3>
      <p>Esenler Kadın Doğum ve Çocuk Hastalıkları Hastanesi çevresi ile M1B Esenler ve Menderes metro istasyonlarının bulunduğu ana durak hatlarında gece saatlerinde yaşanan arızalarda hızlı iletişim büyük önem taşır. Aracınız hareket etmediğinde ${BUSINESS.phoneDisplay} numaralı hattan operatörümüze ulaştığınızda, mahalle ve cadde bilgisini paylaştığınız anda en yakın nöbetçi araç yönlendirilir. Yol öncesi tahmini varış dakikası ve toplam taşıma tutarı açık biçimde paylaşılır; yükleme aşamasında sürpriz ek kalem çıkarılmaz.</p>
      <div class="callout-box">
        <strong>Saha Hatırlatması:</strong> Otogar giriş bariyerleri veya TEM Metris ayrımında aracınız aniden durduğunda dörtlü ikaz lambalarını yakıp yolcuları bariyer dışına alın; telefonla konum paylaşırken hangi kapı ya da viyadük kolunda olduğunuzu belirtmeniz ekibimizin ters yöne düşmeden ulaşmasını sağlar.
      </div>
      <p>İster Bağcılar ve İkitelli yönündeki özel servislere, ister Topkapı ve Bayrampaşa sanayi sitelerine nakil talep edin; ${BUSINESS.name} filosu Esenler'in dar sokaklarına da otoyol bağlantılarına da uygun ekipmanla 7/24 hazırdır. Araç teslimi sırasında tüm sabitleme kayışları tekerlek üzerinden gerdirilir, şasi ve jant yüzeyleri korunur.</p>
    `,
    fieldLogTitle: 'Otogar Alt Geçit Çıkışında Hararet Yapan Aile MPV Aracının Kurtarılması',
    fieldLogDesc: 'Gece yolcu bıraktıktan sonra 15 Temmuz Demokrasi Otogarı çıkış rampasında soğutma suyu boşalan yedi koltuklu bir aile aracı sağ cepte kaldı. Bölgeye en yakın kayar kasa ekibimiz 12 dakikada noktaya ulaşıp reflektör hattını kurdu ve aracı eğimli zeminde sürtme yaşatmadan platforma aldı. Araç sahibi ve ailesi konforlu biçimde kabinde misafir edilerek Bağcılar yönündeki nöbetçi özel servise teslim edildi.',
    faqs: [
      {
        q: '15 Temmuz Demokrasi Otogarı içindeki peron veya otopark alanlarına çekici girebiliyor mu?',
        a: 'Evet. Otogar giriş-çıkış düzenini bilen sürücülerimiz, bariyer ve peron çevresindeki uygun ceplere yanaşarak aracınızı güvenli biçimde kayar platforma yükler. Konum paylaşırken hangi kapı veya otopark katında olduğunuzu iletmeniz yeterli olur.'
      },
      {
        q: 'Atışalanı ve Nine Hatun gibi dik yokuşlu, çift sıra parklı sokaklarda yükleme nasıl yapılıyor?',
        a: 'Bu mahallelere geniş gövdeli büyük kamyonlar yerine manevra kabiliyeti yüksek kompakt kayar kasalarla giriyoruz. Gerekli durumlarda tekerlek kızakları kullanarak aracı komşu park araçlarına yaklaştırmadan hizalayıp platforma alıyoruz.'
      },
      {
        q: 'Esenler Dörtyol Meydanı çevresindeki tek yön düzeninde ortalama kaç dakikada gelirsiniz?',
        a: 'Bağcılar ve Esenler sınırında konumlanan nöbetçi aracımız normal trafik akışında 10–15 dakika içinde Dörtyol ve Çinçindere hattına ulaşır. Yoğun akşam saatlerinde alternatif ara arterler kullanılarak süre kısa tutulur.'
      },
      {
        q: 'Oruçreis ve Davutpaşa çevresindeki tekstil panelvanları ile hafif ticari araçları taşıyor musunuz?',
        a: 'Evet. Uzun şasi panelvanlar ve hafif ticari kamyonetler için yüksek taşıma kapasiteli platformlarımız mevcuttur. Yük dengesi kontrol edilerek İkitelli, Topkapı veya istediğiniz sanayi sitesine sevkiyat yapılır.'
      },
      {
        q: 'TEM Metris bağlantısında gece arıza yaparsam ücretlendirme baştan belli oluyor mu?',
        a: `Kesinlikle. ${BUSINESS.phoneDisplay} hattından konum ve teslim noktasını paylaştığınızda mesafe ve araç tipine göre net tutar hareket öncesinde bildirilir; gece saatlerinde gizli ek ücret uygulanmaz.`
      }
    ]
  },
  {
    slug: 'gungoren',
    name: 'Güngören',
    navbarTitle: 'GÜNGÖREN ÇEKİCİ',
    category: 'ilce',
    eta: '10–15 Dk',
    geo: { lat: 41.0221, lng: 28.8712 },
    hero: 'saha-gece',
    fieldImage: 'saha-merkez',
    cardSummary: 'Köyiçi, Haznedar, Akıncılar ve Kale Outlet çevresinde dar sokak uyumlu çekici desteği. Güngören geneline hızlı ulaşım.',
    heroLead: `Güngören oto çekici ve 7/24 Güngören yol yardım hattımızla T1 tramvay hattının böldüğü dar sokaklardan Kale Outlet Center ve Mareşal Fevzi Çakmak Caddesi'ne kadar en yakın Güngören çekici olarak ${BUSINESS.name} anında yanınızda. Sıkışık caddelerde trafiği tıkamadan, hızlı manevra yapan ekipmanlarımızla net fiyat garantili oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Kale Outlet Center',
      'Güngören Köyiçi Meydanı',
      'Mareşal Fevzi Çakmak Caddesi',
      'T1 Güngören & Akıncılar Tramvay Hattı',
      'Haznedar Meydanı',
      'Sanayi Mahallesi Tekstil Bölgesi',
      'Güngören Park AVM'
    ],
    articleHtml: `
      <h2>Güngören'in Sıkışık Sokakları ve Tramvay Güzergahında Hızlı Araç Tahliyesi</h2>
      <p>İstanbul'un yüzölçümüne oranla en yüksek nüfus yoğunluklarından birine sahip olan Güngören'de yolda kalmak, geniş bulvarlardaki arızalardan çok farklı bir stres yaratır. Mareşal Fevzi Çakmak Caddesi ve İnönü Caddesi boyunca ilerleyen T1 Kabataş–Bağcılar tramvay hattı, pek çok noktada araç trafiğini dar yan ceplere sıkıştırır. Tramvay hattına yakın bir kesişimde veya Köyiçi'nin tek yönlü ara sokaklarında stop eden bir otomobil, dakikalar içinde uzun kuyrukların oluşmasına yol açar. ${BUSINESS.name}, bu bölgede geniş dönüş çapına muhtaç olmayan kısa aks mesafeli kurtarma araçlarıyla görev yaparak dar alanlara sorunsuz girer.</p>
      <p>Haznedar, Akıncılar, Güven, Merkez ve Mareşal Çakmak mahallelerinde apartman altlarındaki kapalı garajlar ve eğimli çıkmaz sokaklar kurtarma planlamasını doğrudan belirler. Özellikle akşam saatlerinde işten dönen sürücülerin park alanı bulmak için her boşluğu doldurduğu saatlerde, arızalı bir aracı yerinden çıkarmak hassas bir manevra bilgisi ister. Tozkoparan ve Abdurrahman Nafiz Gürman çevresindeki yenilenen yapı adalarında şantiye geçişleri ve daralan ara bağlantılar da dikkatli güzergah seçimi gerektirir. Operatörlerimiz sokağa girmeden önce geri çıkış açısını ve kablo çekim eksenini hesaplayarak çevredeki park halindeki araçlara sıfır riskle işlem yapar.</p>
      <h3>Sanayi Mahallesi, Gençosman ve Kale Outlet Çevresinde Saha Deneyimi</h3>
      <p>Güngören yalnızca konutlardan ibaret değildir; Sanayi Mahallesi ve Gençosman hattı gün boyu kumaş, aksesuar ve konfeksiyon sevkiyatı yapan atölyelerle doludur. Davutpaşa Caddesi üzerinden Merter ve Esenler sınırına bağlanan sabah sevkiyat trafiğinde ticari araçların arıza yapması tüm atölye programını aksatabilir. Öte yandan Kale Outlet Center, Güngören Park AVM ve Haznedar çevresinde hem bireysel ziyaretçilerin hem de çevre ilçelerden gelen sürücülerin araç hareketliliği gece geç saatlere kadar sürer. Bölgede en sık müdahale ettiğimiz senaryolar şöyle özetlenebilir:</p>
      <ul class="article-list">
        <li><strong>Tramvay hattı kenarı ani arızalar:</strong> Akıncılar, Soğanlı ve Güngören duraklarına yakın geçişlerde akü, alternatör veya sensör arızası nedeniyle yolda kalan araçların süratle kenara alınması.</li>
        <li><strong>AVM ve rezidans otopark çekimleri:</strong> Kale Outlet Center ve çevredeki kapalı otoparklarda vites kilidi açılmayan otomatik araçların alçak profilli ekipmanla çıkarılması.</li>
        <li><strong>Atölye bölgesi ticari destek:</strong> Sanayi Mahallesi, Davutpaşa sınırı ve Gençosman sokaklarında mal yükleme sonrası marş basmayan veya aks kıran minibüs ve panelvanların sevki.</li>
        <li><strong>Gece nöbeti yol yardım:</strong> Haznedar, Güven ve Tozkoparan aksında geç saatlerde lastik yarılması, elektrik kesintisi veya kaza sonrası güvenli taşıma.</li>
      </ul>
      <h3>Komşu Sanayi ve Yetkili Servislere Doğrudan Sevkiyat</h3>
      <p>Güngören, konumu gereği Merter, Zeytinburnu, Topkapı ve Bağcılar tamir bölgelerinin tam ortasında yer alır. Aracınızın arıza türüne göre ister düzenli gittiğiniz ustanıza ister yetkili servise doğrudan nakil gerçekleştiriyoruz. Elektrikli, hibrit ve yeni nesil otomatik vitesli otomobillerde üretici kurallarına uygun olarak çekiş tekerleklerini yere sürtmeden tam platform üstünde taşıma yapıyoruz. Tekerlek üstü yumuşak gerdirme kayışları sayesinde alaşım jantlar, alçak ön tamponlar ve alt şasi kaplamaları yolculuk boyunca korunur.</p>
      <div class="callout-box">
        <strong>Pratik Bilgi:</strong> Güngören'de tramvay güzergahına bağlanan dar bir sokakta kaldıysanız, aracınızı itmeye çalışırken direksiyon kilidine dikkat edin. Konumla birlikte sokağın tek yön girişini ${BUSINESS.phoneDisplay} hattımıza bildirmeniz, çekicinin ters yönde zaman kaybetmesini önler.
      </div>
      <p>Güngören Devlet Hastanesi ve çevredeki özel polikliniklerin önünde acil durumlarda araçları çalışmayan hasta yakınları için öncelikli sevk planlıyoruz. Ayrıca Güngören Millet Bahçesi ve Kale çevresindeki hafta sonu yoğunluğunda park halindeyken aküsü düşen veya immobilizer hatası veren otomobiller için bekleme süresini kısa tutuyoruz. Yağışlı günlerde kayganlaşan parke taşlı ara yollardan Davutpaşa–Merter bağlantı kollarına kadar Güngören'in her noktasında ${BUSINESS.name} disiplinli ekipman bakımı ve deneyimli kadrosuyla 7/24 sahadadır.</p>
    `,
    fieldLogTitle: 'Güngören Köyiçi Tek Yönlü Ara Sokakta Direksiyon Kilidi Açılmayan Hatchback Tahliyesi',
    fieldLogDesc: 'Akşam trafiğinin yoğunlaştığı saatlerde Güngören Köyiçi civarında T1 tramvay hattına dik açılan dar bir sokakta direksiyon ve kontak kilidi arızalanan hatchback bir otomobil yolu kapattı. Kısa aks mesafeli kayar kasa aracımız sokağa uygun yönden geri manevrayla girerek tekerlek kızakları yardımıyla aracı tek hamlede platforma aldı. Yaklaşık 20 dakika içinde trafik akışı tamamen açıldı ve otomobil Merter yönündeki elektrik servisine teslim edildi.',
    faqs: [
      {
        q: 'T1 tramvay hattına yakın bir kesişimde aracım kalırsa çekici trafiği engellemeden nasıl yükler?',
        a: 'Raylı sistem akışını bozmamak için en yakın paralel yan cep veya ara sokak ağzından konumlanıyoruz. Hidrolik vinç ve hızlı sabitleme aparatlarıyla yükleme süresini birkaç dakikaya indirip yolu süratle boşaltıyoruz.'
      },
      {
        q: 'Haznedar ve Akıncılar bölgesindeki çok dar çıkmaz sokaklara çekici girebilir mi?',
        a: 'Standart uzun şasili kamyonların dönemediği sokaklar için kompakt gövdeli kurtarıcılar kullanıyoruz. Sokağın giriş genişliği ve eğimine göre gerekirse tekerlek taşıma arabalarıyla aracı ağız noktasına çekip güvenle yüklüyoruz.'
      },
      {
        q: 'Kale Outlet Center veya Güngören Park AVM kapalı otoparkında arıza olursa müdahale ediyor musunuz?',
        a: 'Evet. Otoparkın tavan yüksekliği ve rampa dönüş açısına uygun alçak profilli kurtarma ekipmanımızla otopark içinden aracı çıkarıyor, çizik veya tampon sürtmesi olmadan naklediyoruz.'
      },
      {
        q: 'Sanayi Mahallesi tekstil atölyeleri önünde çalışan hafif ticari araçlar için çekici hizmeti var mı?',
        a: 'Evet. Gençosman ve Sanayi Mahallesi çevresinde faaliyet gösteren panelvan, kapalı kasa kamyonet ve servis minibüsleri için uygun tonajlı platformlarımız günün her saati hazırdır.'
      },
      {
        q: 'Güngören içinde gece yarısı elektrikli veya hibrit otomobil çekimi güvenli biçimde yapılabiliyor mu?',
        a: 'Elbette. Elektrikli ve hibrit araçlar kesinlikle çeki demirinden yerde sürüklenerek çekilmez; dört tekerleği yerden tamamen kesen kayar platform üzerine alınarak batarya ve aktarma organları korunur.'
      }
    ]
  },
  {
    slug: 'basaksehir',
    name: 'Başakşehir',
    navbarTitle: 'BAŞAKŞEHİR ÇEKİCİ',
    category: 'ilce',
    eta: '12–18 Dk',
    geo: { lat: 41.0931, lng: 28.8020 },
    hero: 'ahtapot-vinc',
    fieldImage: 'saha-suv',
    cardSummary: 'Çam ve Sakura Hastanesi, İkitelli OSB, Mall of İstanbul ve Kayaşehir etaplarına 7/24 tam donanımlı çekici ve vinç.',
    heroLead: `Başakşehir oto çekici ve 7/24 yol yardım hizmetimizle Başakşehir'in geniş bulvarlarından Çam ve Sakura Şehir Hastanesi kampüsüne, İkitelli OSB'den Kayaşehir site garajlarına kadar en yakın Başakşehir çekici desteğini ${BUSINESS.name} güvencesiyle sunuyoruz. Dört çeker SUV'lerden ağır sanayi ticari araçlarına kadar her segment için sabit fiyat ve doğru kurtarma donanımıyla sahadayız.`,
    landmarks: [
      'Başakşehir Çam ve Sakura Şehir Hastanesi',
      'İkitelli Organize Sanayi Bölgesi (OSB)',
      'Mall of İstanbul',
      'Kayaşehir & Başakşehir 1.–5. Etaplar',
      'Metrokent M3 Metro İstasyonu',
      'Atatürk Olimpiyat Stadı Yolu',
      'Kuzey Marmara Otoyolu Bağlantı Kavşağı'
    ],
    articleHtml: `
      <h2>Başakşehir'in Geniş Bulvarları, Sanayi Havzası ve Şehir Hastanesi Hattında Kurtarma</h2>
      <p>Başakşehir, planlı geniş caddeleri, çok etaplı dev konut yerleşimleri ve Avrupa Yakası'nın en büyük üretim merkezlerinden İkitelli Organize Sanayi Bölgesi ile İstanbul'un en yüksek araç çeşitliliğine sahip ilçelerinden biridir. Bu geniş coğrafyada arıza senaryoları tek tip değildir. Bir saat içinde Çam ve Sakura Şehir Hastanesi'nin çok katlı otoparkında aküsü biten bir aile SUV'sine müdahale ederken, hemen ardından Olimpiyat Stadı yolundaki rüzgarlı açık viyadükte lastiği yarılan veya yakıt sistemi arızalanan bir ticari aracı kurtarmamız gerekebilir. ${BUSINESS.name}, Basın Ekspres ve İkitelli aksındaki stratejik konuşlanması sayesinde Başakşehir'in tüm etaplarına 12–18 dakika bandında ulaşır.</p>
      <p>Başakşehir 1. Etap'tan 5. Etap'a, Sular Vadisi ve Başakşehir Millet Bahçesi çevresinden Metrokent ve Kayaşehir Meydanı'na uzanan konut bölgelerinde araçların büyük kısmı yeraltı kapalı otoparklarda park eder. Özellikle kış aylarında uzun süre bekleyen veya soğuk havanın etkisiyle voltajı düşen modern otomatik araçlar, kapalı garajların dar kolon aralıklarında hareket kabiliyetini kaybeder. Yüksek tavanlı standart çekicilerin sığmadığı bu alanlarda, alçak girişli özel kurtarıcılar ve tekerlek kaldırma sistemleriyle araca zarar vermeden tahliye gerçekleştiriyoruz. Ziya Gökalp ve Şahintepe mahallelerindeki eğimli bağlantılarda ise yürüyen aksamı bozulan araçlar için kaydırmaz takoz ve kontrollü vinç çekimi uyguluyoruz.</p>
      <h3>İkitelli OSB ve Mall of İstanbul Kavşağında Profesyonel Saha Yönetimi</h3>
      <p>İkitelli OSB içindeki onlarca sanayi sitesi (Aymakoop, Demirciler, Keresteciler, İpkas, Atatürk Oto Sanayi ve çevresi) gün boyu kesintisiz ticari sirkülasyon üretir. Arızalı aracın Başakşehir'in herhangi bir noktasından Atatürk Oto Sanayi veya marka yetkili servislerine doğrudan ulaştırılması, sürücüye zaman açısından büyük avantaj sağlar. Aynı şekilde Mall of İstanbul çevresindeki TEM–Basın Ekspres düğümü, akşam iş çıkışı ve hafta sonu alışveriş saatlerinde yoğun araç baskısı altındadır. Bölge sürücülerinin en sık destek aldığı durumlar şunlardır:</p>
      <ul class="article-list">
        <li><strong>Şehir Hastanesi kampüs müdahaleleri:</strong> Çam ve Sakura Şehir Hastanesi'nin farklı blok girişleri ve katlı otoparklarında yaşanan ani mekanik ve elektronik kilitlenmeler.</li>
        <li><strong>Dört çeker ve lüks SUV taşımacılığı:</strong> Ahtapot vinç veya dört tekerlekli serbest aparatlarla aktarma organlarına yük bindirmeden hassas platform yüklemesi.</li>
        <li><strong>İkitelli OSB filo ve ticari nakliye:</strong> Sanayi içi üretim, dağıtım ve servis araçlarının yüklü veya yüksüz biçimde tamir atölyelerine çekilmesi.</li>
        <li><strong>Olimpiyat ve Kuzey Marmara bağlantısı:</strong> Açık, rüzgarlı ve yağışlı havalarda kayganlaşan yüksek hızlı viyadüklerde güvenli emniyet şeridi koruması altında araç tahliyesi.</li>
      </ul>
      <h3>Bahçeşehir ve Ispartakule Uzantısında Kesintisiz Destek</h3>
      <p>Başakşehir sınırları içinde kalan Bahçeşehir 1. ve 2. Kısım ile Ispartakule bağlantı yolları, özellikle sabah ve akşam saatlerinde TEM trafiğine bağlı yoğunluk yaşar. Şehir dışı seyahat öncesinde veya iş dönüşünde yolda kalan sürücüler için ${BUSINESS.phoneDisplay} hattımız kesintisiz açıktır. Yalnızca kayar kasa çekici değil; ahtapot vinç gerektiren şarampol, kaldırım çıkması, alt takım takılması veya tekerlek kilitlenmesi vakalarında da doğru aracı ilk seferde sevk ediyoruz.</p>
      <div class="callout-box">
        <strong>Kampüs İpucu:</strong> Çam ve Sakura Şehir Hastanesi otoparkından yardım isterken telefonunuzdaki konum paylaşımına ek olarak blok harfini (örneğin A, B veya Acil blok) ve kat numarasını belirtmeniz, ekibimizin dev kampüste doğrudan yanınıza inmesini sağlar.
      </div>
      <p>Kayaşehir Bulvarı, Başakşehir 4. Etap çarşı çevresi ve Metrokent aktarma noktasında akşam saatlerinde yaşanan ani lastik patlamaları ya da soğutma sistemi arızalarında sürücüleri açık alanda bekletmiyoruz. Gece veya gündüz fark etmeksizin aradığınızda en yakın aracımızın konumunu ve tahmini varış dakikasını anlık paylaşıyoruz. Başakşehir genelinde ister İkitelli sanayi sitelerine ister yetkili marka servislerine nakil gereksin, ${BUSINESS.name} her aşamada hasarsız sabitleme ve şeffaf fiyat politikasıyla yanınızdadır.</p>
    `,
    fieldLogTitle: 'Çam ve Sakura Şehir Hastanesi Otoparkında Vitesi Kilitlenen 4x4 SUV Tahliyesi',
    fieldLogDesc: 'Hasta ziyareti dönüşünde Çam ve Sakura Şehir Hastanesi kapalı otopark katında elektronik şanzıman arızası verip park konumunda kilitlenen dört çeker bir SUV hareket edemedi. Düşük profilli kurtarma aparatlarıyla otoparka inen ekibimiz, dört tekerleği serbest bırakan kızak sistemini uygulayarak aracı rampalarda sürtme yaşanmadan açık alana çıkardı. Ardından kayar platforma güvenle sabitlenen araç, İkitelli OSB içindeki yetkili servise sorunsuz teslim edildi.',
    faqs: [
      {
        q: 'Başakşehir Çam ve Sakura Şehir Hastanesi otoparkında kaldığımda konumumu nasıl tarif etmeliyim?',
        a: 'WhatsApp konum paylaşımının yanında bulunduğunuz blok adını, açık ya da kapalı otopark bilgisini ve kat/kolon numarasını iletmeniz yeterlidir. Kampüs giriş yollarını iyi bilen ekibimiz doğrudan bulunduğunuz bölüme iner.'
      },
      {
        q: 'İkitelli OSB içindeki sanayi sitelerinde ağır veya uzun şasi ticari araçlara müdahale ediyor musunuz?',
        a: 'Evet. Atatürk Oto Sanayi, Aymakoop, Demirciler ve tüm OSB bloklarında panelvan, minibüs ve hafif kamyonetler için yüksek kapasiteli kayar platformlarımız ve vinçli kurtarıcılarımız aktiftir.'
      },
      {
        q: 'Başakşehir 1.–5. Etap ve Kayaşehir yeraltı site garajlarına çekici tavan yüksekliği kurtarıyor mu?',
        a: 'Standart yüksek kamyonların giremediği bodrum katlar için alçak tavanlı garaj kurtarma aracımız görev yapar. Aracı kapalı alandan hasarsız şekilde dışarı alıp ana platforma aktarırız.'
      },
      {
        q: 'Olimpiyat Stadı yolu ve Kuzey Marmara bağlantısında gece arıza olursa güvenlik nasıl sağlanıyor?',
        a: 'Açık ve yüksek hızlı bu kesimlerde aracımız güçlü tepe lambaları, uyarı flaşörleri ve reflektör bariyeriyle güvenlik alanı oluşturur. Yükleme işlemi yol kenarında minimum sürede tamamlanır.'
      },
      {
        q: 'Mall of İstanbul çevresindeki yoğun akşam trafiğinde çekici kaç dakikada ulaşır?',
        a: 'Basın Ekspres ve İkitelli bağlantısına yakın konuşlandığımız için normal akışta 12–18 dakika aralığında ulaşım sağlıyoruz; yoğun saatlerde yan bağlantı kolları kullanılarak gecikme en aza indirilir.'
      }
    ]
  },
  {
    slug: 'kucukcekmece',
    name: 'Küçükçekmece',
    navbarTitle: 'KÜÇÜKÇEKMECE ÇEKİCİ',
    category: 'ilce otoyol',
    eta: '12–16 Dk',
    geo: { lat: 41.0004, lng: 28.7798 },
    hero: 'sehirlerarasi-tasima',
    fieldImage: 'saha-otoyol',
    cardSummary: 'E-5 Sefaköy–Cennet hattı, Göl Sahili ve Beşyol kavşağında 7/24 oto kurtarma ve şehirlerarası araç taşıma desteği.',
    heroLead: `Küçükçekmece oto çekici ve 7/24 yol yardım ekibimizle E-5 (D-100) Sefaköy–Cennet–Küçükçekmece koridorundan göl sahil yoluna ve Beşyol kavşağına kadar en yakın Küçükçekmece çekici hizmetini ${BUSINESS.name} kalitesiyle veririz. Otoyol hızında yaşanan ani arızalarda sabit fiyatlı oto kurtarma yaklaşımımızla aracınızı hem ilçe içi servislere hem de şehir dışına güvenle taşıyoruz.`,
    landmarks: [
      'E-5 Sefaköy – Cennet Metrobüs Hattı',
      'Küçükçekmece Gölü Sahil Yolu',
      'ArmoniPark Outlet Center',
      'Kanuni Sultan Süleyman Eğitim ve Araştırma Hastanesi',
      'Florya – Beşyol Kavşağı',
      'Marmaray Küçükçekmece & Mustafa Kemal İstasyonları',
      'Menekşe Sahili Alt Geçidi'
    ],
    articleHtml: `
      <h2>E-5 Sefaköy–Cennet Hattı ve Küçükçekmece Gölü Çevresinde Kesintisiz Oto Kurtarma</h2>
      <p>Küçükçekmece, Avrupa Yakası'nın batıya açılan ana kapısıdır. E-5 (D-100) karayolunun Sefaköy, Beşyol, Florya, Cennet ve Küçükçekmece göl köprüsü kesimi, sabah ve akşam saatlerinde İstanbul'un en yoğun araç akışlarından birini taşır. Bu hatta özellikle Halkalı Caddesi–Sefaköy köprü kavşağı birleşimlerinde ve metrobüs alt geçit yaklaşımlarında uzun süren dur-kalk trafiği; eskiyen debriyaj setlerini, soğutma fanlarını ve şarj dinamolarını hızla zorlar. Ana arterde arıza yapan bir aracın saniyeler içinde korna ve şerit baskısı altında kalması sürücü için ciddi bir güvenlik riski doğurur. ${BUSINESS.name} operatörleri, E-5 yan yollarına ve çift yönlü bağlantı kollarına hâkim güzergah bilgisiyle 12–16 dakika içinde güvenli noktaya ulaşır.</p>
      <p>İlçenin güneyinde yer alan Küçükçekmece Gölü Sahil Yolu, Fatih Mahallesi ve Menekşe sahili hattı ise farklı bir çevre dinamiğine sahiptir. Kıyı rüzgarları ve sağanak yağış dönemlerinde alt geçitlerde biriken yağmur suları, düşük hava emişli modern otomobillerde ani motor stopu ve elektronik beyin korumasına neden olabilir. Bu gibi durumlarda motora yeniden marş basılması ağır mekanik masraf doğurur; aracın olduğu yerden kayar kasa ile alınıp kurutma ve diyagnostik kontrolüne götürülmesi en doğru adımdır. Cennet Mahallesi'nin Hürriyet ve Alparslan caddeleri ile Yeşilova ve Gültepe'nin akşam park yoğunluğu yaşayan iç sokaklarında da manevra uyumlu araçlarımız hızlı çözüm üretir.</p>
      <h3>Sefaköy, Beşyol ve Tevfikbey Aksında Öne Çıkan Kurtarma İhtiyaçları</h3>
      <p>ArmoniPark Outlet Center çevresi, Söğütlüçeşme, Tevfikbey ve İnönü mahalleleri gün boyu yoğun ticari ve bireysel trafiğe ev sahipliği yapar. Kanuni Sultan Süleyman Eğitim ve Araştırma Hastanesi çevresi ile Beşyol sanayi cephesi de hem acil yol yardım hem de planlı servis taşımacılığında sık hizmet verdiğimiz alanlardır. Florya–Bakırköy veya Avcılar–Beylikdüzü istikametine ilerlerken yolda kalan sürücüler için en yakın çıkış kolundan yönlendirme sağlıyoruz:</p>
      <ul class="article-list">
        <li><strong>E-5 otoyol ve yanyol arızaları:</strong> Sefaköy–Cennet arasında yakıt kesintisi, triger veya hararet kaynaklı yolda kalan araçların reflektör güvenliği altında tahliyesi.</li>
        <li><strong>Su birikintisi ve sahil hattı vakaları:</strong> Menekşe ve göl kıyısı alt geçitlerinde su alan araçların marş basılmadan hasarsız nakli.</li>
        <li><strong>Beşyol ve Florya servis aktarımları:</strong> Arızalı veya periyodik bakım gerektiren araçların Beşyol, İkitelli veya Florya yönündeki özel ve yetkili servislere teslimi.</li>
        <li><strong>Şehirlerarası ve Anadolu Yakası sevkiyatı:</strong> Küçükçekmece çıkışlı uzun mesafe bireysel araç, motosiklet veya filo taşımacılığı.</li>
      </ul>
      <h3>Şehir İçi Acil Destekten Şehirlerarası Planlı Taşımaya</h3>
      <p>Küçükçekmece'de yalnızca anlık yol arızaları için değil, başka bir şehirden satın alınan ya da uzun yola çıkmaya hazır olmayan araçların şehirlerarası nakliyesi için de sıkça tercih ediliyoruz. Sigortalı taşıma, tekerlek üstü dört nokta gerdirme ve teslim tutanağı standartlarımız sayesinde aracınız ister Sefaköy'den Beşyol'a ister İstanbul dışına giderken aynı özenle taşınır. Günün her saatinde ${BUSINESS.phoneDisplay} numarasından net süre ve fiyat bilgisi alabilirsiniz.</p>
      <div class="callout-box">
        <strong>Yağışlı Hava Uyarısı:</strong> Menekşe veya Küçükçekmece sahil alt geçitlerinde derin su birikintisinde stop eden aracınıza kesinlikle tekrar marş basmayın; pistonlara su yürümesini önlemek için kontağı kapatıp çekici çağırmanız yüksek motor masrafını önler.
      </div>
      <p>Kartaltepe, Kemalpaşa ve Sultan Murat mahallelerinin dik bağlanan ara sokaklarında vites arızası veya el freni kilitlenmesi yaşayan otomobillerde de tekerlek taşıma kızaklarıyla hızlı tahliye gerçekleştiriyoruz. Aracın yükleme anından servise indirilmesine kadar geçen süreçte jant, marşpiyel ve ön tampon temasına izin vermeden işlem tamamlanır. Marmaray durak çevrelerinden E-5 köprü üstlerine kadar Küçükçekmece'nin tamamında ${BUSINESS.name} disiplinli ekipmanı ve deneyimli sürücü kadrosuyla 7/24 görev başındadır.</p>
    `,
    fieldLogTitle: 'E-5 Sefaköy Yanyol Birleşiminde Yakıt Pompası Arızalanan Sedanın Tahliyesi',
    fieldLogDesc: 'Akşam iş çıkışında E-5 Sefaköy yanyol katılımında yakıt pompası aniden kesilen uzun şasi bir sedan araç hızla akan trafiğin sağ kenarında hareketsiz kaldı. Yan yol bağlantısından 14 dakikada ulaşan ekibimiz, tepe flaşörleri ve reflektör hattıyla arkadan gelen akışı güvene alarak aracı kayar platforma çekti. Yaklaşık on dakikalık operasyonun ardından otomobil Beşyol sanayi bölgesindeki yetkili özel servise güvenle bırakıldı.',
    faqs: [
      {
        q: 'E-5 Sefaköy–Cennet arasında emniyet şeridinin dar olduğu noktada çekici yüklemesi nasıl güvenli yapılıyor?',
        a: 'Aracımız yüksek görünürlüklü LED uyarı barları ve reflektör dizilimiyle arıza bölgesini koruma altına alır. Hidrolik kasa hazırlığı yaklaşırken planlandığı için araç çok kısa sürede platforma alınıp akışa tehlike oluşturulmaz.'
      },
      {
        q: 'Menekşe veya Küçükçekmece Gölü sahil alt geçidinde su alan aracı yerinden nasıl çıkarıyorsunuz?',
        a: 'Araca marş basılmadan vites serbest konumda veya tekerlek kızağıyla kayar platforma vinç yardımıyla çekim yapıyoruz. Bu sayede motor ve elektrik tesisatında ikincil hasar oluşmasının önüne geçiyoruz.'
      },
      {
        q: 'ArmoniPark Outlet Center ve Sefaköy merkezdeki katlı otoparklardan araç çekimi yapıyor musunuz?',
        a: 'Evet. Otopark giriş yüksekliğine uygun alçak profilli kurtarıcılarımızla kat içi müdahale sağlayıp aracınızı hasarsız şekilde açık alana ve ardından istediğiniz servise taşıyoruz.'
      },
      {
        q: 'Küçükçekmece bölgesinden Anadolu Yakası veya farklı bir şehre araç taşıması yapıyor musunuz?',
        a: 'Evet. İlçe içi kısa mesafe naklinin yanı sıra İstanbul geneli ve şehirlerarası tekli/planlı araç taşımacılığı da gerçekleştiriyoruz; mesafeye göre net teklif önceden iletilir.'
      },
      {
        q: 'Kanuni Sultan Süleyman Hastanesi yolundaki trafikte tahmini varış süreniz ne kadardır?',
        a: 'Basın Ekspres ve Halkalı bağlantı yollarına yakın konumumuz sayesinde Küçükçekmece ve hastane aksına ortalama 12–16 dakika içinde ulaşım sağlıyoruz.'
      }
    ]
  },
  {
    slug: 'halkali',
    name: 'Halkalı',
    navbarTitle: 'HALKALI ÇEKİCİ',
    category: 'mahalle ilce',
    eta: '12–16 Dk',
    geo: { lat: 41.0369, lng: 28.7897 },
    hero: 'saha-istasyon',
    fieldImage: 'kamyonet-tasima',
    cardSummary: 'Halkalı Marmaray Garı, Halkalı Gümrük Yolu, Dereboyu Caddesi ve İZÜ çevresi için 7/24 Halkalı oto çekici ve yol yardım.',
    heroLead: `Halkalı oto çekici ve 7/24 Halkalı yol yardım ekibimizle Halkalı Marmaray İstasyonu, Halkalı Gümrük Yolu ve Dereboyu Caddesi'nden İstasyon Mahallesi'ne kadar en yakın Halkalı çekici hizmetini ${BUSINESS.name} güvencesiyle sunuyoruz. Tır ve lojistik trafiğinden üniversite çevresi dar sokaklarına kadar her noktada sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Halkalı Marmaray & Uluslararası Tren Garı',
      'Halkalı Gümrük Yolu',
      'Halkalı Merkez Meydanı',
      'İstanbul Sabahattin Zaim Üniversitesi (İZÜ)',
      'Dereboyu Caddesi',
      'İstasyon & Mehmet Akif Mahallesi',
      'Turgut Özal Bulvarı Güney Girişi'
    ],
    articleHtml: `
      <h2>Halkalı Merkez, Tren Garı ve Gümrük Yolu Hattında Hızlı Oto Kurtarma</h2>
      <p>Küçükçekmece'nin köklü ulaşım ve ticaret düğümü Halkalı; uluslararası tren garı, Marmaray başlangıç istasyonu, Gümrük Yolu lojistik koridoru ve tarihi merkez mahalleleriyle çevresindeki yeni konut bölgelerinden tamamen farklı bir trafik dokusuna sahiptir. Halkalı Merkez Meydanı, İstasyon Mahallesi, Yarımburgaz geçişi ve Dereboyu Caddesi boyunca günün erken saatlerinden gece yarısına kadar banliyö yolcuları, öğrenci servisleri ve esnaf dağıtım araçları iç içe akar. Bu hareketli akış içinde marş basmayan, baskı balatası kaçıran veya yakıt pompası kesilen bir otomobilin kısa sürede yoldan alınması gerekir. ${BUSINESS.name}, Basın Ekspres üzerinden doğrudan Halkalı eksenine bağlanan nöbetçi kadrosuyla en yakın Halkalı çekici desteğini 12–16 dakikada olay yerine ulaştırır.</p>
      <p>Halkalı Merkez ve Mehmet Akif Mahallesi'nin yerleşik sokakları ise çift yönlü parklanma nedeniyle sıkışık dönüş açılarına sahiptir. İstanbul Sabahattin Zaim Üniversitesi (İZÜ) çevresinde ders giriş-çıkış saatlerinde dolup taşan park ceplerinde aküsü boşalan veya elektronik el freni kilitlenen araçları halatla sürüklemeye çalışmak şanzıman ve ön takım arızalarını büyütür. Bu noktalarda kısa aks mesafeli kayar kasalar ve tekerlek taşıma kızaklarıyla komşu araçlara temas etmeden yükleme gerçekleştiriyoruz.</p>
      <h3>Halkalı Gümrük Yolu ve İstasyon Çevresinde Saha Gerçekleri</h3>
      <p>Halkalı Gümrük Yolu ile İkitelli–Turgut Özal bağlantı kolu, binek otomobillerle ağır lojistik araçlarının aynı şeritleri paylaştığı yüksek riskli bir güzergahtır. Ağır vasıtaların kör noktasında lastiği yarılan, hararet yapan veya şanzıman hatası veren bir araç için saniyeler içinde refleks göstermek gerekir. Halkalı oto kurtarma ekibimizin bölgede en sık yönettiği operasyon başlıkları şunlardır:</p>
      <ul class="article-list">
        <li><strong>Gümrük Yolu ağır trafik tahliyesi:</strong> Lojistik tır ve kamyon geçişlerinin yoğun olduğu cephesinde yüksek görünürlüklü flaşör ve reflektör güvenlik çemberiyle hızlı yükleme.</li>
        <li><strong>Marmaray Garı ve İZÜ çevresi yol yardım:</strong> Gar otoparkı, yolcu indirme cepleri ve üniversite caddelerinde akü takviyesi ya da arızalı araç çekimi.</li>
        <li><strong>Dereboyu ve Merkez esnaf desteği:</strong> Halkalı Merkez ticari işletmelerine mal dağıtan hafif ticari panelvan ve kamyonetlerin yükü boşaltılmadan sanayiye nakli.</li>
        <li><strong>Yarımburgaz ve İstasyon bağlantı müdahaleleri:</strong> Eğimli ara sokaklarda aks kesen, rotili çıkan veya kilitlenen araçların kızaklı platformla güvenli çıkarımı.</li>
      </ul>
      <h3>İkitelli ve Sefaköy Sanayilerine Kesintisiz Sevkiyat</h3>
      <p>Halkalı'dan İkitelli Atatürk Oto Sanayi Sitesi, Sefaköy Beşyol tamir bölgesi ve Basın Ekspres üzerindeki yetkili marka servislerine ulaşım birkaç dakika mesafededir. Telefonla ${BUSINESS.phoneDisplay} hattını aradığınızda bulunduğunuz cadde ve varış noktasını paylaştığınız anda net çekici fiyatı ve tahmini varış süresi açıkça bildirilir; gece saatlerinde veya yoğun trafikte sürpriz ek ücret talep edilmez.</p>
      <div class="callout-box">
        <strong>Halkalı Garı ve Gümrük Yolu İpucu:</strong> Halkalı Marmaray Garı veya Gümrük Yolu üzerinde arıza yaşadığınızda hangi çıkış yönünde (İkitelli, Sefaköy veya Altınşehir istikameti) beklediğinizi belirtmeniz, kurtarıcının tek tur dahi atmadan yanınıza yanaşmasını sağlar.
      </div>
      <p>Kış sabahlarında açık otopark ceplerinde marş almayan dizel araçlardan gece geç saatte tren garından ayrılırken lastiği inen aile otomobillerine kadar ${BUSINESS.name} Halkalı'da 7/24 nöbet tutar. Aracınız yükleme anından servis teslimine kadar dört tekerlekten yumuşak kayışlarla sabitlenir, nakliye emtia kaskosu kapsamında korunur.</p>
    `,
    fieldLogTitle: 'Halkalı Gümrük Yolu Bağlantısında Hararet Yapan Hafif Ticarinin Güvenli Tahliyesi',
    fieldLogDesc: 'Öğle saatlerinde Halkalı Gümrük Yolu üzerinde ağır vasıta yoğunluğu arasında soğutma radyatörü delinen kapalı kasa bir hafif ticari araç emniyet cebine çekildi. Basın Ekspres geçişinden 14 dakikada noktaya ulaşan kayar kasa ekibimiz, reflektör şeridiyle tır akışını güvenli açıdan yönlendirerek aracı dakikalar içinde platforma aldı. Yüküyle birlikte dengeli sabitlenen araç İkitelli Atatürk Oto Sanayi Sitesi içindeki servise teslim edildi.',
    faqs: [
      {
        q: 'Halkalı Gümrük Yolu üzerinde ağır vasıta trafiği arasında aracım bozulursa ne kadar sürede gelirsiniz?',
        a: 'Basın Ekspres ve Halkalı bağlantı noktasındaki nöbetçi ekibimiz ortalama 12–16 dakika içinde Gümrük Yolu hattına ulaşır. Ekip gelene kadar dörtlü ikazları yakıp bariyer gerisinde beklemeniz önerilir.'
      },
      {
        q: 'Halkalı Marmaray Tren Garı yolcu indirme alanında kalan aracım için çekici çağırabilir miyim?',
        a: 'Evet. Gar çevresindeki indirme ceplerini ve otopark girişlerini bilen operatörlerimiz trafiği aksatmadan aracınızı kısa sürede platforma yükleyip istediğiniz servise taşır.'
      },
      {
        q: 'Dereboyu Caddesi ve Halkalı Merkez esnafının ticari panelvanlarını yüklü taşır mısınız?',
        a: 'Evet. Yasal ağırlık sınırları içindeki panelvan ve hafif kamyonetleri içindeki malzemeyi indirmenize gerek kalmadan güçlendirilmiş kayar kasa araçlarımızla servise götürüyoruz.'
      },
      {
        q: 'İZÜ ve İstasyon Mahallesi dar sokaklarında sabit fiyat nasıl belirleniyor?',
        a: 'Bulunduğunuz konum ile aracın bırakılacağı servis veya adres arasındaki mesafe ve araç sınıfına göre arama sırasında net rakam verilir; işlem sonunda ek masraf çıkarılmaz.'
      },
      {
        q: 'Halkalı’dan Sefaköy veya İkitelli sanayilerine gece yarısı çekici hizmeti alabilir miyim?',
        a: `Evet, ${BUSINESS.name} Halkalı bölgesinde 7 gün 24 saat aktif nöbet düzeniyle çalışır; gece saatlerinde de aynı hız ve kaskolu taşıma güvencesiyle hizmet verir.`
      }
    ]
  },
  {
    slug: 'bahcelievler',
    name: 'Bahçelievler',
    navbarTitle: 'BAHÇELİEVLER ÇEKİCİ',
    category: 'ilce',
    eta: '10–15 Dk',
    geo: { lat: 41.0016, lng: 28.8596 },
    hero: 'kazali-kurtarma',
    fieldImage: 'saha-sedan',
    cardSummary: 'Yayla, Şirinevler, Soğanlı, Kocasinan ve E-5 İncirli hattında kazalı araç kurtarma ve 7/24 acil çekici desteği.',
    heroLead: `Bahçelievler oto çekici ve 7/24 Bahçelievler yol yardım ekibimizle E-5 Şirinevler–İncirli hattından Talatpaşa ve Adnan Kahveci bulvarlarına, Yayla'dan Soğanlı ve Kocasinan'a kadar en yakın Bahçelievler çekici hizmetini ${BUSINESS.name} güvencesiyle sunuyoruz. Maddi hasarlı kazalardan mekanik arızalara kadar aracınızı sabit fiyatlı oto kurtarma ile güvenle taşıyoruz.`,
    landmarks: [
      'E-5 Şirinevler – Bahçelievler – İncirli Hattı',
      'Adnan Kahveci & Talatpaşa Bulvarları',
      'Yayla Meydanı',
      'MetroPort & Kadir Has AVM',
      'Soğanlı & Siyavuşpaşa',
      'Kocasinan Merkez',
      'Memorial Bahçelievler & Medical Park Hastaneleri'
    ],
    articleHtml: `
      <h2>Bahçelievler'de Kazalı Araç Kurtarma ve Ana Bulvarlarda Hızlı Müdahale</h2>
      <p>Bahçelievler, hem E-5 (D-100) karayolunun en yoğun geçişlerinden Şirinevler–Ömür–İncirli eksenini hem de iç kesimlerdeki yüksek yoğunluklu yerleşim caddelerini bir arada barındırır. Adnan Kahveci Bulvarı, Talatpaşa Bulvarı, Yayla Meydanı, Milli Egemenlik Parkı çevresi ve Eski Londra Asfaltı boyunca günün neredeyse her saatinde yoğun bir kent içi trafik akar. Özellikle kavşak geçişlerinde, hastane girişlerinde ve yağışlı günlerde kayganlaşan asfalt üzerinde yaşanan maddi hasarlı çarpışmalar sonrası ön takımı eğilen, rot başı kopan veya tekerleği kilitlenen araçların profesyonelce kurtarılması gerekir. ${BUSINESS.name}, kazalı araçların mevcut hasarını büyütmeden vinç ve kızak destekli kayar platforma alınması konusunda deneyimli operatörlerle çalışır.</p>
      <p>İlçenin iç mahalleleri olan Soğanlı, Siyavuşpaşa, Kocasinan, Zafer, Hürriyet, Fevzi Çakmak ve Cumhuriyet mahallelerinde ise ağaçlıklı ama çift sıra park nedeniyle daralan sokaklar öne çıkar. Şirinevler'deki Fetih Caddesi ve Mahmutbey Caddesi bağlantılarında tek yönlü sıkışık akış nedeniyle duran bir otomobili sıradan halatla çekmeye çalışmak hem tampon hem de şanzıman masrafını katlar. Bağcılar–Bahçelievler sınırına çok yakın konuşlanan filomuz, Soğanlı, Haznedar ve Kocasinan üzerinden birkaç dakikada iç mahallelere inerek 10–15 dakika bandında müdahale başlatır.</p>
      <h3>Şirinevler, MetroPort ve Hastaneler Bölgesinde Sık Karşılaşılan Durumlar</h3>
      <p>Şirinevler Meydanı ve metrobüs aktarma çevresi, yayaların ve toplu taşımanın en yoğun olduğu noktalardan biridir. Aynı şekilde MetroPort AVM, Kadir Has AVM, Bahçelievler Devlet Hastanesi ile Memorial ve Medical Park hastanelerinin çevre yollarında park bulma telaşı ve kısa mesafeli sıkışık trafik, arıza anında hızlı hareket etmeyi zorunlu kılar:</p>
      <ul class="article-list">
        <li><strong>Kazalı araç kurtarma ve servis sevki:</strong> Ön takım, salıncak veya jant hasarı bulunan araçların vinç destekli kayar kasayla kasko anlaşmalı servislere hasarsız nakli.</li>
        <li><strong>E-5 Ömür–İncirli–Şirinevler hattı:</strong> Metrobüs paralelinde ani stop eden veya hararet yapan araçların akışı tıkamadan emniyete alınması.</li>
        <li><strong>Dar mahalle sokakları:</strong> Yayla, Siyavuşpaşa, Fetih Caddesi ve Zafer Mahallesi'ndeki sıkışık sokaklarda kompakt araçla tek hamlede yükleme.</li>
        <li><strong>Kapalı AVM ve hastane otoparkları:</strong> MetroPort, Kadir Has ve özel hastane otoparklarında marş basmayan veya şanzıman hatası veren araçların çıkarılması.</li>
      </ul>
      <h3>Kasko Süreci, Eksper Öncesi Özen ve Belgeli Taşımacılık Kolaylığı</h3>
      <p>Maddi hasarlı bir kaza sonrasında sürücülerin en çok merak ettiği konulardan biri de fatura ve sigorta sürecidir. Eksper incelemesi öncesinde kaporta veya alt takımda ek sürtme yaşanmaması için yükleme açısı titizlikle ayarlanır ve sabitleme yalnızca sağlam tekerlek veya şasi bağlama noktalarından yapılır. ${BUSINESS.name}, gerçekleştirdiği her kurtarma işlemi için resmi fatura düzenler; kasko poliçenizde yer alan yol yardım veya çekici teminatından geri ödeme alabilmeniz için gerekli evrakı eksiksiz teslim eder. Aracınız ister Yenibosna, ister Merter, ister yetkili marka servisine çekilsin, ${BUSINESS.phoneDisplay} hattından baştan sona şeffaf bilgi alırsınız.</p>
      <div class="callout-box">
        <strong>Kaza Sonrası Hatırlatma:</strong> Maddi hasarlı kazada tutanak ve fotoğraf çekimi tamamlandıktan sonra tekerleği yamulmuş veya altından sıvı akan aracı yürütmeye çalışmayın; motor ya da şanzıman yağsız kalarak çok daha ağır hasar görebilir.
      </div>
      <p>Bahçelievler'in yoğun iş çıkışı saatlerinde Bakırköy, İncirli veya Şirinevler yönüne ilerlerken ani hararet, alternatör arızası ya da şanzıman uyarısı ile karşılaşan sürücüler için en yakın ara bağlantıdan kısa sürede konum alıyoruz. Yükleme sırasında dört tekerlekten sabitleme ve alçak rampa açısı sayesinde spor süspansiyonlu araçlarda bile tampon sürtmesi yaşanmaz. Bahçelievler'in tüm mahallelerinde, gece yarısı veya yoğun iş çıkışı fark etmeksizin güvenilir kurtarma desteği için tek telefonla yanınızdayız.</p>
    `,
    fieldLogTitle: 'Adnan Kahveci Bulvarında Ön Takımı Hasarlı Otomobilin Vinç Destekli Yüklenmesi',
    fieldLogDesc: 'Yağışlı bir akşamda Adnan Kahveci Bulvarı ile Talatpaşa bağlantısına yakın noktada refüje sürten binek bir otomobilin sağ ön salıncağı eğildi ve tekerlek çamurluğa dayandı. 11 dakikada olay yerine ulaşan kurtarma ekibimiz, tekerleği sürüklemeden özel kızak ve vinç desteğiyle aracı dengeli biçimde kayar platforma çekti. Tutanak işlemleri biten otomobil, kasko anlaşmalı yetkili kaporta servisine hasarı büyümeden teslim edildi.',
    faqs: [
      {
        q: 'Bahçelievler içinde kaza yaptıktan sonra çekici ücretini kaskodan geri almak için fatura veriyor musunuz?',
        a: 'Evet. Tüm kurtarma ve taşıma hizmetlerimizde resmi fatura düzenliyoruz. Poliçenizdeki çekici kapsamına göre sigorta şirketinize ibraz edebileceğiniz belgeleri işlem sonunda teslim ediyoruz.'
      },
      {
        q: 'Yayla, Siyavuşpaşa veya Şirinevler ara sokaklarında dönüş açısı dar olduğunda nasıl müdahale ediyorsunuz?',
        a: 'Dar kent sokaklarına uygun kısa şasili kayar kasa araçlarımızı yönlendiriyoruz. Gerekli durumlarda tekerlek taşıma aparatlarıyla aracı uygun hizaya getirip çevredeki park araçlarına zarar vermeden yüklüyoruz.'
      },
      {
        q: 'MetroPort veya Kadir Has AVM kapalı otoparkında arıza yapan aracımı çıkarabilir misiniz?',
        a: 'Evet. AVM garajlarının tavan yüksekliğine uygun alçak profilli ekipmanımızla otopark katından aracınızı alıp dışarıdaki ana taşıyıcıya veya doğrudan servise naklediyoruz.'
      },
      {
        q: 'Kocasinan ve Soğanlı yokuşlarında otomatik vitesli aracım P konumunda kilitlenirse zarar görmeden çekilir mi?',
        a: 'Kesinlikle. Şanzımanı zorlamadan tekerlek kızakları kullanarak çekiş tekerleklerini yerden kesiyoruz; bu yöntem şanzıman dişlilerini ve elektronik park frenini tamamen korur.'
      },
      {
        q: 'E-5 İncirli–Ömür geçişinde yoğun trafikte çekici bana hangi güzergahtan ulaşır?',
        a: 'Ana arter tamamen tıkalı olduğunda ekibimiz Kocasinan, Adnan Kahveci Bulvarı veya E-5 yan yol bağlantıları üzerinden en açık katılım kolunu seçerek ortalama 10–15 dakikada yanınıza ulaşır.'
      }
    ]
  },
  {
    slug: 'yenibosna',
    name: 'Yenibosna',
    navbarTitle: 'YENİBOSNA ÇEKİCİ',
    category: 'mahalle sanayi',
    eta: '10–15 Dk',
    geo: { lat: 41.0012, lng: 28.8286 },
    hero: 'ahtapot-mavi',
    fieldImage: 'ticari-panelvan',
    cardSummary: 'Kuyumcukent, Doğu Sanayi Sitesi, İDTM, Çobançeşme ve Basın Ekspres girişinde ticari ve binek 7/24 oto kurtarma.',
    heroLead: `Yenibosna oto çekici ve 7/24 Yenibosna yol yardım hattımızla Basın Ekspres'in E-5 ile buluştuğu Yenibosna düğümünde, Kuyumcukent'ten Doğu Sanayi Sitesi ve İDTM fuar alanına kadar en yakın Yenibosna çekici desteğini ${BUSINESS.name} kalitesiyle veririz. Ticari panelvanlardan filo araçlarına, binek otomobillerden fuar ziyaretçilerine kadar sabit fiyatlı oto kurtarma ve taşıma sunuyoruz.`,
    landmarks: [
      'Kuyumcukent',
      'Doğu Sanayi Sitesi',
      'İstanbul Dünya Ticaret Merkezi (İDTM) & CNR',
      'Yenibosna Metrobüs & M1A/M9 Aktarma Merkezi',
      'StarCity Outlet',
      'Çobançeşme & 29 Ekim Caddesi',
      'Basın Ekspres Güney Girişi'
    ],
    articleHtml: `
      <h2>Yenibosna'da Sanayi, Fuar ve Basın Ekspres Kavşağına Özel Çekici Operasyonları</h2>
      <p>Yenibosna, Bahçelievler ilçesinin ticaret ve ulaşım nabzının en hızlı attığı bölgedir. E-5 karayolunun Basın Ekspres Yolu ile kesiştiği bu stratejik düğüm, gün boyu hem havalimanı bağlantısını kullanan bireysel sürücüleri hem de Avrupa Yakası'nın üretim ve dağıtım damarlarını besleyen ticari araçları taşır. Doğu Sanayi Sitesi, Çobançeşme, Sanayi Caddesi ve Dereyolu çevresinde yüzlerce imalathane, toptancı ve kargo aktarma noktası bulunur. Burada arıza yapan bir panelvan ya da kamyonet sadece sürücüyü değil, zamanla yarışan teslimat planlarını da doğrudan etkiler. ${BUSINESS.name}, Basın Ekspres hattındaki hazır konumu sayesinde Yenibosna'nın her noktasına 10–15 dakika içinde ulaşarak ticari kaybı en aza indirir.</p>
      <p>Bölgenin bir diğer kritik yüzü ise Kuyumcukent ile İstanbul Dünya Ticaret Merkezi (İDTM) ve CNR fuar çevresidir. Uluslararası fuar günlerinde, iş merkezi mesai giriş-çıkışlarında, Koçtaş önündeki E-5 yan yol bağlantısında ve StarCity Outlet çevresinde oluşan yoğunlukta park alanları ile 29 Ekim Caddesi ciddi baskı altında kalır. Güvenlik hassasiyetinin yüksek olduğu bu tesislerde, giriş kurallarına hâkim, düzenli ve profesyonel bir kurtarma ekibiyle çalışmak büyük fark yaratır. Yenibosna Radar, Yıldırım Beyazıt Caddesi ve Mithatpaşa Caddesi boyunca uzanan yoğun konut ve işyeri dokusunda da özellikle sabah saatlerinde işe yetişme telaşı içindeki sürücülere hızlı müdahale sunuyoruz.</p>
      <h3>Doğu Sanayi, Çobançeşme ve 29 Ekim Caddesi'nde En Sık Çözülen Senaryolar</h3>
      <p>Yenibosna'nın karma dokusu, hem binek hem de ticari segmentte farklı ekipman gereksinimleri doğurur. Yüklü bir ticari araçta kargo boşaltmaya gerek kalmadan dingil ağırlık dengesini gözeterek platforma alım yapmak ciddi saha tecrübesi ister. Sahada düzenli olarak yönettiğimiz operasyon başlıkları şunlardır:</p>
      <ul class="article-list">
        <li><strong>Ticari panelvan ve kamyonet kurtarma:</strong> Doğu Sanayi Sitesi, Dereyolu ve Çobançeşme çevresinde şaft, aks, turbo veya debriyaj arızası yaşayan yüklü/boş hafif ticari araçların yüksek tonajlı platformla taşınması.</li>
        <li><strong>Kuyumcukent ve İDTM iş merkezi desteği:</strong> Güvenlik protokollerine uygun biçimde otopark veya cadde üzerinden binek ve şirket araçlarının hasarsız tahliyesi.</li>
        <li><strong>Basın Ekspres–E-5 kavşak müdahaleleri:</strong> Yoğun bağlantı kollarında ani stop eden, lastiği yarılan veya kaza geçiren araçların hızla emniyete alınması.</li>
        <li><strong>Ahtapot vinç gerektiren özel durumlar:</strong> Çukura düşen, kaldırıma çıkan veya şanzımanı tamamen kilitlenen araçların dengeli kaldırma aparatıyla kurtarılması.</li>
      </ul>
      <h3>Kurumsal Filolar, Fuar Ziyaretçileri ve Kurye Araçları İçin Hızlı Sevkiyat</h3>
      <p>Yenibosna ve Mithatpaşa Caddesi çevresinde faaliyet gösteren lojistik şirketleri, tekstil firmaları, kiralama filoları ve kargo dağıtım merkezleri için faturalı, kayıtlı ve hızlı araç nakliyesi sağlıyoruz. Havalimanı yönüne giderken Basın Ekspres girişinde yolda kalan sürücüler için de zamana karşı yarışarak araçlarını güvenle belirledikleri servise veya otoparka teslim ediyoruz. İster Doğu Sanayi içindeki ustanıza, ister İkitelli veya Topkapı yetkili ticari servislerine sevk ettirmek isteyin; ${BUSINESS.phoneDisplay} hattından tek aramayla doğru kapasitedeki aracımız yola çıkar.</p>
      <div class="callout-box">
        <strong>Ticari Araç Sürücülerine Not:</strong> Yüklü bir panelvan veya kamyonet için çekici çağırırken araç uzunluğunu (kısa/orta/uzun şasi) ve tahmini yük ağırlığını paylaşmanız, en uygun şasi ve vinç kapasitesine sahip kurtarıcının doğrudan gelmesini sağlar.
      </div>
      <p>Yenibosna Merkez ve Fevzi Çakmak mahallelerindeki dar konut sokaklarında park halindeyken aküsü boşalan veya immobilizer kilidine düşen binek otomobillerde de aynı hızla saha ekibi yönlendiriyoruz. Gece vardiyasından çıkan sanayi çalışanları ile geç saatte uçuş dönüşü yapan yolcular için 24 saat ulaşılabilir nöbet hattımız aktiftir. Yenibosna Metrobüs çevresinden Çobançeşme'nin en iç sanayi bloklarına kadar ${BUSINESS.name}, günün her saatinde donanımlı filosuyla kesintisiz destek verir.</p>
    `,
    fieldLogTitle: 'Doğu Sanayi Sitesi Çıkışında Aks Kesen Yüklü Panelvanın Yüksek Tonajlı Nakli',
    fieldLogDesc: 'Öğle saatlerinde Doğu Sanayi Sitesi ana çıkışında mal sevkiyatına hazırlanan uzun şasi kapalı kasa bir ticari panelvanda ani aks arızası meydana geldi. Yüksek taşıma kapasiteli kayar platformumuz 13 dakikada noktaya ulaşarak yük boşaltılmasına gerek kalmadan aracı ağırlık merkezine göre dengeleyip kasaya aldı. Tekerlek gerdirmeleri kontrol edilen panelvan, yaklaşık yarım saat içinde İkitelli yetkili ticari araç servisine güvenle teslim edildi.',
    faqs: [
      {
        q: 'Doğu Sanayi Sitesi ve Çobançeşme bölgesinde yüklü ticari panelvan veya kamyonet çekebiliyor musunuz?',
        a: 'Evet. Uzun şasi panelvan ve hafif ticari kamyonetlerin yük ağırlığına uygun yüksek tonajlı kayar platformlarımız mevcuttur. Ağırlık dağılımı kontrol edilerek yük boşaltmadan güvenli taşıma yapılır.'
      },
      {
        q: 'Kuyumcukent veya İDTM iş merkezleri otoparkında arıza yaparsam güvenlik girişini nasıl çözüyoruz?',
        a: 'Siz tesis güvenliğine kurtarma aracı geleceğini bildirdiğinizde, operatörümüz kimlik ve araç bilgilerini nizamiyede paylaşarak doğrudan bulunduğunuz blok veya otopark alanına yanaşır.'
      },
      {
        q: 'Yenibosna Metrobüs ve Basın Ekspres birleşiminde sabah yoğunluğunda tahmini varış süreniz nedir?',
        a: 'Basın Ekspres aksına doğrudan bağlantılı nöbetçi aracımız sayesinde normal akışta 10–15 dakika aralığında ulaşım sağlıyoruz. Trafik düğümünde Çobançeşme veya 29 Ekim alternatif kollarını kullanıyoruz.'
      },
      {
        q: 'StarCity Outlet ve 29 Ekim Caddesi çevresinde şirket filoları için faturalı hizmet veriyor musunuz?',
        a: 'Evet. Kurumsal firmaların filo araçları, kiralık binekler ve dağıtım kamyonetleri için resmi faturalı, şeffaf ücretli ve hızlı servis sevkiyatı gerçekleştiriyoruz.'
      },
      {
        q: 'Kaldırıma çıkan veya tekerleği kilitlenen araçlar için Yenibosna bölgesine ahtapot vinç geliyor mu?',
        a: 'Evet. Standart kayar kasanın yanaşamadığı ya da aracın yerden tamamen kaldırılması gereken kaza ve kilitlenme vakalarında ahtapot vinçli aracımızı yönlendiriyoruz.'
      }
    ]
  },
  {
    slug: 'merter',
    name: 'Merter',
    navbarTitle: 'MERTER ÇEKİCİ',
    category: 'mahalle sanayi',
    eta: '10–15 Dk',
    geo: { lat: 41.0124, lng: 28.8878 },
    hero: 'saha-sedan',
    fieldImage: 'kamyonet-tasima',
    cardSummary: 'Merter Tekstil Merkezi, Keresteciler Sitesi ve E-5 Merter hattında kamyonet, binek ve motosiklet için 7/24 Merter oto çekici.',
    heroLead: `Merter oto çekici ve 7/24 Merter yol yardım ekibimizle Merter Tekstil Merkezi'nin yoğun toptancı sokaklarından Keresteciler Sitesi ve E-5 Merter–Cevizlibağ aksına kadar en yakın Merter çekici olarak ${BUSINESS.name} sahada. Binek ve kamyonet nakliyesinden motosiklet taşımacılığına kadar sabit fiyat ve özel oto kurtarma sabitleme sistemiyle hizmet veriyoruz.`,
    landmarks: [
      'Merter Tekstil Merkezi',
      'Keresteciler Sitesi',
      'E-5 Merter Metrobüs & M1A Metro İstasyonu',
      'Mehmet Nesih Özmen Mahallesi',
      'Fatih Caddesi & Toptancı Sokakları',
      'Cevizlibağ – Topkapı E-5 Bağlantısı',
      'Merter Platform İş Merkezleri'
    ],
    articleHtml: `
      <h2>Merter Tekstil Havzası ve E-5 Geçişinde Çok Yönlü Araç Kurtarma</h2>
      <p>Merter, İstanbul'un ve Türkiye'nin en hareketli tekstil ihracat merkezlerinden biri olmasının yanı sıra E-5 karayolunun Zeytinburnu–Bakırköy–Güngören kesişimindeki ana arteridir. Mehmet Nesih Özmen Mahallesi, Fatih Caddesi, Ali Rıza Gürcan Caddesi, Kasım Sokak, Nadide Sokak ve Keresteciler Sitesi çevresi mesai saatlerinde bambaşka bir ritimle işler: bir yanda showroom ziyaretçilerinin ve yabancı alıcıların binek otomobilleri, diğer yanda kumaş balyası ve koli taşıyan kamyonetler, kurye motosikletleri ve yükleme yapan ticari araçlar aynı dar sokakları paylaşır. Böyle bir ortamda hareketsiz kalan bir aracın dakikalarca beklemesi tüm sokağın ticari akışını felç edebilir. ${BUSINESS.name}, Merter'in sokak yapısını ve mesai trafiğini yakından tanıyan ekibiyle 10–15 dakika içinde müdahale sağlar.</p>
      <p>Merter aynı zamanda E-5 üzerindeki Merter Metrobüs ve M1A Metro istasyonu çevresinde yoğun bir ana yol yükü taşır. Cevizlibağ ve Topkapı yönüne ilerleyen sabah trafiğinde ya da Bakırköy–Şirinevler yönüne dönen akşam akışında hararet, şarj kesintisi veya kayış kopması yaşayan sürücüler için güvenli şerit tahliyesi hayati önem taşır. Komşu Güngören, Tozkoparan ve Bağcılar geçiş noktalarından hızlıca E-5 yanyoluna bağlanan araçlarımız, Cevizlibağ–Zeytinburnu–Bakırköy üçgeninde trafik yönüne göre en açık katılım kolunu seçerek sürücüleri uzun süre bekletmez.</p>
      <h3>Kamyonet Taşımadan Motosiklet ve ATV Nakliyesine Uzanan Hizmet Yelpazesi</h3>
      <p>Merter'de çekici ihtiyacı yalnızca binek otomobillerle sınırlı kalmaz. Tekstil lojistiğinde kullanılan kamyonetler, dağıtım yapan motorlu kuryeler ve bireysel kullanıcıların motosiklet, scooter veya ATV araçları da sıkça güvenli nakliye gerektirir. İki ve dört tekerlekli hobi araçlarında rampa eğimi, süspansiyon sıkıştırma dengesi ve boyalı grenajların korunması büyük özen ister. Bölgede öne çıkan saha operasyonlarımız şunlardır:</p>
      <ul class="article-list">
        <li><strong>Kamyonet ve ticari araç sevki:</strong> Keresteciler Sitesi ve toptancı sokaklarında arıza yapan hafif kamyonet ve panelvanların Topkapı, Zeytinburnu veya İkitelli sanayi sitelerine taşınması.</li>
        <li><strong>Motosiklet, scooter ve ATV çekici:</strong> İki ve dört tekerlekli hobi veya kurye araçlarının özel ön tekerlek kıskacı ve yumuşak gerdirme kayışlarıyla çizilmeden nakledilmesi.</li>
        <li><strong>Mesai içi dar sokak tahliyesi:</strong> Fatih Caddesi, Ali Rıza Gürcan ve Mehmet Nesih Özmen'in yükleme-boşaltma yoğunluğunda çevredeki araçlara temas etmeden kontrollü yükleme.</li>
        <li><strong>E-5 Merter–Cevizlibağ acil müdahale:</strong> Ana arterde ve yanyolda ani mekanik arıza veya kaza sonrası hızlı emniyet ve servis teslimi.</li>
      </ul>
      <h3>Topkapı ve Cevizlibağ Sanayi Sitelerine Dakik Aktarım</h3>
      <p>Merter'in Topkapı Akınsal ve Cevizlibağ tamir bölgelerine olan yakınlığı, arızalı araçların aynı gün içinde onarıma alınması açısından büyük avantaj sunar. Gerek iş saatlerinde gerekse gece tekstil yüklemeleri sırasında yolda kaldığınızda ${BUSINESS.phoneDisplay} numarasından operatörümüze ulaşarak araç tipinizi paylaşmanız yeterlidir. Hem ağır ticari platform hem de hassas motosiklet/ATV sabitleme aparatlarıyla doğru ekipmanı adresinize sevk ediyor, yükleme öncesi toplam ücreti açık biçimde paylaşıyoruz.</p>
      <div class="callout-box">
        <strong>Merter Sokak İpucu:</strong> Tekstil merkezindeki toptancı sokaklarında arıza yaşarsanız, sokağın hangi uçtan (Fatih Caddesi veya Keresteciler yönü) girişe açık olduğunu telefonla belirtmeniz çekicinin trafiğe takılmadan ters manevrasız yanaşmasını sağlar.
      </div>
      <p>Gündüz toptancı sevkiyatının yoğun olduğu saatlerde showroom önlerinde veya açık otopark ceplerinde kalan binek otomobillerde hızlı manevra planıyla işyeri girişlerini kapatmadan yükleme yapıyoruz. Gece saatlerinde ise E-5 Merter–Zeytinburnu hattındaki acil arızalarda, kurye motorlarında ve kamyonet nakliyelerinde bekleme süresini minimumda tutuyoruz. Ayrıca Marmara Forum ve Bakırköy geçiş koluna yakın konumda arıza yaşayan sürücülere de tek yön trafiğe takılmadan kısa sürede ulaşıyoruz. İster Merter Platform iş merkezleri önünde, ister Keresteciler Sitesi'nde, ister E-5 Merter geçidinde olun; ${BUSINESS.name} şeffaf fiyat ve hasarsız sabitleme güvencesiyle 7/24 görevdedir.</p>
    `,
    fieldLogTitle: 'Keresteciler Sitesi Ara Sokağında Şanzıman Arızası Veren Kamyonetin Tahliyesi',
    fieldLogDesc: 'Mesai çıkışına yakın saatlerde Keresteciler Sitesi içindeki dar tekstil sevkiyat sokaklarından birinde hafif ticari bir kamyonetin şanzımanı kilitlendi ve geçiş tamamen daraldı. Fatih Caddesi yönünden uygun açıyla sokağa geri manevra yapan hidrolik kayar kasa ekibimiz, yanlara park etmiş araçlara sıfır temasla kamyoneti platforma çekti. On beş dakikada sokak trafiğe açıldı ve araç Topkapı sanayi sitesindeki şanzıman servisine ulaştırıldı.',
    faqs: [
      {
        q: 'Merter Tekstil Merkezi ve Keresteciler Sitesi mesai yoğunluğunda çekici sokak içine girebiliyor mu?',
        a: 'Evet. Toptancı sokaklarının giriş-çıkış yönlerini bilen sürücülerimiz, yoğun yükleme saatlerinde en uygun uçtan yaklaşarak kompakt veya ticari uyumlu kayar platformla hızlı tahliye yapar.'
      },
      {
        q: 'Merter çevresinde motosiklet, scooter veya ATV için özel aparatlı çekici desteği var mı?',
        a: 'Evet. Motosiklet, scooter ve ATV taşımalarında aracı dik ve sabit tutan ön tekerlek kıskacı ile boyaya zarar vermeyen yumuşak bağlama kayışları kullanarak güvenle nakliye yapıyoruz.'
      },
      {
        q: 'Merter konumundan Topkapı veya Zeytinburnu sanayi sitelerine taşıma ne kadar sürer?',
        a: 'Yükleme işlemi tamamlandıktan sonra mesafenin yakınlığı sayesinde trafik durumuna bağlı olarak genellikle 15–25 dakika içinde Topkapı veya Zeytinburnu servislerine teslimat gerçekleşir.'
      },
      {
        q: 'Fatih Caddesi ve Mehmet Nesih Özmen çevresindeki kamyonet ile uzun şasi ticari araçları taşıyor musunuz?',
        a: 'Evet. Tekstil dağıtımında kullanılan kapalı kasa panelvanlar ve hafif kamyonetler için yüksek kapasiteli kayar kasalarımız günün her saatinde aktiftir.'
      },
      {
        q: 'E-5 Merter metrobüs üst geçidi civarında aracım arıza yaparsa en güvenli nasıl beklemeliyim?',
        a: 'İmkan varsa aracı sağ yanyol cebine alıp dörtlü ikaz lambalarını yakın, araç içinden çıkıp bariyer gerisinde bekleyin ve WhatsApp konumunu hangi istikamete (Cevizlibağ veya Bakırköy yönü) gittiğinizi belirterek paylaşın.'
      }
    ]
  }
];
