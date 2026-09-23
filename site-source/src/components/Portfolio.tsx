import React, { useState } from 'react';
import { Play, Filter, ExternalLink, Camera, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filters = ['Tümü', 'Reklamlar', 'Kısa Filmler', 'Kurumsal', 'Sahne Arkası'];

  const projects = [
    {
      id: 1,
      title: "Lüks Marka Kampanyası",
      category: "Reklamlar",
      thumbnail: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Premium otomotiv markası için üst düzey reklam filmi",
      camera: "Blackmagic 6K FF",
      lens: "Sirui 35mm T2.9 1.6x Full-Frame Anamorphic Lens"
    },
    {
      id: 2,
      title: "Teknoloji Girişimi Hikayesi",
      category: "Kurumsal",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "İnovasyonu sergileyen kurumsal belgesel",
      camera: "Blackmagic 6K FF",
      lens: "Sirui 35mm T2.9 1.6x Full-Frame Anamorphic Lens"
    },
    {
      id: 3,
      title: "Müzik Videosu Prodüksiyonu",
      category: "Kısa Filmler",
      thumbnail: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Dinamik görsellerle sinematik müzik videosu",
      camera: "Blackmagic 6K FF",
      lens: "Sirui 35mm T2.9 1.6x Full-Frame Anamorphic Lens"
    },
    {
      id: 4,
      title: "Film Seti Belgelendirmesi",
      category: "Sahne Arkası",
      thumbnail: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Büyük film prodüksiyonunun sahne arkası",
      camera: "Blackmagic 6K FF",
      lens: "Sirui 35mm T2.9 1.6x Full-Frame Anamorphic Lens"
    },
    {
      id: 5,
      title: "Moda Reklamı",
      category: "Reklamlar",
      thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Zarif moda markası reklamı",
      camera: "Blackmagic 6K FF",
      lens: "Sirui 35mm T2.9 1.6x Full-Frame Anamorphic Lens"
    },
    {
      id: 6,
      title: "Ödüllü Kısa Film",
      category: "Kısa Filmler",
      thumbnail: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Festival seçkisine giren anlatı kısa filmi",
      camera: "Blackmagic 6K FF",
      lens: "Sirui 35mm T2.9 1.6x Full-Frame Anamorphic Lens"
    }
  ];

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-[#D72638]/10 border border-[#D72638]/20 rounded-full px-6 py-3 mb-8">
            <Camera className="w-5 h-5 text-[#D72638]" />
            <span className="text-[#D72638] font-medium">Çalışmalarımız</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Öne Çıkan <span className="text-[#D72638]">Portföy</span>
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto mb-12">
            Sinematik hikaye anlatımının ve teknik mükemmelliğin gücünü sergileyen ödüllü prodüksiyonlarımızı keşfedin.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden backdrop-blur-sm px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 border ${
                  activeFilter === filter
                    ? 'bg-[#D72638]/20 border-[#D72638] text-[#D72638]'
                    : 'bg-white/5 border-white/10 text-[#CCCCCC] hover:bg-white/10 hover:border-[#D72638]/30 hover:text-white'
                }`}
              >
                {filter === 'Tümü' && <Filter className="w-4 h-4" />}
                <span>{filter}</span>
                {activeFilter === filter && (
                  <div className="absolute inset-0 bg-[#D72638]/10 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative transform-gpu"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Main Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#D72638]/30 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="backdrop-blur-sm bg-[#D72638]/20 border border-[#D72638] p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#D72638]" />
                    </div>
                  </div>

                  {/* Camera/Lens Info */}
                  <div className="absolute top-4 left-4">
                    <div className="backdrop-blur-sm bg-[#D72638]/20 border border-[#D72638]/30 rounded-full px-3 py-1">
                      <span className="text-[#D72638] text-xs font-medium">{project.camera}</span>
                    </div>
                  </div>

                  {/* External Link */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="backdrop-blur-sm bg-white/10 border border-white/20 p-2 rounded-full hover:bg-[#D72638]/20 hover:border-[#D72638] transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D72638] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#CCCCCC] mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Gear Info */}
                  <div className="flex items-center justify-between text-sm">
                    <span className={`inline-block px-3 py-1 rounded-full font-medium border ${
                      project.category === 'Reklamlar' ? 'bg-[#D72638]/20 text-[#D72638] border-[#D72638]/30' :
                      project.category === 'Kurumsal' ? 'bg-blue-500/20 text-blue-400 border-blue-400/30' :
                      project.category === 'Kısa Filmler' ? 'bg-purple-500/20 text-purple-400 border-purple-400/30' :
                      'bg-green-500/20 text-green-400 border-green-400/30'
                    }`}>
                      {project.category}
                    </span>
                    <span className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                      {project.lens}
                    </span>
                  </div>
                </div>

                {/* Red glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D72638]/5 via-transparent to-[#D72638]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating Shadow */}
              <div className="absolute inset-0 bg-[#D72638]/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 transform translate-y-8 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;