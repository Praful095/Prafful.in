import { useEffect, useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music, ExternalLink, Info } from 'lucide-react';

// Demo playlist data
const demoPlaylist = {
  name: 'Coding Focus',
  description: 'Deep focus tracks for productive coding sessions',
  tracks: [
    {
      id: 1,
      title: 'Midnight City',
      artist: 'M83',
      album: 'Hurry Up, We\'re Dreaming',
      duration: '4:03',
      cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=150&h=150&fit=crop',
    },
    {
      id: 2,
      title: 'Nightcall',
      artist: 'Kavinsky',
      album: 'OutRun',
      duration: '4:18',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop',
    },
    {
      id: 3,
      title: 'Instant Crush',
      artist: 'Daft Punk ft. Julian Casablancas',
      album: 'Random Access Memories',
      duration: '5:37',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&h=150&fit=crop',
    },
    {
      id: 4,
      title: 'The Less I Know The Better',
      artist: 'Tame Impala',
      album: 'Currents',
      duration: '3:36',
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&h=150&fit=crop',
    },
    {
      id: 5,
      title: 'Get Lucky',
      artist: 'Daft Punk ft. Pharrell Williams',
      album: 'Random Access Memories',
      duration: '6:09',
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop',
    },
  ],
};

const Spotify = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showConnectInfo, setShowConnectInfo] = useState(false);
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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % demoPlaylist.tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + demoPlaylist.tracks.length) % demoPlaylist.tracks.length);
  };

  const activeTrack = demoPlaylist.tracks[currentTrack];

  return (
    <section
      id="spotify"
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`observe-reveal ${isVisible ? 'visible' : ''} mb-16`}>
          <p className="font-cursive text-2xl md:text-3xl text-red-500 mb-2">Now Playing</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-outline">Playlist</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Music that keeps me in the flow while coding. These tracks help me stay focused and productive.
          </p>
        </div>

        {/* Spotify Player Card */}
        <div className={`observe-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="spotify-card bento-card p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left - Now Playing */}
              <div className="lg:col-span-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 group">
                  <img
                    src={activeTrack.cover}
                    alt={activeTrack.album}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
                  />
                  {/* Playing indicator overlay */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-1 bg-green-500 rounded-full animate-pulse"
                          style={{
                            height: `${20 + Math.random() * 30}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Track info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{activeTrack.title}</h3>
                  <p className="text-gray-400 text-sm">{activeTrack.artist}</p>
                  <p className="text-gray-500 text-xs mt-1">{activeTrack.album}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={prevTrack}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <SkipBack className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="p-4 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-black" />
                    ) : (
                      <Play className="w-6 h-6 text-black ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={nextTrack}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <SkipForward className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Progress bar (decorative) */}
                <div className="mt-6">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-green-500 rounded-full transition-all duration-1000 ${isPlaying ? 'animate-pulse' : ''}`}
                      style={{ width: isPlaying ? '60%' : '30%' }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>1:24</span>
                    <span>{activeTrack.duration}</span>
                  </div>
                </div>
              </div>

              {/* Right - Playlist */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Music className="w-6 h-6 text-green-500" />
                    <div>
                      <h4 className="text-lg font-bold text-white">{demoPlaylist.name}</h4>
                      <p className="text-gray-500 text-sm">{demoPlaylist.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowConnectInfo(!showConnectInfo)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    title="How to connect your Spotify"
                  >
                    <Info className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Connect info panel */}
                {showConnectInfo && (
                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <h5 className="text-white font-medium mb-2">Connect Your Spotify Playlist</h5>
                    <ol className="text-gray-400 text-sm space-y-2 list-decimal list-inside">
                      <li>Create a Spotify Developer account at <a href="https://developer.spotify.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">developer.spotify.com</a></li>
                      <li>Create a new app to get your Client ID and Secret</li>
                      <li>Use the Spotify Web API to fetch your playlist data</li>
                      <li>Replace the demo data in <code className="bg-white/10 px-1 rounded">src/sections/Spotify.tsx</code></li>
                      <li>Or use a library like <code className="bg-white/10 px-1 rounded">react-spotify-web-playback</code></li>
                    </ol>
                    <a
                      href="https://developer.spotify.com/documentation/web-api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-green-500 hover:text-green-400 text-sm"
                    >
                      <span>View Spotify API Docs</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Track list */}
                <div className="space-y-2">
                  {demoPlaylist.tracks.map((track, index) => (
                    <div
                      key={track.id}
                      onClick={() => {
                        setCurrentTrack(index);
                        setIsPlaying(true);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        currentTrack === index
                          ? 'bg-white/10 border border-green-500/30'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      {/* Track number / playing indicator */}
                      <div className="w-8 text-center">
                        {currentTrack === index && isPlaying ? (
                          <div className="flex gap-0.5 justify-center">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-0.5 bg-green-500 rounded-full animate-pulse"
                                style={{
                                  height: '12px',
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        ) : (
                          <span className={`text-sm ${currentTrack === index ? 'text-green-500' : 'text-gray-500'}`}>
                            {index + 1}
                          </span>
                        )}
                      </div>

                      {/* Track cover */}
                      <img
                        src={track.cover}
                        alt={track.album}
                        className="w-12 h-12 rounded-lg object-cover"
                      />

                      {/* Track info */}
                      <div className="flex-grow min-w-0">
                        <p className={`font-medium truncate ${currentTrack === index ? 'text-green-500' : 'text-white'}`}>
                          {track.title}
                        </p>
                        <p className="text-gray-500 text-sm truncate">{track.artist}</p>
                      </div>

                      {/* Duration */}
                      <span className="text-gray-500 text-sm">{track.duration}</span>
                    </div>
                  ))}
                </div>

                {/* Spotify link */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-sm">Open in Spotify</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note about integration */}
        <div className={`observe-reveal ${isVisible ? 'visible' : ''} mt-8 text-center`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-gray-500 text-sm">
            This is demo data. Click the info icon above to learn how to connect your real Spotify playlist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Spotify;

