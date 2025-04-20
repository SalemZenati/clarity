import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BreathingExercise = () => {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  // Duration in seconds for each phase
  const phaseDurations = {
    inhale: 4,
    hold: 4,
    exhale: 6,
    rest: 2,
  };
  
  // Reset the exercise
  const resetExercise = () => {
    setPhase('inhale');
    setCount(0);
    setIsActive(false);
  };
  
  // Toggle the exercise
  const toggleExercise = () => {
    if (isActive) {
      resetExercise();
    } else {
      setIsActive(true);
    }
  };
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive) {
      interval = window.setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 1;
          
          if (phase === 'inhale' && nextCount >= phaseDurations.inhale) {
            setPhase('hold');
            return 0;
          } else if (phase === 'hold' && nextCount >= phaseDurations.hold) {
            setPhase('exhale');
            return 0;
          } else if (phase === 'exhale' && nextCount >= phaseDurations.exhale) {
            setPhase('rest');
            return 0;
          } else if (phase === 'rest' && nextCount >= phaseDurations.rest) {
            setPhase('inhale');
            return 0;
          }
          
          return nextCount;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, phase]);
  
  const instructions = {
    inhale: 'Breathe in slowly through your nose...',
    hold: 'Hold your breath...',
    exhale: 'Exhale slowly through your mouth...',
    rest: 'Rest...',
  };
  
  const circleVariants = {
    inhale: {
      scale: 1.5,
      transition: { duration: phaseDurations.inhale, ease: 'easeInOut' },
    },
    hold: {
      scale: 1.5,
      transition: { duration: phaseDurations.hold, ease: 'linear' },
    },
    exhale: {
      scale: 1,
      transition: { duration: phaseDurations.exhale, ease: 'easeInOut' },
    },
    rest: {
      scale: 1,
      transition: { duration: phaseDurations.rest, ease: 'linear' },
    },
  };

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4 text-center">4-4-6-2 Breathing</h3>
      <p className="text-clarity-neutral-600 mb-6 text-center">
        A simple breathing exercise to help reduce anxiety and create calm
      </p>
      
      <div className="flex justify-center mb-8">
        <motion.div
          className="relative flex items-center justify-center"
          initial={false}
          animate={isActive ? phase : 'rest'}
          variants={circleVariants}
        >
          <div className="w-36 h-36 rounded-full bg-clarity-blue-100 absolute animate-pulse-slow"></div>
          <div className="w-24 h-24 rounded-full bg-clarity-blue-200 flex items-center justify-center z-10">
            {isActive ? (
              <div className="text-clarity-blue-800 font-medium">
                {phaseDurations[phase] - count}
              </div>
            ) : (
              <div className="text-clarity-blue-800 font-medium">Start</div>
            )}
          </div>
        </motion.div>
      </div>
      
      {isActive && (
        <p className="text-center text-lg mb-6">{instructions[phase]}</p>
      )}
      
      <div className="flex justify-center">
        <button
          onClick={toggleExercise}
          className={`btn px-6 py-2 rounded-lg font-medium transition-all ${
            isActive
              ? 'bg-clarity-neutral-100 hover:bg-clarity-neutral-200 text-clarity-neutral-700'
              : 'bg-clarity-blue-500 hover:bg-clarity-blue-600 text-white'
          }`}
        >
          {isActive ? 'Reset' : 'Start Exercise'}
        </button>
      </div>
    </div>
  );
};

export default BreathingExercise;