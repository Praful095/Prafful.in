import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ✅ Type for each tech item
type Tech = {
  name: string;
  color: string;
};

// ✅ Typed tech stack
const techStack: Tech[] = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Node.js", color: "#339933" },
  { name: "Go", color: "#00ADD8" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git", color: "#F05032" },
  { name: "GraphQL", color: "#E10098" },
];

// ✅ Props type for TechIcon
type TechIconProps = {
  name: string;
  color: string;
};

// Reusing your TechIcon component (typed)
const TechIcon = ({ name, color }: TechIconProps) => {
  /* ... (Keep your SVG logic exactly as it was) ... */
  return <div style={{ color }}>{name[0]}</div>; // Simplified for this snippet
};

const TechStack = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // ✅ Typed ref
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // We only need to duplicate once for Framer Motion to loop perfectly
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-[#050505]"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Tech Stack
          </h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="flex mb-12">
          <motion.div
            className="flex flex-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-4 mx-12"
              >
                <div className="w-16 h-16 p-4 rounded-xl bg-white/5 border border-white/10">
                  <TechIcon name={tech.name} color={tech.color} />
                </div>
                <span className="text-xl font-bold text-white/80">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="flex">
          <motion.div
            className="flex flex-nowrap w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...duplicatedStack].reverse().map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-4 mx-12"
              >
                <div className="w-16 h-16 p-4 rounded-xl bg-white/5 border border-white/10">
                  <TechIcon name={tech.name} color={tech.color} />
                </div>
                <span className="text-xl font-bold text-white/40">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Side Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TechStack;
