
import React, { useState } from 'react';
import { toast } from 'sonner';

interface InteractiveButtonsProps {
  playSound?: ((type: string) => void) | null;
}

const InteractiveButtons: React.FC<InteractiveButtonsProps> = ({ playSound }) => {
  const [mood, setMood] = useState('happy');
  
  const moods = [
    { name: 'happy', emoji: '😊', color: 'from-yellow-400 to-orange-400' },
    { name: 'excited', emoji: '🤩', color: 'from-pink-400 to-red-400' },
    { name: 'peaceful', emoji: '😌', color: 'from-blue-400 to-cyan-400' },
    { name: 'playful', emoji: '😜', color: 'from-purple-400 to-pink-400' },
  ];

  const handleMoodChange = (newMood: string) => {
    setMood(newMood);
    playSound?.('mood');
    const selectedMood = moods.find(m => m.name === newMood);
    toast(`Feeling ${newMood}! ${selectedMood?.emoji}`, {
      description: "Kuru kuru is now in a " + newMood + " mood!",
    });
  };

  const handleSpecialAction = () => {
    playSound?.('magic');
    toast("✨ KURU KURU MAGIC! ✨", {
      description: "Something magical just happened!",
    });
    // Add some temporary sparkle effect
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 1000);
  };

  const handleAction = (action: string, message: string, description: string) => {
    playSound?.('click');
    toast(message, { description });
  };

  return (
    <div className="mt-12 space-y-6">
      {/* Mood selector */}
      <div className="text-center">
        <p className="text-white mb-4 font-semibold">Choose Kuru's mood:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {moods.map((moodOption) => (
            <button
              key={moodOption.name}
              onClick={() => handleMoodChange(moodOption.name)}
              className={`px-4 py-2 rounded-full text-white font-semibold transition-all transform hover:scale-105 ${
                mood === moodOption.name ? 'ring-4 ring-white/50' : ''
              } bg-gradient-to-r ${moodOption.color}`}
            >
              {moodOption.emoji} {moodOption.name}
            </button>
          ))}
        </div>
      </div>

      {/* Special actions */}
      <div className="text-center space-y-3">
        <button
          onClick={handleSpecialAction}
          className="px-8 py-3 bg-gradient-to-r from-rainbow-500 to-rainbow-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          🎭 Magic Button
        </button>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleAction('dance', "🎵 Kuru kuru is dancing!", "Music in the air!")}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          >
            🎵 Dance
          </button>
          <button
            onClick={() => handleAction('sleep', "💤 Kuru kuru is sleepy...", "Time for a nap!")}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          >
            💤 Sleep
          </button>
          <button
            onClick={() => handleAction('treat', "🍭 Yummy treat!", "Kuru kuru loves sweets!")}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          >
            🍭 Treat
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveButtons;
