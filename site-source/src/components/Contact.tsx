import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/20 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-[#D72638]" />
            <span className="text-[#D72638] font-medium">İletişime Geçin</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Projenizi <span className="text-[#D72638]">Başlatalım</span>
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Vizyonunuzu hayata geçirmeye hazır mısınız? Projenizi konuşalım ve birlikte olağanüstü bir şey yaratalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form with Red Glass Effect */}
          <div className="backdrop-blur-xl bg-[#D72638]/5 border border-[#D72638]/20 rounded-3xl p-8 relative overflow-hidden">
            {/* Red glass background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D72638]/10 to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-6 h-6 text-[#D72638]" />
                <h3 className="text-2xl font-bold text-white">
                  Birlikte Yaratalım
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/20 focus:border-[#D72638] rounded-2xl text-white placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#D72638]/20 transition-all duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                      E-posta Adresi *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/20 focus:border-[#D72638] rounded-2xl text-white placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#D72638]/20 transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                    Şirket / Organizasyon
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/20 focus:border-[#D72638] rounded-2xl text-white placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#D72638]/20 transition-all duration-300"
                    placeholder="Şirket adınız (isteğe bağlı)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                    Proje Detayları *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/20 focus:border-[#D72638] rounded-2xl text-white placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#D72638]/20 transition-all duration-300"
                    placeholder="Projeniz, zaman çizelgesi, bütçe ve vizyonunuz hakkında bize bilgi verin..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full relative overflow-hidden bg-[#D72638] hover:bg-[#D72638]/80 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 border border-[#D72638]"
                >
                  <Send className="w-5 h-5" />
                  <span>Mesaj Gönder</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Phone className="w-6 h-6 text-[#D72638]" />
                  <h3 className="text-2xl font-bold text-white">
                    İletişim Bilgileri
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-3 rounded-2xl group-hover:bg-[#D72638]/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-[#D72638]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">E-posta</h4>
                      <p className="text-[#CCCCCC]">info@gammaproductions.net</p>
                      <p className="text-[#CCCCCC] text-sm">24 saat içinde yanıt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-3 rounded-2xl group-hover:bg-[#D72638]/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-[#D72638]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Telefon</h4>
                      <p className="text-[#CCCCCC]">+90 539 323 1002</p>
                      <p className="text-[#CCCCCC] text-sm">Pzt-Cum, 9:00-18:00 </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-3 rounded-2xl group-hover:bg-[#D72638]/20 transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 text-[#D72638]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                      <p className="text-[#CCCCCC]">+90 539 323 1002</p>
                      <p className="text-[#CCCCCC] text-sm">Acil projeler için hızlı yanıt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-3 rounded-2xl group-hover:bg-[#D72638]/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-[#D72638]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Konum</h4>
                      <p className="text-[#CCCCCC]">Elazığ, Türkiye</p>
                      <p className="text-[#CCCCCC] text-sm">Dünya çapında müşterilere hizmet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-[#D72638]" />
                  <h3 className="text-2xl font-bold text-white">
                    Konumumuz
                  </h3>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-[#D72638]/10 to-white/5 border border-[#D72638]/30 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                  {/* Map grid background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-[#D72638]/20" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <div className="relative mb-4">
                      <MapPin className="w-16 h-16 text-[#D72638] mx-auto animate-pulse" />
                      <div className="absolute inset-0 bg-[#D72638]/20 blur-xl rounded-full" />
                    </div>
                    <p className="text-white font-medium">Elazığ, Türkiye</p>
                    <p className="text-[#CCCCCC] text-sm mt-2">Google Maps entegrasyonu mevcut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;