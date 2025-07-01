import React, { useState, useEffect, useRef } from 'react';
import { useTheme, Theme } from '../contexts/ThemeContext';
import { SparklesIcon, XIcon, PaintBrushIcon, ComputerDesktopIcon, SunIcon, CommandLineIcon } from './Icons';

const themes: { name: Theme; label:string; icon: React.ReactNode }[] = [
  { name: 'retro-brutalist', label: 'Retro', icon: <PaintBrushIcon className="w-6 h-6" /> },
  { name: 'cyberpunk-glitch', label: 'Cyber', icon: <ComputerDesktopIcon className="w-6 h-6" /> },
  { name: 'solarized-dawn', label: 'Dawn', icon: <SunIcon className="w-6 h-6" /> },
  { name: 'terminal-matrix', label: 'Matrix', icon: <CommandLineIcon className="w-6 h-6" /> },
];

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visited = localStorage.getItem('lovecode-theme-toggle-visited');
    if (!visited) {
      const timer = setTimeout(() => setShowPulse(true), 1500); // Wait a bit before pulsing
      localStorage.setItem('lovecode-theme-toggle-visited', 'true');
      return () => clearTimeout(timer);
    }
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (showPulse) setShowPulse(false);
  }

  const animationClass = showPulse ? 'animate-pulse-glow' : '';

  return (
    <div ref={toggleRef} className="fixed bottom-5 left-5 z-[60]">
      {/* Menu */}
      <div
        className={`theme-toggle-menu absolute bottom-full mb-3 w-56 p-2 bg-brand-dark border-2 border-brand-primary origin-bottom-left transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-1">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => {
                setTheme(t.name);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 p-2 text-left font-press-start text-sm transition-all duration-200 ${
                theme === t.name
                  ? 'bg-brand-primary text-brand-dark'
                  : 'text-brand-light hover:bg-brand-primary/20'
              }`}
            >
              <span className={theme === t.name ? 'text-brand-dark' : 'text-brand-primary'}>
                {t.icon}
              </span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="relative group">
        <div className="absolute bottom-full mb-3 w-max px-3 py-1.5 bg-brand-dark border border-brand-primary text-brand-light text-xs font-press-start rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:delay-500">
          Change Style
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-brand-dark border-l border-b border-brand-primary transform -translate-y-1/2 rotate-[-45deg]"></div>
        </div>
        <button
          onClick={handleToggle}
          className={`theme-toggle-fab flex items-center justify-center w-16 h-16 bg-brand-primary text-brand-dark border-2 border-brand-dark transition-all duration-300 hover:scale-110 ${animationClass}`}
          style={{ animation: showPulse ? 'pulse-glow 2s infinite' : 'none' }}
          aria-label="Toggle style theme menu"
        >
          <div className="relative w-8 h-8 h-full flex items-center justify-center">
            <span className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 transform -rotate-180 scale-50' : 'opacity-100 transform rotate-0 scale-100'}`}>
                <SparklesIcon className="w-8 h-8" />
            </span>
            <span className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform rotate-180 scale-50'}`}>
                <XIcon className="w-8 h-8" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default ThemeToggle;