import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Play, Calendar, Users, Code, Zap } from 'lucide-react';
import { projects } from '../data/data';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <button
              onClick={() => navigate('/projects')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft 
                size={20} 
                className="group-hover:-translate-x-1 transition-transform duration-300" 
              />
              <span>Back to Projects</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Project Title */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              <p className="text-2xl text-purple-400 font-semibold mb-8">{project.type}</p>
              <div className="h-2 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-6 mb-16">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                <Play size={20} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl font-bold text-lg border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300"
              >
                <Github size={20} />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div 
            className={`mb-20 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Description */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                About This Project
              </h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                {/* You can add more detailed description here */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  This project showcases modern web development practices and demonstrates 
                  my ability to create scalable, user-friendly applications with attention 
                  to both functionality and design.
                </p>
              </div>
            </div>

            {/* Right Column - Tech Stack & Details */}
            <div 
              className={`transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Technologies */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Code className="mr-3 text-purple-400" size={24} />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 text-white font-medium hover:border-purple-400/50 transition-colors duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    <Calendar className="mr-3 text-purple-400" size={20} />
                    <h4 className="font-semibold text-white">Development Time</h4>
                  </div>
                  <p className="text-gray-300">2-3 weeks</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    <Zap className="mr-3 text-purple-400" size={20} />
                    <h4 className="font-semibold text-white">Key Features</h4>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Responsive Design</li>
                    <li>• Modern UI/UX</li>
                    <li>• Optimized Performance</li>
                    <li>• Cross-browser Compatible</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    <Users className="mr-3 text-purple-400" size={20} />
                    <h4 className="font-semibold text-white">Role</h4>
                  </div>
                  <p className="text-gray-300">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section (if you have multiple images) */}
          <div 
            className={`mb-20 transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* You can add more project images here */}
              {[1, 2, 3].map((index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot ${index}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation to Other Projects */}
          <div 
            className={`text-center transition-all duration-1000 delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Explore More Projects
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Check out my other work and see what else I've been building
              </p>
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                <span>View All Projects</span>
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;