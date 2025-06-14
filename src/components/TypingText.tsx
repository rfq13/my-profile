
import React from 'react';
import { useTyping } from '../hooks/useTyping';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  loop?: boolean;
  loopDelay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '', 
  showCursor = true,
  loop = false,
  loopDelay,
}) => {
  const { displayText, isTyping } = useTyping({ text, speed, delay, loop, loopDelay });

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={`ml-1 ${isTyping ? 'animate-pulse' : 'animate-pulse'} text-neon-blue`}>
          |
        </span>
      )}
    </span>
  );
};

export default TypingText;
