import React, { forwardRef } from 'react';
import Section from './Section';
import FadeIn from './FadeIn';

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section
      ref={ref}
      title="[Get In Touch]"
      subtitle="Ready to turn your idea into tailored software? Let's talk."
    >
      <FadeIn>
        <div className="contact-form-wrapper max-w-2xl mx-auto relative p-8 border-2 border-brand-primary">
          <div className="absolute top-2 left-2 w-full h-full bg-brand-primary/10 -z-10"></div>
          <form action="mailto:info@lovecode.co.za" method="POST" encType="text/plain">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-press-start text-sm">NAME:</label>
              <input type="text" id="name" name="name" required className="w-full p-3 bg-brand-dark border-2 border-brand-light focus:border-transparent focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-80 focus:outline-none text-xl transition-all" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-press-start text-sm">EMAIL:</label>
              <input type="email" id="email" name="email" required className="w-full p-3 bg-brand-dark border-2 border-brand-light focus:border-transparent focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-80 focus:outline-none text-xl transition-all" />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block mb-2 font-press-start text-sm">MESSAGE:</label>
              <textarea id="message" name="message" rows={5} required className="w-full p-3 bg-brand-dark border-2 border-brand-light focus:border-transparent focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-80 focus:outline-none text-xl transition-all"></textarea>
            </div>
            <div className="text-center">
              <div className="relative inline-block group">
                  <div className="brutal-button-shadow absolute -inset-0.5 bg-brand-secondary blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <button type="submit" className="brutal-button relative inline-block font-press-start text-lg bg-brand-primary text-brand-dark px-8 py-4 border-2 border-brand-primary hover:bg-brand-dark hover:text-brand-primary transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                      Share Your Vision
                  </button>
              </div>
            </div>
          </form>
        </div>
      </FadeIn>
    </Section>
  );
});

Contact.displayName = 'Contact';

export default Contact;