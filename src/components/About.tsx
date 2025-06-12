import React, { useEffect, useRef, useState } from 'react';
import { Zap, Palette, Rocket, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const philosophies = [
    {
      icon: Brain,
      title: 'Think Different',
      description: 'Breaking conventional patterns to create extraordinary digital experiences.',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description: 'Rapid prototyping and iteration to bring ideas to life at lightning speed.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'Design First',
      description: 'Every pixel matters. Beauty and function dancing in perfect harmony.',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Push Boundaries',
      description: 'Exploring the impossible and making it possible through innovative code.',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      {/* Subtle floating orbs (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl animate-pulse"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              ABOUT
            </span>
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-12" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story section */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Digital Alchemist</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  I transform abstract ideas into tangible digital realities. With a passion for
                  <span className="text-purple-400 font-semibold"> cutting-edge technology</span> and an eye for
                  <span className="text-pink-400 font-semibold"> aesthetic perfection</span>, I craft experiences
                  that don't just function—they inspire.
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                  Every line of code is a brushstroke, every interface a canvas. I believe in pushing
                  the boundaries of what's possible on the web, creating immersive experiences that
                  blur the line between digital and reality.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                    View Manifesto
                  </button>
                  <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-purple-500 rounded-2xl font-bold hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophies.map((philosophy, index) => (
              <div
                key={philosophy.title}
                className={`group relative p-6 bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${600 + index * 150}ms`,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(30,0,50,0.4) 100%)',
                }}
              >
                {/* Glowing effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${philosophy.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${philosophy.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <philosophy.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {philosophy.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {philosophy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
