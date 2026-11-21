'use strict';

const { BUSINESS } = require('./business');

module.exports = [
  {
    slug: 'bagcilar',
    name: 'Bağcılar',
    navbarTitle: 'BAĞCILAR ÇEKİCİ',
    category: 'mahalle merkez',
    eta: '10–12 Dk',
    geo: { lat: 41.0343, lng: 28.8567 },
    hero: 'saha-merkez',
    fieldImage: 'saha-cadde',
    cardSummary: 'Bağcılar Meydan, İstanbul Caddesi ve dar mahalle sokaklarına 10–12 dakikada ulaşan kayar kasa ve patenli çekici desteği.',
    heroLead: 'Bağcılar Meydanı, Çiftlik ve Kirazlı hattındaki yoğun ilçe trafiğinde aracınız durduğunda bekletmeden yanınıza ulaşıyoruz. Dar tek yönlü sokaklara uygun kompakt kurtarıcılarımızla otomobilinizi hasarsız biçimde istediğiniz servise naklediyoruz.',
    landmarks: [
      'Bağcılar Meydanı',
      'İstanbul Caddesi',
      'Bağcılar Eğitim ve Araştırma Hastanesi',
      'Kirazlı Metro İstasyonu',
      'Çiftlik Demirkapı Bağlantısı',
      'Güngören Caddesi ve Tabya Kavşağı'
    ],
    articleHtml: `
      <h2>Bağcılar Merkez ve Ara Sokaklarında Hızlı Kurtarma Planlaması</h2>
      <p>İstanbul Avrupa Yakası'nın nüfus yoğunluğu en yüksek ilçelerinden biri olan Bağcılar, hem ana arterleri hem de birbirine dik kesen tek yönlü sokak yapısıyla özel bir saha hakimiyeti gerektirir. Sancaktepe, Merkez, Çınar, Yenigün ve Yıldıztepe mahallelerinde yol kenarına çift sıra bırakılan araçlar yüzünden standart uzun şasili kamyonlar pek çok sokağa dönüş yapamaz. ${BUSINESS.name} filosu bu dokuyu dikkate alarak kısa dingil mesafeli, manevra kabiliyeti yüksek kayar kasa araçları ilçe merkezinde nöbetçi tutar.</p>
      <p>İstanbul Caddesi boyunca uzanan T1 tramvay hattı, günün neredeyse her saatinde araç trafiğini dar bir şeride sıkıştırır. Tramvay güzergahına yakın kavşaklarda yaşanan hararet, debriyaj teli kopması veya elektrik kesintisi gibi arızalar saniyeler içinde uzun kuyruklara yol açar. Meydan ve Kirazlı ekseninde hazır bekleyen saha ekiplerimiz, çağrının ardından ortalama 10 ila 12 dakika içinde olay noktasına intikal ederek yolu açar.</p>

      <h3>Bağcılar İlçesinde En Sık Müdahale Ettiğimiz Arıza Senaryoları</h3>
      <p>İlçedeki yoğun dur-kalk sürüş alışkanlığı, özellikle sıcak yaz aylarında ve kış soğuklarında belirgin mekanik sorunları tetikler. Bölge genelinde her gün karşılaştığımız başlıca vakalar şunlardır:</p>
      <ul class="article-list">
        <li><strong>Tramvay ve Meydan Çevresinde Baskı Balata Bitmesi:</strong> Çiftlik rampaları ve Güngören Caddesi yokuşlarında debriyajı kaçıran manuel araçların güvenle rampa üstüne alınması.</li>
        <li><strong>Hastane Acil ve Yeraltı Otoparkı Kilitlenmeleri:</strong> Bağcılar Eğitim ve Araştırma Hastanesi ile Meydan altı katlı otoparkında aküsü biten veya vitesi park konumunda kilitlenen araçların tekerlek patenleriyle dışarı çekilmesi.</li>
        <li><strong>Semt Pazarı Günlerinde Kapanan Sokaklar:</strong> Salı, Çarşamba ve hafta sonu kurulan pazar alanları nedeniyle ana güzergahları kapalı kalan mahallelere alternatif tali yollardan erişim sağlanması.</li>
        <li><strong>Marş ve Şarj Dinamosu Arızaları:</strong> Sabah işe çıkış saatlerinde Yenigün, Demirkapı veya Fatih Mahallesi'nde kontak çevirmeyen otomobillerin elektrikçi ya da yetkili servise doğrudan sevki.</li>
      </ul>

      <h3>Dar Sokaklarda Hasarsız Yükleme ve Tekerlek Pateni Tekniği</h3>
      <p>Bağcılar'ın eski yerleşim adalarında arızalanan bir otomobilin önüne tam hizalanmak her zaman mümkün olmaz. Direksiyon kilidi açılmayan ya da elektronik park freni devrede kalan yeni nesil araçları çeki halatıyla sürüklemek, şanzıman dişlilerine ve ön takıma ciddi masraf açar. Ekiplerimiz bu tür dar alanlarda dört tekerleğin altına serbest hareketli kızak patenleri yerleştirerek aracı yana kaydırır, ardından düşük açılı hidrolik platforma sabitler.</p>
      <p>Yükleme tamamlandığında dört noktalı yumuşak dokulu jant kemerleri kullanılır; tampon, marşpiyel ve alt şasi muhafazası hiçbir metal kancayla temas etmez. İstikamet olarak ister Demirkapı ve Güngören sanayi ustalarını, ister İkitelli Atatürk Oto Sanayi Sitesi'ni ya da marka yetkili servislerini seçebilirsiniz. Aracınız teslim tutanağıyla ustanıza eksiksiz bırakılır. Ayrıca Çınar, İnönü, Kemalpaşa ve Yavuz Selim mahallelerindeki dar apartman önlerinden yapılan çekimlerde komşu araçlara zarar vermemek adına işaretçi eşliğinde manevra uygulanır.</p>

      <div class="callout-box">
        <strong>Bağcılar Nöbetçi Hat Bilgisi:</strong> Konumunuzu WhatsApp üzerinden paylaştığınızda veya ${BUSINESS.phoneDisplay} numarasını aradığınızda size en yakın ilçe içi kurtarıcı doğrudan yönlendirilir. Sabit mesafe politikasıyla yola çıkmadan önce net ücret bilgisi verilir.
      </div>

      <h3>Gece Nöbeti ve 7/24 Kesintisiz İlçe Kapsaması</h3>
      <p>Bağcılar'da yol yardımı yalnızca mesai saatleriyle sınırlı değildir. Gece yarısından sonra Kirazlı Metro bağlantısında lastiği yarılan sürücülerden, sabaha karşı hastane ziyaretinden çıkarken akü sorunu yaşayan ailelere kadar her çağrı aynı ciddiyetle karşılanır. ${BUSINESS.name}, ilçenin 22 mahallesinin tamamında kesintisiz nöbet düzeniyle çalışarak sizi karanlıkta ya da güvensiz bir kavşakta bekletmez. Arızalı aracınızı dilerseniz gece evinizin sokağına indiriyor, sabah sanayi açıldığında ikinci bir aktarmayla ustanızın kapısına ulaştırıyoruz.</p>
    `,
    fieldLogTitle: 'Bağcılar Eğitim ve Araştırma Hastanesi Acil Yokuşunda Kilitlenen SUV Tahliyesi',
    fieldLogDesc: 'Akşam saatlerinde hastane acil girişine çıkan dik eğimde otomatik şanzımanı park konumunda kilitlenen bir SUV için merkeze yakın nöbetçi ekibimiz 11 dakikada ulaştı. Ambulans şeridini aksatmamak adına tekerlek kızakları saniyeler içinde yerleştirilerek araç yan manevrayla kayar kasaya alındı. Şanzıman muhafazasına en ufak baskı uygulamadan araç Demirkapı üzerindeki özel şanzıman servisine teslim edildi.',
    faqs: [
      {
        q: 'Bağcılar Meydanı altı kapalı otoparkından çekici çıkarabiliyor musunuz?',
        a: 'Evet. Meydan altı otoparkın tavan yüksekliği standart kamyonlara uygun olmadığı için alçak profilli özel kurtarıcımız ve tekerlek pateni setimizle içeri girip aracınızı güvenle açık alana alıyoruz.'
      },
      {
        q: 'Tramvay hattı kenarında arızalanırsam ekip ne kadar sürede yetişir?',
        a: 'İstanbul Caddesi ve Bağcılar Meydan hattında sürekli konuşlu aracımız bulunur. Trafik yoğunluğuna göre 10 ila 12 dakika aralığında yanınıza ulaşıp şeridi hızla açıyoruz.'
      },
      {
        q: 'Semt pazarı kurulu olan dar mahalle sokaklarına girebiliyor musunuz?',
        a: 'Bağcılar mahallelerinin pazar günlerini ve açık tali geçişlerini yakından biliyoruz. Kısa şasili kayar kasa aracımızla kapalı caddelerin etrafından dolaşıp aracınıza en yakın noktaya yanaşıyoruz.'
      },
      {
        q: 'Aracımı Bağcılar içinden İkitelli Oto Sanayi ustama götürür müsünüz?',
        a: 'Elbette. Aracınızı yalnızca ilçe içine değil, talebinize göre İkitelli Atatürk Oto Sanayi, Bağcılar-Güngören Sanayi veya İstanbul içi herhangi bir yetkili servise doğrudan bırakıyoruz.'
      },
      {
        q: 'Gece 03.00 civarında Kirazlı veya Çiftlik tarafında çekici bulabilir miyim?',
        a: `Gece vardiyamız kesintisiz çalışır. ${BUSINESS.phoneDisplay} üzerinden ulaştığınız anda nöbetçi operatörümüz hemen harekete geçer ve gece tarifesinde sürpriz ek ücret çıkarmadan net fiyat paylaşır.`
      }
    ]
  },
  {
    slug: 'goztepe',
    name: 'Göztepe',
    navbarTitle: 'GÖZTEPE ÇEKİCİ',
    category: 'mahalle',
    eta: '10–15 Dk',
    geo: { lat: 41.0531, lng: 28.8424 },
    hero: 'saha-suv',
    fieldImage: 'kapali-otopark',
    cardSummary: 'Batışehir, Medipol Mega ve Göztepe kapalı site otoparklarına alçak tavanlı araçlarla 10–15 dakikada hasarsız müdahale.',
    heroLead: 'Bağcılar Göztepe, Batışehir rezidansları ve Medipol Mega çevresindeki çok katlı otoparklar ile TEM bağlantı yollarında 7/24 görevdeyiz. Alçak tavan aparatlı kurtarıcılarımızla en dar yeraltı rampalarından bile aracınızı çizmeden çıkarıyoruz.',
    landmarks: [
      'Medipol Mega Üniversite Hastanesi',
      'Batışehir Karma Yaşam Kompleksi',
      'Göztepe Metro İstasyonu (M7)',
      'TEM Göztepe Bağlantı Yolu',
      'İnönü Caddesi',
      'Maslak Caddesi'
    ],
    articleHtml: `
      <h2>Göztepe ve Batışehir Çok Katlı Otoparklarında Uzman Çekici Hizmeti</h2>
      <p>Bağcılar Göztepe Mahallesi, son on yılda geçirdiği dönüşümle birlikte büyük rezidans sitelerinin, üniversite hastanesi kampüsünün ve yüksek trafikli TEM yan yollarının kesişim noktasına dönüştü. Bölgedeki çağrıların hatırı sayılır bir kısmı açık caddelerden değil, eksi ikinci veya eksi üçüncü katlardaki kapalı otoparklardan gelir. Standart bir oto kurtarıcı 2.60 metreyi aşan yüksekliği nedeniyle bu alanların giriş bariyerinden dahi geçemez. ${BUSINESS.name}, Göztepe hattında düşük gabarili kapalı otopark kurtarıcıları görevlendirerek bu engeli tamamen ortadan kaldırır.</p>
      <p>Özellikle Batışehir blokları ve çevredeki yeni nesil konut sitelerinde otopark rampaları hem dik açılı hem de keskin dönüşlüdür. Aküsü boşalmış, direksiyonu kilitlenmiş ya da şanzıman beyni arıza vermiş bir SUV veya sedanı başka bir araçla halat bağlayarak yukarı çekmeye çalışmak son derece risklidir; fren servosunun çalışmaması duvar ve kolon çarpmalarına davetiye çıkarır. Profesyonel kurtarma ekipmanı olmadan yapılan amatör denemeler, çekici ücretinin katbekat üzerinde kaporta hasarı doğurur.</p>

      <h3>Medipol Mega ve TEM Bağlantı Aksında Saha Deneyimi</h3>
      <p>Medipol Mega Üniversite Hastanesi çevresi, günün her saatinde hem hasta yakınlarının hem de ambulansların yoğun kullandığı kritik bir bölgedir. İnönü Caddesi ve Maslak Caddesi üzerinde hastane girişini kilitleyen beklenmedik bir mekanik arıza, sürücü üzerinde ciddi stres yaratır. Ekiplerimiz Göztepe Metro istasyonu ve TEM yan yol hattına yakın konumlandığı için 10–15 dakika bandında alana yetişir.</p>
      <ul class="article-list">
        <li><strong>Alçak Tavanlı Kapalı Otopark Çekimi:</strong> 2.05–2.20 metre tavan sınırına sahip site ve hastane otoparklarından hidrolik çatal sistemli kurtarıcılarla güvenli tahliye.</li>
        <li><strong>Elektrikli ve Hibrit Otomobil Taşımacılığı:</strong> Göztepe'deki yeni nesil sitelerde yaygınlaşan elektrikli araçların tekerlekleri kilitli haldeyken rejeneratif sisteme zarar vermeden patenli yükleme.</li>
        <li><strong>Düşük Şasili Spor ve Lüks Segment Koruması:</strong> Tampon yüksekliği sınırlı araçlar için uzatmalı kauçuk rampa takozlarıyla sürtmesiz platform çıkışı.</li>
        <li><strong>TEM Yan Yol Acil Müdahalesi:</strong> Mahmutbey ve Esenler yönüne bağlanan yan yol kollarında hararet yapan veya yakıt sistemi kesilen araçların hızla emniyete alınması.</li>
      </ul>

      <h3>Site Yönetimi ve Güvenlik Koordinasyonu</h3>
      <p>Büyük yerleşkelerde kurtarıcının içeri alınması belirli prosedürlere tabidir. Operatörlerimiz site güvenlik noktalarında giriş kaydı, kat yönlendirmesi ve otopark içi ters yön güvenliği konularında deneyimlidir. Dar virajlı spiral rampalardan inerken ve çıkarken yardımcı yönlendirme kullanarak kolonlara, yangın borularına ve park halindeki komşu araçlara temas riskini sıfıra indirir.</p>
      <p>Yeraltı katından açık alana çıkarılan aracınız, dilediğiniz takdirde kapı önünde bekleyen tam kayar kasa taşıyıcıya aktarılarak İstanbul'un herhangi bir noktasındaki yetkili servise sevk edilir. Böylece hem site içi manevra güvenliği hem de uzun yol taşıma konforu bir arada sağlanır. Özellikle dört çeker SUV ve tam otomatik şanzımanlı araçlarda tek aksı yerden keserek çekmek şanzıman dağıtıcısına zarar verebileceğinden, açık alana alınan tüm araçlar dört tekerleği platform üstünde olacak biçimde taşınır.</p>

      <div class="callout-box">
        <strong>Kapalı Otoparkta Kaldıysanız İpucu:</strong> Aracınızın bulunduğu katı, tavan yüksekliği tabelasını (örneğin 2.10 m) ve vitesin boşa geçip geçmediğini ${BUSINESS.phoneDisplay} hattımıza iletmeniz, doğru ekipmanın ilk seferde gelmesini sağlar.
      </div>

      <h3>Göztepe Sakinleri İçin Şeffaf ve Hızlı Yol Yardım</h3>
      <p>İster sabah işe giderken Batışehir otoparkında marş basmayan aracınız için, ister gece saatlerinde Medipol önündeki ani bir lastik yarılmada ${BUSINESS.name} bir telefon uzağınızdadır. Bölgenin tüm site girişlerini, M7 metro çevresindeki ara bağlantıları ve TEM dönüş kollarını bilen kadromuzla, aracınızı güvenilir ellere emanet etmenin rahatlığını yaşarsınız. İşlem öncesinde kat durumu ve gidilecek servis mesafesi netleştirilerek sürpriz ek masraf olmadan sabit fiyat paylaşılır.</p>
    `,
    fieldLogTitle: 'Batışehir Eksi Üçüncü Kat Otoparkından Elektronik Freni Kilitli SUV Çıkarılması',
    fieldLogDesc: 'Hafta içi sabah saatlerinde Batışehir yerleşkesinin eksi üçüncü katında aküsü tamamen tükenen ve elektronik el freni çözülmeyen bir SUV için alçak tavan kurtarıcımız yönlendirildi. 2.15 metrelik kiriş altından güvenle geçen ekibimiz, dört tekerleğe paten takarak aracı dar spiral rampadan yüzeye çıkardı. Açık alanda kayar kasaya aktarılan otomobil, tampon altı muhafazası dahi çizilmeden yetkili servise ulaştırıldı.',
    faqs: [
      {
        q: 'Batışehir gibi 2.10 metre tavan sınırı olan kapalı otoparklara girebiliyor musunuz?',
        a: 'Evet, filomuzda standart çekicilerden farklı olarak düşük şasili ve alçak tavanlı özel otopark kurtarıcıları bulunur. Kiriş ve borulara takılmadan eksi katlara inebiliyoruz.'
      },
      {
        q: 'Elektrikli aracımın şarjı Göztepe otoparkında tamamen bitti, çekilirken bataryaya zarar gelir mi?',
        a: 'Kesinlikle hayır. Elektrikli araçları tekerlekleri zeminde döndürmeden dörtlü serbest paten sistemiyle çıkarıp kayar kasaya yüklüyor, en yakın hızlı şarj istasyonuna veya servise bırakıyoruz.'
      },
      {
        q: 'Medipol Mega Hastanesi acil otoparkından araç çekmek için güvenlik izni gerekiyor mu?',
        a: 'Araç sahibi veya yakını olarak sizin onayınızla güvenlik noktasına bilgi veriliyor. Ekiplerimiz hastane otopark düzenini bildiği için bariyer geçişini ve yüklemeyi kısa sürede tamamlar.'
      },
      {
        q: 'Göztepe TEM yan yolunda akşam trafiğinde kalsam ne kadar beklerim?',
        a: 'Göztepe Metro ve İnönü Caddesi bağlantısında hazır ekibimiz bulunduğu için trafiğin kilitli olduğu saatlerde bile ara geçişleri kullanarak genellikle 10–15 dakika içinde ulaşırız.'
      },
      {
        q: 'Sadece akü takviyesi gerekiyorsa yine de çekici çağırmam şart mı?',
        a: 'Hayır, aracınızda mekanik bir arıza yoksa ve yalnızca akü zayıfladıysa profesyonel takviye cihazımızla bulunduğunuz otoparkta çalıştırma desteği de sunuyoruz.'
      }
    ]
  },
  {
    slug: 'gunesli',
    name: 'Güneşli',
    navbarTitle: 'GÜNEŞLİ ÇEKİCİ',
    category: 'mahalle',
    eta: '10–15 Dk',
    geo: { lat: 41.0329, lng: 28.8186 },
    hero: 'saha-cadde',
    fieldImage: 'saha-sedan',
    cardSummary: 'Güneşli Meydan, Evren ve Koçman Caddesi ile 212 AVM hattında binek ve ticari araçlara 10–15 dakikada acil çekici.',
    heroLead: 'Güneşli Meydan, Evren Caddesi ve 212 AVM çevresindeki ticari ve konut trafiğinde yolda kaldığınızda hızlı müdahale sağlıyoruz. Binek otomobillerden tekstil dağıtım araçlarına kadar her segmenti güvenle yükleyip sanayiye veya servise ulaştırıyoruz.',
    landmarks: [
      'Güneşli Meydan',
      'Evren Caddesi',
      'Koçman Caddesi',
      '212 İstanbul Power Outlet',
      'Güneşli Park AVM',
      'Fevzi Çakmak Caddesi ve Bağlar Mahallesi'
    ],
    articleHtml: `
      <h2>Güneşli Ticaret ve Konut Hattında Kesintisiz Oto Kurtarma</h2>
      <p>Bağcılar'ın batı kanadında Basın Ekspres'e komşu konumlanan Güneşli; tekstil atölyeleri, iş merkezleri, alışveriş merkezleri ve yoğun yerleşim alanlarını tek bir dokuda birleştirir. Evren Caddesi, Koçman Caddesi ve Kirazlı-Güneşli bağlantısı özellikle sabah 08:00 ile akşam 19:30 arasında personel servisleri, kargo kamyonetleri ve bireysel sürücülerle doludur. Bu akış içinde yaşanacak tek bir motor arızası bile arkanızda hızla büyüyen bir korna baskısı ve güvenlik riski doğurur. ${BUSINESS.name}, Güneşli'nin ana caddelerine ve Bağlar, Hürriyet, 15 Temmuz gibi çevre mahallelerine 10–15 dakikada ulaşarak sürücüleri bu stresten kurtarır.</p>
      <p>Bölgedeki yol yapısı yer yer keskin eğimler ve dar kavşak dönüşleri barındırır. Özellikle Güneşli Park AVM çevresi ile Fevzi Çakmak Caddesi'ne bağlanan ara sokaklarda yanlış parklanma yüzünden manevra alanı oldukça sınırlıdır. Saha ekibimiz yerel geçişleri ezbere bildiği için tıkanan ana aksa takılmadan alternatif sokaklardan aracınızın başına erişir.</p>

      <h3>Güneşli Bölgesinde Öne Çıkan Kurtarma İhtiyaçları</h3>
      <p>Semtin hem iş merkezi hem de alışveriş odağı olması, gelen yardım taleplerinin çeşitliliğini artırır. Günlük operasyonlarımızda sıklıkla karşılaştığımız durumlar şu başlıklarda toplanır:</p>
      <ul class="article-list">
        <li><strong>Cadde Üstü Ani Mekanik Kesilmeler:</strong> Evren ve Koçman caddelerinde hararet yükselten, triger kayışı kopan veya debriyaj merkezi boşalan araçların trafiği kitlemeden süratle kayar kasaya alınması.</li>
        <li><strong>AVM Otoparkı Arızaları:</strong> 212 İstanbul Power Outlet ve Güneşli Park AVM'nin açık ya da kapalı park katlarında çalışmayan otomobillerin güvenli tahliyesi.</li>
        <li><strong>Tekstil ve Kargo Filoları İçin Hafif Ticari Çekimi:</strong> Bağlar Mahallesi ve çevresindeki atölyelere mal taşıyan panelvan ve kamyonetlerin yükünü boşaltmaya gerek kalmadan servise götürülmesi.</li>
        <li><strong>Yokuşta Şanzıman ve Fren Sorunları:</strong> Hürriyet ve 15 Temmuz mahallelerinin eğimli sokaklarında el freni tutmayan veya vites geçişi kilitlenen araçların takoz ve vinç kontrollü yüklenmesi.</li>
      </ul>

      <h3>Doğru Rampa Açısı ve Hasarsız Platform Sabitleme</h3>
      <p>Güneşli'de çalışan sürücüler için zaman kadar aracın yükleme sırasında zarar görmemesi de kritik önem taşır. Tamamen zemine inen hidrolik kayar kasa sistemlerimiz, alçak ön tamponlu sedanların dahi sürtmeden çıkabileceği yumuşak bir açı oluşturur. Yükleme halatı aracın kendi çeki demiri yuvasına veya şasi bağlantı noktasına bağlanır; alt salıncak ve rot kollarına asla yük bindirilmez. Otomatik şanzımanı kilitlenen veya akü kutup başı tamamen boşalan otomobillerde tekerlek kızağı devreye alınarak şanzıman pimine baskı uygulanmaz.</p>
      <p>Aracınız platforma sabitlendikten sonra dilediğiniz noktaya rota çizilir. Güneşli'den İkitelli Atatürk Oto Sanayi Sitesi, Bağcılar-Güngören Sanayi Sitesi veya Yenibosna yetkili servis hatları oldukça kısa mesafededir. Operatörlerimiz sizi servis kapısına kadar refakatle ulaştırır, isterseniz araç içi konforlu kabinde yolculuk edebilirsiniz. Yakın çevredeki lastikçi, akücü veya oto elektrikçi ihtiyacında da en yakın açık atölye için yerel yönlendirme sağlıyoruz.</p>

      <div class="callout-box">
        <strong>Güneşli Hızlı Konum Paylaşımı:</strong> Cadde adı ve en yakın mağaza ya da kavşak bilgisini ${BUSINESS.phoneDisplay} numaralı hattan ilettiğinizde, trafik durumuna göre en kısa rotadan çıkan çekicimizin tahmini varış dakikasını anında öğrenirsiniz.
      </div>

      <h3>Hafta Sonu ve Gece Saatlerinde Güvenilir Destek</h3>
      <p>Güneşli'de hafta sonları 212 AVM ve Güneşli Meydan çevresindeki hareketlilik gece geç saatlere kadar sürer. Mesai dışında usta veya çekici bulmakta zorlanan sürücüler için ${BUSINESS.name} haftanın yedi günü nöbet tutar. İsterseniz arızalı aracınızı gece güvenle evinizin önüne ya da kapalı otoparkınıza indirir, ertesi sabah sanayiye nakil planlamasını da üstleniriz. Her çağrıda kilometre ve aracın segmentine göre önceden net ücret bilgisi verilir.</p>
    `,
    fieldLogTitle: 'Evren Caddesi İş Çıkışı Trafiğinde Debriyajı Boşalan Sedanın Hızlı Yüklenmesi',
    fieldLogDesc: 'Akşam 18.20 sularında Evren Caddesi ile Koçman Caddesi kesişiminde debriyaj alt merkezi patlayarak vitese geçmeyen bir binek otomobil sol şeritte hareketsiz kaldı. Güneşli Meydan hattındaki nöbetçi kurtarıcımız 11 dakikada olay yerine varıp reflektör güvenlik koridoru oluşturdu. Hidrolik kayar kasa yardımıyla 4 dakika içinde platforma alınan otomobil, sürücünün tercih ettiği Bağcılar-Güngören Sanayi ustasına teslim edildi.',
    faqs: [
      {
        q: '212 İstanbul Power Outlet otoparkında aracım çalışmıyor, içeri girip alabilir misiniz?',
        a: 'Evet. 212 AVM açık otoparkına kayar kasalı aracımızla, kapalı katlara ise alçak profilli kurtarıcımızla doğrudan giriş yaparak aracınızı güvenle çıkarıyoruz.'
      },
      {
        q: 'Güneşli’den tekstil atölyemizin yüklü panelvanını sanayiye çektirebilir miyiz?',
        a: 'Taşıma kapasitesi yüksek ve uzun platformlu kurtarıcılarımız hafif ticari ve orta sınıf panelvanları yüküyle birlikte güvenle taşıyabilir. Araç modelini ve tahmini yük ağırlığını belirtmeniz yeterlidir.'
      },
      {
        q: 'Evren Caddesi akşam çok tıkalı oluyor, çekicinin ulaşması uzun sürer mi?',
        a: 'Ekibimiz Güneşli Meydan ve Basın Ekspres yan yol geçişlerine yakın beklediği için ana cadde kilitlendiğinde Fevzi Çakmak ve ara mahalle bağlantılarını kullanarak 10–15 dakika içinde ulaşır.'
      },
      {
        q: 'Gece arızalanan aracımı sabaha kadar evimin sokağına çektirebilir miyim?',
        a: 'Elbette. Sanayilerin kapalı olduğu gece saatlerinde aracınızı ikamet adresinize veya güvenli otoparkınıza indiriyoruz; dilerseniz sabah tekrar alıp ustanıza götürüyoruz.'
      },
      {
        q: 'Lastik patlaması durumunda stepnem yoksa Güneşli içinde lastikçiye götürüyor musunuz?',
        a: 'Evet, yedek lastiğiniz yoksa veya bijon kilidi açılmıyorsa aracınızı janta zarar vermeden platforma alıp Güneşli veya Basın Ekspres çevresindeki nöbetçi lastikçiye doğrudan ulaştırıyoruz.'
      }
    ]
  },
  {
    slug: 'mahmutbey',
    name: 'Mahmutbey',
    navbarTitle: 'MAHMUTBEY ÇEKİCİ',
    category: 'otoyol mahalle',
    eta: '10–15 Dk',
    geo: { lat: 41.0548, lng: 28.8235 },
    hero: 'saha-gunbatimi',
    fieldImage: 'saha-otoyol',
    cardSummary: 'Mahmutbey Gişeleri, TEM Otoyolu ve Mall of İstanbul kavşağında emniyet şeridi güvenlikli 7/24 oto kurtarma desteği.',
    heroLead: 'TEM Otoyolu Mahmutbey Gişeleri, Mall of İstanbul çevresi ve Taşocağı Yolu üzerindeki arıza ve kazalarda dakikalar içinde emniyet şeridindeyiz. Yüksek hızlı otoyol disipliniyle aracınızı tehlikeli trafik akışından hızla uzaklaştırıyoruz.',
    landmarks: [
      'Mahmutbey Gişeleri',
      'TEM (O-3) Otoyolu Bağlantısı',
      'Mall of İstanbul Kavşağı',
      'Taşocağı Yolu Caddesi',
      'Mahmutbey Metro İstasyonu (M3/M7)',
      'Peyami Safa Caddesi'
    ],
    articleHtml: `
      <h2>Mahmutbey Gişeleri ve TEM Otoyolu Üzerinde Acil Çekici Operasyonu</h2>
      <p>İstanbul'un Avrupa'ya açılan ana kapısı niteliğindeki Mahmutbey, günün her diliminde binlerce otomobilin, ağır vasıtanın ve şehirlerarası otobüsün geçtiği dev bir transit düğümüdür. Mahmutbey Gişeleri, O-3 TEM Otoyolu, Kuzey Marmara bağlantısı ve Mall of İstanbul kavşağı bir araya geldiğinde, burada yaşanacak en küçük mekanik aksaklık dahi yüksek hız nedeniyle ciddi çarpışma riski taşır. ${BUSINESS.name}, Mahmutbey aksında sürekli hazır tuttuğu otoyol donanımlı kayar kasa ekipleriyle ortalama 10–15 dakika içinde yanınıza ulaşır.</p>
      <p>Özellikle akşam 17:00 ile 20:30 arasında gişeler yönünde ağırlaşan dur-kalk trafik, araçların soğutma ve şanzıman sistemlerini sınırda zorlar. Radyatör fanı açmayan, su eksilten veya kavrama sıcaklığı uyarısı veren araçlar bir anda orta şeritte kalabilir. Otoyolda yapılacak en doğru hamle, aracı mümkün olan en güvenli biçimde sağ emniyet şeridine çekmek, dörtlü ikazları yakıp yolcuları bariyer dışına almak ve profesyonel çekici çağırmaktır.</p>

      <h3>Otoyol ve Mahalle Dokusunun İki Farklı İhtiyacı</h3>
      <p>Mahmutbey yalnızca transit otoyol geçişlerinden ibaret değildir; Peyami Safa Caddesi, Taşocağı Yolu, Altınbaş Üniversitesi çevresi ve konut siteleri yoğun bir yerleşim ve iş hayatı barındırır. Ekiplerimiz her iki saha koşuluna da hazırlıklıdır:</p>
      <ul class="article-list">
        <li><strong>Gişe ve TEM Emniyet Şeridi Kurtarmaları:</strong> Yüksek görünürlüklü LED tepe ikazları, reflektör konileri ve hızlı hidrolik vinç ile aracın riskli bölgeden dakikalar içinde tahliyesi.</li>
        <li><strong>Mall of İstanbul ve Taşocağı Yolu Desteği:</strong> AVM otoparkları, plaza önleri ve otel girişlerinde akü, lastik veya elektronik kilit arızası veren araçların hasarsız yüklenmesi.</li>
        <li><strong>Kaza Sonrası Yürüyemeyen Araç Nakli:</strong> Otoyol katılımlarında yaşanan maddi hasarlı kazalarda ön takımı veya aksı hasarlı araçların kayar platform ve kızaklarla emniyetli biçimde çekilmesi.</li>
        <li><strong>Şehir Dışı ve Uzun Mesafe Transfer:</strong> Edirne, Tekirdağ, Silivri veya Çorlu yönüne giderken Mahmutbey'de yolda kalan sürücülerin araçlarını dilerseniz şehir içi servise, dilerseniz şehirlerarası adrese ulaştırma.</li>
      </ul>

      <h3>Otoyolda Yön ve Konum Doğruluğu Neden Hayat Kurtarır?</h3>
      <p>TEM Otoyolu üzerinde Edirne istikameti ile Ankara (köprü) istikameti arasında dönüş yapmak kilometrelerce fark yaratır. Çağrı merkezimizle görüştüğünüzde yalnızca Mahmutbey demeniz yerine, hangi yöne doğru seyrettiğinizi ve geçtiğiniz son tabelayı paylaşmanız ekibimizin ters istikamete girmeden doğrudan arkanıza yaklaşmasını sağlar. WhatsApp konum pini gönderdiğinizde operatörümüz şerit yönünüzü haritadan anında teyit eder ve en yakın katılımdan çıkış yapar.</p>
      <p>Yükleme işlemi tamamlandıktan sonra sürücü ve yolcuları soğukta veya otoyol kenarında bırakmıyoruz; aracınızın kabin kapasitesine uygun şekilde güvenli alana, metro istasyonuna ya da doğrudan yetkili servise kadar eşlik ediyoruz. Kaza veya mekanik arıza sonrası kasko poliçenizden geri ödeme almak isterseniz, taşıma bitiminde resmi çekici faturanızı ve teslim evraklarınızı eksiksiz hazırlayıp teslim ediyoruz.</p>

      <div class="callout-box">
        <strong>TEM Otoyolunda Güvenlik Hatırlatması:</strong> Aracınız Mahmutbey Gişeleri civarında durduğunda araç içinde oturmak yerine bariyerin dış tarafına geçin. ${BUSINESS.phoneDisplay} hattımıza canlı konum paylaştığınızda en yakın otoyol kurtarıcımız yola çıkar.
      </div>

      <h3>Kış ve Yağışlı Havalarda Kesintisiz Mahmutbey Nöbeti</h3>
      <p>Mahmutbey açık rüzgar koridorunda yer aldığı için yoğun yağmur, sis ve kış aylarındaki buzlanmada kaza ve kayma vakaları artış gösterir. Su birikintisine hızlı girerek motoruna su alan ya da kaygan zeminde bariyere sürten otomobillerde doğru vinç açısı kullanmak hayati önem taşır. ${BUSINESS.name}, ağır hava koşullarında da nöbetçi araç sayısını koruyarak yolda mahsur kalan sürücüleri hızlı, güvenli ve şeffaf fiyatlı hizmetle hedefine ulaştırır.</p>
    `,
    fieldLogTitle: 'TEM Edirne Yönü Mahmutbey Gişeleri Çıkışında Hararet Yapan Otomobilin Tahliyesi',
    fieldLogDesc: 'Akşam trafiğinde Mahmutbey Gişeleri geçildikten yaklaşık 600 metre sonra soğutma suyu hortumu patlayan bir aile otomobili emniyet şeridine çekildi. Konum paylaşımının ardından 12 dakikada sağ şeride yanaşan otoyol kurtarıcımız, reflektör hattı kurarak trafiği uyardı. Motor kaputuna ve ön tampona temas etmeden kayar kasaya yüklenen araç, aile bireyleriyle birlikte İkitelli özel servisine güvenle ulaştırıldı.',
    faqs: [
      {
        q: 'Mahmutbey Gişeleri içinde veya hemen çıkışında arızalanırsam çekici girebiliyor mu?',
        a: 'Evet. Otoyol geçiş ve gişe çevresi güzergahlarını aktif kullanıyoruz. Hangi istikamette (Edirne veya Ankara yönü) olduğunuzu belirttiğinizde doğrudan bulunduğunuz şeride yaklaşıyoruz.'
      },
      {
        q: 'TEM Otoyolu’nda trafik durmuşken çekici bana nasıl ulaşacak?',
        a: 'Mahmutbey, İSTOÇ ve İkitelli bağlantı kollarını kullanarak kilitli noktadan önceki en yakın katılımdan otoyola çıkıyoruz. Bu sayede uzun kuyruklara takılmadan ortalama 10–15 dakikada erişim sağlıyoruz.'
      },
      {
        q: 'Mall of İstanbul kapalı otoparkında kalan aracımı çekebilir misiniz?',
        a: 'Evet. Alçak tavan uyumlu kurtarıcımız ve tekerlek kızaklarımızla AVM kapalı otopark katlarına girip aracınızı sorunsuz şekilde yüzeye alabiliyoruz.'
      },
      {
        q: 'Kaza sonrası kasko dosyam için çekici faturası düzenliyor musunuz?',
        a: 'Elbette. Yaptığımız her taşıma işlemi için resmi fatura kesiyoruz; bu belgeyi kasko veya sigorta şirketinize sunarak poliçeniz kapsamındaki yol yardım geri ödemesini talep edebilirsiniz.'
      },
      {
        q: 'Mahmutbey’den Tekirdağ veya Çorlu yönüne şehirlerarası araç taşıyor musunuz?',
        a: 'Evet, yalnızca Bağcılar ve İstanbul içi değil, Mahmutbey çıkışlı Trakya ve Marmara geneli şehirlerarası oto taşıma taleplerinde de sigortalı kayar kasa hizmeti veriyoruz.'
      }
    ]
  },
  {
    slug: 'basin-ekspres',
    name: 'Basın Ekspres',
    navbarTitle: 'BASIN EKSPRES ÇEKİCİ',
    category: 'otoyol',
    eta: '10–15 Dk',
    geo: { lat: 41.0315, lng: 28.8102 },
    hero: 'saha-otoyol',
    fieldImage: 'saha-gunbatimi',
    cardSummary: 'Basın Ekspres Yolu, Kuyumcukent ve Starcity hattında ana yol ile yan yol ayrımlarına hakim 7/24 acil oto çekici.',
    heroLead: 'E-5 ile TEM Otoyolu’nu bağlayan Basın Ekspres Yolu, Starcity ve Kuyumcukent çevresinde arıza ya da kaza anında hızla yanınızdayız. Ana arter ve yan yol ayrımlarını karıştırmadan doğrudan bulunduğunuz şeride ulaşıyoruz.',
    landmarks: [
      'Basın Ekspres Yolu (O-7 Bağlantısı)',
      'Starcity Outlet AVM',
      'Kuyumcukent Kavşağı',
      'Yalçın Koreş ve Bahar Caddesi Yan Yolları',
      'Halkalı Caddesi Bağlantısı',
      'Basın Ekspres Otel ve Plaza Hattı'
    ],
    articleHtml: `
      <h2>Basın Ekspres Bulvarı ve Yan Yollarında Nokta Atışı Kurtarma</h2>
      <p>Eski Atatürk Havalimanı yönündeki E-5 (D-100) karayolunu kuzeyde TEM Otoyolu ve İstanbul Havalimanı bağlantısına bağlayan Basın Ekspres Yolu, Avrupa Yakası'nın en işlek kuzey-güney omurgasıdır. Sağlı sollu yükselen iş kuleleri, beş yıldızlı oteller, Starcity Outlet ve Kuyumcukent gibi dev ticaret merkezleri nedeniyle bulvar gün boyu yüksek tempolu bir trafiğe sahne olur. Bu güzergahta yaşanan mekanik arızalarda asıl zorluk, ana yol ile Yalçın Koreş veya Bahar Caddesi gibi paralel yan yolları doğru ayırt etmektir. ${BUSINESS.name}, Basın Ekspres'in her alt geçit ve kavşak dönüşünü bilen ekibiyle yanlış yöne sapmadan 10–15 dakikada yanınızda olur.</p>
      <p>Çok şeritli ve yüksek süratli akış nedeniyle bulvar üzerinde emniyet şeridi daralan kesimler bulunur. Özellikle sabah havalimanı ve iş başı saatlerinde yaşanan ani lastik yarılmaları, yakıt kesilmeleri ya da zincirleme tampon hasarları acil müdahale gerektirir. Profesyonel ışık ikaz donanımına sahip kurtarıcılarımız, arkanızdan gelen trafiği güvenli mesafeden uyararak yükleme sürecini hızla tamamlar.</p>

      <h3>Basın Ekspres Hattında Sık Görülen Yol Yardım Vakaları</h3>
      <p>Havalimanı transfer araçlarından kurumsal filo sedanlarına, otel misafirlerinden Kuyumcukent esnafına kadar geniş bir sürücü kitlesine destek veriyoruz:</p>
      <ul class="article-list">
        <li><strong>Yüksek Hızda Lastik ve Jant Hasarı:</strong> Alt geçit ek yerlerinde veya yol çalışması geçişlerinde lastiği yarılan, yedek lastiği ya da bijon şifresi bulunmayan araçların jant korumalı platformla lastikçiye nakli.</li>
        <li><strong>Kavşak Katılım Kazaları:</strong> Kuyumcukent, İkitelli ve Sefaköy katılımlarında ön takımı dağılan veya hava yastığı açılan araçların tekerlek kızağı ve vinçle hasarsız yüklenmesi.</li>
        <li><strong>Otel ve Plaza Vale Otoparkları:</strong> Basın Ekspres boyunca sıralanan otellerin ve rezidansların kapalı otoparklarında elektronik arıza veren şirket ya da kiralık araçların tahliyesi.</li>
        <li><strong>İstanbul Havalimanı Yönü Arızaları:</strong> Uçuş saatine yetişmeye çalışırken motor arıza lambası yakan veya çekişten düşen araçların hızla emniyete alınıp sürücünün mağduriyetinin en aza indirilmesi.</li>
      </ul>

      <h3>Kurumsal Filo ve Kiralık Araç Prosedürlerine Tam Uyum</h3>
      <p>Basın Ekspres üzerindeki sürücülerin önemli bir bölümü kurumsal kiralama şirketlerine ait otomobilleri kullanır. Bu araçların çekimi sırasında şasi fotoğrafı, kilometre kaydı ve teslim tutanağı gibi ayrıntılar önem kazanır. Operatörlerimiz aracı yüklemeden önce mevcut durumu belgeler, yetkili servis kabul saatlerine göre doğrudan servis otoparkına veya kiralama şirketinin yönlendirdiği anlaşmalı noktaya teslim eder. Ayrıca havalimanına yetişmek zorunda olan yolcular için anahtar teslim vekalet süreciyle aracı güvenle servise bırakıp fotoğraf teyidi paylaşabiliyoruz.</p>
      <p>Kuzey (TEM/Havalimanı) ve güney (E-5/Ataköy) yönlerindeki tüm U dönüş noktalarına hakim olduğumuz için, aracınız ister Güneşli köprüsü altında ister Kuyumcukent sapağında, isterse Halkalı Caddesi ayrımında kalsın zaman kaybetmeden güvenli şeride çekiyoruz. Alçak tamponlu premium sedanlar ve hibrit modellerde uzun takozlu rampa açısı kullanarak en ufak sürtünmenin önüne geçiyoruz.</p>

      <div class="callout-box">
        <strong>Basın Ekspres Konum İpucu:</strong> ${BUSINESS.phoneDisplay} numaramızı aradığınızda "E-5 yönüne mi, TEM yönüne mi gidiyorsunuz?" ve "Ana yolda mısınız, yan yolda mı?" sorularını yanıtlamak intikal süresini yarıya indirir.
      </div>

      <h3>7/24 Aydınlatılmış ve Güvenli Gece Müdahalesi</h3>
      <p>Gece uçuşları ve vardiyalı plaza çalışması sebebiyle Basın Ekspres Yolu sabaha kadar hareketlidir. Gece saatlerinde hız ortalaması daha da yükseldiğinden yolda kalmak ekstra tehlike barındırır. ${BUSINESS.name}, güçlü projektör ve tepe flaşörleriyle donatılmış gece nöbetçi araçlarıyla güvenliğinizi ilk sıraya koyar; dilediğiniz saatte net fiyat ve hızlı intikal garantisiyle yanınıza yetişir.</p>
    `,
    fieldLogTitle: 'Basın Ekspres Kuyumcukent Sapağı Öncesinde Jantı Kırılan Filo Aracının Kurtarılması',
    fieldLogDesc: 'Gece 22.40 sularında Basın Ekspres güney yönü Kuyumcukent ayrımına 300 metre kala sert çukura düşerek sağ ön lastiği yarılan ve bijon şifresi araçta bulunmayan bir sedan yol kenarında kaldı. Güneşli bağlantısından çıkış yapan kayar kasa ekibimiz 10 dakikada reflektör koridoru oluşturdu. Hasarlı jant yere sürtmeden hidrolik vinçle platforma alındı ve Yenibosna açık gece lastik servisine ulaştırıldı.',
    faqs: [
      {
        q: 'Basın Ekspres ana yolunda kaldım, çekici ters yönden mi gelecek yoksa kavşaktan mı dönecek?',
        a: 'Güvenlik gereği hiçbir zaman ters şerit kullanmıyoruz. Konumunuzu kuzey veya güney yönü olarak teyit edip en yakın köprülü kavşaktan dönerek doğrudan arkanıza güvenli şeritten yanaşıyoruz.'
      },
      {
        q: 'Uçağa yetişmem gerekiyor, aracımı teslim alıp servisine ben olmadan götürebilir misiniz?',
        a: 'Sürücü onayı ve teslim tutanağı ile aracınızı anahtarıyla teslim alıp belirttiğiniz yetkili servise veya güvenli otoparka bırakabiliyoruz; teslim anının fotoğrafını size anında iletiyoruz.'
      },
      {
        q: 'Starcity Outlet veya Kuyumcukent çevresinden çekici kaç dakikada gelir?',
        a: 'Basın Ekspres ve Güneşli hattında nöbetçi aracımız sürekli devriye halindedir. Trafik yoğunluğuna bağlı olarak 10–15 dakika aralığında yanınızda oluyoruz.'
      },
      {
        q: 'Kiralık şirket aracım Basın Ekspres’te arızalandı, fatura ve tutanak veriyor musunuz?',
        a: 'Evet. Filo ve rent a car firmalarının talep ettiği resmi çekici faturasını ve araç teslim formunu eksiksiz hazırlayıp size sunuyoruz.'
      },
      {
        q: 'Basın Ekspres yan yolundaki otel otoparkından alçak tabanlı spor otomobil çekebilir misiniz?',
        a: 'Uzun takozlu alçak açı rampalarımız ve kapalı otopark kurtarıcımız sayesinde ön tamponu yere çok yakın spor ve lüks araçları sürtme riski olmadan yüklüyoruz.'
      }
    ]
  },
  {
    slug: 'istoc',
    name: 'İSTOÇ',
    navbarTitle: 'İSTOÇ ÇEKİCİ',
    category: 'sanayi',
    eta: '10–12 Dk',
    geo: { lat: 41.0628, lng: 28.8194 },
    hero: 'ticari-panelvan',
    fieldImage: 'kamyonet-tasima',
    cardSummary: 'İSTOÇ Toptancılar Çarşısı ve Oto Ticaret Merkezi’nde yüklü panelvan, kamyonet ve galeri araçlarına 10–12 dakikada çekici.',
    heroLead: 'İSTOÇ Toptancılar Çarşısı adaları ve İSTOÇ Oto Ticaret Merkezi içinde ticari araç arızaları ile galeri transferlerine anında çözüm üretiyoruz. Yüklü panelvanları mal indirmenize gerek kalmadan güçlendirilmiş kayar kasalarla güvenle taşıyoruz.',
    landmarks: [
      'İSTOÇ Toptancılar Çarşısı',
      'İSTOÇ Oto Ticaret Merkezi',
      'İSTOÇ Metro İstasyonu (M3)',
      'TEM Kuzey Yan Yolu',
      '24. Ada – 32. Ada Ticaret Blokları',
      'Mahmutbey Caddesi Sanayi Girişi'
    ],
    articleHtml: `
      <h2>İSTOÇ Toptancılar Çarşısı ve Oto Ticaret Merkezi’nde Ticari Çekici Gücü</h2>
      <p>Bağcılar Mahmutbey sınırları içinde yer alan İSTOÇ, binlerce toptan ticaret işletmesini ve Avrupa Yakası'nın en yoğun ikinci el otomobil galerilerini tek bir dev komplekste toplar. Burada bir aracın arızalanması yalnızca bir ulaşım aksaklığı değildir; sevk edilecek kolilerin gecikmesi, dükkan önü yükleme koridorunun tıkanması ve ticari iş kaybı anlamına gelir. ${BUSINESS.name}, İSTOÇ'un 1. Adadan 40. Adaya kadar tüm iç sokaklarını ve Oto Ticaret Merkezi bloklarını avucunun içi gibi bilen ekibiyle 10–12 dakikada müdahale eder.</p>
      <p>Çarşı içindeki yollar, gün içinde mal indiren kamyonetler ve kargo minibüsleri nedeniyle oldukça daralır. Uzun şasili bir panelvan ya da kasalı bir kamyonet arızalandığında standart hafif çekicilerin taşıma kapasitesi yetersiz kalabilir. Filomuzda bulunan yüksek tonajlı, güçlendirilmiş hidrolik kayar kasalar, hem ticari araçların ağırlığını hem de dingil uzunluğunu zorlanmadan karşılar.</p>

      <h3>İSTOÇ Esnafı ve Oto Galericiler İçin Özel Operasyonlar</h3>
      <p>Bölgenin kendine has ticaret temposuna göre şekillendirdiğimiz çekici ve taşıma çözümleri iki ana eksende yoğunlaşır:</p>
      <ul class="article-list">
        <li><strong>Yüklü Panelvan ve Kamyonet Kurtarma:</strong> Transit, Ducato, Boxer, Sprinter, Master ve Doblo sınıfındaki ticari araçların içindeki kolileri başka araca aktarmaya gerek kalmadan doğrudan servise nakli.</li>
        <li><strong>İSTOÇ Oto Ticaret Merkezi Galeri Transferi:</strong> Noter satışı öncesi veya sonrası plakasız, muayenesiz ya da trafiğe çıkmaması istenen sıfır ve ikinci el otomobillerin ekspertiz merkezlerine, tır yükleme sahalarına veya müşteri adreslerine sigortalı taşınması.</li>
        <li><strong>Dar Ada Koridorlarında Blokaj Açma:</strong> Dükkan önünde marş basmayan, debriyajı biten ya da aksı kırılan araçların komşu işletmelerin sevkiyatını aksatmadan hızlıca platforma alınması.</li>
        <li><strong>Kuzey Yan Yol ve Metro Bağlantısı Desteği:</strong> TEM kenarındaki kuzey yan yoldan İSTOÇ girişine dönerken hararet veya elektrik arızası veren araçların kısa sürede çekilmesi.</li>
      </ul>

      <h3>Ticari Araç Yüklemesinde Ağırlık Merkezi ve Şasi Güvenliği</h3>
      <p>İçinde hırdavat, züccaciye, kırtasiye veya gıda kolileri bulunan bir panelvanın ağırlık merkezi boş bir otomobilden tamamen farklıdır. Hatalı açıyla çekilen yüklü bir ticari aracın arka tamponu yere sürtebilir veya kasa içi yükler devrilebilir. Operatörlerimiz rampa eğimini minimumda tutarak, aracın şasi bağlantı noktalarından dengeli çekiş yapar ve dört tekerleği ağır hizmet gerdirme kemerleriyle kilitler. Arka makasları yüklü olan panelvanlarda dingil çıkıntısına takoz desteği konulduğundan egzoz veya stepne sepeti zemine temas etmez.</p>
      <p>İSTOÇ'tan İkitelli Organize Sanayi Bölgesi'ndeki ticari araç ustalarına, Başakşehir yetkili servislerine ve Bağcılar-Güngören Sanayi Sitesi'ne mesafe yalnızca birkaç dakikadır. Aracınızı hızlıca ustanızın lifte alacağı noktaya indirip iş gününüzün bölünmesini önlüyoruz. Ayrıca ticari araç sahipleri için muhasebe kaydına uygun kurumsal fatura her işlem sonunda anında düzenlenir.</p>

      <div class="callout-box">
        <strong>İSTOÇ Ada ve Blok Bildirimi:</strong> ${BUSINESS.phoneDisplay} hattımızı ararken bulunduğunuz ada numarasını (örneğin 22. Ada veya Oto Ticaret Merkezi N Blok) iletmeniz, çarşı içinde tek tur bile atmadan doğrudan kapınıza gelmemizi sağlar.
      </div>

      <h3>Galeri ve Kurumsal Firmalar İçin Düzenli Taşıma Desteği</h3>
      <p>İSTOÇ Oto Ticaret Merkezi'ndeki galeri işletmeleri için gün içinde birden fazla araç transferi gerektiğinde planlı ve ekonomik taşıma çözümleri üretiyoruz. Lüks segment otomobillerin sıfır kilometre ya da boya korumalı kaportasını riske atmadan, jant temaslı yumuşak kemerlerle sabitleme yapıyoruz. ${BUSINESS.name} ile çalışan işletmeler, araçlarının çizilmeden ve tam vaktinde teslim edildiğini bilmenin güveniyle satış süreçlerine odaklanır.</p>
    `,
    fieldLogTitle: 'İSTOÇ 22. Ada İçinde Tam Yüklü Uzun Şasi Panelvanın Boşaltılmadan Servise Nakli',
    fieldLogDesc: 'Öğle sevkiyatı sırasında İSTOÇ Toptancılar Çarşısı 22. Ada iç koridorunda marş dinamosu arızalanan ve arka bölmesi tamamen züccaciye kolileriyle dolu uzun şasi bir panelvan sokağı daralttı. 10 dakikada adaya ulaşan güçlendirilmiş kayar kasa aracımız, rampa takozlarıyla arka tampon sürtmesini engelleyerek panelvanı yüküyle birlikte platforma aldı. Ürünlerin başka araca aktarılmasına gerek kalmadan araç 15 dakika içinde İkitelli ticari servisine teslim edildi.',
    faqs: [
      {
        q: 'İSTOÇ içindeki yüklü Ducato veya Transit panelvanımı içini boşaltmadan çekebilir misiniz?',
        a: 'Evet. Yüksek taşıma kapasiteli ve uzun platformlu kayar kasa kurtarıcılarımızla, yasal ağırlık sınırları içindeki yüklü panelvan ve kamyonetleri mallarınızı aktarmanıza gerek kalmadan taşıyoruz.'
      },
      {
        q: 'İSTOÇ Oto Ticaret Merkezi’nden alıcıya veya ekspertize araç transferi yapıyor musunuz?',
        a: 'Elbette. Galeri araçlarının ekspertiz merkezlerine, yetkili servislere, lojistik tır alanlarına veya İstanbul içi müşteri adreslerine hasarsız ve sigortalı transferini düzenli olarak yapıyoruz.'
      },
      {
        q: 'Toptancılar Çarşısı’ndaki dar ada sokaklarına büyük çekici girebilir mi?',
        a: 'İSTOÇ’un tek yönlü ada geçişlerini ve yükleme saatlerindeki sıkışıklığı iyi biliyoruz. Konuma göre hem manevra kabiliyeti yüksek orta kasa hem de ticari uzun kasa araçlarımızı doğru adaya yönlendiriyoruz.'
      },
      {
        q: 'Akşam çarşı kapandıktan sonra İSTOÇ Oto Ticaret Merkezi önünde çekici bulabilir miyim?',
        a: 'Çarşı mesaisi bitse de bizim nöbetimiz 7/24 sürer. TEM Kuzey Yan Yol ve İSTOÇ Metro çevresinde gece saatlerinde de 10–12 dakika içinde müdahale ediyoruz.'
      },
      {
        q: 'Aynı gün içinde galeriden üç farklı aracı servise taşıtmamız gerekirse fiyat avantajı oluyor mu?',
        a: `Evet, İSTOÇ galerileri ve kurumsal ticari işletmeler için çoklu taşıma ve düzenli transferlerde özel filo fiyatlandırması sunuyoruz. Detaylar için ${BUSINESS.phoneDisplay} hattımızdan bilgi alabilirsiniz.`
      }
    ]
  },
  {
    slug: 'yuzyil',
    name: 'Yüzyıl',
    navbarTitle: 'YÜZYIL ÇEKİCİ',
    category: 'mahalle sanayi',
    eta: '10–15 Dk',
    geo: { lat: 41.0574, lng: 28.8529 },
    hero: 'saha-istasyon',
    fieldImage: 'ahtapot-mavi',
    cardSummary: '100. Yıl Mahallesi, Automall ve Matbaacılar Sitesi çevresinde ahtapot vinçli ve kayar kasalı 7/24 oto kurtarma.',
    heroLead: 'Bağcılar 100. Yıl Mahallesi, Automall Galericiler Sitesi ve Matbaacılar Sitesi hattında 7/24 yol yardım desteği sunuyoruz. Kayar kasa ve ahtapot vinçli kurtarıcılarımızla dar sokaklarda sıkışan ya da tekerleği kilitlenen araçları güvenle kaldırıyoruz.',
    landmarks: [
      'Automall Galericiler Sitesi',
      'Matbaacılar Sitesi (2. Matbaacılar)',
      'Barbaros Caddesi',
      'Veysel Karani Caddesi',
      'Yüzyıl – Oruç Reis Köprüsü',
      'TEM Güney Yan Yolu'
    ],
    articleHtml: `
      <h2>Yüzyıl Mahallesi, Automall ve Matbaacılar Sitesi’nde Çok Yönlü Kurtarma</h2>
      <p>Bağcılar'ın kuzey aksında TEM Otoyolu'na paralel uzanan 100. Yıl (Yüzyıl) Mahallesi, mahalle yaşamı ile iki dev ticaret merkezini bir araya getiren hareketli bir geçiş noktasıdır. Bir yanda yüzlerce oto galerisine ev sahipliği yapan Automall Galericiler Sitesi, diğer yanda kesintisiz üretim ve sevkiyat yapan Matbaacılar Sitesi yer alır. Barbaros Caddesi ve Veysel Karani Caddesi boyunca gün boyu süren araç sirkülasyonu, bölgede hem bireysel sürücüler hem de ticari esnaf için hızlı bir çekici desteğini zorunlu kılar. ${BUSINESS.name}, Yüzyıl ve çevresine 10–15 dakika içinde ulaşarak her türlü yol yardım ihtiyacına yanıt verir.</p>
      <p>Bölgedeki en belirgin coğrafi özelliklerden biri, TEM köprü bağlantılarıyla mahalle içindeki eğimli sokakların keskin biçimde birleşmesidir. Park halindeyken önü ve arkası başka araçlarla kapatılmış, aksı kesmiş veya direksiyon kutusu arızalanmış otomobilleri standart halatlı çekiciyle yerinden oynatmak neredeyse imkansızdır. Bu gibi zorlu durumlar için filomuzda ahtapot kollu (vinçli) kurtarıcı seçeneğini hazır tutuyoruz.</p>

      <h3>Ahtapot Kurtarıcı ve Kayar Kasa Ne Zaman Devreye Girer?</h3>
      <p>Yüzyıl'da karşılaştığımız saha senaryolarına göre her araç için en uygun kurtarma yöntemini seçiyoruz:</p>
      <ul class="article-list">
        <li><strong>Sıkışmış ve Tekerleği Kilitli Araçlarda Ahtapot Sistemi:</strong> İki araç arasına sıkışmış, şanzımanı kilitli veya jant-aks hasarlı araçların dört tekerleğinden özel yumuşak sapanlarla dikey olarak havaya kaldırılıp kasaya indirilmesi.</li>
        <li><strong>Automall Galeri ve Ekspertiz Taşımacılığı:</strong> Automall içindeki galerilerden ekspertiz noktalarına, boya-bakım atölyelerine veya alıcı adreslerine sıfır temas riskiyle kayar kasa transferi.</li>
        <li><strong>Matbaacılar Sitesi Ticari Rampaları:</strong> Kağıt, ambalaj ve baskı malzemesi taşıyan hafif ticari araçların site içi dik rampalarda yaşadığı debriyaj, şaft ve elektrik arızalarına hızlı müdahale.</li>
        <li><strong>TEM Yan Yol ve Köprü Geçişleri:</strong> Yüzyıl Köprüsü üzerinden Esenler veya Tekstilkent yönüne geçerken hararet yapan, yakıt pompası arızalanan araçların trafiği kilitlemeden çekilmesi.</li>
      </ul>

      <h3>Mahalle İçi Akü, Marş ve Acil Servis Yönlendirmesi</h3>
      <p>Yüzyıl Mahallesi'nde kış sabahlarında apartman önlerinde çalışmayan araçlar için çağrı yoğunluğu artar. Aracınız yalnızca akü zayıflaması nedeniyle marş almıyorsa, çekiciyle taşıma masrafı çıkarmadan akü takviye desteğiyle sorununuzu yerinde çözebiliriz. Ancak şarj dinamosu, yakıt sistemi veya motor beyni kaynaklı bir arıza söz konusuysa aracınızı güvenle platforma yükleyip Bağcılar-Güngören Sanayi, Tekstilkent çevresi ya da dilediğiniz yetkili servise bırakıyoruz. Kaza sonrası rot kolu eğilmiş veya lastiği janttan çıkmış otomobillerde de zeminde sürükleme yapmadan doğrudan askılı yükleme uygulanır.</p>
      <p>Saha personelimiz Automall blok düzenini, Matbaacılar Sitesi giriş kapılarını ve Barbaros ile Veysel Karani caddelerine açılan mahalle içi tek yön uygulamalarını yakından bilir; adresi tarif etmekte zorlandığınızda sadece yakınınızdaki bir köşe veya konum pini yeterlidir. Ekip yola çıkmadan önce araç tipine ve gidilecek güzergaha göre kesin fiyat bilgisi paylaşılır.</p>

      <div class="callout-box">
        <strong>Ahtapot Çekici Gerektiren Durumlar:</strong> Aracınızın önü-arkası kapalıysa, aksı koptuysa veya şanzıman kilidi hiç açılmıyorsa ${BUSINESS.phoneDisplay} numaramıza bunu önceden söylemeniz, doğrudan ahtapot donanımlı aracımızı sevk etmemizi sağlar.
      </div>

      <h3>Günün Her Saatinde Yüzyıl’da Hazır Ekip</h3>
      <p>Matbaa vardiyalarının gece boyu devam etmesi ve TEM yan yolunun 24 saat işlek olması nedeniyle Yüzyıl hiçbir saatte tamamen durmaz. ${BUSINESS.name}, gece yarısı ya da bayram günleri fark etmeksizin şeffaf fiyat ve hasarsız taşıma ilkesiyle yanınızdadır; isterseniz aracınızı gece güvenli otoparkınıza indirip sabah ustanıza aktarımını da organize ederiz. Yüzyıl, Oruç Reis ve Barbaros ekseninde her çağrıya en yakın kurtarıcıyı doğrudan yönlendirerek bekleme süresini minimumda tutuyoruz.</p>
    `,
    fieldLogTitle: 'Yüzyıl Matbaacılar Sitesi Rampasında Aks Kesen Hafif Ticarinin Ahtapotla Alınması',
    fieldLogDesc: 'Hafta içi öğleden sonra Matbaacılar Sitesi giriş rampasında sol ön aks mili kesilen ve tekerleği çamurluğa dayanan bir hafif ticari araç hareket edemez hale geldi. Zeminde çekilmesi halinde şasi ve salıncak hasarının büyüyeceği tespit edilince bölgeye ahtapot vinçli kurtarıcımız yönlendirildi. Dört tekerlekten askıya alınan araç santimetre dahi sürtmeden kasaya indirildi ve İkitelli mekanik servisine teslim edildi.',
    faqs: [
      {
        q: 'Yüzyıl’da iki aracın arasında sıkışmış ve direksiyonu kilitli aracımı çıkarabilir misiniz?',
        a: 'Evet. Bu gibi durumlarda ahtapot (vinçli) kurtarıcımız devreye girer; aracınızı dört tekerleğinden dikey askıyla kaldırarak yanındaki araçlara temas etmeden platforma alıyoruz.'
      },
      {
        q: 'Automall Galericiler Sitesi içindeki aracımı başka bir ilçedeki ekspertize götürür müsünüz?',
        a: 'Elbette. Automall’dan İstanbul Avrupa ve Anadolu Yakası’ndaki tüm ekspertiz merkezlerine, yetkili servislere veya müşteri kapısına hasarsız kayar kasa transferi yapıyoruz.'
      },
      {
        q: 'Matbaacılar Sitesi’nin dik girişlerinde yüklü aracım kalırsa çekici çıkabilir mi?',
        a: 'Yüzyıl ve Matbaacılar Sitesi’nin rampa eğimlerine uygun yüksek torklu vinçli ve kayar kasalı araçlarımızla yüklü hafif ticarileri emniyetle kurtarıyoruz.'
      },
      {
        q: 'Yüzyıl Köprüsü ve TEM yan yolda arızalanınca ekip nereden gelir?',
        a: 'Göztepe, Yüzyıl ve Tekstilkent üçgeninde konuşlu nöbetçi ekibimiz sayesinde köprü ve yan yol noktalarına ortalama 10–15 dakikada ulaşıyoruz.'
      },
      {
        q: 'Ahtapot çekici ile normal kayar kasa arasında işlem süresi farkı çok olur mu?',
        a: 'Deneyimli operatörlerimiz ahtapot askı kurulumunu ortalama 7–10 dakika içinde tamamlar; özellikle kilitli veya aksı kırık araçlarda en güvenli ve temiz yöntemdir.'
      }
    ]
  },
  {
    slug: 'tekstilkent',
    name: 'Tekstilkent',
    navbarTitle: 'TEKSTİLKENT ÇEKİCİ',
    category: 'sanayi',
    eta: '10–15 Dk',
    geo: { lat: 41.0672, lng: 28.8648 },
    hero: 'kamyonet-tasima',
    fieldImage: 'kapali-otopark',
    cardSummary: 'Tekstilkent, Giyimkent ve Koza Plaza bloklarında kamyonet, panelvan ve plaza otopark araçlarına 7/24 çekici desteği.',
    heroLead: 'Tekstilkent Ticaret Merkezi, Koza Plaza İkiz Kuleler ve Giyimkent hattında ticari filolara ve binek araçlara 7/24 yol yardım sağlıyoruz. Hem kumaş yüklü kamyonetlere hem de yeraltı plaza otoparkındaki şirket araçlarına uygun donanımla geliyoruz.',
    landmarks: [
      'Tekstilkent Ticaret Merkezi (A-B-C Bloklar)',
      'Koza Plaza İkiz Kuleler',
      'Giyimkent Sitesi',
      'Tekstilkent – Giyimkent Metro İstasyonu (M7)',
      'Oruçreis Mahallesi',
      'TEM Esenler – Tekstilkent Kavşağı'
    ],
    articleHtml: `
      <h2>Tekstilkent, Giyimkent ve Koza Plaza Hattında Ticari ve Kurumsal Çekici</h2>
      <p>Esenler Oruçreis sınırında TEM Otoyolu'na doğrudan komşu konumlanan Tekstilkent ve hemen bitişiğindeki Giyimkent, Türkiye konfeksiyon ve kumaş ticaretinin kalbinin attığı dev lojistik merkezleridir. Aynı yerleşke içinde yükselen Koza Plaza İkiz Kuleler ise yüzlerce kurumsal ofis, banka şubesi ve yönetim merkezini barındırır. Bu iki farklı profil — bir yanda tonlarca tekstil yükü taşıyan kamyonetler, diğer yanda plaza yeraltı otoparklarına inen yönetici otomobilleri — bölgedeki yol yardım hizmetinin çok yönlü olmasını gerektirir. ${BUSINESS.name}, her iki ihtiyaca da uygun araç filosuyla Tekstilkent'e 10–15 dakikada ulaşır.</p>
      <p>Tekstilkent'in geniş ticaret blokları arasında gün boyu süren kargo yüklemeleri, özellikle öğleden sonra 14:00 ile 18:00 arasında blok içi sokaklarda yoğun bir araç trafiği oluşturur. Yükleme cebinde şarj dinamosu arızalanan ya da baskı balatası yanan bir kamyonet, yalnızca kendi sevkiyatını değil tüm bloğun giriş-çıkışını etkiler. Blok numaralandırmasına hakim saha ekiplerimiz, adres arama derdi yaşamadan doğrudan doğru sokağa giriş yapar.</p>

      <h3>Bölgeye Özel İki Ayrı Kurtarma Disiplini</h3>
      <p>Tekstilkent ve Giyimkent genelinde yürüttüğümüz operasyonlarda aracın tipine ve bulunduğu noktaya göre farklı kurtarıcılar görevlendirilir:</p>
      <ul class="article-list">
        <li><strong>Kumaş ve Konfeksiyon Yüklü Kamyonet Taşıma:</strong> Iveco Daily, Isuzu NPR, Mitsubishi Canter, Ford Transit ve benzeri hafif-orta sınıf ticari araçların ağırlık dengesini bozmadan uzun kayar kasa ile servise sevki.</li>
        <li><strong>Koza Plaza Kapalı Otopark Müdahalesi:</strong> İkiz Kuleler'in çok katlı yeraltı otoparkında aküsü biten, vites seçicisi arızalanan veya lastiği inen binek araçların alçak tavan kurtarıcıyla yüzeye çıkarılması.</li>
        <li><strong>Giyimkent Blok İçi Arızaları:</strong> Dar dönüşlü dükkan önlerinde marş basmayan hafif ticari ve binek otomobillerin tekerlek kızakları kullanılarak komşu araçlara değmeden çekilmesi.</li>
        <li><strong>TEM Tekstilkent Kavşağı Kurtarmaları:</strong> Otoyoldan siteye iniş veya çıkış kollarında hararet yapan, yakıt sistemi kesilen araçların hızla emniyet şeridinden tahliyesi.</li>
      </ul>

      <h3>Kurumsal Şirketler İçin Hızlı Faturalandırma ve Servis Koordinasyonu</h3>
      <p>Koza Plaza ofislerinde ve Tekstilkent ihracat firmalarında kullanılan araçların büyük kısmı şirket envanterine veya filo kiralama sözleşmelerine kayıtlıdır. Bir arıza yaşandığında şirket yetkilileri hem operasyonun çabuk bitmesini hem de muhasebe kayıtlarının düzenli ilerlemesini bekler. ${BUSINESS.name}, her çekim işlemi için şeffaf fiyatlı ve resmi faturalı hizmet sunar; aracınızı İkitelli, Topkapı, Bayrampaşa ya da Bağcılar'daki anlaşmalı servisinize doğrudan ulaştırır. Yükleme öncesi ve teslim anında çekilen kontrol fotoğrafları talep edilmesi halinde filo yöneticisine anlık olarak iletilir.</p>
      <p>Giyimkent ve Tekstilkent giriş bariyerlerinden geçişte güvenlik prosedürlerini bilen sürücülerimiz, özellikle iş çıkışı saatlerindeki TEM bağlantısı yoğunluğuna takılmadan Oruçreis ve Yüzyıl alternatif geçişlerinden hızla alana varır. Kapalı otoparktan çıkarılan şirket otomobilleri açık alanda kayar kasaya aktarılarak uzun mesafeli servis yolculuğunda dört tekerleği zeminden kesilmiş biçimde taşınır.</p>

      <div class="callout-box">
        <strong>Tekstilkent Hızlı Yönlendirme:</strong> ${BUSINESS.phoneDisplay} hattımızla iletişime geçtiğinizde blok harfini (örneğin A14, B8, Giyimkent 12. Sokak veya Koza Plaza otopark katı) ve araç cinsini belirtmeniz en doğru kurtarıcının anında çıkmasını sağlar.
      </div>

      <h3>Hafta Sonu ve Gece Sevkiyatlarında Kesintisiz Güvence</h3>
      <p>Tekstil ihracat yüklemeleri ve gece kargo çıkışları sebebiyle Tekstilkent çevresinde hareketlilik akşam saatlerinde de devam eder. Mesai bitiminde yolda kalan ticari sürücüler, metro çıkışı aküsü biten binek araç sahipleri veya gece vardiyasından çıkan plaza çalışanları için 7/24 nöbetçi ekibimiz her an hazırdır. Giyimkent ve Tekstilkent çıkışlarında yaşanan tüm arızalarda hem ticari hem bireysel sürücülere önceden netleştirilmiş fiyatla güvenilir destek veriyoruz.</p>
    `,
    fieldLogTitle: 'Tekstilkent B Blok Yükleme Cebinde Şarj Dinamosu Arızalanan Kamyonetin Sevki',
    fieldLogDesc: 'Öğleden sonra sevkiyat saatinde Tekstilkent B Blok yükleme cebinde şarj dinamosu arızalanıp aküsü tamamen boşalan konfeksiyon yüklü bir kamyonet blok çıkışını daralttı. Bölgeye 12 dakikada ulaşan ağır hizmet tipi kayar kasalı aracımız, hidrolik rampayı minimum eğime getirerek kamyoneti yüküne zarar vermeden platforma aldı. Araç, dört noktalı ağır gerdirme kemerleriyle sabitlenip İkitelli yetkili ticari servisine ulaştırıldı.',
    faqs: [
      {
        q: 'Koza Plaza yeraltı otoparkında kalan şirket otomobilini alçak tavan çekiciyle çıkarabilir misiniz?',
        a: 'Evet. Koza Plaza kapalı otoparkının tavan yüksekliğine tam uyumlu özel kurtarıcımız ve tekerlek patenlerimizle alt katlara inip aracınızı çizmeden açık alana alıyoruz.'
      },
      {
        q: 'Tekstilkent’teki kasalı kamyonetim yüklüyken arızalandı, taşıma kapasiteniz yeter mi?',
        a: 'Hafif ve orta sınıf kamyonetler (Transit, Daily, Canter vb.) için güçlendirilmiş uzun şasili kayar kasa araçlarımız bulunur. Araç modelini ve tahmini yük ağırlığını iletmeniz yeterlidir.'
      },
      {
        q: 'Giyimkent içindeki dar blok sokaklarına çekici rahatça girebiliyor mu?',
        a: 'Giyimkent ve Tekstilkent blok düzenini yakından tanıyoruz. Manevra kabiliyeti yüksek kurtarıcılarımızla yükleme yapan araçların arasından güvenle geçip adresinize ulaşıyoruz.'
      },
      {
        q: 'Kurumsal firmamız için yapılan çekici hizmetine resmi fatura kesiyor musunuz?',
        a: 'Elbette. Şirket muhasebeniz veya filo kiralama firmanız için eksiksiz fatura ve araç teslim tutanağı düzenliyoruz.'
      },
      {
        q: 'Tekstilkent’ten Bayrampaşa veya Topkapı sanayilerine de çekim yapıyor musunuz?',
        a: 'Evet. İkitelli ve Bağcılar sanayilerinin yanı sıra Bayrampaşa, Topkapı, Cevizlibağ ve İstanbul’un tüm ilçelerindeki servislere kesintisiz taşıma sağlıyoruz.'
      }
    ]
  },
  {
    slug: 'ikitelli',
    name: 'İkitelli',
    navbarTitle: 'İKİTELLİ ÇEKİCİ',
    category: 'sanayi',
    eta: '12–15 Dk',
    geo: { lat: 41.0719, lng: 28.8031 },
    hero: 'is-makinesi',
    fieldImage: 'ticari-panelvan',
    cardSummary: 'İkitelli OSB, Atatürk Oto Sanayi ve Masko hattında binek araç, ticari panelvan ve forklift-iş makinesi nakliyesi.',
    heroLead: 'İkitelli Organize Sanayi Bölgesi, Atatürk Oto Sanayi ve Masko çevresinde otomobil kurtarmadan forklift ve mini iş makinesi nakliyesine kadar geniş kapsamlı destek veriyoruz. Kooperatif içi kısa mesafe transferlerden acil yol yardıma kadar 7/24 sahadayız.',
    landmarks: [
      'İkitelli Organize Sanayi Bölgesi (İOSB)',
      'Atatürk Oto Sanayi Sitesi (İkitelli)',
      'Bağcılar – Güngören Sanayi Sitesi',
      'Masko Mobilya Kenti',
      'Süleyman Demirel Bulvarı',
      'Dolapdere ve Demirciler Sanayi Siteleri'
    ],
    articleHtml: `
      <h2>İkitelli OSB ve Oto Sanayi Havzasında Ağır Hizmet Çekici ve Nakliye</h2>
      <p>Başakşehir ve Küçükçekmece sınırlarına yayılan İkitelli Organize Sanayi Bölgesi, otuzdan fazla ihtisas sanayi sitesiyle İstanbul üretiminin dev motorudur. Atatürk Oto Sanayi, Bağcılar-Güngören Sanayi, Dolapdere, Demirciler, Keresteciler, Aymakoop, Pik Dökümcüler ve Masko Mobilya Kenti gibi geniş bir alana yayılan bu havzada, kurtarma ihtiyaçları sıradan bir semtten çok daha teknik ve çeşitlidir. ${BUSINESS.name}, İkitelli genelinde yalnızca binek otomobil değil; uzun şasili panelvan, kamyonet, forklift, makaslı manlift ve mini ekskavatör nakliyesini de üstlenen güçlü bir filoyla 12–15 dakikada yanınızda olur.</p>
      <p>Sanayi bölgesinin en özgün ihtiyaçlarından biri, atölyeler arası kısa mesafeli taşıma talepleridir. Motoru inmiş, şanzımanı sökülmüş veya kaporta işi bitip elektrikçiye geçmesi gereken yürüyemeyen bir otomobili halatla başka bir aracın arkasına bağlayıp yoğun sanayi trafiğinde sürüklemek hem yasak hem de son derece tehlikelidir. Ekiplerimiz kooperatif içi kısa transferlerde ekonomik ve güvenli kayar kasa desteği sunar.</p>

      <h3>İkitelli Bölgesinde Sunduğumuz Başlıca Saha Hizmetleri</h3>
      <p>Üretim tesislerinin, oto bakım ustalarının ve Masko ziyaretçilerinin günlük ihtiyaçlarına doğrudan karşılık veriyoruz:</p>
      <ul class="article-list">
        <li><strong>Forklift ve Kompakt İş Makinesi Taşıma:</strong> 1.5 tondan 5 tona kadar akülü/dizel forkliftler, bobcat yükleyiciler, makaslı platformlar ve seyyar jeneratörlerin düşük eğimli geniş rampayla fabrika veya şantiye arası nakli.</li>
        <li><strong>Sanayi Kooperatifleri Arası Araç Transferi:</strong> Atatürk Oto Sanayi, Bağcılar-Güngören Sanayi ve Dolapdere Sanayi içindeki kaporta, mekanik, rektifiye ve boya atölyeleri arasında yürüyemeyen araçların güvenle taşınması.</li>
        <li><strong>Masko ve Süleyman Demirel Bulvarı Yol Yardımı:</strong> Mobilya alışverişine gelen aile araçları ile mobilya nakliyatı yapan kapalı kasa kamyonetlerin ana bulvar üzerinde yaşadığı arızalara acil müdahale.</li>
        <li><strong>Hasarlı ve Kazalı Araçların Sanayiye İndirilmesi:</strong> Çevre ilçelerden gelen veya İkitelli içinde kaza yapan araçların ustanın dükkan önüne milimetrik hizalamayla bırakılması.</li>
      </ul>

      <h3>İş Makinesi ve Ağır Yük Sabitlemede Güvenlik Standartları</h3>
      <p>Bir forklifti ya da mini ekskavatörü taşımak, binek otomobil yüklemekten tamamen farklı mühendislik kuralları gerektirir. Küçük tekerlekli ve yüksek ağırlık merkezli makinelerde rampa açısının gereğinden dik olması kayma veya alt şasi oturmasına yol açabilir. Ağır hizmet tipi kayar kasalarımız zemine tam oturarak pürüzsüz bir biniş yüzeyi sağlar; yükleme sonrası makine yalnızca kayışla değil, yüksek mukavemetli zincir ve cırcırlı gerdirmelerle dört noktadan platforma kilitlenir. Hareket kabiliyeti tamamen kesilmiş veya hidroliği patlamış makineler yüksek çekişli hidrolik tambur vinciyle kontrollü biçimde platforma alınır.</p>
      <p>İkitelli OSB içinde adres karmaşasını önlemek için tüm kooperatif isimlerine ve blok girişlerine hakimiz. Süleyman Demirel Bulvarı veya Hürriyet Bulvarı üzerindeki yoğun tır trafiğine rağmen arka sanayi geçişlerini kullanarak randevu saatlerinize sadık kalıyoruz. Atölyeler, fabrikalar ve şantiye sorumluları için planlı makine sevkiyatlarında önceden saatli randevu ve kurumsal fatura desteği sağlıyoruz.</p>

      <div class="callout-box">
        <strong>İş Makinesi ve Forklift Nakliyesi İçin:</strong> Makinenin cinsini, yaklaşık ağırlığını ve çalışır durumda olup olmadığını ${BUSINESS.phoneDisplay} numaramıza ilettiğinizde, uygun tonajlı ağır kayar kasamızı hemen planlıyoruz.
      </div>

      <h3>Üretimi ve Ulaşımı Durdurmayan 7/24 İkitelli Desteği</h3>
      <p>İkitelli'de gece vardiyası yapan fabrikalar, akşam saatlerinde yolda kalan personel servisleri ve hafta sonu Masko trafiğinde arızalanan otomobiller için ${BUSINESS.name} kesintisiz nöbettedir. Tek bir aramayla işinize uygun ekipmanı ayağınıza getiriyor, şeffaf fiyatlandırmayla güvenilir çözüm üretiyoruz. Başakşehir, Halkalı, Mahmutbey ve İkitelli OSB arasındaki tüm ticari ve bireysel taşıma taleplerinde deneyimli operatörlerimizle her saat ulaşılabiliriz.</p>
    `,
    fieldLogTitle: 'İkitelli OSB Demirciler Sanayi Sitesi’nde Hidrolik Arızalı Forkliftin Ağır Platformla Nakli',
    fieldLogDesc: 'Hafta içi sabah saatlerinde İkitelli OSB Demirciler Sanayi Sitesi’ndeki bir metal atölyesinde hidrolik hortumu patlayan 3 tonluk akülü forklift kendi gücüyle yürüyemez hale geldi. Ağır hizmet tipi geniş tabanlı kayar kasalı aracımız 14 dakikada atölye önüne ulaştı. Yüksek çekişli hidrolik vinçle düşük açılı rampadan platforma alınan forklift, zincirli gerdirmelerle sabitlenerek Başakşehir’deki yetkili forklift bakım merkezine sorunsuz bırakıldı.',
    faqs: [
      {
        q: 'İkitelli OSB içinde çalışmayan forklift veya makaslı platformu taşıyabiliyor musunuz?',
        a: 'Evet. Yüksek çekişli hidrolik vinç ve ağır hizmet tipi kayar kasa donanımımızla arızalı forklift, bobcat, makaslı manlift ve jeneratörleri güvenli zincir bağlantısıyla taşıyoruz.'
      },
      {
        q: 'Atatürk Oto Sanayi içinde bir dükkandan diğerine kısa mesafe çekim yapıyor musunuz?',
        a: 'Elbette. Kaportacıdan mekanikçiye, elektrikçiden boyacıya kadar sanayi içi yürüyemeyen araçlarınız için hızlı ve ekonomik kısa mesafe transfer desteği veriyoruz.'
      },
      {
        q: 'Masko Mobilya Kenti otoparkında veya Süleyman Demirel Bulvarı’nda kalırsam kaç dakikada gelirsiniz?',
        a: 'Mahmutbey, İSTOÇ ve İkitelli aksındaki nöbetçi ekiplerimiz sayesinde Masko ve ana bulvar noktalarına ortalama 12–15 dakika içinde ulaşıyoruz.'
      },
      {
        q: 'Mobilya yüklü kapalı kasa kamyonetimiz İkitelli’de arızalandı, çekebilir misiniz?',
        a: 'Kamyonetinizin şasi uzunluğu ve tahmini yüklü ağırlığı uygunsa yükü boşaltmaya gerek kalmadan güçlendirilmiş uzun kayar kasamızla doğrudan servise taşıyoruz.'
      },
      {
        q: 'Sanayi bölgesinde gece saatlerinde de çekici hizmeti veriyor musunuz?',
        a: 'Evet, İkitelli OSB, Masko ve çevre bağlantılarda haftanın 7 günü 24 saat aktif nöbetimiz vardır; gece vardiyasında da aynı hızla müdahale ediyoruz.'
      }
    ]
  }
];
