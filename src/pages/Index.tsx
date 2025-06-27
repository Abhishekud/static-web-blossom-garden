
import React, { useState } from 'react';
import SpinningCharacter from '@/components/SpinningCharacter';
import FloatingElements from '@/components/FloatingElements';
import InteractiveButtons from '@/components/InteractiveButtons';
import AudioManager from '@/components/AudioManager';

const Index = () => {
  const [playSound, setPlaySound] = useState<((type: string) => void) | null>(null);

  const handleAudioReady = (playSoundFn: (type: string) => void) => {
    setPlaySound(() => playSoundFn);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Audio Manager */}
      <AudioManager onAudioReady={handleAudioReady} />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg mb-4 animate-pulse">
            KURU KURU
          </h1>
          <p className="text-xl md:text-2xl text-white/80 drop-shadow-md">
            ✨ Spin, Dance, and Have Fun! ✨
          </p>
        </div>
        
        {/* Main spinning character */}
        <SpinningCharacter playSound={playSound} />
        
        {/* Interactive buttons */}
        <InteractiveButtons playSound={playSound} />
        
        {/* Fun stats */}
        <div className="mt-8 text-center text-white/70">
          <p className="text-sm">Spinning since forever • Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
