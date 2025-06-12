import  { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileImg from "./profile.jpg";
import imageIcon from "./image.png";
import image1 from "./image1.png";
import image2 from "./image2.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const yourName = "Anirudh Bhupathi";

  const rectWidth = 200;
  const rectHeight = 250;

  const iconPositions = [
    { x: 0, y: -rectHeight / 2 - 60, angle: 0, delay: "0s" },
    { x: rectWidth / 2 + 60, y: 0, angle: 90, delay: "0.5s" },
    { x: 0, y: rectHeight / 2 + 60, angle: 180, delay: "1s" },
    { x: -rectWidth / 2 - 70, y: 0, angle: 270, delay: "1.5s" },
    { x: rectWidth / 2 + 60, y: -rectHeight / 2 - 30, angle: 45, delay: "2s" },
    { x: rectWidth / 2 + 60, y: rectHeight / 2 + 30, angle: -45, delay: "2.5s" },
    { x: -rectWidth / 2 - 30, y: rectHeight / 2 + 30, angle: 225, delay: "3s" },
  ];

  return (
    <section id ="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/30 to-black">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl animate-pulse transition-transform duration-300 ease-out"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                [
                  "rgba(139, 92, 246, 0.3)",
                  "rgba(236, 72, 153, 0.3)",
                  "rgba(239, 68, 68, 0.3)",
                  "rgba(34, 197, 94, 0.3)",
                ][i % 4]
              }, transparent)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `translate3d(${
                (mousePosition.x - window.innerWidth / 2) * 0.002
              }px, ${(mousePosition.y - window.innerHeight / 2) * 0.002}px, 0)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6 py-16 gap-2 md:gap-4">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left space-y-2">
          <span className="uppercase tracking-widest text-sm text-pink-400 font-semibold mb-1">
            Hello there, welcome to my site
          </span>
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-0">
              <span className="text-white">I&apos;m </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                {yourName}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-pink-40">
              Web Developer
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-md mb-4">
            Building immersive, modern web experiences with code and creativity.
          </p>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-full border border-pink-500 text-pink-400 font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition">
              <Github size={28} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-blue-400 hover:text-white transition">
              <Linkedin size={28} />
            </a>
            <a href="#" aria-label="Email" className="text-pink-400 hover:text-white transition">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right Content - Image and Icons */}
        <div
          className="relative flex justify-center items-center mt-6 md:mt-0"
          style={{
            minWidth: `${rectWidth + 120}px`,
            minHeight: `${rectHeight + 120}px`,
          }}
        >
          {[ 
            { icon: <Github size={24} className="text-purple-400 group-hover:text-pink-400 transition-colors" />, ...iconPositions[0] },
            { icon: <Linkedin size={24} className="text-pink-400 group-hover:text-red-400 transition-colors" />, ...iconPositions[1] },
            { icon: <Mail size={24} className="text-red-400 group-hover:text-purple-400 transition-colors" />, ...iconPositions[2] },
            { icon: <ArrowDown size={24} className="text-purple-400 group-hover:text-pink-400 transition-colors" />, ...iconPositions[3] },
            { icon: <img src={imageIcon} alt="Icon" className="w-6 h-6" />, ...iconPositions[4] },
            { icon: <img src={image1} alt="Icon" className="w-6 h-6" />, ...iconPositions[5] },
            { icon: <img src={image2} alt="Icon" className="w-6 h-6" />, ...iconPositions[6] },
          ].map(({ icon, x, y, delay }, i) => (
            <div
              key={i}
              className="absolute z-20 group hover:scale-110 transition-transform"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="animate-float" style={{ animationDelay: delay }}>
                {icon}
              </div>
            </div>
          ))}
          <div
            className="relative rounded-2xl overflow-hidden border-4 border-gradient-to-br from-purple-400 via-pink-400 to-red-400 shadow-2xl group hover:scale-105 transition-transform duration-300"
            style={{
              width: `${rectWidth + 60}px`,
              height: `${rectHeight + 60}px`,
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(239,68,68,0.3))",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/default-profile.jpg";
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "0 0 40px 8px rgba(236,72,153,0.25)" }}
            />
          </div>
        </div>
      </div>

      {/* Smooth Marquee integrated with section background */}
      <div className="w-full mt-8">
  <div className="backdrop-blur-md bg-white/10 rounded-xl overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap py-1">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="text-pink-400 font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider mx-6"
        >
          Always learning, always evolving —
        </span>
      ))}
    </div>
  </div>
</div>


    </section>
  );
};

export default Hero;
