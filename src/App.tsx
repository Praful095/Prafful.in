import { useEffect, useRef, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import EventroLabs from './sections/EventroLabs';
import Spotify from './sections/Spotify';
import Footer from './sections/Footer';
import LoadingScreen from './sections/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.observe-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#050505] noise-overlay">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <Projects />
        <TechStack />
        <EventroLabs />
        <Spotify />
        <Footer />
      </main>
    </div>
  );
}

export default App;
