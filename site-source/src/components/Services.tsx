import React from 'react';
import { Video, Camera, Palette, Plane, Monitor, Clapperboard, Zap, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Reklam Prodüksiyonu",
      description: "Marka katılımını artıran ve ölçülebilir sonuçlar sunan yüksek etkili reklamlar.",
      features: ["4K/6K Prodüksiyon", "Marka Hikayeciliği", "Çoklu Platform Dağıtımı"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Sosyal Medya İçeriği",
      description: "Instagram, TikTok, YouTube ve yeni platformlar için optimize edilmiş viral içerikler.",
      features: ["Dikey Video", "Hızlı Teslimat", "Platform Optimizasyonu"]
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: "Kurumsal Filmler",
      description: "Şirketinizin vizyonunu ve değerlerini ileten profesyonel kurumsal videolar.",
      features: ["Yönetici Röportajları", "Şirket Kültürü", "Eğitim Videoları"]
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Drone Sinematografisi",
      description: "Prodüksiyonlarınıza sinematik boyut katan nefes kesici hava çekimleri.",
      features: ["4K Hava Görüntüleri", "Lisanslı Pilotlar", "Yaratıcı Açılar"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Renk Düzenleme",
      description: "Ruh halini ve görsel etkiyi artıran profesyonel renk düzeltme ve derecelendirme.",
      features: ["DaVinci Resolve", "HDR Derecelendirme", "Film Emülasyonu"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Sahne Arkası",
      description: "Prodüksiyon sürecinizi sergileyen ve izleyici bağlantısı kuran etkileyici BTS içerikleri.",
      features: ["Çoklu Kamera Kurulumu", "Gerçek Zamanlı Düzenleme", "Sosyal Medya Hazır"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Motion Tasarım",
      description: "Markanızı hayata geçiren dinamik motion grafikler ve görsel efektler.",
      features: ["2D/3D Animasyon", "Logo Animasyonu", "Görsel Efektler"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Canlı Yayın",
      description: "Etkinlikler, lansmanlar ve dijital deneyimler için profesyonel canlı yayın çözümleri.",
      features: ["Çoklu Kamera Canlı", "Gerçek Zamanlı Grafikler", "Platform Entegrasyonu"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/20 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-[#D72638]" />
            <span className="text-[#D72638] font-medium">Hizmetlerimiz</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Sinematik <span className="text-[#D72638]">Mükemmellik</span>
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Konseptten teslimata kadar, markanızı yükselten ve izleyicilerinizi büyüleyen kapsamlı video prodüksiyon hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#D72638]/30 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Red accent border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D72638]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon with glow effect */}
              <div className="relative mb-6">
                <div className="text-[#D72638] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-[#D72638]/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D72638] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-[#D72638] rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Floating glow particle */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#D72638]/50 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;