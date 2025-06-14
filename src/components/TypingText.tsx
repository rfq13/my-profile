
import React from 'react';
import { useTyping } from '../hooks/useTyping';

interface TypingTextProps {
  texts: string[];
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ texts, className }) => {
  const typedText = useTyping(texts, { loop: true });

  return (
    <span className={className}>
      {typedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
