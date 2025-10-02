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
      {/* Shiny text */}
      <span className="typewriter-glow bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shiny">
        {text}
      </span>
      {/* Cursor */}
      <span 
        className={`ml-1 inline-block ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}
      >
        |
      </span>
    </span>
  );
};

export default TypingText;
