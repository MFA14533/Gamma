import React from 'react';
import { Calendar, ArrowRight, BookOpen, Lightbulb, Camera } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: "Essential Gear for Cinematic Video Production",
      excerpt: "Discover the must-have equipment that separates professional cinematography from amateur footage.",
      date: "December 15, 2024",
      category: "Gear",
      icon: <Camera className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Color Grading Secrets for Emotional Impact",
      excerpt: "Learn how professional colorists use specific techniques to evoke emotions and enhance storytelling.",
      date: "December 10, 2024",
      category: "Technique",
      icon: <Lightbulb className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Behind the Scenes: Corporate Film Production",
      excerpt: "An in-depth look at our process for creating compelling corporate videos that drive business results.",
      date: "December 5, 2024",
      category: "Case Study",
      icon: <BookOpen className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry <span className="text-red-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights, filmmaking tips, and behind-the-scenes stories from the world of professional video production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group bg-black/50 border border-gray-800 rounded-lg overflow-hidden hover:bg-black/70 hover:border-red-600/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-2 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm">
                    {insight.icon}
                    <span>{insight.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {insight.date}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {insight.excerpt}
                </p>
                
                <button className="inline-flex items-center text-red-600 hover:text-red-400 font-medium transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;