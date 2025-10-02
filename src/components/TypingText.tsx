
import React from 'react';
import { useTyping } from '../hooks/useTyping';

interface TypingTextProps {
  texts: string[];
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ texts, className }) => {
  const { text, showCursor } = useTyping(texts, { 
    loop: true,
    typingSpeed: 120,
    deletingSpeed: 80,
    pauseDuration: 2000
  });

  return (
    <span className={`${className} relative`}>
      <span className="typewriter-glow">
        {text}
      </span>
      <span 
        className={`typewriter-cursor ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
};

export default TypingText;
