
import React, { useState } from 'react';
import { toast } from 'sonner';

interface InteractiveButtonsProps {
  playSound?: ((type: string) => void) | null;
}

const InteractiveButtons: React.FC<InteractiveButtonsProps> = ({ playSound }) => {

  const handleSpecialAction = () => {
    playSound?.('magic');
    toast("✨ KURU KURU MAGIC! ✨", {
      description: "Something magical just happened!",
      duration: 5000,
    });
    // Add some temporary sparkle effect
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 1000);
  }; 

  return (
    <div className="mt-12 space-y-6"> 
      {/* Special actions */}
      <div className="text-center space-y-3">
        <button
          onClick={handleSpecialAction}
          className="px-8 py-3 bg-gradient-to-r from-rainbow-500 to-rainbow-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          🎭 Magic Button
        </button>
      </div>
    </div>
  );
};

export default InteractiveButtons;
