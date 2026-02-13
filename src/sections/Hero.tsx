import { useEffect, useRef, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Parallax effect for the 3D image
    if (imageRef.current) {
      const rotation = scrollY * 0.1;
      const translateY = scrollY * 0.3;
      imageRef.current.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
    }
  }, [scrollY]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top name - Prafful */}
        <div
          className="relative"
          style={{
            transform: `translateX(${-scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          <h1
            className="hero-text text-[20vw] md:text-[16vw] lg:text-[14vw] leading-none tracking-tight text-white"
            style={{
              fontFamily: "cursive",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            PRAFFUL
          </h1>
        </div>

        {/* Center content with 3D element */}
        <div className="relative flex flex-col md:flex-row items-center justify-between py-6 md:py-10">
          {/* Left side - Role */}
          <div
            className="text-center md:text-left mb-8 md:mb-0"
            style={{
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <p className="font-cursive text-3xl md:text-4xl lg:text-5xl text-red-500 mb-2">
              Full Stack Developer
            </p>
            <p className="text-gray-500 text-sm md:text-base max-w-xs">
              Building scalable systems & intuitive interfaces with modern tech
            </p>

            {/* Social links */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/prafful095"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/prafful095"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
              <a
                href="mailto:prafful095@gmail.com"
                className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Center - 3D Abstract Element */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
            <img
              ref={imageRef}
              src="/hero-3d.png"
              alt="3D Abstract"
              className="w-full h-full object-contain animate-float"
              style={{
                filter: "drop-shadow(0 0 60px rgba(255, 51, 51, 0.3))",
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-[80px] -z-10" />
          </div>

          {/* Right side - Location/Info */}
          <div
            className="text-center md:text-right hidden lg:block"
            style={{
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <p className="text-gray-400 text-sm mb-1">Based in</p>
            <p className="text-white text-lg font-medium">
              Ajmer , Rajasthan, India
            </p>
            <p className="text-gray-500 text-sm mt-4">Available for</p>
            <p className="text-red-400 text-lg font-medium">Freelance Work</p>
          </div>
        </div>

        {/* Bottom name - Pathak */}
        <div
          className="relative text-right"
          style={{
            transform: `translateX(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          <h1
            className="hero-text text-[20vw] md:text-[16vw] lg:text-[14vw] leading-none tracking-tight text-white"
            style={{
              fontFamily: "cursive",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            PATHAK
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.003),
        }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors animate-bounce-slow" />
      </button>

      {/* Side decorations */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
        <span
          className="text-gray-600 text-xs tracking-widest rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          2026
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
        <span
          className="text-gray-600 text-xs tracking-widest rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          PORTFOLIO
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
