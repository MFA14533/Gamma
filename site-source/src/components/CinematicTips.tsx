import React, { useState } from 'react';
import { BookOpen, ArrowRight, Lightbulb, X, Play, Settings, Mic } from 'lucide-react';

const CinematicTips = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const tips = [
    {
      id: 1,
      title: "Blackmagic 6K İş Akışında Ustalaşmak",
      excerpt: "Profesyonel prodüksiyonlar için Blackmagic 6K Full Frame'inizi optimize etme rehberi. Renk bilimi, codec seçimi ve post-prodüksiyon iş akışı.",
      category: "Ekipman İncelemesi",
      readTime: "8 dk okuma",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true,
      icon: <Settings className="w-5 h-5" />,
      fullContent: `
        <h2>Blackmagic 6K Full Frame ile Profesyonel İş Akışı</h2>
        
        <h3>1. Doğru Codec Seçimi</h3>
        <p>Blackmagic 6K FF'de en önemli karar codec seçimidir. Blackmagic RAW, maksimum esneklik sunarken, ProRes seçenekleri hızlı iş akışı için idealdir:</p>
        <ul>
          <li><strong>BRAW 3:1</strong> - Yüksek kalite, orta dosya boyutu</li>
          <li><strong>BRAW 5:1</strong> - Dengeli kalite/boyut oranı</li>
          <li><strong>ProRes 422 HQ</strong> - Hızlı düzenleme için</li>
        </ul>

        <h3>2. Renk Bilimi ve Profil Ayarları</h3>
        <p>Blackmagic Generation 5 Color Science ile en iyi sonuçları almak için:</p>
        <ul>
          <li>Blackmagic Film profili kullanın</li>
          <li>ISO 400'ü temel alın (native ISO)</li>
          <li>Zebra'ları %75-80 arası ayarlayın</li>
          <li>False Color kullanarak pozlamayı kontrol edin</li>
        </ul>

        <h3>3. Lens Seçimi ve Adaptasyon</h3>
        <p>Full Frame sensör avantajını maksimize etmek için:</p>
        <ul>
          <li>Canon EF lensler mükemmel uyumluluk sağlar</li>
          <li>Sigma Art serisi keskin görüntü kalitesi sunar</li>
          <li>Vintage lensler karakter katmak için ideal</li>
        </ul>

        <h3>4. Post-Prodüksiyon Optimizasyonu</h3>
        <p>DaVinci Resolve ile en verimli iş akışı:</p>
        <ul>
          <li>Proxy medya kullanarak düzenleme hızını artırın</li>
          <li>Color Space Transform kullanın</li>
          <li>Render cache'i aktif tutun</li>
          <li>GPU hızlandırmasını optimize edin</li>
        </ul>

        <h3>5. Pratik Çekim İpuçları</h3>
        <ul>
          <li>Dual ISO özelliğini gece çekimlerinde kullanın</li>
          <li>Internal ND filtrelerini yaratıcı şekilde kullanın</li>
          <li>Focus peaking'i %50 seviyesinde tutun</li>
          <li>Histogram'ı sürekli kontrol edin</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Sinematik Görünüm İçin Renk Düzenleme Sırları",
      excerpt: "Hollywood tarzı renk düzenleme teknikleri. Duygu yaratma, atmosfer kurma ve görsel hikaye anlatımında rengin gücü.",
      category: "Teknik",
      readTime: "12 dk okuma",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      icon: <Play className="w-5 h-5" />,
      fullContent: `
        <h2>Profesyonel Renk Düzenleme Teknikleri</h2>
        
        <h3>1. Temel Renk Teorisi</h3>
        <p>Sinematik renk düzenlemede en önemli kavramlar:</p>
        <ul>
          <li><strong>Komplementer Renkler:</strong> Turuncu-Mavi, Sarı-Mor kombinasyonları</li>
          <li><strong>Analog Renkler:</strong> Uyumlu geçişler için</li>
          <li><strong>Monokromatik Yaklaşım:</strong> Tek renk tonlarında çalışma</li>
        </ul>

        <h3>2. Hollywood Tarzı Look'lar</h3>
        <p>Popüler sinema renk paletleri:</p>
        <ul>
          <li><strong>Orange & Teal:</strong> Aksiyon filmleri için klasik</li>
          <li><strong>Desaturated Blues:</strong> Dramatik sahneler</li>
          <li><strong>Warm Highlights, Cool Shadows:</strong> Doğal görünüm</li>
          <li><strong>Bleach Bypass:</strong> Yoğun kontrast efekti</li>
        </ul>

        <h3>3. DaVinci Resolve İş Akışı</h3>
        <p>Profesyonel renk düzenleme adımları:</p>
        <ol>
          <li><strong>Primary Correction:</strong> Exposure, contrast, saturation</li>
          <li><strong>Secondary Correction:</strong> Seçici renk düzeltmeleri</li>
          <li><strong>Power Windows:</strong> Bölgesel düzenlemeler</li>
          <li><strong>LUT Application:</strong> Yaratıcı look'lar</li>
          <li><strong>Final Polish:</strong> Vignette, grain, sharpening</li>
        </ol>

        <h3>4. Duygu Yaratma Teknikleri</h3>
        <ul>
          <li><strong>Sıcak Tonlar:</strong> Mutluluk, nostalji, güven</li>
          <li><strong>Soğuk Tonlar:</strong> Üzüntü, gerilim, teknoloji</li>
          <li><strong>Desaturation:</strong> Gerçekçilik, drama</li>
          <li><strong>High Contrast:</strong> Aksiyon, enerji</li>
        </ul>

        <h3>5. Teknik İpuçları</h3>
        <ul>
          <li>Scopes'ları sürekli kontrol edin</li>
          <li>Referans monitör kullanın</li>
          <li>Farklı cihazlarda test edin</li>
          <li>Versiyonları kaydedin</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Drone Sinematografisi: Yasal ve Yaratıcı Rehber",
      excerpt: "Türkiye'de drone kullanım izinleri, güvenlik protokolleri ve sinematik hava çekimi teknikleri. SHGM kuralları ve yaratıcı açılar.",
      category: "Prodüksiyon",
      readTime: "10 dk okuma",
      image: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      icon: <Settings className="w-5 h-5" />,
      fullContent: `
        <h2>Drone Sinematografisi: Yasal ve Yaratıcı Kılavuz</h2>
        
        <h3>1. Türkiye'de Yasal Gereklilikler</h3>
        <p>SHGM (Sivil Havacılık Genel Müdürlüğü) kuralları:</p>
        <ul>
          <li><strong>SİHA-1 Belgesi:</strong> 500g üzeri dronlar için zorunlu</li>
          <li><strong>Uçuş İzni:</strong> Kontrollü hava sahalarında gerekli</li>
          <li><strong>Sigorta:</strong> Ticari kullanım için zorunlu</li>
          <li><strong>Operatör Belgesi:</strong> Profesyonel çekimler için</li>
        </ul>

        <h3>2. Güvenlik Protokolleri</h3>
        <p>Her çekim öncesi kontrol listesi:</p>
        <ul>
          <li>Hava durumu kontrolü (rüzgar hızı &lt;10 m/s)</li>
          <li>Batarya seviyesi (%100 şarj)</li>
          <li>GPS sinyali kontrolü</li>
          <li>Return-to-Home ayarları</li>
          <li>Acil durum prosedürleri</li>
        </ul>

        <h3>3. Sinematik Uçuş Teknikleri</h3>
        <p>Profesyonel hava çekimi hareketleri:</p>
        <ul>
          <li><strong>Reveal Shot:</strong> Nesnenin arkasından çıkma</li>
          <li><strong>Orbit:</strong> Obje etrafında dönme</li>
          <li><strong>Dolly Zoom:</strong> Yaklaşırken zoom out</li>
          <li><strong>Top Down:</strong> Yukarıdan aşağı bakış</li>
          <li><strong>Parallax:</strong> Ön plan-arka plan ayrımı</li>
        </ul>

        <h3>4. Kamera Ayarları</h3>
        <p>En iyi görüntü kalitesi için:</p>
        <ul>
          <li><strong>4K 24fps:</strong> Sinematik görünüm</li>
          <li><strong>D-Log profili:</strong> Maksimum dinamik aralık</li>
          <li><strong>Manual pozlama:</strong> Tutarlı görüntü</li>
          <li><strong>ND filtreler:</strong> Doğru shutter speed</li>
        </ul>

        <h3>5. Post-Prodüksiyon İpuçları</h3>
        <ul>
          <li>Stabilizasyon yazılımı kullanın</li>
          <li>Renk düzeltmesi yapın</li>
          <li>Speed ramping ekleyin</li>
          <li>Müzikle senkronize edin</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Sinema Kamerası Kit Rehberi 2024",
      excerpt: "Bütçenize uygun sinema kamerası seçimi, lens önerileri ve temel aksesuarlar. Blackmagic, Sony, Canon karşılaştırması.",
      category: "Ekipman İncelemesi",
      readTime: "15 dk okuma",
      image: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      icon: <Settings className="w-5 h-5" />,
      fullContent: `
        <h2>2024 Sinema Kamerası Kit Rehberi</h2>
        
        <h3>1. Kamera Seçimi (Bütçe Bazlı)</h3>
        
        <h4>Başlangıç Seviyesi (50.000-100.000 TL)</h4>
        <ul>
          <li><strong>Blackmagic Pocket 6K:</strong> En iyi değer/performans</li>
          <li><strong>Sony FX30:</strong> Güvenilir otofokus</li>
          <li><strong>Canon R7:</strong> Dual Pixel AF</li>
        </ul>

        <h4>Orta Seviye (100.000-300.000 TL)</h4>
        <ul>
          <li><strong>Blackmagic 6K FF:</strong> Full frame avantajı</li>
          <li><strong>Sony FX6:</strong> Profesyonel özellikler</li>
          <li><strong>Canon C70:</strong> Kompakt tasarım</li>
        </ul>

        <h4>Profesyonel (300.000+ TL)</h4>
        <ul>
          <li><strong>RED Komodo:</strong> 6K global shutter</li>
          <li><strong>Sony FX9:</strong> Broadcast kalitesi</li>
          <li><strong>Canon C300 Mark III:</strong> Güvenilirlik</li>
        </ul>

        <h3>2. Lens Seçimi</h3>
        
        <h4>Temel Lens Seti</h4>
        <ul>
          <li><strong>24-70mm f/2.8:</strong> Çok amaçlı zoom</li>
          <li><strong>50mm f/1.4:</strong> Portre ve genel çekim</li>
          <li><strong>85mm f/1.8:</strong> Portre ve close-up</li>
          <li><strong>16-35mm f/2.8:</strong> Geniş açı</li>
        </ul>

        <h4>Sinema Lensleri</h4>
        <ul>
          <li><strong>Rokinon Cine DS:</strong> Bütçe dostu</li>
          <li><strong>Sigma Cine:</strong> Orta segment</li>
          <li><strong>Zeiss CP.3:</strong> Profesyonel</li>
        </ul>

        <h3>3. Temel Aksesuarlar</h3>
        <ul>
          <li><strong>Tripod:</strong> Manfrotto 502AH</li>
          <li><strong>Gimbal:</strong> DJI RS3 Pro</li>
          <li><strong>Monitor:</strong> Atomos Ninja V</li>
          <li><strong>Ses:</strong> Rode VideoMic Pro+</li>
          <li><strong>Işık:</strong> Aputure 120D Mark II</li>
        </ul>

        <h3>4. Bütçe Planlama</h3>
        <p>Toplam bütçenizi şu şekilde dağıtın:</p>
        <ul>
          <li><strong>%40:</strong> Kamera gövdesi</li>
          <li><strong>%30:</strong> Lensler</li>
          <li><strong>%20:</strong> Aksesuarlar</li>
          <li><strong>%10:</strong> Yedek parça/bakım</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "Temiz Ses Kaydı İçin Profesyonel İpuçları",
      excerpt: "Diyalog kaydı, ambient ses yakalama ve post-prodüksiyon ses işleme teknikleri. Mikrofon seçimi ve akustik çözümler.",
      category: "Teknik",
      readTime: "9 dk okuma",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      icon: <Mic className="w-5 h-5" />,
      fullContent: `
        <h2>Profesyonel Ses Kaydı Teknikleri</h2>
        
        <h3>1. Mikrofon Seçimi</h3>
        
        <h4>Diyalog İçin</h4>
        <ul>
          <li><strong>Shotgun Mikrofon:</strong> Rode NTG3, Sennheiser MKE 600</li>
          <li><strong>Lavalier:</strong> Sennheiser G4, Rode Wireless GO II</li>
          <li><strong>Boom Pole:</strong> K-Tek KE-79CC</li>
        </ul>

        <h4>Ambient Ses İçin</h4>
        <ul>
          <li><strong>Stereo Mikrofon:</strong> Rode Stereo VideoMic Pro</li>
          <li><strong>Field Recorder:</strong> Zoom H5, Tascam DR-60D</li>
        </ul>

        <h3>2. Kayıt Teknikleri</h3>
        
        <h4>Diyalog Kaydı</h4>
        <ul>
          <li>Mikrofonu konuşmacıya 30-60cm mesafede tutun</li>
          <li>Rüzgar koruması kullanın</li>
          <li>Arka plan gürültüsünü minimize edin</li>
          <li>Ses seviyesini -12dB ile -6dB arasında tutun</li>
        </ul>

        <h4>Ambient Ses</h4>
        <ul>
          <li>Her lokasyon için room tone kaydedin</li>
          <li>Stereo kayıt kullanın</li>
          <li>En az 30 saniye kaydedin</li>
          <li>Farklı açılardan kayıt yapın</li>
        </ul>

        <h3>3. Akustik Çözümler</h3>
        
        <h4>İç Mekan</h4>
        <ul>
          <li>Halı ve perdeler yankıyı azaltır</li>
          <li>Köşelere akustik panel yerleştirin</li>
          <li>Sert yüzeylerden kaçının</li>
          <li>Klima ve fan seslerini kapatın</li>
        </ul>

        <h4>Dış Mekan</h4>
        <ul>
          <li>Rüzgar koruması kullanın</li>
          <li>Trafik sesinden uzak durun</li>
          <li>Doğal ses bariyerleri kullanın</li>
          <li>Sabah erken saatleri tercih edin</li>
        </ul>

        <h3>4. Post-Prodüksiyon</h3>
        
        <h4>Temel İşlemler</h4>
        <ul>
          <li><strong>Noise Reduction:</strong> iZotope RX, Audacity</li>
          <li><strong>EQ:</strong> 80Hz altını kesin, 2-5kHz arttırın</li>
          <li><strong>Compression:</strong> Dinamik aralığı kontrol edin</li>
          <li><strong>De-esser:</strong> S seslerini yumuşatın</li>
        </ul>

        <h3>5. Senkronizasyon</h3>
        <ul>
          <li>Clapperboard kullanın</li>
          <li>Timecode senkronizasyonu</li>
          <li>Plural Eyes yazılımı</li>
          <li>Manuel senkronizasyon teknikleri</li>
        </ul>
      `
    }
  ];

  const featuredTip = tips.find(tip => tip.featured);
  const regularTips = tips.filter(tip => !tip.featured);

  const openArticle = (id: number) => {
    setSelectedArticle(id);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  const selectedTip = tips.find(tip => tip.id === selectedArticle);

  return (
    <section id="tips" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/20 rounded-full px-6 py-3 mb-8">
            <Lightbulb className="w-5 h-5 text-[#D72638]" />
            <span className="text-[#D72638] font-medium">Uzman Görüşleri</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Sinematik <span className="text-[#D72638]">İpuçları</span>
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Sektör profesyonellerinden uzman görüşleri, ekipman incelemeleri ve prodüksiyon teknikleriyle sinematografi sanatında ustalaşın.
          </p>
        </div>

        {/* Featured Article */}
        {featuredTip && (
          <div className="mb-16">
            <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#D72638]/30 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <img
                    src={featuredTip.image}
                    alt={featuredTip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="backdrop-blur-sm bg-[#D72638]/20 border border-[#D72638] rounded-full px-4 py-2">
                      <span className="text-[#D72638] text-sm font-medium">Öne Çıkan</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D72638]/20 text-[#D72638] border border-[#D72638]/30 rounded-full text-sm font-medium">
                      {featuredTip.icon}
                      <span>{featuredTip.category}</span>
                    </span>
                    <span className="text-[#CCCCCC] text-sm">{featuredTip.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#D72638] transition-colors duration-300">
                    {featuredTip.title}
                  </h3>
                  
                  <p className="text-[#CCCCCC] text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {featuredTip.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => openArticle(featuredTip.id)}
                    className="inline-flex items-center text-[#D72638] hover:text-white font-medium transition-colors group"
                  >
                    Tam Makaleyi Oku
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Red glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D72638]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        )}

        {/* Regular Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularTips.map((tip, index) => (
            <article
              key={tip.id}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#D72638]/30 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${
                    tip.category === 'Ekipman İncelemesi' ? 'bg-[#D72638]/20 text-[#D72638] border-[#D72638]/30' :
                    tip.category === 'Teknik' ? 'bg-blue-500/20 text-blue-400 border-blue-400/30' :
                    'bg-green-500/20 text-green-400 border-green-400/30'
                  }`}>
                    {tip.icon}
                    <span>{tip.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-[#CCCCCC] text-sm mb-3">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {tip.readTime}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D72638] transition-colors duration-300">
                  {tip.title}
                </h3>
                
                <p className="text-[#CCCCCC] mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {tip.excerpt}
                </p>
                
                <button 
                  onClick={() => openArticle(tip.id)}
                  className="inline-flex items-center text-[#D72638] hover:text-white font-medium transition-colors group"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Floating glow particle */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#D72638]/50 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="backdrop-blur-sm bg-[#D72638]/20 hover:bg-[#D72638] border border-[#D72638] text-[#D72638] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
            Tüm Görüşleri Görüntüle
          </button>
        </div>
      </div>

      {/* Article Modal */}
      {selectedTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeArticle}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] backdrop-blur-xl bg-[#0A0A0A]/95 border border-white/10 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 z-10 backdrop-blur-xl bg-[#0A0A0A]/90 border-b border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${
                    selectedTip.category === 'Ekipman İncelemesi' ? 'bg-[#D72638]/20 text-[#D72638] border-[#D72638]/30' :
                    selectedTip.category === 'Teknik' ? 'bg-blue-500/20 text-blue-400 border-blue-400/30' :
                    'bg-green-500/20 text-green-400 border-green-400/30'
                  }`}>
                    {selectedTip.icon}
                    <span>{selectedTip.category}</span>
                  </span>
                  <span className="text-[#CCCCCC] text-sm">{selectedTip.readTime}</span>
                </div>
                <button
                  onClick={closeArticle}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 p-2 rounded-full hover:bg-[#D72638]/20 hover:border-[#D72638] transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">
                {selectedTip.title}
              </h1>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div 
                className="prose prose-invert prose-red max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedTip.fullContent }}
                style={{
                  color: '#CCCCCC',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Modal Content */}
      <style jsx>{`
        .prose h2 {
          color: #D72638;
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #FFFFFF;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose h4 {
          color: #D72638;
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .prose p {
          color: #CCCCCC;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
        }
        .prose li {
          color: #CCCCCC;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .prose strong {
          color: #FFFFFF;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default CinematicTips;