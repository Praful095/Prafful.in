import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  ShoppingCart,
  Mic,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Vacation Planner",
    description:
      "An AI-driven vacation planner using Gemini API to generate personalized itineraries based on user travel history and preferences. Features real-time destination searches and interactive map navigation.",
    tags: ["React", "Node.js", "Gemini API", "MongoDB", "Google OAuth"],
    icon: Sparkles,
    color: "from-purple-500/20 to-blue-500/20",
    borderColor: "border-purple-500/30",
    github: "hhttps://ai-vacation-planner-phi.vercel.app",
    live: "#",
  },
  {
    id: 2,
    title: "Microservices E-Commerce",
    description:
      "Scalable Golang microservices backend featuring HTTP API, gRPC communication, and stateful notification queue. Secured with JWT & RBAC, deployed on Kubernetes with Prometheus monitoring.",
    tags: ["Go", "gRPC", "Kubernetes", "JWT", "Prometheus", "Nginx"],
    icon: ShoppingCart,
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    github: "https://github.com/prafful095",
    live: "#",
  },
  {
    id: 3,
    title: "PrepMate - AI Interview Platform",
    description:
      "Full-stack mock interview assistant using React and Gemini API with real-time AI feedback and dynamic question generation. Features VAPI voice-enabled interactions and automated performance summaries.",
    tags: ["React", "Gemini API", "VAPI", "Tailwind", "MongoDB", "Flowbite"],
    icon: Mic,
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
    github: "https://github.com/prafful095",
    live: "#",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`observe-reveal ${isVisible ? "visible" : ""} mb-16`}>
          <p className="font-cursive text-2xl md:text-3xl text-red-500 mb-2">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects <span className="text-outline">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of projects that demonstrate my expertise in full-stack
            development, AI integration, and cloud-native architectures.
          </p>
        </div>

        {/* Projects Grid - Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main featured project - takes full width on mobile, left column on desktop */}
          <div
            className={`observe-reveal ${isVisible ? "visible" : ""} lg:col-span-2`}
            style={{ transitionDelay: "0.1s" }}
          >
            <ProjectCard
              project={projects[0]}
              isActive={activeProject === 0}
              onHover={() => setActiveProject(0)}
              onLeave={() => setActiveProject(null)}
              size="large"
            />
          </div>

          {/* Other projects */}
          {projects.slice(1).map((project, index) => (
            <div
              key={project.id}
              className={`observe-reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                isActive={activeProject === project.id}
                onHover={() => setActiveProject(project.id)}
                onLeave={() => setActiveProject(null)}
                size="normal"
              />
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div
          className={`observe-reveal ${isVisible ? "visible" : ""} mt-12 text-center`}
          style={{ transitionDelay: "0.4s" }}
        >
          <a
            href="https://github.com/prafful095"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-700 text-white hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  size: "large" | "normal";
}

const ProjectCard = ({
  project,
  isActive,
  onHover,
  onLeave,
  size,
}: ProjectCardProps) => {
  const Icon = project.icon;

  return (
    <div
      className={`bento-card relative overflow-hidden group cursor-pointer ${
        size === "large" ? "min-h-[400px] md:min-h-[450px]" : "min-h-[350px]"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`}
      />

      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(135deg, ${project.borderColor.replace("border-", "")}, transparent)`,
          padding: "1px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} ${project.borderColor} border`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Projects;
