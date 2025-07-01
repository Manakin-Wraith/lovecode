import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

export type Theme = 'retro-brutalist' | 'cyberpunk-glitch' | 'solarized-dawn' | 'terminal-matrix';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('retro-brutalist');

  useEffect(() => {
    const savedTheme = localStorage.getItem('lovecode-theme') as Theme | null;
    if (savedTheme && ['retro-brutalist', 'cyberpunk-glitch', 'solarized-dawn', 'terminal-matrix'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lovecode-theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
