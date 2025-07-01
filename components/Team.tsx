import React, { forwardRef } from 'react';
import Section from './Section';
import { ProductIcon, CreativeIcon, RocketIcon } from './Icons';
import FadeIn from './FadeIn';

const Team = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section
      ref={ref}
      title="[The Team]"
      subtitle="Meet the founder and principal engineer."
    >
      <FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            <div className="brutal-image-shadow absolute -bottom-2 -right-2 w-full h-full bg-brand-primary transition-all duration-300 group-hover:-bottom-1 group-hover:-right-1"></div>
            <div className="team-image-wrapper relative bg-brand-dark border-2 border-brand-light p-2 overflow-hidden">
              <img src="/gerhard.png" alt="Gerhard Mostert, AI Product Engineer at LoveCode" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-press-start text-3xl text-brand-light mb-2">Gerhard Mostert</h3>
            <p className="font-press-start text-lg text-brand-secondary mb-6">AI Product Engineer</p>

            <div className="space-y-4 text-xl leading-relaxed text-brand-light/90">
              <p>
                Hi, I’m Gerhard Mostert—a Full Stack Product Engineer with a unique background in film and television production, now blending storytelling, creativity, and technical expertise to craft exceptional user experiences.
              </p>
              <p>
                I specialize in bringing big ideas to life through rapid prototyping, end-to-end development, and scalable solutions. My approach goes beyond writing code—I collaborate with teams, empathize with users, and align technical execution with business goals.
              </p>

              <h4 className="font-press-start text-xl text-brand-primary pt-4">Here’s what I bring to the table:</h4>
              <ul className="space-y-3 list-inside mt-4">
                <li className="flex items-start gap-3">
                  <ProductIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-brand-light">Product-Focused Engineering:</strong> I design and develop full-stack solutions that solve real-world problems while balancing speed, quality, and scalability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CreativeIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-brand-light">Cross-Disciplinary Expertise:</strong> My diverse background fuels creative problem-solving, allowing me to bridge gaps between technical and non-technical teams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <RocketIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-brand-light">Big Picture Thinker:</strong> I have the foresight to craft systems that evolve with your needs, from managing agile projects to scaling platforms.</span>
                </li>
              </ul>
              
              <p className="pt-4">
                <strong className="text-brand-primary">Technically,</strong> I’m proficient in Python, JavaScript (React, Node.js), and database management (SQL & NoSQL), with a knack for leveraging AI tools to accelerate development. <strong className="text-brand-secondary">Creatively,</strong> my storytelling roots inspire user-centered solutions and innovation.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
});

Team.displayName = 'Team';

export default Team;