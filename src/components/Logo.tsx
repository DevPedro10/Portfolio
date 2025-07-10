import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Hexágono com cantos arredondados */}
        <path
          d="M14 8.5C12.067 8.5 10.5 10.067 10.5 12V36C10.5 37.933 12.067 39.5 14 39.5H34C35.933 39.5 37.5 37.933 37.5 36V12C37.5 10.067 35.933 8.5 34 8.5H14Z"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          className="drop-shadow-sm"
        />
        
        {/* Letra N */}
        <text
          x="24"
          y="32"
          textAnchor="middle"
          className="font-sans font-bold text-lg"
          fill="url(#gradient)"
          style={{ fontSize: '20px' }}
        >
          N
        </text>
        
        {/* Gradiente */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ED598" />
            <stop offset="100%" stopColor="#2DD4AA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};