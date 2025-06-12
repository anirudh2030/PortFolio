import React from 'react';
import { Menu, X, Zap, User, Code2, Briefcase, MessageCircle } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setIsOpen, activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', label: 'Genesis', icon: Zap },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Creations', icon: Briefcase },
    { id: 'skills', label: 'Arsenal', icon: Code2 },
    { id: 'contact', label: 'Connect', icon: MessageCircle },
  ];

  return (
    <>
      {/* Floating hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 p-4 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 hover:rotate-180 group"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #ef4444, #f97316, #eab308)'
            : 'linear-gradient(135deg, #8b5cf6, #ec4899, #ef4444)',
        }}
      >
        <div className="relative">
          {isOpen ? (
            <X size={24} className="text-white transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <Menu size={24} className="text-white transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Navigation panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-96 z-50 transition-all duration-700 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,0,50,0.95) 50%, rgba(0,0,0,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(139, 92, 246, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Navigation items */}
          <div className="space-y-6">
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                onClick={() => {
                  onNavigate(id);
                  setIsOpen(false); // Optional: Close menu on item click
                }}
                className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                style={{
                  transform: isOpen ? 'translateX(0)' : 'translateX(100px)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center space-x-4 p-6">
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      activeSection === id
                        ? 'bg-white/20'
                        : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30'
                    }`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-lg tracking-wide">{label}</span>
                </div>

                {/* Animated border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 ${
                    activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6" />
            <div className="text-center">
              <p className="text-purple-300 text-sm font-medium">Anirudh Bhupathi</p>
              <p className="text-white/60 text-xs mt-1">© 2025 Portfolio</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay with blur effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
