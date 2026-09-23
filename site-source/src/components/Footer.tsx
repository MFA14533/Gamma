import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Camera className="w-10 h-10 text-[#D72638]" />
                <div className="absolute inset-0 w-10 h-10 bg-[#D72638]/20 rounded-full blur-lg" />
              </div>
              <span className="text-2xl font-bold text-white">
                Gamma Productions
              </span>
            </div>
            <p className="text-[#CCCCCC] mb-6 max-w-md leading-relaxed">
              Elazığ, Türkiye'de sinematik mükemmellik yaratıyoruz. Vizyonunuzu en ileri teknoloji ve yaratıcı hikaye anlatımıyla hayata geçiriyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group relative">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-3 rounded-2xl group-hover:bg-[#D72638]/20 group-hover:border-[#D72638]/30 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-[#CCCCCC] group-hover:text-[#D72638] transition-colors duration-300" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-3 rounded-2xl group-hover:bg-[#D72638]/20 group-hover:border-[#D72638]/30 transition-all duration-300">
                  <Twitter className="w-5 h-5 text-[#CCCCCC] group-hover:text-[#D72638] transition-colors duration-300" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-3 rounded-2xl group-hover:bg-[#D72638]/20 group-hover:border-[#D72638]/30 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-[#CCCCCC] group-hover:text-[#D72638] transition-colors duration-300" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-3 rounded-2xl group-hover:bg-[#D72638]/20 group-hover:border-[#D72638]/30 transition-all duration-300">
                  <Youtube className="w-5 h-5 text-[#CCCCCC] group-hover:text-[#D72638] transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center space-x-2">
              <span>Hızlı Bağlantılar</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-[#CCCCCC] hover:text-[#D72638] transition-colors duration-300 hover:translate-x-1 transform inline-block">Ana Sayfa</a></li>
              <li><a href="#services" className="text-[#CCCCCC] hover:text-[#D72638] transition-colors duration-300 hover:translate-x-1 transform inline-block">Hizmetler</a></li>
              <li><a href="#portfolio" className="text-[#CCCCCC] hover:text-[#D72638] transition-colors duration-300 hover:translate-x-1 transform inline-block">Portföy</a></li>
              <li><a href="#tips" className="text-[#CCCCCC] hover:text-[#D72638] transition-colors duration-300 hover:translate-x-1 transform inline-block">Sinematik İpuçları</a></li>
              <li><a href="#about" className="text-[#CCCCCC] hover:text-[#D72638] transition-colors duration-300 hover:translate-x-1 transform inline-block">Hakkımızda</a></li>
              <li><a href="#contact" className="text-[#CCCCCC] hover:text-[#D72638] transition-colors duration-300 hover:translate-x-1 transform inline-block">İletişim</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center space-x-2">
              <span>İletişim Bilgileri</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-2 rounded-lg group-hover:bg-[#D72638]/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#D72638]" />
                </div>
                <span className="text-[#CCCCCC] text-sm group-hover:text-white transition-colors duration-300">info@gammaproductions.net</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-2 rounded-lg group-hover:bg-[#D72638]/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#D72638]" />
                </div>
                <span className="text-[#CCCCCC] text-sm group-hover:text-white transition-colors duration-300">+90 539 323 1002</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 p-2 rounded-lg group-hover:bg-[#D72638]/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#D72638]" />
                </div>
                <span className="text-[#CCCCCC] text-sm group-hover:text-white transition-colors duration-300">Elazığ, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-[#CCCCCC] text-sm leading-relaxed">
              © {currentYear} Gamma Productions. Tüm hakları saklıdır. | 
              <span className="text-[#D72638] font-medium"> Sinematik mükemmellik tutkusuyla hazırlandı.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;