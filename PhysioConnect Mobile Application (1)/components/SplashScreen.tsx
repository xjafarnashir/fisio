import React, { useEffect, useState } from 'react';
import { Heart, Activity, Shield } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white animate-pulse"></div>
        <div className="absolute top-40 right-16 w-20 h-20 rounded-full bg-white animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 rounded-full bg-white animate-pulse delay-500"></div>
      </div>

      <div className={`flex flex-col items-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-12 h-12 text-teal-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-4xl mb-4 tracking-wider">PhysioConnect</h1>
        
        {/* Tagline */}
        <p className="text-xl opacity-90 mb-12 text-center px-8">Connect Your Home Care</p>

        {/* Feature Icons */}
        <div className="flex space-x-6 mb-12">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Shield className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Activity className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-6 h-6" />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Skip Button */}
      <button 
        onClick={onComplete}
        className="absolute bottom-8 right-8 px-6 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transition-all hover:bg-white/30"
      >
        Skip
      </button>
    </div>
  );
}