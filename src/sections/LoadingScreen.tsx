import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
      {/* Logo/Name */}
      <div className="mb-12 text-center">
        <h1 className="font-cursive text-5xl md:text-7xl text-white mb-2">Prafful</h1>
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase">Portfolio</p>
      </div>

      {/* Progress bar */}
      <div className="w-64 md:w-80 h-[2px] bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <p className="mt-4 text-gray-500 text-sm font-mono">{progress}%</p>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-500/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
