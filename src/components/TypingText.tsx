
import React from 'react';
import { useTyping } from '../hooks/useTyping';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '', 
  showCursor = true 
}) => {
  const { displayText, isTyping } = useTyping({ text, speed, delay });

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
