import { useEffect, useRef, useState } from 'react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'Go Lang',
  'Python',
  'AWS',
  'Docker',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Git',
  'Kubernetes',
  'GraphQL',
  'Redis',
];

const SkillsMarquee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills-marquee"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className={`observe-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="font-cursive text-2xl md:text-3xl text-red-500 mb-2">Expertise</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Skills & <span className="text-outline">Technologies</span>
          </h2>
        </div>
      </div>

      {/* Marquee row 1 - Left to Right */}
      <div className="relative mb-6">
        <div className="flex animate-marquee">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8"
            >
              <span className="text-4xl md:text-6xl lg:text-7xl font-black text-outline whitespace-nowrap hover:text-white transition-colors duration-300 cursor-default">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 - Right to Left */}
      <div className="relative">
        <div
          className="flex"
          style={{
            animation: 'marquee 30s linear infinite reverse',
          }}
        >
          {duplicatedSkills.reverse().map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8"
            >
              <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white/10 whitespace-nowrap hover:text-red-500/50 transition-colors duration-300 cursor-default">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Skill tags */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className={`observe-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
