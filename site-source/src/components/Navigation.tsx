import React from 'react';
import { Camera, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'services', label: 'Hizmetler' },
    { id: 'portfolio', label: 'Portföy' },
    { id: 'tips', label: 'Sinematik İpuçları' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'contact', label: 'İletişim' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Modern glassmorphism navigation */}
      <div className="backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with enhanced styling */}
            <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative mr-3">
                {/* Logo glow effect */}
                <div className="absolute inset-0 bg-[#D72638]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                {/* Logo image */}
                <img
                  src="/gama productions red.png"
                  alt="Gamma Productions"
                  className="relative h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Company name - hidden on mobile to save space */}
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-white group-hover:text-[#D72638] transition-colors duration-300">
                  Gamma Productions
                </span>
                <span className="text-xs text-[#CCCCCC] font-medium tracking-wider">
                  Sinematografi
                </span>
              </div>
            </div>

            {/* Desktop Navigation with enhanced glass effect */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group px-6 py-3 text-sm font-medium transition-all duration-300 rounded-2xl ${
                    activeSection === item.id 
                      ? 'text-[#D72638] bg-[#D72638]/10 border border-[#D72638]/30' 
                      : 'text-white hover:text-[#D72638] hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D72638]/20 to-[#D72638]/10 rounded-2xl animate-pulse" />
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-[#D72638]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#D72638] rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-8' : 'w-0 group-hover:w-6'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button with glass effect */}
            <button
              className="md:hidden relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-3 rounded-2xl group-hover:bg-white/10 group-hover:border-[#D72638]/30 transition-all duration-300">
                {isMenuOpen ? 
                  <X className="w-6 h-6 text-white group-hover:text-[#D72638] transition-colors duration-300" /> : 
                  <Menu className="w-6 h-6 text-white group-hover:text-[#D72638] transition-colors duration-300" />
                }
              </div>
              <div className="absolute inset-0 bg-[#D72638]/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-lg transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Navigation with enhanced styling */}
          {isMenuOpen && (
            <div className="md:hidden backdrop-blur-xl bg-black/90 border-t border-white/10 rounded-b-3xl shadow-2xl">
              <div className="px-4 pt-6 pb-8 space-y-3">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-6 py-4 text-sm font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id 
                        ? 'text-[#D72638] bg-[#D72638]/10 border border-[#D72638]/30' 
                        : 'text-white hover:text-[#D72638] hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D72638]/20 to-transparent rounded-2xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;