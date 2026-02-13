import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Palette,
  Zap,
  ArrowRight,
  Globe,
  Cpu,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Landing Pages",
    description:
      "High-converting, visually stunning landing pages that capture attention and drive results.",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Zap,
    title: "AI Workflow Automation",
    description:
      "Intelligent automation solutions using cutting-edge AI to streamline your business processes.",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web applications built with modern technologies for optimal performance.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Seamless integration of AI capabilities like Gemini API into your existing systems.",
    color: "from-violet-500/20 to-purple-500/20",
  },
];

const EventroLabs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="eventro-labs"
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`observe-reveal ${isVisible ? "visible" : ""} mb-16`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-500 text-sm font-medium tracking-wider uppercase">
              Currently Working On
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What I'm <span className="font-cursive text-red-500">Building</span>
          </h2>
        </div>

        {/* Main Eventro Labs Card */}
        <div
          className={`observe-reveal ${isVisible ? "visible" : ""} mb-12`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="bento-card relative overflow-hidden p-8 md:p-12">
            {/* Background effects */}
            <div className="absolute inset-0 eventro-accent opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      Eventro Labs
                    </h3>
                    <p className="text-red-400 font-medium">
                      Design Agency & AI Solutions
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Eventro Labs is my design agency focused on creating
                  exceptional digital experiences. We specialize in building
                  high-converting landing pages and automating workflows using
                  cutting-edge AI technologies like Gemini API.
                </p>

                <p className="text-gray-400 leading-relaxed mb-8">
                  From sleek, modern web designs to intelligent automation
                  systems, we help businesses transform their digital presence
                  and streamline operations with AI-powered solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:prafful095@gmail.com"
                    className="btn-red inline-flex items-center gap-2"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Praful095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-gray-700 text-white hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>View Work</span>
                  </a>
                </div>
              </div>

              {/* Right content - Stats/Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Sparkles, value: "AI-Powered", label: "Solutions" },
                  { icon: Palette, value: "Modern", label: "Design" },
                  { icon: Zap, value: "Fast", label: "Delivery" },
                  { icon: Globe, value: "Global", label: "Reach" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <p className="text-white font-bold text-lg">{item.value}</p>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`observe-reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bento-card p-6 md:p-8 h-full group hover:border-red-500/30 transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`observe-reveal ${isVisible ? "visible" : ""} mt-12 text-center`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="text-gray-400 mb-4">Have a project in mind?</p>
          <a
            href="mailto:prafful095@gmail.com"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-lg font-medium"
          >
            <span>Let's build something amazing together</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventroLabs;
