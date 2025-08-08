'use client'
import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import SignUp from '@/app/auth/SignUp';

const Hero: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-4">
        {/* Solar System SVG Background */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
          style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
        >
          <defs>
            {/* Gradient for orbital rings */}
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 0.1 }} />
              <stop offset="50%" style={{ stopColor: '#6b7280', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 0.1 }} />
            </linearGradient>
            
            {/* Glow effect for center star */}
            <radialGradient id="starGlow">
              <stop offset="0%" style={{ stopColor: '#bf00ff', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#bf00ff', stopOpacity: 0 }} />
            </radialGradient>
            
            {/* Planet glows */}
            <radialGradient id="planetGlow1">
              <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0 }} />
            </radialGradient>
            
            <radialGradient id="planetGlow2">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          
          {/* Central star glow */}
          <circle 
            cx="960" 
            cy="540" 
            r="25" 
            fill="url(#starGlow)" 
            opacity="0.4"
          />
          
          {/* Central star */}
          <circle 
            cx="960" 
            cy="540" 
            r="6" 
            fill="#bf00ff" 
            opacity="1"
          />
          
          {/* Orbital rings - Subtle opacity reduced */}
          {/* Starting from Orbit 3 - 300px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="300" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2" 
            opacity="0.25"
          />
          
          {/* Orbit 4 - 420px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="420" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="2" 
            opacity="0.22"
          />
          
          {/* Orbit 5 - 580px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="580" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2" 
            opacity="0.2"
          />
          
          {/* Orbit 6 - 780px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="780" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="2" 
            opacity="0.18"
          />
          
          {/* Orbit 7 - 1000px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="1000" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2" 
            opacity="0.15"
          />
          
          {/* Orbit 8 - 1250px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="1250" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="2" 
            opacity="0.12"
          />
          
          {/* Orbit 9 - 1500px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="1500" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2" 
            opacity="0.1"
          />
          
          {/* Orbit 10 - 1800px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="1800" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="2" 
            opacity="0.08"
          />
          
          {/* Orbit 11 - 2200px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="2200" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2" 
            opacity="0.06"
          />
          
          {/* Orbit 12 - 2700px radius */}
          <circle 
            cx="960" 
            cy="540" 
            r="2700" 
            fill="none" 
            stroke="#4b5563" 
            strokeWidth="2" 
            opacity="0.05"
          />
          
          {/* Small colorful planets scattered across different orbits */}
          {/* Planet 1 - Blue on orbit 3 */}
          <circle cx="1260" cy="540" r="2.5" fill="#3b82f6" opacity="0.7" />
          
          {/* Planet 2 - Green on orbit 4 */}
          <circle cx="960" cy="120" r="3" fill="#10b981" opacity="0.6" />
          
          {/* Planet 3 - Orange on orbit 5 */}
          <circle cx="540" cy="760" r="2" fill="#f97316" opacity="0.8" />
          
          {/* Planet 4 - Red on orbit 6 */}
          <circle cx="1380" cy="960" r="2.5" fill="#ef4444" opacity="0.5" />
          
          {/* Planet 5 - Purple on orbit 7 */}
          <circle cx="260" cy="340" r="3" fill="#8b5cf6" opacity="0.6" />
          
          {/* Planet 6 - Yellow on orbit 8 */}
          <circle cx="1660" cy="740" r="2" fill="#eab308" opacity="0.4" />
        </svg>
        
        {/* Content overlay */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why Just <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                        Generate
                    </span>
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              When You Can <span className="bg-purple-600 text-white px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl inline-block transform -rotate-1">Create?</span>
            </h1>
          </div>
          
          <div className="space-y-4 mb-10">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Text-to-speech is just the beginning.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Auvra's</span> node-based workflows empower you to transcend simple voice generation.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-row gap-3 sm:gap-4 items-center justify-center">
          <button 
            onClick={openSignupModal}
            className="group flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(191,0,255,0.1)] hover:shadow-[4px_4px_12px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(191,0,255,0.2)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(191,0,255,0.1)] border border-purple-600/20 hover:bg-purple-600"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </button>

          <button className="flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-black/5 backdrop-blur-sm text-white rounded-full font-semibold text-base sm:text-lg border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-[8px_8px_20px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(255,255,255,0.02)] hover:shadow-[4px_4px_12px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.02)] hover:border-white hover:bg-white hover:text-black">
            <Play size={16} />
            <span>Watch Demo</span>
          </button>
        </div>
        
        <div className="pb-12 sm:pb-16"></div>
      </main>

      {isSignupModalOpen && (
        <SignUp
          isOpen={isSignupModalOpen}
          onClose={closeSignupModal}
        />
      )}
    </>
  );
};

export default Hero;