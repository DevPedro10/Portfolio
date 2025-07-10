import React, { useState, useEffect } from 'react';

export const Loading = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Natã Pedro';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Velocidade do typewriter

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullName]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated circular border */}
        <div className="absolute inset-0 w-20 h-20 -m-2">
          <svg className="w-full h-full animate-spin" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="226"
              strokeDashoffset="226"
              className="animate-dash"
            />
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(142 35% 55%)" />
                <stop offset="50%" stopColor="hsl(120 30% 45%)" />
                <stop offset="100%" stopColor="hsl(142 35% 55%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Name with typewriter effect */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16">
          <div className="text-center">
            <h1 className="text-2xl font-space font-bold text-primary whitespace-nowrap">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};