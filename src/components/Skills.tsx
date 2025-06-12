import React, { useEffect, useRef, useState } from 'react';
import {
  Code2, Palette, Database, Zap, Cpu, Code, Layers, CircleDashed,
  Server, Cloud, FileCode, HardDrive, Database as DatabaseIcon
} from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skillDomains = [
    {
      title: 'Frontend Mastery',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React Ecosystem', icon: Code, level: 98, specialty: 'Next.js, Hooks, Context' },
        { name: 'TypeScript', icon: FileCode, level: 95, specialty: 'Advanced Types, Generics' },
        { name: 'HTML', icon: Layers, level: 88, specialty: 'WebGL, Shaders, Physics' },
        { name: 'CSS', icon: CircleDashed, level: 92, specialty: 'GSAP, Framer Motion, CSS' },
      ],
    },
    {
      title: 'Backend Architecture',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: Server, level: 94, specialty: 'Express, NextJS' },
        { name: 'Python', icon: Cpu, level: 89, specialty: 'Django, ML' },
        { name: 'Databases', icon: DatabaseIcon, level: 91, specialty: 'PostgreSQL, MongoDB' },
        { name: 'Cloud', icon: Cloud, level: 87, specialty: 'AWS, Docker, Kubernetes' },
      ],
    },
    {
      title: 'Programming Languages',
      icon: FileCode,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'C', icon: HardDrive, level: 85, specialty: 'Systems Programming, Pointers' },
        { name: 'Java', icon: FileCode, level: 90, specialty: 'OOP, Spring Boot' },
        { name: 'Python', icon: Cpu, level: 92, specialty: 'Automation, Scripting, ML' },
      ],
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              THE ARSENAL
            </span>
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full mb-12" />
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of technologies and methodologies that power extraordinary digital experiences
          </p>
        </div>

        {/* Skill Domains */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillDomains.map((domain, domainIndex) => (
            <div
              key={domain.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${domainIndex * 200}ms` }}
            >
              <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:rotate-1 overflow-hidden group">
                <div
                  className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                />
                <div className="relative z-10 mb-8">
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${domain.color} rounded-2xl mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(66,153,225,0.6)] transition-all duration-300 group-hover:animate-pulse`}
                  >
                    <domain.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {domain.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {domain.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(`${domain.title}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 bg-gradient-to-br ${domain.color} rounded-xl`}>
                          <skill.icon size={20} className="text-white" />
                        </div>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      {hoveredSkill === `${domain.title}-${skill.name}` && (
                        <div className="absolute top-full left-0 mt-2 p-3 bg-black/90 backdrop-blur-sm rounded-lg border border-white/20 z-20 min-w-max animate-slide-up">
                          <p className="text-sm text-gray-300">{skill.specialty}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-purple-500/30">
            <Zap size={24} className="text-purple-400 animate-pulse" />
            <span className="text-white font-semibold">Always learning, always evolving</span>
            <Cpu size={24} className="text-pink-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
