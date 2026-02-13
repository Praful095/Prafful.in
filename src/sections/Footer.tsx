import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  // Twitter,
  Heart,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Praful095",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/prafful095",
    icon: Linkedin,
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/prafful095",
  //   icon: Twitter,
  // },
  {
    name: "Email",
    url: "mailto:prafful095@gmail.com",
    icon: Mail,
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Eventro Labs", href: "#eventro-labs" },
  { name: "Playlist", href: "#spotify" },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" ref={footerRef} className="relative py-16 md:py-24">
      {/* Divider */}
      <div className="section-divider mb-16" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div
          className={`observe-reveal ${isVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16`}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-cursive text-4xl md:text-5xl text-white mb-4">
              Prafful <span className="text-red-500">Pathak</span>
            </h3>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Full Stack Developer focused on building smart, reactive web apps
              with React, Node.js, and Go microservices. Let's create something
              amazing together.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:prafful095@gmail.com"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  prafful095@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Ajmer ,Rajasthan, India</span>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  Available for freelance and oppurtunities
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="mailto:prafful095@gmail.com"
              className="btn-red mt-6 inline-flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`observe-reveal ${isVisible ? "visible" : ""} pt-8 border-t border-white/10`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              by Prafful Pathak
            </p>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30 transition-all duration-300 z-40 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
