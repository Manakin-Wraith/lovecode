import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { MatrixRain } from './components/matrix';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppComponent />
    </ThemeProvider>
  );
};

// We extract the main app content into its own component
// so it can be wrapped by ThemeProvider and use its context.
const AppComponent: React.FC = () => {
  const { theme } = useTheme();
  const matrixRef = useRef<MatrixRain | null>(null);

  const aboutRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const pillarsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    if (theme === 'terminal-matrix') {
      if (!matrixRef.current) {
        matrixRef.current = new MatrixRain(canvas);
      }
      matrixRef.current.start();
    } else {
      if (matrixRef.current) {
        matrixRef.current.stop();
      }
    }
    // No cleanup function needed if stop is handled this way
  }, [theme]);


  const refs = {
    about: aboutRef,
    team: teamRef,
    pillars: pillarsRef,
    services: servicesRef,
    contact: contactRef,
  };

  return (
    <div className="app-container bg-brand-dark text-brand-light font-vt323 text-xl min-h-screen relative overflow-x-hidden transition-colors duration-500">
      {/* Scanline Overlay */}
      <div className="scanline-overlay absolute top-0 left-0 w-full h-full bg-repeat z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header refs={refs} />
        <ThemeToggle />
        <main>
          <Hero contactRef={contactRef} />
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <About ref={aboutRef} />
            <Team ref={teamRef} />
            <Pillars ref={pillarsRef} />
            <Services ref={servicesRef} />
            <Contact ref={contactRef} />
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;