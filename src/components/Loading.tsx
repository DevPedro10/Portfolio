import React from 'react';
import { Logo } from './Logo';

export const Loading = () => {
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
                <stop offset="0%" stopColor="#3ED598" />
                <stop offset="50%" stopColor="#2DD4AA" />
                <stop offset="100%" stopColor="#3ED598" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Logo - 25% larger */}
        <div className="relative z-10 animate-pulse-gentle">
          <Logo className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};