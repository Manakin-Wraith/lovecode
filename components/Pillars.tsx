import React, { forwardRef } from 'react';
import Section from './Section';
import BrutalCard from './BrutalCard';
import { ListenIcon, DesignIcon, BuildIcon, SupportIcon } from './Icons';
import FadeIn from './FadeIn';

const pillars = [
  {
    icon: <ListenIcon className="w-12 h-12" />,
    title: "Listen First",
    description: "We conduct in-depth discovery workshops to understand your unique workflows and pain points before writing a single line of code."
  },
  {
    icon: <DesignIcon className="w-12 h-12" />,
    title: "Design For You",
    description: "Wireframes and prototypes are tailored to your brand and processes. You see exactly how it works before we build it."
  },
  {
    icon: <BuildIcon className="w-12 h-12" />,
    title: "Build With Care",
    description: "We practice full-stack development with complete transparency, providing regular updates and progress reports."
  },
  {
    icon: <SupportIcon className="w-12 h-12" />,
    title: "Support Always",
    description: "Our partnership doesn't end at launch. We provide ongoing maintenance, updates, and optimizations to ensure your software scales with you."
  }
];

const Pillars = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section
      ref={ref}
      title="[Our Values]"
      subtitle="The principles that guide every project we undertake."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 150}>
            <BrutalCard icon={pillar.icon} title={pillar.title}>
              <p>{pillar.description}</p>
            </BrutalCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
});

Pillars.displayName = 'Pillars';

export default Pillars;