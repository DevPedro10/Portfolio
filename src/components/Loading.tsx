import React from 'react';
import { Logo } from './Logo';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo animado */}
        <div className="relative">
          <div className="animate-pulse">
            <Logo className="w-16 h-16 mx-auto" />
          </div>
          
          {/* Círculo de loading ao redor do logo */}
          <div className="absolute inset-0 w-16 h-16 mx-auto">
            <svg className="w-full h-full animate-spin" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#loadingGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="175"
                strokeDashoffset="175"
                className="animate-dash"
              />
              <defs>
                <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3ED598" />
                  <stop offset="100%" stopColor="#2DD4AA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Texto de loading */}
        <div className="space-y-2">
          <h2 className="text-xl font-space font-medium text-foreground">
            Carregando Portfolio
          </h2>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};