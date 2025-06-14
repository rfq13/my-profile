
import { useState, useEffect } from 'react';

interface UseTypingProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
}

export const useTyping = ({ text, speed = 100, delay = 0, loop = false, loopDelay = 2000 }: UseTypingProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let typeTimeout: NodeJS.Timeout;
    let mainTimeout: NodeJS.Timeout;
    
    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;
      setDisplayText('');
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          typeTimeout = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          if (loop) {
            mainTimeout = setTimeout(startTyping, loopDelay);
          }
        }
      };
      
      typeNextChar();
    };

    mainTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(mainTimeout);
    };
  }, [text, speed, delay, loop, loopDelay]);

  return { displayText, isTyping };
};
