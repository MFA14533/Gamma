import React from 'react';
import { Play, ArrowRight, Camera, Zap } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, scrollY }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-20" />
      </div>

      {/* Centered Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          {/* Premium Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/20 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-[#D72638]" />
              <span className="text-[#D72638] text-sm font-medium">Premium Sinematografi</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            Hikâyenizi Sinemanın{' '}
            <span className="text-[#D72638]">Gücüyle</span>{' '}
            Anlatıyoruz.
          </h1>
          
          {/* Subheadline */}
          <div className="text-lg sm:text-xl md:text-2xl text-[#CCCCCC] mb-12 max-w-4xl mx-auto leading-relaxed space-y-2">
            <p>Markanıza özel film prodüksiyonları ve yaratıcı görsel içerikler.</p>
            <p className="text-base sm:text-lg md:text-xl">
              <span className="text-[#D72638] font-medium">Blackmagic 6K</span> ile sinematik kalite artık ulaşılabilir.
            </p>
          </div>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative overflow-hidden bg-[#D72638] hover:bg-[#D72638]/80 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 border border-[#D72638] min-w-[200px] justify-center"
            >
              <Play className="w-5 h-5" />
              <span>Portfolyoyu Gör</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden backdrop-blur-sm bg-white/10 hover:bg-white/20 border-2 border-[#D72638] hover:border-[#D72638]/80 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <span>Bizimle İletişime Geç</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-[#D72638]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Camera Badge - Mobile Only */}
      <div className="absolute top-24 right-4 xl:hidden">
        <div className="backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/30 rounded-2xl p-3">
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-[#D72638]" />
            <div>
              <div className="text-[#D72638] text-sm font-medium">Blackmagic 6K</div>
              <div className="text-[#CCCCCC] text-xs">Full Frame</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-3 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D72638]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D72638] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;