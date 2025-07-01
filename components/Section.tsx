import React, { forwardRef } from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ title, subtitle, children, className = '' }, ref) => {
    return (
      <section ref={ref} className={`py-16 md:py-24 ${className}`}>
        <div className="text-center mb-12">
          <h2 data-text={title} className="text-3xl md:text-4xl font-press-start text-brand-primary mb-2">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-brand-light/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;