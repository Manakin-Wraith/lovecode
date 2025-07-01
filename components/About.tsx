import React, { forwardRef } from 'react';
import Section from './Section';
import FadeIn from './FadeIn';

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section
      ref={ref}
      title="[Our Mission]"
      subtitle="Flipping the script on off-the-shelf software."
    >
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center text-2xl leading-relaxed border-2 border-brand-secondary p-8 md:p-12 relative">
           <div className="absolute top-2 left-2 w-full h-full bg-brand-secondary/20 -z-10"></div>
          <p>
            LoveCode was born from a simple realization: most software forces businesses to bend their processes around the tool, not the other way. We exist to flip that script—by writing code that adapts to your unique story, ensuring you spend less time wrestling with technology and more time focusing on growth.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
});

About.displayName = 'About';

export default About;