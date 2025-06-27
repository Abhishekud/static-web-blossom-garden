
import React, { useState, useEffect } from 'react';

const SpinningCharacter = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [spinSpeed, setSpinSpeed] = useState(2);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
    // Increase spin speed temporarily
    setSpinSpeed(8);
    setTimeout(() => setSpinSpeed(2), 1000);
  };

  return (
    <div className="relative">
      {/* Click counter */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg">
        Clicks: {clicks}
      </div>
      
      {/* Main character container */}
      <div 
        className={`relative cursor-pointer transition-transform duration-300 hover:scale-110 ${
          isSpinning ? 'animate-spin' : ''
        }`}
        style={{ 
          animationDuration: `${1/spinSpeed}s`,
          animationTimingFunction: 'linear'
        }}
        onClick={handleClick}
      >
        {/* Character body */}
        <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full relative shadow-2xl border-4 border-white">
          {/* Eyes */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-black rounded-full animate-bounce"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-black rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          
          {/* Mouth */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-black rounded-full"></div>
          
          {/* Blush */}
          <div className="absolute top-12 left-2 w-6 h-4 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute top-12 right-2 w-6 h-4 bg-pink-300 rounded-full opacity-60"></div>
          
          {/* Sparkles around character */}
          <div className="absolute -top-4 -left-4 text-yellow-200 text-2xl animate-ping">✨</div>
          <div className="absolute -top-4 -right-4 text-pink-200 text-2xl animate-ping" style={{animationDelay: '0.5s'}}>⭐</div>
          <div className="absolute -bottom-4 -left-4 text-blue-200 text-2xl animate-ping" style={{animationDelay: '1s'}}>💫</div>
          <div className="absolute -bottom-4 -right-4 text-purple-200 text-2xl animate-ping" style={{animationDelay: '1.5s'}}>🌟</div>
        </div>
        
        {/* Shadow */}
        <div className="absolute top-2 left-2 w-32 h-32 md:w-48 md:h-48 bg-black/20 rounded-full -z-10"></div>
      </div>
      
      {/* Spin control */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSpinning(!isSpinning);
          }}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
        >
          {isSpinning ? '⏸️ Pause' : '▶️ Spin'}
        </button>
      </div>
    </div>
  );
};

export default SpinningCharacter;
