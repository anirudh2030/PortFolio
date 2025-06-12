import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play, Sparkles } from 'lucide-react';
import thinkandescape from './thinkandescape.png';
import Transit from '../static/Transit.jpg';
import agrivoyage from '../static/AgriVoyage.jpg';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Think And Escape',
      subtitle: 'EscapeRoom ChatBot',
      description: 'An advanced AI-powered image recognition platform with real-time processing capabilities and neural network visualization.',
      image: thinkandescape,
      technologies: ['React', 'Python', 'TensorFlow', 'WebGL', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'TransitXpress',
      subtitle: 'Automating Bus Transport',
      description: 'A conductor-less transit system leveraging automation and AI to revolutionize public transportation.',
      image: Transit,
      technologies: ['HTML', 'CSS', 'Django', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'AgriVoyage',
      subtitle: 'One stop hub for weekend farming',
      description: 'A platform connecting farmers with tourists, creating new income streams for rural communities.',
      image: agrivoyage,
      technologies: ['HTML', 'CSS', 'Django', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              CREATIONS
            </span>
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full mb-12" />
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Digital masterpieces that push the boundaries of what's possible
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                {/* Project image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Floating action buttons */}
                  <div
                    className={`absolute top-6 right-6 flex space-x-3 transition-all duration-500 ${
                      activeProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Play size={20} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                      <Sparkles size={16} className="text-white" />
                      <span className="text-white text-sm font-bold">FEATURED</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20 hover:border-white/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                    <span className="text-sm font-semibold text-white">{project.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <span>Explore All Projects</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
