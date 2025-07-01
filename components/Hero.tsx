import React, { useState, useEffect, useCallback } from 'react';

const TYPING_PHRASES = [
  "build your dream website.",
  "turn your idea into reality.",
  "design your perfect user experience.",
  "scale your business online.",
  "launch your MVP in days.",
  "make your brand stand out."
];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY = 2000;

interface HeroProps {
    contactRef: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ contactRef }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const updatedText = isDeleting
      ? currentPhrase.substring(0, text.length - 1)
      : currentPhrase.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), DELAY);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
    }
  }, [isDeleting, text, phraseIndex]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [text, handleTyping, isDeleting]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 data-text="Software That Fits You" className="text-4xl md:text-6xl lg:text-7xl font-press-start mb-4 leading-tight">
          Software That Fits You
        </h1>
        <p className="text-3xl md:text-4xl font-press-start text-brand-primary mb-8">
          Not the Other Way Around.
        </p>
        <p className="text-2xl md:text-3xl text-brand-light mb-12 min-h-[40px]">
          Let's {text}<span className="animate-blink">_</span>
        </p>
        <div className="relative inline-block group">
            <div className="brutal-button-shadow absolute -inset-0.5 bg-brand-secondary blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <button
                onClick={scrollToContact}
                className="brutal-button relative inline-block font-press-start text-lg bg-brand-primary text-brand-dark px-8 py-4 border-2 border-brand-primary hover:bg-brand-dark hover:text-brand-primary transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
                Book a Free Discovery Call
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;