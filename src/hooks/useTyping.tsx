
import { useState, useEffect } from 'react';

interface TypingOptions {
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTyping = (
  texts: string[],
  {
    loop = true,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 1500,
  }: TypingOptions = {}
) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingState, setTypingState] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    let ticker: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTypingState('pausing');
        ticker = setTimeout(() => {
          setIsDeleting(true);
          setTypingState('deleting');
        }, pauseDuration);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingState('typing');
      }
    };
    
    if (typingState !== 'pausing') {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        ticker = setTimeout(handleTyping, speed);
    }
    
    return () => clearTimeout(ticker);

  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseDuration, loop, typingState]);

  return text;
};
