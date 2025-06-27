import React from 'react';

const FloatingElements = () => {
  const elements = [
    { emoji: '🌸', delay: '0s', duration: '16s', size: 'text-2xl' }, // Doubled from 8s
    { emoji: '🦋', delay: '1s', duration: '24s', size: 'text-3xl' }, // Doubled from 12s
    { emoji: '🌺', delay: '2s', duration: '20s', size: 'text-xl' }, // Doubled from 10s
    { emoji: '✨', delay: '3s', duration: '12s', size: 'text-lg' }, // Doubled from 6s
    { emoji: '🎀', delay: '4s', duration: '28s', size: 'text-2xl' }, // Doubled from 14s
    { emoji: '💝', delay: '5s', duration: '18s', size: 'text-xl' }, // Doubled from 9s
    { emoji: '🌈', delay: '6s', duration: '22s', size: 'text-3xl' }, // Doubled from 11s
    { emoji: '⭐', delay: '7s', duration: '14s', size: 'text-lg' }, // Doubled from 7s
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
            animationDuration: `${6 + Math.random() * 4}s`, // Increased from 3 + Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;