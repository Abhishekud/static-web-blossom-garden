
import React from 'react';

const FloatingElements = () => {
  const elements = [
    { emoji: '🌸', delay: '0s', duration: '8s', size: 'text-2xl' },
    { emoji: '🦋', delay: '1s', duration: '12s', size: 'text-3xl' },
    { emoji: '🌺', delay: '2s', duration: '10s', size: 'text-xl' },
    { emoji: '✨', delay: '3s', duration: '6s', size: 'text-lg' },
    { emoji: '🎀', delay: '4s', duration: '14s', size: 'text-2xl' },
    { emoji: '💝', delay: '5s', duration: '9s', size: 'text-xl' },
    { emoji: '🌈', delay: '6s', duration: '11s', size: 'text-3xl' },
    { emoji: '⭐', delay: '7s', duration: '7s', size: 'text-lg' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} opacity-60 animate-bounce`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {element.emoji}
        </div>
      ))}
      
      {/* Additional floating circles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute rounded-full bg-white/10 animate-pulse"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
