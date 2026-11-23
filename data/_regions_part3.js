'use strict';

const { BUSINESS } = require('./business');

module.exports = [
  {
    slug: 'kirazli',
    name: 'Kirazlı',
    navbarTitle: 'KİRAZLI ÇEKİCİ',
    category: 'mahalle merkez',
    eta: '8–12 Dk',
    geo: { lat: 41.0326, lng: 28.8428 },
    hero: 'saha-merkez',
    fieldImage: 'saha-cadde',
    cardSummary: 'Kirazlı M1B–M3 metro aktarması, Mevlana Caddesi ve Güneşli bağlantı yokuşlarında 8–12 dakikada Kirazlı oto çekici.',
    heroLead: `Kirazlı oto çekici ve 7/24 Kirazlı yol yardım ekibimizle Kirazlı Metro aktarma meydanı, Mevlana Caddesi ve Mahmutbey Caddesi kesişimlerinde en yakın Kirazlı çekici olarak 8–12 dakikada yanınızdayız. Bağcılar içindeki dar dik sokaklardan ana arterlere kadar sabit fiyatlı oto kurtarma sunuyoruz.`,
    landmarks: [
      'Kirazlı Metro İstasyonu (M1B / M3)',
      'Mevlana Caddesi',
      'Hoca Ahmet Yesevi Caddesi',
      'Kirazlı – Bağcılar Meydan Bağlantısı',
      'Demirkapı & Çiftlik Sınırı',
      'Mahmutbey Caddesi Kirazlı Etabı'
    ],
    articleHtml: `
      <h2>Kirazlı Metro Aktarması ve Yoğun Cadde Kesişimlerinde Hızlı Oto Kurtarma</h2>
      <p>Bağcılar'ın batı ile merkez dokusunu birbirine bağlayan Kirazlı, M1B Yenikapı–Kirazlı hattı ile M3 Bakırköy–Kayaşehir metrosunun kesişme noktası olması nedeniyle günün neredeyse on sekiz saati canlı bir ulaşım trafiği taşır. Mevlana Caddesi, Hoca Ahmet Yesevi Caddesi ve Mahmutbey Caddesi üzerindeki minibüs cepleri ile yolcu indirme alanları, trafik akışını sık sık tek şeride düşürür. Bu sıkışık koridorda radyatör hortumu patlayan, debriyaj alt merkezi boşalan veya akü voltajı sıfırlanan bir otomobil dakikalar içinde kavşağı kilitleyebilir. ${BUSINESS.name}, doğrudan Bağcılar–Kirazlı ekseninde hazır bekleyen nöbetçi araçlarıyla en yakın Kirazlı çekici olarak ortalama 8 ila 12 dakika içinde olay yerine varır.</p>
      <p>Kirazlı'nın iç kesimlerine doğru uzanan Yavuz Selim, Fevzi Çakmak ve Demirkapı sınırındaki ara sokaklar ise iki taraflı park düzeni ve eğimli kaldırımlarıyla bilinir. Tek yönlü sokaklarda arızalanan bir otomobili sıradan halatla çekmeye çalışmak hem direksiyon kilidi hem de fren takviyesi devre dışı kaldığı için komşu araçlara sürtme tehlikesi yaratır. Bu nedenle filomuzdaki kısa aks mesafeli kayar kasa araçları ve tekerlek pateni aparatlarını kullanarak dar girişlere sorunsuz yanaşıyoruz.</p>

      <h3>Kirazlı Çevresinde En Sık Çözüm Ürettiğimiz Yol Yardım Başlıkları</h3>
      <p>Semtin hem metro aktarma durağı hem de yoğun yerleşim merkezi olması, sürücülerden gelen yardım çağrılarını çeşitlendirir:</p>
      <ul class="article-list">
        <li><strong>Mevlana ve Hoca Ahmet Yesevi Caddesi Arızaları:</strong> Dur-kalk trafiğinde hararet yükselten, şanzıman ikazı veren veya yakıt pompası kesilen binek araçların trafik akışını bozmadan platforma alınması.</li>
        <li><strong>Metro Çevresi Akü ve Marş Sorunları:</strong> Sabah erken saatte aracını metro yakınına bırakıp akşam döndüğünde marş basmayan sürücüler için akım korumalı takviye veya doğrudan oto elektrik servisine nakil.</li>
        <li><strong>Eğimli Ara Sokak Kurtarmaları:</strong> Fevzi Çakmak ve Çiftlik yokuşlarında el freni teli kopan ya da otomatik vitesi P konumunda kilitlenen araçların tekerlek kızağıyla yerinden çıkarılması.</li>
        <li><strong>Sanayi Ustalarına Doğrudan Ulaşım:</strong> Kirazlı'dan Demirkapı tamir dükkanlarına, Bağcılar-Güngören Sanayi Sitesi'ne veya İkitelli Atatürk Oto Sanayi'ye kaskolu transfer.</li>
      </ul>

      <h3>Şeffaf Fiyatlandırma ve Güvenli Yükleme Standardı</h3>
      <p>Kirazlı oto çekici çağrılarında sürücüler için hız kadar maliyetin önceden bilinmesi de önemlidir. ${BUSINESS.phoneDisplay} hattımızdan konumunuzu ve aracınızın marka-vites bilgisini paylaştığınız anda mesafeye dayalı net fiyat onaylanır; araç rampaya çıktıktan sonra gizli bekleme veya gece tarifesi farkı çıkarılmaz. Sıfır eğime yaklaşan hidrolik kayar tablamız ve dört tekerlekten yumuşak gerdirme kayışlarımız sayesinde alçak ön tamponlu sedanlar dahi sürtme yaşamadan taşınır.</p>

      <div class="callout-box">
        <strong>Kirazlı Konum İpucu:</strong> Kirazlı Metro meydanında veya tek yönlü ara sokaklarda kaldığınızda WhatsApp konumuna ek olarak en yakın cadde adını belirtmeniz, kurtarıcımızın tek yön kısıtına takılmadan arka bağlantılardan hızlıca ulaşmasını sağlar.
      </div>

      <h3>7/24 Nöbetçi Destek ile Gece Boyu Güvence</h3>
      <p>Akşam geç saatte metro çıkışında lastiği inmiş olarak aracını bulan ya da gece vardiyası dönüşünde yolda kalan Kirazlı sakinleri için ${BUSINESS.name} kesintisiz nöbet tutar. Dilerseniz aracınızı gece güvenli evinizin önüne indirir, sabah sanayi açıldığında ustanızın kapısına aktarırız.</p>
    `,
    fieldLogTitle: 'Kirazlı Mevlana Caddesi Yokuşunda Vitesi Kilitlenen Otomobilin Tahliyesi',
    fieldLogDesc: 'Akşam 19.10 sularında Mevlana Caddesi üzerinden metro kavşağına inen eğimli şeritte mekatronik kart arızası nedeniyle boşa geçmeyen bir sedan trafiği durma noktasına getirdi. Kirazlı nöbetçi noktamızdan 9 dakikada ulaşan kısa şasili kayar kasamız, arka tekerleklere kızak yerleştirerek aracı şanzımana yük bindirmeden platforma çekti ve Demirkapı oto servisine teslim etti.',
    faqs: [
      {
        q: 'Kirazlı Metro İstasyonu çevresindeki kalabalık ceplerden çekici alımı yapılabiliyor mu?',
        a: 'Evet. M1B ve M3 metro çıkışlarındaki bekleme ceplerini ve yan sokak bağlantılarını yakından tanıyoruz; trafik akışını durdurmadan dakikalar içinde güvenli yükleme yapıyoruz.'
      },
      {
        q: 'Mevlana Caddesi ile Hoca Ahmet Yesevi Caddesi arasına araç ne kadar sürede ulaşır?',
        a: 'Bağcılar ve Kirazlı merkez noktasında sürekli hazır aracımız bulunduğu için ihbar sonrası ortalama 8–12 dakika aralığında yanınızda oluyoruz.'
      },
      {
        q: 'Kirazlı’nın tek yönlü ve dar ara sokaklarına büyük çekici girebilir mi?',
        a: 'Dar sokaklara uzun gövdeli kamyonlar yerine manevra kabiliyeti yüksek kompakt kayar kasa kurtarıcılar gönderiyoruz; gerekirse tekerlek patenleriyle aracı hizalıyoruz.'
      },
      {
        q: 'Sadece akü takviyesi için Kirazlı’ya ekip yönlendiriyor musunuz?',
        a: 'Evet. Aracınızda mekanik bir arıza yoksa ve sorun yalnızca akü boşalmasıysa dijital akım korumalı booster cihazımızla yerinde çalıştırma desteği sağlıyoruz.'
      },
      {
        q: 'Kirazlı’dan İkitelli veya Güngören sanayisine çekici ücreti telefonda belli olur mu?',
        a: `Elbette. ${BUSINESS.phoneDisplay} hattından teslimat noktasını söylediğinizde toplam tutar yola çıkmadan önce netleşir; varışta ek ücret istenmez.`
      }
    ]
  },
  {
    slug: 'sirinevler',
    name: 'Şirinevler',
    navbarTitle: 'ŞİRİNEVLER ÇEKİCİ',
    category: 'mahalle otoyol',
    eta: '10–15 Dk',
    geo: { lat: 40.9922, lng: 28.8475 },
    hero: 'saha-cadde',
    fieldImage: 'kazali-kurtarma',
    cardSummary: 'Şirinevler E-5 Metrobüs geçişi, Fetih Caddesi ve Mahmutbey Caddesi sokaklarında 10–15 dakikada Şirinevler oto çekici.',
    heroLead: `Şirinevler oto çekici ve 7/24 yol yardım hizmetimizle E-5 Şirinevler Metrobüs köprüsü, Fetih Caddesi ve Mahmutbey Caddesi aksında en yakın Şirinevler çekici desteğini sunuyoruz. Yoğun yaya ve araç trafiğinde hızlı manevra yapan ekibimizle sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Şirinevler Meydanı & Metrobüs Üst Geçidi',
      'Fetih Caddesi',
      'Mahmutbey Caddesi (Şirinevler Etabı)',
      'Mithatpaşa Caddesi',
      'E-5 Ataköy – Şirinevler Yanyolu',
      'Kazım Karabekir Caddesi'
    ],
    articleHtml: `
      <h2>Şirinevler Meydanı, Fetih Caddesi ve E-5 Geçişinde Kesintisiz Oto Kurtarma</h2>
      <p>Bahçelievler ilçesinin en yüksek yaya ve taşıt sirkülasyonuna sahip noktası Şirinevler; E-5 Metrobüs aktarma merkezi, M1A metro durağı ve Ataköy yaya köprüsü bağlantısıyla gün boyu aralıksız bir trafik baskısı altındadır. Mahmutbey Caddesi'nden E-5 yanyoluna bağlanan tek yönlü koridorlar, Fetih Caddesi üzerindeki esnaf yoğunluğu ve Kazım Karabekir Caddesi boyunca sıralanan apartman önleri, araç arızalandığında sürücüye manevra alanı bırakmaz. ${BUSINESS.name}, Basın Ekspres ve Kocasinan tarafından iki ayrı yaklaşım rotası kullanarak en yakın Şirinevler çekici aracını 10–15 dakika içinde olay noktasına ulaştırır.</p>
      <p>Şirinevler yanyolu, Ataköy ve Bakırköy yönüne dönmek isteyen sürücüler ile Yenibosna istikametine ilerleyen araçların kesiştiği dar bir şişe boğazı oluşturur. Burada yaşanan bir yakıt pompası kesintisi, soğutma suyu kaçağı ya da tampon hasarlı kavşak kazası tüm semt trafiğini kilitler. Reflektör konilerimiz ve yüksek görünürlüklü tepe ikaz sistemlerimizle şerit güvenliğini anında kurup aracı dakikalar içinde platforma alıyoruz.</p>

      <h3>Şirinevler Sokak Dokusuna Uygun Kurtarma Senaryoları</h3>
      <p>Semtin karmaşık tek yön haritasında zaman kaybetmemek için her sokak girişine uygun ekipman seçiyoruz:</p>
      <ul class="article-list">
        <li><strong>E-5 Yanyol ve Metrobüs Altı Müdahalesi:</strong> Yoğun akış sırasında aniden stop eden otomobillerin yan şeridi tıkamadan düşük açılı kayar kasaya alınması.</li>
        <li><strong>Fetih ve Mithatpaşa Caddesi Çekimleri:</strong> Dar ve çift parklı caddelerde direksiyonu kilitlenen veya aküsü biten araçların komşu araçlara temas etmeden tekerlek patenleriyle tahliyesi.</li>
        <li><strong>Kavşak Kazalarında Kızaklı Kurtarma:</strong> Ataköy–Şirinevler katılım kollarında ön takımı eğilen veya jantı kırılan araçların alt muhafazaya sürtmeden yüklenmesi.</li>
        <li><strong>Gece Nöbetçi Lastik ve Akü Desteği:</strong> Şirinevler çevresinde geç saatte lastiği yarılan veya marş almayan sürücülere yerinde yol yardım ya da açık servise nakil.</li>
      </ul>

      <h3>Net Fiyat Politikası ve Yetkili Servis Teslimatı</h3>
      <p>Şirinevler'den ister Yenibosna ve Doğu Sanayi'ye, ister Topkapı Akınsal ve İkitelli Atatürk Oto Sanayi Sitesi'ne sevkiyat talep edin; tüm süreç tam taşıma kaskosuyla güvence altındadır. ${BUSINESS.phoneDisplay} hattını aradığınızda bulunduğunuz caddeyi ve varış adresini paylaştığınız an net Şirinevler oto çekici fiyatı belirlenir. Ödemeyi nakit, havale veya araç içi mobil POS üzerinden kredi kartıyla yapabilir, kurumsal KDV fatura alabilirsiniz.</p>

      <div class="callout-box">
        <strong>Şirinevler Tek Yön Hatırlatması:</strong> Fetih Caddesi veya Mahmutbey Caddesi ara sokaklarında kaldığınızda telefonla hangi yöne baktığınızı söylemeniz, kurtarıcının ters yöne girmeden doğrudan arkanıza yaklaşmasını hızlandırır.
      </div>

      <h3>7/24 Nöbetçi Kadro ile Dakik İntikal</h3>
      <p>Sabah işe yetişme telaşında veya gece yarısı Ataköy bağlantısından dönerken aracınız arıza verdiğinde ${BUSINESS.name} Şirinevler yol yardım ekibi dakikalar içinde yanınızda olur. Güvenli sabitleme ve dürüst fiyat anlayışımızla aracınızı hedef servise hasarsız teslim ediyoruz.</p>
    `,
    fieldLogTitle: 'Şirinevler E-5 Yanyolu Ataköy Köprüsü Altında Debriyajı Boşalan Aracın Çekilmesi',
    fieldLogDesc: 'Akşam iş çıkışı saatinde E-5 Şirinevler yanyolunda Ataköy yaya köprüsü hizasında debriyaj hidrolik borusu patlayan manuel bir otomobil orta şeritte kaldı. Kocasinan bağlantısından 12 dakikada yaklaşan kayar kasa kurtarıcımız, trafik akışını reflektörle yönlendirerek aracı 5 dakikada platforma aldı ve Yenibosna özel mekanik servisine teslim etti.',
    faqs: [
      {
        q: 'Şirinevler Fetih Caddesi gibi dar ve tek yönlü sokaklara çekici girebiliyor mu?',
        a: 'Evet. Kısa dingil mesafeli kayar kasa araçlarımız dar kent sokaklarına uygun tasarlanmıştır; tek yön akışına göre doğru girişten yaklaşarak komşu araçlara değmeden yükleme yaparız.'
      },
      {
        q: 'Şirinevler Metrobüs köprüsü altında E-5 yanyolunda kaldım, kaç dakikada gelirsiniz?',
        a: 'Basın Ekspres ve Bahçelievler hattındaki nöbetçi araçlarımızla normal trafikte 10–15 dakika içinde yanınıza ulaşıp yolu hızla emniyete alıyoruz.'
      },
      {
        q: 'Şirinevler’den Topkapı veya İkitelli sanayisine çekici ücreti nasıl hesaplanır?',
        a: 'Başlangıç noktası ile teslim edilecek sanayi ya da servis adresi arasındaki kilometre ve aracın yürür durumuna göre telefonda sabit fiyat verilir; sonradan ekstra ücret eklenmez.'
      },
      {
        q: 'Otomatik vitesli aracım Şirinevler otoparkında P konumunda kilitlendi, çekilebilir mi?',
        a: 'Evet. Tekerlek altına yerleştirdiğimiz serbest kaydırma kızakları sayesinde şanzımana yük bindirmeden aracı güvenli biçimde platforma alabiliyoruz.'
      },
      {
        q: 'Gece 02:00 sonrasında Şirinevler Meydan çevresinde acil yol yardım bulabilir miyim?',
        a: `${BUSINESS.name} 7/24 kesintisiz nöbet düzeniyle çalışır; gece saatlerinde de aynı hız ve sabit fiyat güvencesiyle oto çekici ve akü/lastik desteği sunar.`
      }
    ]
  },
  {
    slug: 'sefakoy',
    name: 'Sefaköy',
    navbarTitle: 'SEFAKÖY ÇEKİCİ',
    category: 'mahalle otoyol',
    eta: '10–15 Dk',
    geo: { lat: 41.0079, lng: 28.7985 },
    hero: 'saha-sedan',
    fieldImage: 'saha-otoyol',
    cardSummary: 'Sefaköy E-5 Metrobüs, Halkalı Caddesi, ArmoniPark ve Tevfikbey hattında 10–15 dakikada Sefaköy oto çekici.',
    heroLead: `Sefaköy oto çekici ve 7/24 Sefaköy yol yardım hizmetimizle E-5 Sefaköy kavşağı, Halkalı Caddesi ve ArmoniPark çevresinde en yakın Sefaköy çekici olarak dakikalar içinde sahadayız. Basın Ekspres komşuluğumuz sayesinde sabit fiyatlı oto kurtarma sunuyoruz.`,
    landmarks: [
      'Sefaköy E-5 Metrobüs Durağı & Kavşağı',
      'Halkalı Caddesi (Sefaköy Etabı)',
      'ArmoniPark Outlet Center',
      'Tevfikbey & Kartaltepe Mahalleleri',
      'İnönü Caddesi & Söğütlüçeşme',
      'Beşyol Sanayi Girişi'
    ],
    articleHtml: `
      <h2>Sefaköy Kavşağı, Halkalı Caddesi ve Tevfikbey Aksında Hızlı Oto Kurtarma</h2>
      <p>Küçükçekmece'nin en işlek ticaret ve ulaşım düğümlerinden Sefaköy, kuzeyde Basın Ekspres bağlantılı Halkalı Caddesi ile güneyde E-5 (D-100) Metrobüs aksının kesiştiği kritik bir geçiş noktasıdır. Sabah işe gidiş ve akşam dönüş saatlerinde ArmoniPark Outlet Center önünden Sefaköy alt geçidine kadar uzanan araç kuyrukları, özellikle soğutma sistemi zayıflamış veya debriyaj balatası aşınmış otomobilleri zorlar. Tevfikbey, Kartaltepe ve Söğütlüçeşme mahallelerinin yoğun yerleşim sokaklarıyla birleştiğinde, bölgede arıza yaşayan bir sürücünün dakikalar içinde hareket edebilen yerel bir kurtarıcıya ihtiyacı olur. ${BUSINESS.name}, Basın Ekspres çıkışındaki yakın konumuyla en yakın Sefaköy çekici aracını 10–15 dakikada yanınıza yönlendirir.</p>
      <p>Sefaköy'ün en büyük saha özelliği, ana arterler arasındaki geçişlerin köprülü kavşaklar ve tek yönlü yan yollarla ayrılmış olmasıdır. Yanlış şeride giren bir çekicinin Florya veya Yenibosna kavşağından dönmesi dakikalarca zaman kaybettirir. Tüm yan yol katılımlarına hakim operatörlerimiz, verdiğiniz yön bilgisine göre doğrudan doğru şeritten yaklaşır.</p>

      <h3>Sefaköy Çevresinde Müdahale Ettiğimiz Kritik Durumlar</h3>
      <p>Hem E-5 transit trafiğine hem de mahalle içi günlük sürüşe yanıt veren donanımımızla şu operasyonları gerçekleştiriyoruz:</p>
      <ul class="article-list">
        <li><strong>Sefaköy E-5 Alt Geçit ve Yan Yol Kurtarmaları:</strong> Hararet, triger kopması veya yakıt kesintisi sonucu akan trafikte kalan araçların güvenlik konileri eşliğinde süratle tahliyesi.</li>
        <li><strong>ArmoniPark ve AVM Otopark Çekimleri:</strong> Alışveriş merkezi kapalı katlarında veya açık park alanlarında elektronik anahtar/vites hatası veren otomobillerin hasarsız çıkarılması.</li>
        <li><strong>Halkalı Caddesi Ticari Araç Desteği:</strong> Cadde üzerindeki işyerlerine dağıtım yapan hafif ticari panelvan ve kamyonetlerin yükünü boşaltmadan Beşyol veya İkitelli sanayisine nakli.</li>
        <li><strong>Kartaltepe ve İnönü Mahallesi Sokak Müdahaleleri:</strong> Yoğun akşam parklanmasında iki araç arasında aküsü biten ya da lastiği yarılan otomobillere yerinde yol yardım.</li>
      </ul>

      <h3>Beşyol ve İkitelli Sanayilerine Dakik Teslimat ve Net Ücret</h3>
      <p>Sefaköy, Küçükçekmece Beşyol Oto Sanayi ve İkitelli Atatürk Oto Sanayi Sitesi'ne komşu konumuyla onarım erişimi açısından avantajlıdır. Aracınız platforma dört tekerlekten yumuşak kemerlerle bağlandıktan sonra dilediğiniz ustaya veya yetkili servise kaskolu olarak götürülür. ${BUSINESS.phoneDisplay} numaramızı aradığınızda Sefaköy oto çekici fiyatı güzergah ve araç tipine göre hemen belirlenir; indirme sırasında ek ödeme çıkmaz.</p>

      <div class="callout-box">
        <strong>Sefaköy Kavşak Bilgisi:</strong> E-5 Sefaköy mevkisinde yolda kaldığınızda Avcılar yönü mü yoksa Yenibosna-Bakırköy yönü mü olduğunu ve ana yol / yan yol bilgisini paylaşmanız intikal süresini ciddi biçimde kısaltır.
      </div>

      <h3>7/24 Kesintisiz Sefaköy Yol Yardım Güvencesi</h3>
      <p>Gündüz yoğun cadde trafiğinden gece geç saatlerdeki boş ama yüksek hızlı E-5 akışına kadar her koşulda ${BUSINESS.name} yanınızdadır. Güvenli sabitleme, mobil POS ile kart ödemesi ve kurumsal fatura imkanıyla Sefaköy'de güvenilir yol yardımı sunuyoruz.</p>
    `,
    fieldLogTitle: 'Sefaköy Halkalı Caddesi Ayrımında Şarj Dinamosu Arızalanan SUV Çekimi',
    fieldLogDesc: 'Hafta içi öğleden sonra Halkalı Caddesi üzerinden E-5 Sefaköy katılımına inerken akü şarj lambası yanan ve birkaç yüz metre sonra tamamen stop eden bir SUV sağ şeride çekildi. Basın Ekspres yakasından 11 dakikada gelen hidrolik kayar kasamız, düşük rampa eğimiyle tampon sürtmesi olmadan aracı yükleyip Beşyol özel elektrik servisine teslim etti.',
    faqs: [
      {
        q: 'Sefaköy E-5 metrobüs geçidi üzerinde aracım durursa ne kadar sürede ulaşırsınız?',
        a: 'Basın Ekspres ve Yenibosna bağlantı noktalarına yakınlığımız sayesinde Sefaköy E-5 hattına ortalama 10–15 dakika içinde ulaşım sağlıyoruz.'
      },
      {
        q: 'ArmoniPark AVM kapalı otoparkından alçak tavan uyumlu çekici çıkarabiliyor musunuz?',
        a: 'Evet. Standart kamyonların giremediği kapalı otopark katları için alçak profilli özel kurtarıcımız ve tekerlek taşıma kızaklarımızla güvenli çıkarma yapıyoruz.'
      },
      {
        q: 'Sefaköy’den Beşyol Oto Sanayi’ye kısa mesafe çekici ücreti neye göre belirlenir?',
        a: 'Mesafe kısa olsa da aracın kilitli olup olmaması, konumu ve segmenti dikkate alınarak telefonda sabit ve ekonomik bir tutar paylaşılır.'
      },
      {
        q: 'Halkalı Caddesi üzerinde hafif ticari panelvanımızı yüklü halde çektirebilir miyiz?',
        a: 'Evet. Güçlendirilmiş uzun şasili kayar kasa araçlarımız yasal yük sınırı dahilindeki ticari panelvanları yük boşaltmadan taşıyabilir.'
      },
      {
        q: 'Gece yarısı Tevfikbey veya Kartaltepe sokaklarında lastik patlaması için hizmet veriyor musunuz?',
        a: 'Evet, 7/24 nöbetçi ekibimiz yerinde stepne değişimi yapar; yedek lastiğiniz yoksa aracınızı hasarsız şekilde açık gece lastikçisine taşır.'
      }
    ]
  },
  {
    slug: 'atakent',
    name: 'Atakent',
    navbarTitle: 'ATAKENT ÇEKİCİ',
    category: 'mahalle',
    eta: '12–16 Dk',
    geo: { lat: 41.0458, lng: 28.7824 },
    hero: 'kapali-otopark',
    fieldImage: 'saha-suv',
    cardSummary: 'Atakent 1–3. Etap siteleri, ArenaPark, Acıbadem Atakent ve Tema İstanbul garajlarına alçak tavanlı Atakent oto çekici.',
    heroLead: `Atakent oto çekici ve 7/24 Atakent yol yardım ekibimizle Atakent 1.–3. Etap siteleri, Tema İstanbul, ArenaPark AVM ve Acıbadem Atakent Hastanesi çevresinde en yakın Atakent çekici desteğini sunuyoruz. 2.10m altı kapalı otopark garajlarından elektrikli SUV'lara kadar sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Atakent 1.–3. Etap Toplu Konutları',
      'Tema İstanbul & Avrupa Konutları',
      'ArenaPark Alışveriş Merkezi',
      'Acıbadem Atakent Hastanesi',
      'Soyak Olympiakent & Bosphorus City',
      'Atakent Bulvarı & 243. Cadde'
    ],
    articleHtml: `
      <h2>Atakent Rezidans ve Site Kapalı Otoparklarında Alçak Tavan Oto Kurtarma</h2>
      <p>İstanbul'un en planlı ve yüksek yoğunluklu modern yaşam havzalarından Atakent, on binlerce konutun yer aldığı dev site etaplarından oluşur. Atakent 1., 2. ve 3. Etap yerleşimleri, Avrupa Konutları Atakent, Soyak Olympiakent, Tema İstanbul ve Bosphorus City sitelerinde otomobillerin ezici çoğunluğu çok katlı yeraltı otoparklarında park edilir. Bu garajların tavan yükseklikleri sprinkler boruları ve kiriş altlarıyla birlikte 2.00 ila 2.15 metre seviyesindedir. Standart kayar kasa çekiciler 2.60 metreyi aşan kabin boyları yüzünden bariyerden içeri dahi giremez. ${BUSINESS.name}, Atakent'e özel görevlendirdiği alçak tavanlı 4x4 kapalı otopark kurtarıcılarıyla en yakın Atakent çekici olarak -2 ve -3. bodrum katlara doğrudan iner.</p>
      <p>Atakent Bulvarı, 4. Cadde ve 243. Cadde aksı boyunca uzanan bölgede ayrıca elektrikli ve hibrit SUV oranı İstanbul ortalamasının üzerindedir. Batarya soğutma hatası veren, 12V yardımcı aküsü boşaldığı için vitesi P konumundan çıkmayan veya duvar tipi şarj cihazında kilitlenen otomobillerde tekerleği sürüklemek aktarma organlarına ağır hasar verir. Ekiplerimiz her zaman dört tekerleği yerden kesen GoJak tekerlek arabaları ve kızak aparatlarıyla müdahale eder.</p>

      <h3>Atakent Sitesi, ArenaPark ve Hastane Çevresinde Öne Çıkan Hizmetler</h3>
      <p>Modern yerleşkenin günlük yaşam akışına göre optimize edilmiş saha operasyonlarımız şu başlıklarda toplanır:</p>
      <ul class="article-list">
        <li><strong>Spiral Rampalı Yeraltı Garaj Tahliyesi:</strong> İki beton kolon arasına sıkışmış, direksiyonu veya elektronik park freni kilitli araçların döner tekerlekli kızaklarla koridora alınıp rampadan yüzeye çıkarılması.</li>
        <li><strong>Acıbadem Atakent Hastanesi & ArenaPark Desteği:</strong> Hasta yakınlarının ve AVM ziyaretçilerinin otopark katlarında yaşadığı akü, marş ve immobilizer arızalarına hızlı müdahale.</li>
        <li><strong>Elektrikli & 4x4 Araçlara Dışarıda Kayar Kasa Aktarımı:</strong> Garajdan çıkarılan sürekli dört çeker veya elektrikli otomobillerin uzun servis yolculuğu için kapıda bekleyen düz platformlu kayar kasaya aktarılması.</li>
        <li><strong>Akım Korumalı Yerinde Akü Booster:</strong> Mekanik arızası bulunmayan araçlarda çekim masrafı çıkarmadan beyin korumalı dijital booster ile yerinde çalıştırma.</li>
      </ul>

      <h3>Site Güvenlik Girişi ve Şeffaf Fiyat Güvencesi</h3>
      <p>Atakent sitelerinde güvenlik bariyerinden kurtarıcı geçişi için plaka kaydı gerekir. ${BUSINESS.phoneDisplay} numaramızdan destek istediğinizde site güvenlik kulübesine araç bilgilerimizi önceden iletiyor, kat derinliği ve varış servis mesafesine göre sabit Atakent oto çekici fiyatını baştan teyit ediyoruz. İkitelli OSB, Başakşehir ve Basın Ekspres üzerindeki tüm yetkili markaların servislerine sigortalı ve KDV faturalı teslimat yapıyoruz.</p>

      <div class="callout-box">
        <strong>Atakent Kapalı Garaj İpucu:</strong> Bodrum katlarda cep telefonu sinyali zayıflayabildiği için garaj giriş yüksekliğini, blok harfini ve kat numarasını önceden paylaşmanız operatörümüzün bariyerde sizinle buluşup doğrudan araca inmesini kolaylaştırır.
      </div>

      <h3>7/24 Atakent Yol Yardım ve Nöbetçi Kadro</h3>
      <p>Hafta sonu akşamları ArenaPark çıkışında ya da pazartesi sabahı işe giderken site garajında karşılaştığınız beklenmedik araç arızalarında ${BUSINESS.name} 7/24 kesintisiz yanınızdadır.</p>
    `,
    fieldLogTitle: 'Tema İstanbul Atakent Eksi İkinci Kat Otoparkından Elektrikli SUV Tahliyesi',
    fieldLogDesc: 'Pazar sabahı Atakent Tema İstanbul yerleşkesinin eksi ikinci katında 12V yardımcı aküsü boşaldığı için vites seçicisi kilitlenen elektrikli bir SUV hareket edemedi. 1.95m yüksekliğindeki alçak profil 4x4 kurtarıcımız güvenlik kaydıyla kata inerek GoJak tekerlek arabaları yardımıyla aracı kolondan ayırdı ve spiral rampadan yüzeye çıkardı. Dışarıda kayar kasaya alınan araç Başakşehir yetkili servisine çiziksiz ulaştırıldı.',
    faqs: [
      {
        q: 'Atakent sitelerindeki 2.05m–2.10m tavanlı kapalı otoparklara çekiciniz sığıyor mu?',
        a: 'Evet. Filomuzdaki kapalı otopark kurtarıcısının net yüksekliği 1.95 metrenin altındadır; kirişlere ve yangın borularına sürtmeden eksi katlara güvenle iner.'
      },
      {
        q: 'Elektrikli veya 4x4 SUV aracım Atakent garajından çıkarılırken şanzıman zarar görür mü?',
        a: 'Hayır. Dört tekerleği kilitli ya da AWD araçlarda tüm lastiklerin altına tekerlek taşıma kızakları (dolly) yerleştirilir; açık alanda ise tam düz kayar kasaya aktarılır.'
      },
      {
        q: 'Site güvenliği çekiciyi içeri alırken hangi bilgilere ihtiyaç duyar?',
        a: 'Çağırdığınızda güvenlik noktasına vereceğimiz sürücü adı ve çekici plakasını paylaşıyoruz; bu sayede bariyerde beklemeden doğrudan bulunduğunuz bloğa geliyoruz.'
      },
      {
        q: 'Acıbadem Atakent Hastanesi ve ArenaPark AVM çevresine varış süreniz kaç dakikadır?',
        a: 'Basın Ekspres ve Halkalı bağlantı noktasından çıkış yapan ekiplerimiz trafik durumuna göre ortalama 12–16 dakika içinde Atakent genelinde yanınızda olur.'
      },
      {
        q: 'Sadece otoparktan dışarı çıkarma veya yerinde akü takviyesi alabilir miyim?',
        a: 'Elbette. Arızanız akü kaynaklıysa yerinde dijital takviye yapıyoruz; isterseniz aracı yalnızca garaj dışına çıkarıp teslim edebilir ya da servise kadar taşıyabiliriz.'
      }
    ]
  },
  {
    slug: 'bakirkoy',
    name: 'Bakırköy',
    navbarTitle: 'BAKIRKÖY ÇEKİCİ',
    category: 'ilce',
    eta: '12–18 Dk',
    geo: { lat: 40.9798, lng: 28.8772 },
    hero: 'saha-suv',
    fieldImage: 'saha-gece',
    cardSummary: 'Bakırköy Sahil Yolu, Florya, Ataköy, İncirli ve Capacity–Carousel çevresinde 12–18 dakikada Bakırköy oto çekici.',
    heroLead: `Bakırköy oto çekici ve 7/24 Bakırköy yol yardım hizmetimizle Ataköy, Florya, Yeşilköy, İncirli ve Kennedy Caddesi Sahil Yolu boyunca en yakın Bakırköy çekici desteğini sunuyoruz. Lüks sedan ve spor araçlarda sıfır sürtme garantisiyle sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Bakırköy Özgürlük Meydanı & İncirli Caddesi',
      'Ataköy 1.–11. Kısım & Marina Çevresi',
      'Capacity & Carousel AVM',
      'Kennedy Caddesi Sahil Yolu',
      'Florya – Yeşilköy Sahil Hattı',
      'Bakırköy Dr. Sadi Konuk Hastanesi'
    ],
    articleHtml: `
      <h2>Bakırköy, Ataköy ve Florya Hattında Hassas Araç Kurtarma Standardı</h2>
      <p>Avrupa Yakası'nın köklü sahil ilçesi Bakırköy; bir yanda İncirli Caddesi, Özgürlük Meydanı, Carousel ve Capacity AVM çevresindeki sıkışık şehir içi ticaret sokaklarını, diğer yanda Ataköy, Yeşilköy, Yeşilyurt ve Florya boyunca uzanan geniş sahil bulvarlarını kapsar. İlçedeki araç profili ağırlıklı olarak alçak ön tamponlu premium sedanlar, spor süspansiyonlu coupe modeller ve yüksek donanımlı elektrikli SUV'lardan oluşur. Bu araçlarda dik açılı eski tip rampalar kullanmak tampon altı karbon lip kırılmasına veya taban batarya muhafazasının çizilmesine yol açabilir. ${BUSINESS.name}, zemine paralel yaklaşan uzun takozlu hidrolik kayar kasalarıyla en yakın Bakırköy çekici olarak 12–18 dakikada güvenli müdahale sağlar.</p>
      <p>Kennedy Caddesi Sahil Yolu ile Rauf Orbay Caddesi üzerinde hafta sonları ve akşam saatlerinde artan gezi trafiği, kavşak alt geçitlerinde yaşanan ani lastik hasarlarını ve hararet arızalarını riskli hale getirir. Bakırköy Dr. Sadi Konuk Eğitim ve Araştırma Hastanesi çevresi ile Marmaray durak yaklaşımlarında ise park yasağı ihlali yaşamadan hızlı tahliye büyük önem taşır.</p>

      <h3>Bakırköy Geneline Yayılan Özel Yol Yardım Çözümleri</h3>
      <p>Ataköy kısımlarından Florya orman ve sahil aksına kadar farklı mahalle dokularına uygun ekipmanlarla çalışıyoruz:</p>
      <ul class="article-list">
        <li><strong>Alçak Tamponlu Spor & Lüks Araç Yüklemesi:</strong> Uzatmalı kompozit rampa takozları ve tekerlek sırtından bağlanan jant dostu yumuşak sapanlarla sıfır temaslı kayar kasa nakli.</li>
        <li><strong>Ataköy & Yeşilköy Kapalı Otopark Tahliyesi:</strong> Galleria, Capacity, Marmara Forum ve Ataköy rezidans garajlarından alçak tavanlı kurtarıcılarla güvenli çıkış.</li>
        <li><strong>Sahil Yolu & Florya Lastik/Akü Desteği:</strong> Gece saatlerinde Run-Flat lastiği yarılan veya aküsü tükenen araçlara yerinde destek ya da açık lastik servisine nakil.</li>
        <li><strong>Kasko Anlaşmalı Yetkili Servis Teslimatı:</strong> İncirli, Basın Ekspres, Yenibosna ve Topkapı hattındaki yetkili marka servislerine resmi faturalı ve sigortalı sevkiyat.</li>
      </ul>

      <h3>Şeffaf Fiyatlandırma ve 4 Nokta Tekerlek Koruması</h3>
      <p>Bakırköy oto çekici taleplerinizde ${BUSINESS.phoneDisplay} numarasını aradığınız anda bulunduğunuz semt (örneğin Ataköy 9. Kısım veya Yeşilköy Sahil) ve varış servisine göre sabit fiyat bildirilir. Çekme işlemi yalnızca aracın fabrika çıkışlı çeki demiri noktasından yapılır; alüminyum salıncaklara veya difüzör altına kesinlikle kanca takılmaz. Kredi kartı için mobil POS ve şirket araçları için KDV fatura her araçta hazırdır.</p>

      <div class="callout-box">
        <strong>Sahil Yolu Güvenlik Uyarısı:</strong> Rauf Orbay veya Kennedy Caddesi sahil şeridinde aracınız durduğunda sağ cebe çekip reflektör koyun; alt geçit içindeyseniz araç dışında güvenli kaldırımda bekleyerek canlı konum paylaşın.
      </div>

      <h3>7/24 Bakırköy Nöbetçi Oto Çekici Ağı</h3>
      <p>Florya, Yeşilköy, Ataköy, Kartaltepe, Osmaniye ve Zuhuratbaba mahallelerinin tamamında gece gündüz nöbette olan ${BUSINESS.name} kadrosu, güven veren sürüş ve hasarsız teslimat standartlarıyla her saat ulaşılabilirdir.</p>
    `,
    fieldLogTitle: 'Ataköy Sahil Yolu Alt Geçidinde Alçak Tamponlu Spor Sedanın Sürtmesiz Yüklenmesi',
    fieldLogDesc: 'Gece 23.15 sularında Rauf Orbay Caddesi Ataköy sapağı öncesinde sağ ön lastiği yarılan ve stepnesi bulunmayan alçak şasili spor bir sedan emniyet cebine çekildi. Yenibosna–İncirli hattından 14 dakikada ulaşan ekibimiz, kauçuk uzatma takozlarıyla rampa açısını düşürerek karbon ön ekte en ufak sürtme olmadan aracı platforma aldı ve Florya yönündeki açık lastik servisine bıraktı.',
    faqs: [
      {
        q: 'Alçak ön ekli veya spor süspansiyonlu aracım Bakırköy’de çekilirken tampon sürter mi?',
        a: 'Hayır. Kayar kasa platformumuz 6–8 derece düşük açıyla zemine oturur; ayrıca ekstra alçak spor araçlar için kauçuk uzatma takozları kullanarak sıfır sürtme sağlıyoruz.'
      },
      {
        q: 'Capacity, Carousel veya Marmara Forum kapalı otoparkından araç çekebiliyor musunuz?',
        a: 'Evet. Alışveriş merkezlerinin 2.00–2.10m tavan sınırlı garajlarına girebilen özel alçak profil kurtarıcılarımızla kat içi tahliye yapıyoruz.'
      },
      {
        q: 'Florya, Yeşilköy ve Ataköy’e çekici ortalama kaç dakikada gelir?',
        a: 'E-5 İncirli–Şirinevler ve Basın Ekspres çıkışlarına yakın nöbetçi araçlarımızla Bakırköy geneline ortalama 12–18 dakika içinde ulaşıyoruz.'
      },
      {
        q: 'Gece saatlerinde Bakırköy’de çekici fiyatı değişiyor mu?',
        a: 'Tarifemiz mesafe, araç segmenti ve gereken ekipmana göre şeffaf belirlenir; telefonda onayladığınız sabit ücret dışında gece sürpriz farkı talep edilmez.'
      },
      {
        q: 'Taşıma sırasında jantlarım veya elektrikli aracımın bataryası zarar görür mü?',
        a: 'Sabitleme kemerleri yalnızca lastik sırtından bağlanır, jant yüzeyine metal temas etmez; elektrikli araçlar ise dört tekerleği düz platform üstünde taşınır.'
      }
    ]
  },
  {
    slug: 'bayrampasa',
    name: 'Bayrampaşa',
    navbarTitle: 'BAYRAMPAŞA ÇEKİCİ',
    category: 'ilce sanayi',
    eta: '12–16 Dk',
    geo: { lat: 41.0468, lng: 28.9024 },
    hero: 'kamyonet-tasima',
    fieldImage: 'saha-istasyon',
    cardSummary: 'Forum İstanbul, Mega Center, Terazidere ve Bayrampaşa Otogar bağlantısında 12–16 dakikada Bayrampaşa oto çekici.',
    heroLead: `Bayrampaşa oto çekici ve 7/24 Bayrampaşa yol yardım ekibimizle Forum İstanbul, Mega Center Gıda Sitesi, Terazidere ve O-3 bağlantı yollarında en yakın Bayrampaşa çekici desteğini sunuyoruz. Binek araçlardan gıda ve lojistik kamyonetlerine kadar sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Forum İstanbul & IKEA Otoparkları',
      'Mega Center Gıda Toptancıları Sitesi',
      'Bayrampaşa – Maltepe E-5 Bağlantısı',
      'Terazidere & Sağmalcılar Metro Çevresi',
      'Yıldırım & Kocatepe Mahalleleri',
      'O-3 Hal Yolu & Kartaltepe Aksı'
    ],
    articleHtml: `
      <h2>Bayrampaşa Ticaret Sitesi, Forum İstanbul ve O-3 Hattında Hızlı Oto Kurtarma</h2>
      <p>Esenler ve Topkapı sanayi havzasına doğrudan komşu olan Bayrampaşa; mega alışveriş merkezleri, gıda toptancı halleri, soğuk zincir depoları ve yoğun yerleşim mahallelerini tek bir ilçe sınırında buluşturur. Forum İstanbul ve IKEA çevresindeki geniş açık ve katlı otoparklar hafta sonları binlerce aile aracını ağırlarken, Mega Center ve Bayrampaşa Hal Yolu gün boyu frigolu kamyonetler ve dağıtım panelvanlarıyla doludur. Bu çift yönlü trafik yapısında yolda kalan bir aracın segmentine uygun donanımlı çekiciyi hızlıca çağırmak kritik önem taşır. ${BUSINESS.name}, Esenler–Bayrampaşa sınırı üzerinden en yakın Bayrampaşa çekici ekibini 12–16 dakikada olay noktasına sevk eder.</p>
      <p>İlçenin iç kesimlerindeki Terazidere, Yıldırım, Kocatepe, Muratpaşa ve Altıntepsi mahallelerinde ise dik yokuşlar ve dar semt caddeleri öne çıkar. Demirkapı Caddesi ve Abdi İpekçi Caddesi boyunca yaşanan hararet, baskı balata sıyırması veya elektrik kesintisi gibi durumlarda kısa şasili kurtarıcılarımızla trafiği kilitlemeden işlem yapıyoruz.</p>

      <h3>Bayrampaşa İlçesinde Öne Çıkan Çekici ve Yol Yardım Talepleri</h3>
      <p>Ticaret siteleri, otoparklar ve bağlantı otoyolları için ayrı operasyon çözümleri uyguluyoruz:</p>
      <ul class="article-list">
        <li><strong>Mega Center & Hal Yolu Ticari Nakliye:</strong> Soğutuculu (frigo) kamyonetlerin, uzun şasi panelvanların ve esnaf araçlarının yük boşaltılmadan Topkapı veya İkitelli sanayisine taşınması.</li>
        <li><strong>Forum İstanbul & IKEA Garaj Müdahalesi:</strong> Alışveriş sonrası marş basmayan, anahtar pili/immobilizer hatası veren veya kapalı katlarda kilitlenen otomobillerin alçak tavan kurtarıcıyla çıkarılması.</li>
        <li><strong>O-3 & Sağmalcılar Bağlantı Kazaları:</strong> Viyadük ve katılım rampalarında yürüyen aksamı hasar alan araçların vinç ve kızak aparatıyla güvenli platforma yüklenmesi.</li>
        <li><strong>Mahalle İçi Akü & Lastik Yol Yardımı:</strong> Yıldırım, Cevatpaşa ve Terazidere sokaklarında sabah işe gidiş öncesi çalışmayan araçlara akım korumalı booster takviyesi.</li>
      </ul>

      <h3>Topkapı ve İkitelli Sanayilerine Sabit Fiyatlı Doğrudan Sevkiyat</h3>
      <p>Bayrampaşa'dan Topkapı Akınsal Sanayi'ye, Rami tamir bölgesine veya İkitelli OSB servislerine nakil mesafesi oldukça kısadır. ${BUSINESS.phoneDisplay} hattından konum ve araç tipinizi (binek, SUV veya panelvan) ilettiğiniz anda net Bayrampaşa oto çekici fiyatı verilir; mobil POS ve kurumsal KDV fatura kolaylığı sunulur.</p>

      <div class="callout-box">
        <strong>Mega Center & Forum İstanbul İpucu:</strong> Büyük tesislerde blok numarası veya Forum İstanbul otopark renk/kat kodunu paylaşmanız, kurtarıcının tesis içinde dolaşmadan yanınıza inmesini sağlar.
      </div>

      <h3>7/24 Bayrampaşa Nöbetçi Kurtarma Ekibi</h3>
      <p>Gece hal sevkiyatları sırasında ya da geç saatte Terazidere ve Kocatepe caddelerinde aracınız durduğunda ${BUSINESS.name} 7/24 kesintisiz saha desteğiyle aracınızı güvenle hedefine ulaştırır.</p>
    `,
    fieldLogTitle: 'Mega Center Çıkışında Arka Makası Zorlanan Panelvanın Güvenli Nakli',
    fieldLogDesc: 'Sabah sevkiyatı sırasında Bayrampaşa Mega Center çıkış kapısı yakınında enjektör kesintisi nedeniyle stop eden gıda yüklü uzun şasi bir panelvan yolu daralttı. Esenler sınırından 13 dakikada ulaşan ağır hizmet kayar kasamız, aracı dingil dengesini bozmadan rampaya çekip dört noktadan kilitledi ve Topkapı ticari araç servisine zamanında teslim etti.',
    faqs: [
      {
        q: 'Forum İstanbul ve IKEA kapalı otopark katlarından aracımı çıkarabiliyor musunuz?',
        a: 'Evet. Alçak tavan yüksekliğine uyumlu özel otopark kurtarıcılarımız ve tekerlek patenlerimizle garaj içine girip aracınızı çizmeden açık alana alıyoruz.'
      },
      {
        q: 'Mega Center içinde gıda yüklü frigolu kamyonet arızalanırsa çekebilir misiniz?',
        a: 'Yasal taşıma ağırlığı sınırları içindeki uzun şasi panelvan ve hafif kamyonetleri yükünüzü aktarmaya gerek kalmadan güçlendirilmiş kayar kasa ile taşıyoruz.'
      },
      {
        q: 'Bayrampaşa Terazidere, Yıldırım veya Kocatepe’ye ortalama varış süreniz nedir?',
        a: 'Esenler ve O-3 bağlantı noktasına yakın konumumuz sayesinde Bayrampaşa genelinde 12–16 dakika içinde olay yerine ulaşıyoruz.'
      },
      {
        q: 'Bayrampaşa’dan Topkapı Sanayi Sitesi’ne çekici ücreti telefonda netleşiyor mu?',
        a: 'Evet. Çağrı sırasında konum, araç sınıfı ve teslim noktasını aldığımızda net tutarı paylaşıyoruz; varışta ek ücret talep edilmez.'
      },
      {
        q: 'Şirket aracımız için KDV dahil resmi fatura kesiliyor mu?',
        a: 'Elbette. Kurumsal filo, hal esnafı ve ticari işletmeler için her işlem sonunda resmi KDV fatura ve mobil POS ile ödeme imkanı sunuyoruz.'
      }
    ]
  },
  {
    slug: 'topkapi',
    name: 'Topkapı',
    navbarTitle: 'TOPKAPI ÇEKİCİ',
    category: 'sanayi otoyol',
    eta: '12–18 Dk',
    geo: { lat: 41.0185, lng: 28.9182 },
    hero: 'ticari-panelvan',
    fieldImage: 'saha-cadde',
    cardSummary: 'Topkapı Akınsal Oto Sanayi, Cevizlibağ E-5 ve Davutpaşa Caddesi hattında 12–18 dakikada Topkapı oto çekici.',
    heroLead: `Topkapı oto çekici ve 7/24 yol yardım ekibimizle Topkapı Akınsal Oto Sanayi, Cevizlibağ E-5 kavşağı ve Davutpaşa Caddesi üzerinde en yakın Topkapı çekici desteğini veriyoruz. Sanayi ustalarına araç teslimatından ticari panelvan kurtarmaya kadar sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'Topkapı Akınsal & Çırpıcı Oto Sanayi Siteleri',
      'Cevizlibağ E-5 Metrobüs & T1 Tramvay Kavşağı',
      'Davutpaşa Caddesi & Litros Yolu',
      'Maltepe Mahallesi İş Merkezleri',
      'Topkapı Kaleiçi & Millet Caddesi Girişi',
      'Yedikule – Zeytinburnu Bağlantı Yolu'
    ],
    articleHtml: `
      <h2>Topkapı Oto Sanayi Siteleri ve Cevizlibağ Kavşağında Profesyonel Çekici Desteği</h2>
      <p>İstanbul'un en köklü tamir ve yedek parça merkezlerinden biri olan Topkapı; Akınsal Oto Sanayi Sitesi, Gümüşsuyu Caddesi, Litros Yolu ve Maltepe iş merkezleriyle hem binek hem de ticari araçların gün boyu aktığı bir sanayi havzasıdır. Aynı zamanda E-5 (D-100) Cevizlibağ kavşağı, T1 tramvay hattı, metrobüs aktarması ve Vatan–Millet caddelerinin birleşim noktası olması sebebiyle trafik yoğunluğu sabahın erken saatlerinden akşama kadar yüksek seyreder. Bu kavşaklarda yaşanan bir mekanik kesinti veya maddi hasarlı kaza anında aracın saniyeler içinde şeritten çekilmesi gerekir. ${BUSINESS.name}, Merter–Esenler bağlantısından hızlı çıkış yaparak en yakın Topkapı çekici olarak 12–18 dakikada yanınıza ulaşır.</p>
      <p>Topkapı'nın sanayi kimliği, sıradan yol yardım taleplerinin yanında yürüyemeyen araçların atölyeler arası transferini de öne çıkarır. Motoru rektifiyeye gidecek, şanzımanı sökülmüş veya kaportadan boya fırınına geçecek otomobillerin sanayi içi dar sokaklarda halatla çekilmesi hem tehlikeli hem de yasaktır. Kısa ve uzun kayar kasalı kurtarıcılarımızla atölye önlerine milimetrik indirme yapıyoruz.</p>

      <h3>Topkapı ve Cevizlibağ Çevresinde Sunduğumuz Başlıca Operasyonlar</h3>
      <p>Sanayi ustaları, ticari filolar ve E-5 sürücüleri için özelleştirilmiş hizmet kapsamımız şunlardır:</p>
      <ul class="article-list">
        <li><strong>Cevizlibağ E-5 & Vatan Caddesi Acil Tahliye:</strong> Köprü üstlerinde, alt geçitlerde veya metrobüs paralelinde stop eden araçların reflektör güvenliği altında hızla yüklenmesi.</li>
        <li><strong>Sanayi Dükkanları Arası Kısa Transfer:</strong> Akınsal, Terazi ve Maltepe sanayi bloklarında yürür aksamı olmayan araçların elektrikçi, mekanikçi ve döşemeci arasında hasarsız taşınması.</li>
        <li><strong>Davutpaşa Matbaa ve Lojistik Filo Desteği:</strong> Matbaalar ve tekstil atölyelerine çalışan panelvan ve kamyonetlerin sabit fiyatla servise ulaştırılması.</li>
        <li><strong>Diğer İlçelerden Topkapı Ustalarına Teslimat:</strong> Bağcılar, Bahçelievler, Bakırköy veya İkitelli'de arızalanan araçların düzenli gittiğiniz Topkapı ustanızın kapısına doğrudan indirilmesi.</li>
      </ul>

      <h3>Şeffaf Ücretlendirme ve Kaskolu Araç Teslimatı</h3>
      <p>Topkapı oto çekici ve yol yardım operasyonlarında tüm taşıma süreci nakliye emtia sigortası kapsamındadır. ${BUSINESS.phoneDisplay} numaramızdan aradığınızda ister sanayi içi kısa transfer ister E-5 üzerinden acil kurtarma talep edin, net ücret yola çıkmadan paylaşılır. Teslimat anında mobil POS ve kurumsal KDV fatura düzenlenir.</p>

      <div class="callout-box">
        <strong>Cevizlibağ Yön İpucu:</strong> E-5 Cevizlibağ çevresinde kaldığınızda Haliç–Topkapı yönü mü yoksa Merter–Bakırköy yönü mü olduğunu ve tramvay tarafında olup olmadığınızı söylemeniz en hızlı kavşak dönüşünü seçmemizi sağlar.
      </div>

      <h3>7/24 Kesintisiz Topkapı Çekici Nöbeti</h3>
      <p>Sanayi mesaisi akşam sona erse de Cevizlibağ E-5 ve Topkapı sur içi bağlantılarında trafik gece boyu sürer. ${BUSINESS.name}, gece yarısı aküsü biten ya da kazaya karışan sürücüler için de 7/24 kesintisiz sahadadır.</p>
    `,
    fieldLogTitle: 'Cevizlibağ E-5 Katılımında Aks Kesen Panelvanın Akınsal Oto Sanayiye Nakli',
    fieldLogDesc: 'Hafta içi sabah saatinde Cevizlibağ E-5 yan yolundan Topkapı istikametine dönerken sağ ön aksı kırılan hafif ticari bir panelvan şeridi kapattı. Merter bağlantısından 14 dakikada gelen ekibimiz, hasarlı tekerleğin altına ağır hizmet kızağı yerleştirerek aracı yürüme aksamına ek zarar vermeden platforma aldı ve 10 dakika içinde Akınsal Oto Sanayi’deki ustanın dükkan önüne bıraktı.',
    faqs: [
      {
        q: 'Topkapı Akınsal Oto Sanayi içinde bir dükkandan diğerine kısa mesafe çekim yapıyor musunuz?',
        a: 'Evet. Motoru veya şanzımanı sökülmüş yürüyemeyen araçları sanayi blokları arasında halat kullanmadan güvenli kayar kasa ile atölyeden atölyeye taşıyoruz.'
      },
      {
        q: 'Cevizlibağ E-5 kavşağında akşam trafiğinde çekici kaç dakikada ulaşır?',
        a: 'Merter ve Davutpaşa alternatif bağlantılarını kullandığımız için yoğun saatlerde dahi ortalama 12–18 dakika içinde yanınıza ulaşıyoruz.'
      },
      {
        q: 'Bağcılar veya Başakşehir’den Topkapı’daki kendi ustama araç çektirebilir miyim?',
        a: 'Elbette. Avrupa Yakası’nın hangi noktasında olursanız olun aracınızı doğrudan Topkapı Oto Sanayi’deki ustanızın kapısına kaskolu olarak teslim ediyoruz.'
      },
      {
        q: 'Topkapı bölgesinde ticari kamyonet ve uzun şasi panelvan taşıyor musunuz?',
        a: 'Evet. Uzun şasili panelvanlar ve kapalı kasa kamyonetler için güçlendirilmiş ağır hizmet kayar kasalarımız 7/24 hazırdır.'
      },
      {
        q: 'Gece Topkapı’da arızalanırsam aracı sabaha kadar bekletmeden nereye bırakabilirsiniz?',
        a: 'Talebinize göre aracınızı evinizin sokağına ya da ustanızın sanayi içi güvenli cep alanına bırakıyor, teslimat fotoğrafını sizinle paylaşıyoruz.'
      }
    ]
  },
  {
    slug: 'tem-otoyolu',
    name: 'TEM Otoyolu',
    navbarTitle: 'TEM OTOYOLU ÇEKİCİ',
    category: 'otoyol',
    eta: '10–15 Dk',
    geo: { lat: 41.0595, lng: 28.8365 },
    hero: 'saha-otoyol',
    fieldImage: 'saha-gunbatimi',
    cardSummary: 'TEM (O-3 / E-80) Mahmutbey–İSTOÇ–Tekstilkent–Metris–Bahçeşehir hattında emniyet şeridi güvenlikli TEM Otoyolu oto çekici.',
    heroLead: `TEM Otoyolu oto çekici ve 7/24 otoyol yol yardım ekibimizle Mahmutbey Gişeleri, İSTOÇ, Tekstilkent, Metris ve İkitelli bağlantı kollarında en yakın TEM Otoyolu çekici olarak 10–15 dakikada emniyet şeridindeyiz. Yüksek hızlı trafikte reflektör güvenlik koridoruyla sabit fiyatlı oto kurtarma sunuyoruz.`,
    landmarks: [
      'TEM Mahmutbey Gişeleri & KMO Katılımı',
      'TEM İSTOÇ – İkitelli Kavşağı',
      'TEM Göztepe – Yüzyıl – Tekstilkent Hattı',
      'TEM Esenler – Metris Bağlantısı',
      'TEM Ispartakule – Bahçeşehir İstikameti',
      'TEM Gaziosmanpaşa – Alibeyköy Viyadüğü'
    ],
    articleHtml: `
      <h2>TEM (O-3 / E-80) Otoyolu Üzerinde Yüksek Güvenlikli Acil Oto Kurtarma</h2>
      <p>Avrupa Yakası'nın doğu-batı transit omurgası olan TEM Otoyolu (O-3 / E-80), Kuzey Marmara bağlantısı, Mahmutbey Gişeleri, İSTOÇ, Tekstilkent ve Metris kavşakları arasında günde yüz binlerce taşıtı yüksek hızla taşır. Şehir içi caddelerden farklı olarak TEM üzerinde yaşanan bir hararet, triger kopması, lastik parçalanması veya yakıt kesintisi, saniyeler içinde ağır ikincil çarpışma riskine dönüşür. Duran bir aracın içinde beklemek veya otoyol şeridinde kendi başına lastik değiştirmeye çalışmak son derece tehlikelidir. ${BUSINESS.name}, doğrudan TEM paralelindeki İSTOÇ, Mahmutbey, Yüzyıl ve Tekstilkent nöbet noktalarından çıkış yaparak en yakın TEM Otoyolu çekici desteğini 10–15 dakika içinde olay şeridine ulaştırır.</p>
      <p>Otoyolda başarıyı belirleyen iki kritik unsur vardır: doğru yön (Edirne istikameti mi, Ankara / Köprü istikameti mi) tespiti ve olay yeri ışık-reflektör emniyeti. Kurtarıcılarımız otoyola en yakın katılımdan çıkıp aracınızın arkasına tampon açı oluşturacak şekilde yanaşır; yüksek lümenli sarı ikaz barları ve üçgen konilerle güvenli bir çalışma cebi kurduktan sonra yüklemeye başlar.</p>

      <h3>TEM Otoyolu Boyunca Sunduğumuz Otoyol Kurtarma Standartları</h3>
      <p>Otoyol koşullarına özel hazırlanan ekipman ve prosedürlerimiz şu adımları kapsar:</p>
      <ul class="article-list">
        <li><strong>Hızlı Emniyet Şeridi Tahliyesi:</strong> Aracın riskli otoyol kenarında kalma süresini minimumda tutmak için hidrolik kayar tablanın dakikalar içinde indirilip aracın tambur vinçle platforma çekilmesi.</li>
        <li><strong>Yüksek Hız Lastik Parçalanmaları:</strong> Yedek lastiği olmayan veya sol tekerleği akan trafik tarafında patladığı için tehlike altındaki araçların jant korumalı olarak en yakın güvenli lastikçiye nakli.</li>
        <li><strong>Kaza ve Bariyer Teması Kurtarmaları:</strong> Aksı kırılan, hava yastığı açılan veya bariyere sürten otomobillerin trafik ekibi tutanağı sonrası kızak aparatlarıyla ikincil hasarsız yüklenmesi.</li>
        <li><strong>Yolcular İçin Güvenli Kabin Refakati:</strong> Araç sahibi ve ailesinin otoyol kenarında soğukta ya da tehlikede bırakılmadan kurtarıcının konforlu yolcu kabiniyle servise kadar taşınması.</li>
      </ul>

      <h3>Yön Doğruluğu, Sabit Fiyat ve Kasko Faturası</h3>
      <p>TEM Otoyolu üzerinde ters yönden dönmek kilometrelerce mesafe ve uzun gecikme demektir. ${BUSINESS.phoneDisplay} numarasını aradığınızda WhatsApp canlı konumuna ek olarak Edirne veya Ankara istikametini ve geçtiğiniz son tabelayı paylaşmanız anında en yakın katılım kolundan çıkmamızı sağlar. Yola çıkmadan net TEM Otoyolu çekici fiyatı onaylanır; talep edilirse kasko asistans iadesi için resmi KDV fatura verilir.</p>

      <div class="callout-box">
        <strong>TEM Otoyolu Hayati Güvenlik Kuralı:</strong> Aracınız arıza yaptığında sağ emniyet şeridine yanaşıp dörtlüleri yakın, tekerlekleri sağa kırın ve tüm yolcularla birlikte mutlaka çelik bariyerin dış tarafına geçip bekleyin.
      </div>

      <h3>7/24 Gece-Gündüz TEM Otoyolu Yol Yardım</h3>
      <p>Gece otoyol hızlarının daha da arttığı saatlerde, yağışlı veya sisli havalarda ${BUSINESS.name} kesintisiz nöbet düzeniyle Mahmutbey'den Metris ve Alibeyköy viyadüğüne kadar her noktada güvenilir desteğinizdir.</p>
    `,
    fieldLogTitle: 'TEM Ankara Yönü İSTOÇ Geçişinde Radyatör Hortumu Patlayan Aracın Hızlı Tahliyesi',
    fieldLogDesc: 'Akşam 20.15 sularında TEM Otoyolu Ankara istikameti İSTOÇ sapağını 400 metre geçtikten sonra soğutma hortumu patlayan bir binek otomobil emniyet şeridinde kaldı. İSTOÇ nöbetçi noktamızdan 10 dakikada otoyola bağlanan kayar kasamız, reflektör dizilimiyle trafik güvenliğini sağlayıp 4 dakika içinde aracı yükledi ve sürücüyle birlikte Bağcılar’daki servise ulaştırdı.',
    faqs: [
      {
        q: 'TEM Otoyolu’nda trafik tamamen durmuşken çekici bana nasıl yetişecek?',
        a: 'Mahmutbey, İSTOÇ, Göztepe, Tekstilkent ve Metris bağlantı kollarını iyi biliyoruz. Tıkanan bölgeden hemen önceki en yakın katılımdan otoyola girerek bekleme süresini 10–15 dakika bandında tutuyoruz.'
      },
      {
        q: 'TEM üzerinde sol şerit ya da orta şeritte aracım kilitlendi, nasıl müdahale ediliyor?',
        a: 'Çok yüksek riskli şerit blokajlarında öncelikle dörtlüleri yakıp güvenli alana geçmeniz gerekir; ekibimiz uyarı ışıklarıyla güvenlik yaklaşımı kurup aracı en kısa sürede şeritten tahliye eder.'
      },
      {
        q: 'Otobanda sadece lastiğim patladı, yerinde değiştiriyor musunuz yoksa çekici mi gerekir?',
        a: 'Sol taraf gibi akan trafiğe bakan tehlikeli noktalarda otoyol kenarında kriko kurmak risklidir. Bu gibi durumlarda aracı kayar kasa ile en yakın güvenli cebe veya lastikçiye almak en güvenli yoldur.'
      },
      {
        q: 'TEM Otoyolu kaza veya arıza çekici masrafını kasko şirketim karşılar mı?',
        a: 'Poliçenizde yol yardım teminatı varsa adınıza kestiğimiz resmi KDV’li çekici faturası ile sigorta şirketinize masraf tazmini başvurusu yapabilirsiniz.'
      },
      {
        q: 'TEM üzerinden şehir dışı (Tekirdağ, Kocaeli, Sakarya) teslimat yapıyor musunuz?',
        a: 'Evet. Otoyolda yolda kalan aracınızı dilediğiniz İstanbul servisine ya da tekli VIP kayar kasa ile çevre illerdeki adresinize sigortalı olarak taşıyoruz.'
      }
    ]
  },
  {
    slug: 'e5',
    name: 'E-5 (D-100)',
    navbarTitle: 'E-5 OTO ÇEKİCİ',
    category: 'otoyol',
    eta: '10–15 Dk',
    geo: { lat: 40.9978, lng: 28.8412 },
    hero: 'saha-gunbatimi',
    fieldImage: 'saha-otoyol',
    cardSummary: 'E-5 (D-100) Cevizlibağ–Merter–İncirli–Şirinevler–Yenibosna–Sefaköy–Küçükçekmece hattında 7/24 E-5 oto çekici.',
    heroLead: `E-5 (D-100) oto çekici ve 7/24 E-5 yol yardım ekibimizle Cevizlibağ, Merter, İncirli, Şirinevler, Yenibosna, Sefaköy ve Küçükçekmece koridorunda en yakın E-5 çekici olarak 10–15 dakikada yanınızdayız. Ana yol ve yan yol katılımlarında refleks hızıyla sabit fiyatlı oto kurtarma sağlıyoruz.`,
    landmarks: [
      'E-5 Cevizlibağ – Merter – İncirli Kesimi',
      'E-5 Şirinevler – Yenibosna Kavşağı',
      'E-5 Sefaköy – Beşyol – Cennet Hattı',
      'E-5 Küçükçekmece Göl Köprüsü – Avcılar Girişi',
      'Metrobüs Paraleli Yan Yol Cepleri',
      'Ataköy – Florya D-100 Katılımları'
    ],
    articleHtml: `
      <h2>E-5 (D-100) Karayolu ve Yan Yollarında Dakik Oto Çekici Operasyonu</h2>
      <p>İstanbul'un en eski ve en yoğun doğu-batı arteri olan E-5 (D-100) karayolu, ortasından geçen metrobüs hattı sebebiyle pek çok kesimde emniyet şeridi bulunmayan dar bir akış koridoruna sahiptir. Cevizlibağ'dan başlayıp Merter, İncirli, Şirinevler, Yenibosna, Sefaköy, Beşyol ve Küçükçekmece göl köprüsüne uzanan bu hatta arıza yapan bir otomobil, yalnızca birkaç dakika içinde kilometrelerce arka kuyruğun merkezinde kalır. Bu baskı altında sürücünün en büyük ihtiyacı, hangi yanyolun ana yola bağlandığını bilen hızlı bir kurtarıcıdır. ${BUSINESS.name}, Basın Ekspres, Bahçelievler ve Güngören çıkış noktalarından direkt bağlantı kurarak en yakın E-5 (D-100) çekici ve E-5 oto çekici desteğini 10–15 dakikada ulaştırır.</p>
      <p>E-5 üzerinde ana yol (ekspres) ile paralel yan yollar arasında beton bariyerler bulunur. Yalnızca "E-5 Şirinevler" demek yerine "E-5 ana yol Avcılar yönü" veya "E-5 yan yol Topkapı yönü" bilgisinin paylaşılması, ekibimizin bariyerin yanlış tarafına girmesini önleyerek müdahale süresini yarıya indirir.</p>

      <h3>E-5 (D-100) Koridorunda Sık Yönetilen Kurtarma Senaryoları</h3>
      <p>Yoğun metrobüs paraleli trafik akışında şu vakalar için 7/24 aktif çözüm üretiyoruz:</p>
      <ul class="article-list">
        <li><strong>Metrobüs Bariyeri Kenarında Stop Eden Araçlar:</strong> Baskı balata sıyırması, termostat patlaması veya sensör kesintisi nedeniyle şeritte kalan otomobillerin arkadan güvenlik konileriyle korunarak hızla kayar kasaya alınması.</li>
        <li><strong>Yanyol Katılım ve Alt Geçit Kazaları:</strong> Yenibosna–Basın Ekspres ayrımı ile Florya–Sefaköy alt geçitlerinde gerçekleşen çarpışmalarda ön takımı hasarlı araçların kızakla yüklenmesi.</li>
        <li><strong>Elektrikli & Hibrit Araç Şarj Kesintisi:</strong> Trafikte bataryası kritik seviyeye düşen elektrikli araçların rejeneratif sistemine zarar vermeden en yakın hızlı şarj istasyonuna ulaştırılması.</li>
        <li><strong>Çevre Sanayilere Doğrudan Çekim:</strong> E-5 üzerindeki arızalı aracın konumuna göre Topkapı Akınsal, Beşyol Oto Sanayi veya İkitelli Atatürk Oto Sanayi'ye kesintisiz teslimi.</li>
      </ul>

      <h3>Şeffaf Fiyatlandırma ve 7/24 Kaskolu Nakliye</h3>
      <p>E-5 çekici hizmetimizde fiyat politikası günün her saatinde şeffaftır. ${BUSINESS.phoneDisplay} hattından yön ve varış servisinizi belirttiğiniz anda net E-5 (D-100) oto çekici fiyatı verilir; yoğun trafik nedeniyle bekleme farkı eklenmez. Tüm araçlarımız emtia taşıma kaskolu, mobil POS cihazlı ve resmi KDV faturalıdır.</p>

      <div class="callout-box">
        <strong>E-5 Acil Durum İpucu:</strong> Emniyet şeridinin dar olduğu noktalarda aracınız arızalandığında hemen dörtlüleri yakın, kaputu açıp önünde beklemeyin; yolcuları sağ bariyer dışına alıp en yakın metrobüs durak adını referans verin.
      </div>

      <h3>Gece ve Gündüz Kesintisiz D-100 Yol Yardım Hattı</h3>
      <p>Gündüz tampon tampona ilerleyen dur-kalk trafikten gece yarısı yüksek süratli E-5 akışına kadar ${BUSINESS.name}, Avrupa Yakası D-100 hattının tamamında 7/24 güvenilir yol yardım partnerinizdir.</p>
    `,
    fieldLogTitle: 'E-5 İncirli – Bahçelievler Yönünde Metrobüs Kenarında Kalan Aracın Tahliyesi',
    fieldLogDesc: 'Sabah 08.50 yoğunluğunda E-5 ana yol Bahçelievler–İncirli arası metrobüs bariyerinin hemen yanında yakıt pompası arızalanan bir sedan trafiği tek şeride düşürdü. Güngören yan yol bağlantısından 11 dakikada ana yola katılan hidrolik kayar kasamız, tepe flaşörleriyle akışı yavaşlatıp 4 dakika içinde aracı yükledi ve Yenibosna yetkili servisine ulaştırdı.',
    faqs: [
      {
        q: 'E-5 ana yolda mı yoksa yanyolda mı kaldığımı çekiciye söylemem neden önemli?',
        a: 'E-5 boyunca ana yol ile yan yollar bariyerle ayrılmıştır. Bulunduğunuz bandı ve istikameti (Topkapı yönü veya Avcılar yönü) belirtmeniz ekibimizin bariyer dışında kalmadan doğrudan arkanıza yaklaşmasını sağlar.'
      },
      {
        q: 'E-5 Cevizlibağ’dan Küçükçekmece’ye kadar her noktaya ortalama kaç dakikada gelirsiniz?',
        a: 'Güngören, Bahçelievler, Basın Ekspres ve Sefaköy’e yakın nöbetçi noktalarımızdan çıkış yaptığımız için E-5 boyunca ortalama 10–15 dakika içinde ulaşım sağlıyoruz.'
      },
      {
        q: 'Emniyet şeridi olmayan bir noktada aracım bozulursa yükleme güvenli yapılır mı?',
        a: 'Evet. Kurtarıcılarımız yüksek görünürlüklü LED uyarı barları ve reflektör konileriyle arkanızda güvenli fren mesafesi oluşturur; kayar tabla hızla indirilip araç dakikalar içinde alınır.'
      },
      {
        q: 'E-5 üzerinde motosiklet veya ticari panelvan için de çekici çağırabilir miyim?',
        a: 'Evet. Binek otomobillerin yanı sıra kızaklı motosiklet çekici ve uzun şasili ticari panelvan taşıyıcılarımız D-100 hattında 7/24 aktiftir.'
      },
      {
        q: 'E-5 oto çekici ücretini olay yerinde kredi kartıyla ödeyebilir miyim?',
        a: 'Tüm çekicilerimizde mobil POS cihazı bulunur; nakit, havale veya kredi kartı ile ödeme yapabilir, şirketiniz veya kasko dosyanız için fatura talep edebilirsiniz.'
      }
    ]
  }
];
