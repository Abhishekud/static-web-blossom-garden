
import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface AudioManagerProps {
  onAudioReady: (playSound: (type: string) => void) => void;
}

const AudioManager: React.FC<AudioManagerProps> = ({ onAudioReady }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = (type: string) => {
    if (!isEnabled) return;
    
    try {
      const audioContext = audioContextRef.current;
      if (!audioContext) return;

      // Create different tones for different actions
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Different sounds for different actions
      switch (type) {
        case 'spin':
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
          break;
        case 'click':
          oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.1);
          break;
        case 'magic':
          oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.5);
          break;
        case 'mood':
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
          break;
        default:
          oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
      }
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  const enableAudio = async () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      await audioContext.resume();
      audioContextRef.current = audioContext;
      setIsEnabled(true);
      onAudioReady(playSound);
      toast("🔊 Audio enabled! Enjoy the sounds!", {
        description: "Kuru kuru sounds are now active!",
        duration: 3000  
      });
    } catch (error) {
      console.error('Failed to enable audio:', error);
      toast("❌ Audio failed to enable", {
        description: "Your browser might not support audio features",
        duration: 3000  
      });
    }
  };

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  if (!isEnabled) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={enableAudio}
          className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all animate-pulse"
        >
          🔊 Enable Audio
        </button>
      </div>
    );
  }

  return null;
};

export default AudioManager;
