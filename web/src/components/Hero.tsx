import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden -mt-4">
        {/* Solar System SVG Background */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
          style={{ background: '#000000' }}
        >
          <defs>
            {/* Gradient for spiral paths */}
            <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#4b5563', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          
          {/* Central sun/star */}
          <circle 
            cx="960" 
            cy="540" 
            r="8" 
            fill="#bf00ff" 
            opacity="0.8"
          />
          
          {/* Orbit 1 - Inner spiral */}
          <path 
            d="M 960 340 Q 1160 440 1060 640 Q 860 740 760 540 Q 660 340 860 440 Q 1060 540 960 340" 
            fill="none" 
            stroke="#374151" 
            strokeWidth="1.5" 
            opacity="0.6"
          />
          
          {/* Orbit 2 - Second spiral */}
          <path 
            d="M 960 240 Q 1360 390 1210 740 Q 760 890 610 540 Q 460 190 810 340 Q 1160 490 960 240" 
            fill="none" 
            stroke="#374151" 
            strokeWidth="1.5" 
            opacity="0.5"
          />
          
          {/* Orbit 3 - Third spiral */}
          <path 
            d="M 960 140 Q 1560 340 1360 840 Q 660 1040 460 540 Q 260 40 760 240 Q 1260 440 960 140" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="1.5" 
            opacity="0.4"
          />
          
          {/* Orbit 4 - Fourth spiral */}
          <path 
            d="M 960 40 Q 1760 290 1510 940 Q 560 1190 310 540 Q 60 -110 710 140 Q 1360 390 960 40" 
            fill="none" 
            stroke="#374151" 
            strokeWidth="1.5" 
            opacity="0.3"
          />
          
          {/* Orbit 5 - Outer spiral */}
          <path 
            d="M 960 -60 Q 1960 240 1660 1040 Q 460 1340 160 540 Q -140 -260 660 40 Q 1460 340 960 -60" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="1.5" 
            opacity="0.25"
          />
          
          {/* Additional connecting spiral elements */}
          <path 
            d="M 400 200 Q 600 100 800 300 Q 1000 500 1200 300 Q 1400 100 1600 300" 
            fill="none" 
            stroke="#374151" 
            strokeWidth="1" 
            opacity="0.3"
          />
          
          <path 
            d="M 300 800 Q 500 700 700 900 Q 900 1100 1100 900 Q 1300 700 1500 900" 
            fill="none" 
            stroke="#374151" 
            strokeWidth="1" 
            opacity="0.3"
          />
          
          {/* Small orbital bodies/planets */}
          <circle cx="1160" cy="440" r="3" fill="#6366f1" opacity="0.6" />
          <circle cx="760" cy="640" r="2.5" fill="#10b981" opacity="0.5" />
          <circle cx="1210" cy="740" r="2" fill="#f59e0b" opacity="0.4" />
          <circle cx="610" cy="340" r="2" fill="#ef4444" opacity="0.5" />
          <circle cx="1360" cy="840" r="1.5" fill="#8b5cf6" opacity="0.3" />
        </svg>
        
        {/* Content overlay */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why Just <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                        Generate
                    </span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              When You Can <span className="bg-purple-600 text-white px-3 py-1 rounded-xl inline-block transform -rotate-1">Create?</span>
            </h1>
          </div>
          
          <div className="space-y-4 mb-10">
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Text-to-speech is just the beginning.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Auvra's</span> node-based workflows empower you to transcend simple voice generation.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="group flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(191,0,255,0.1)] hover:shadow-[4px_4px_12px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(191,0,255,0.2)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(191,0,255,0.1)] border border-purple-600/20 hover:bg-purple-600">
            <span>Get Started</span>
            <ArrowRight size={16} />
          </button>

          <button className="flex items-center gap-2 px-10 py-4 bg-black/5 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-[8px_8px_20px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(255,255,255,0.02)] hover:shadow-[4px_4px_12px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.02)] hover:border-white hover:bg-white hover:text-black">
            <Play size={16} />
            <span>Watch Demo</span>
          </button>
        </div>
        
        <div className="pb-16"></div>
      </main>
    </>
  );
};

export default Hero;