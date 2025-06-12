import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      details: 'anirudhbhupathi2030@gmail.com',
      link: 'mailto:anirudhbhupathi2030@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Drop me a line anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9704732968',
      link: 'tel:+919704732968',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Let\'s have a conversation',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Hyderbad, Telangana',
      link: '#',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Available worldwide',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900/10 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CONNECT
            </span>
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-12" />
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to create something extraordinary together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-white/10">
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Start a Conversation</h3>
                <p className="text-gray-400">Tell me about your vision, and let's bring it to life.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 peer"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="absolute left-6 -top-2.5 bg-black px-2 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-purple-400">
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 peer"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="absolute left-6 -top-2.5 bg-black px-2 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-purple-400">
                      Email Address
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 peer"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="absolute left-6 -top-2.5 bg-black px-2 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-purple-400">
                    Project Subject
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none peer"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute left-6 -top-2.5 bg-black px-2 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-purple-400">
                    Your Vision
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Contact methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  className="group block p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-br ${method.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {method.details}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability status */}
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping" />
                </div>
                <span className="text-green-400 font-bold text-lg">Available for Projects</span>
              </div>
              <p className="text-gray-300 mb-4">
                Currently accepting new client work and exciting collaborations. 
                Let's create something amazing together!
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Response within 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap size={16} />
                  <span>Fast turnaround</span>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <MessageCircle size={24} className="text-blue-400 mx-auto mb-2" />
                <span className="text-white font-semibold text-sm">Quick Chat</span>
              </button>
              <button className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <Calendar size={24} className="text-purple-400 mx-auto mb-2" />
                <span className="text-white font-semibold text-sm">Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;