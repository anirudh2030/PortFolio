import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play, Sparkles } from 'lucide-react';
import { projects } from '../data/data'; // Import your data

// You can also pass this as a prop or use React Router for navigation
interface ProjectsProps {
  onProjectClick?: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Map your data to the component's expected format
  const featuredProjects = projects.filter(p => 
    p.id === 'escape-room-chatbot' || p.id === 'transitxpress'
  );
  
  const otherProjects = projects.filter(p => 
    p.id !== 'escape-room-chatbot' && p.id !== 'transitxpress'
  );

  const handleProjectClick = (projectId: string) => {
    if (onProjectClick) {
      onProjectClick(projectId);
    }
    // If you're using React Router, you could also do:
    // navigate(`/project/${projectId}`);
  };

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
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-1000 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => handleProjectClick(project.id)}
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
                      href={project.demoLink}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Play size={20} className="text-white" />
                    </a>
                    <a
                      href={project.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    <p className="text-purple-400 font-semibold">{project.type}</p>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20 hover:border-white/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20">
                        +{project.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* Other projects */}
<div className="grid md:grid-cols-2 gap-8">
  {otherProjects.map((project, index) => (
    <div
      key={project.id}
      className={`group relative transition-all duration-1000 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${600 + index * 200}ms` }}
      onMouseEnter={() => setActiveProject(index + featuredProjects.length)}
      onMouseLeave={() => setActiveProject(null)}
      onClick={() => handleProjectClick(project.id)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Floating action buttons */}
          <div
            className={`absolute top-6 right-6 flex space-x-3 transition-all duration-500 ${
              activeProject === index + featuredProjects.length ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <a
              href={project.demoLink}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <Play size={20} className="text-white" />
            </a>
            <a
              href={project.githubLink}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
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
        <div className="p-6">
          <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
          <p className="text-gray-400 text-sm mb-4">
            {project.description.length > 100
              ? `${project.description.substring(0, 100)}...`
              : project.description}
          </p>
          <span className="text-sm font-semibold text-purple-400">{project.type}</span>
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
          <div className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
            <span>Click any project to explore in detail</span>
            <ExternalLink size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;