import { useTheme } from 'next-themes';
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
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullName]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
                bg-background dark:bg-background">
      <div className="relative">
        <div className="relative z-10 flex items-center justify-center 
                    w-16 h-16 rounded-full shadow-imposing border-4 border-background 
                    bg-background dark:bg-background">
          <h1 className="text-2xl font-space font-bold text-gradient whitespace-nowrap">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
      </div>
    </div>

  );
};