import React from 'react';
import { HeartIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-brand-primary mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 text-center text-brand-light/70">
        <p className="flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} LoveCode. Coded with <HeartIcon className="w-5 h-5 text-brand-secondary" /> and lots of coffee.
        </p>
      </div>
    </footer>
  );
};

export default Footer;