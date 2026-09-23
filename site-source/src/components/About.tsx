import React from 'react';
import { Award, Target, Eye, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Mehmet Fatih AYDIN",
      role: "Kreatif Direktör & Sinematograf",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Sinematografi ve yönetmenlik alanında yenilikçi anlatım teknikleriyle dikkat çeken genç bir yaratıcıdır. Blackmagic 6K sistemleriyle çalışmayı, görüntüde anlam yaratmayı ve her karede bir duygu inşa etmeyi hedefler. Kurucusu olduğu Gamma Productions çatısı altında; reklam, kısa film ve marka hikâyelerini yüksek prodüksiyon kalitesiyle buluşturur. Tekniği estetikle, vizyonu gerçeklikle harmanlar.",
      specialty: "Sinematograf"
    },
    {
      name: "Sıla TURAN",
      role: "Editör & İçerik Tasarımcısı",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Gamma Productions'ın yaratıcı mutfağının merkezindeki isimdir. Tüm içerikler onun edit masasında anlam kazanır, renk bulur, ritimle bütünleşir. Revizyon süreçlerini yönetir, projelerin hem görsel hem duygusal tonunu incelikle şekillendirir. Görsel düzenlemelerden motion tasarımlara, Sıla'nın dokunuşu olmadan hiçbir içerik yayına girmez.",
      specialty: "Editör"
    },
    {
      name: "Miraç AYDIN",
      role: "Post-Prodüksiyon Sanatçısı",
      image: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Gamma Productions'ın post-prodüksiyon sihirbazıdır. Kurgudan renk düzenlemeye, sahnelerin duygusunu ince ince işler. Color grading ve ritim duygusuyla projeye son şeklini verir; anlatıyı parlatır, detayları kusursuzlaştırır.",
      specialty: "Prodüksiyon Sanatçısı"
    }
  ];

  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Sinematik Vizyon",
      description: "Her kare bir hikâye anlatır. Biz her projeye, bir sinemacının gözüyle ve bir ustanın titizliğiyle yaklaşırız."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Profesyonel Teknik Yetkinlik",
      description: "En ileri teknoloji, yaratıcı uzmanlıkla buluşuyor. Kaliteden ödün vermemek için en güncel ekipmanlara yatırım yapıyoruz."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Takım Ruhu ve Ortak Vizyon",
      description: "Hayaliniz, bizim uzmanlığımız. Hikâyenizi en özgün ve etkileyici şekilde hayata geçirmek için sizinle birlikte çalışıyoruz."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sonuç Odaklı",
      description: "Görselde güzellik, sonuçta etki. Her projeyi, hedeflerinize ulaşmak ve beklentilerin ötesine geçmek için özenle tasarlıyoruz."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Manifesto */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/20 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-[#D72638]" />
            <span className="text-[#D72638] font-medium">Hikayemiz</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-[#D72638]">Gamma Productions</span> Hakkında
          </h2>
          
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <p className="text-xl text-[#CCCCCC] mb-8 leading-relaxed">
              Dünyanın neresinde olursa olsun, her markanın anlatacak bir hikâyesi, her anın aktarılacak bir duygusu vardır. Gamma Productions olarak biz, bu hikâyeleri sinemanın diliyle anlatıyor, markalara evrensel bir sahne sunuyoruz.
            </p>
            <p className="text-lg text-[#CCCCCC] leading-relaxed">
              Biz, hikâye anlatmayı seven bir ekibiz. Teknolojiyi sanata dönüştürerek, her projede markaların kendini en iyi şekilde ifade etmesini sağlıyoruz. Blackmagic 6K sistemlerimizle çekiyor, yenilikçi kurgu süreçlerimizle fark yaratıyoruz. Sadece beklentileri karşılamıyoruz. Yeniden şekillendiriyoruz.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="text-[#D72638]">Değerlerimiz</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#D72638]/30 rounded-3xl p-6 group-hover:bg-white/10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                    <div className="text-[#D72638] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D72638] transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Floating glow effect */}
                  <div className="absolute inset-0 bg-[#D72638]/10 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 rounded-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Bizimle <span className="text-[#D72638]">Tanışın</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#D72638]/30 rounded-3xl overflow-hidden group-hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />
                      
                      {/* Specialty Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="backdrop-blur-sm bg-[#D72638]/20 border border-[#D72638]/30 rounded-full px-3 py-1">
                          <span className="text-[#D72638] text-xs font-medium">{member.specialty}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D72638] transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-[#D72638] font-medium mb-3">{member.role}</p>
                      <p className="text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating glow effect */}
                  <div className="absolute inset-0 bg-[#D72638]/10 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 rounded-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#D72638] rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-white">
                <span className="text-[#D72638]">Misyonumuz</span>
              </h3>
              <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed">
                Markaları ve hikâyeleri sinematik mükemmelliğin gücüyle yükseltmek; sadece dikkat çeken değil, kalıcı duygusal bağlar kuran ve gerçek sonuçlar üreten görsel deneyimler sunmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;