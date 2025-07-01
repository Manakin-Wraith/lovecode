import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-brand-primary text-brand-dark p-3 border-2 border-brand-dark hover:bg-brand-secondary hover:border-brand-light hover:text-brand-light transition-all duration-300 group"
          aria-label="Go to top"
        >
          <ArrowUpIcon className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
};

export default BackToTop;