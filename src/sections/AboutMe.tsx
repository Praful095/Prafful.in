import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, Cpu, Sparkles, Zap } from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      icon: Database,
      title: 'Backend',
      description: 'Node.js, Go, Python, REST & GraphQL APIs',
    },
    {
      icon: Globe,
      title: 'Cloud',
      description: 'AWS, Docker, Kubernetes, CI/CD',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Gemini API, OpenAI, LLM workflows',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`observe-reveal ${isVisible ? 'visible' : ''} mb-16`}>
          <p className="font-cursive text-2xl md:text-3xl text-red-500 mb-2">Get to Know Me</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-outline">Me</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Bio */}
          <div className={`observe-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="bento-card p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm <span className="text-red-400 font-medium">Prafful Pathak</span>, a passionate Full Stack Developer 
                  focused on building smart, reactive web applications with React, Node.js, and Go microservices.
                </p>
                <p>
                  I specialize in mixing clean, snappy UIs with LLMs like Gemini to automate workflows and 
                  make tools that actually feel intuitive. Whether it's crafting a smooth React frontend or 
                  a high-speed Go backend, I love building fast, AI-powered tech that's ready for the future.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science from Silicon Institute of Technology, 
                  I'm always eager to learn new technologies and take on challenging projects.
                </p>
              </div>

              {/* Quick info */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white font-medium">Ajmer,Rajasthan, India</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Experience</p>
                  <p className="text-white font-medium">fresher</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Education</p>
                  <p className="text-white font-medium">B.Tech CSE</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Availability</p>
                  <p className="text-red-400 font-medium">Open to Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Skills & Highlights */}
          <div className="space-y-6">
            {/* Highlights grid */}
            <div className={`observe-reveal ${isVisible ? 'visible' : ''} grid grid-cols-2 gap-4`} style={{ transitionDelay: '0.2s' }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bento-card p-6 group hover:border-red-500/30 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* What I do */}
            <div className={`observe-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="bento-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-red-500" />
                  <h4 className="text-white font-bold">What I Do Best</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Build scalable full-stack applications',
                    'Integrate AI/LLM solutions into products',
                    'Design microservices architectures',
                    'Create responsive, modern UIs',
                    'Automate workflows and DevOps pipelines',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
