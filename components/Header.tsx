import React, { useState, useEffect } from 'react';
import { HeartIcon, MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  refs: {
    about: React.RefObject<HTMLElement>;
    team: React.RefObject<HTMLElement>;
    pillars: React.RefObject<HTMLElement>;
    services: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', ref: refs.about },
    { name: 'Team', ref: refs.team },
    { name: 'Values', ref: refs.pillars },
    { name: 'Services', ref: refs.services },
    { name: 'Contact', ref: refs.contact },
  ];
  
  const handleLinkClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToRef(ref);
    setIsOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-sm border-b-2 border-brand-primary">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-press-start hover:text-brand-secondary transition-colors duration-300" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <HeartIcon className="w-6 h-6 text-brand-secondary" />
            LoveCode
          </a>
          <ul className="hidden md:flex items-center gap-6 font-press-start text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToRef(item.ref)}
                  className="hover:text-brand-primary transition-colors duration-300"
                >
                  [{item.name}]
                </button>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-primary" aria-label="Toggle menu">
              {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-sm z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <ul className="flex flex-col items-center justify-center h-full gap-8 font-press-start text-xl">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleLinkClick(item.ref)}
                className="hover:text-brand-primary transition-colors duration-300"
              >
                [{item.name}]
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;