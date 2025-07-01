import React, { forwardRef } from 'react';
import Section from './Section';
import BrutalCard from './BrutalCard';
import { PlatformIcon, AppIcon, AIIcon, AutomationIcon } from './Icons';
import FadeIn from './FadeIn';

const services = [
  {
    icon: <PlatformIcon className="w-12 h-12" />,
    title: "Custom Business Platforms",
    description: "Bespoke CRMs, ERPs, and internal tools designed from the ground up to match your exact operational needs."
  },
  {
    icon: <AppIcon className="w-12 h-12" />,
    title: "Custom Mobile & Web Apps",
    description: "Engaging, high-performance applications for your customers or your team, available on any device."
  },
  {
    icon: <AIIcon className="w-12 h-12" />,
    title: "AI-Powered Modules",
    description: "Integrate intelligent features like chatbots, recommendation engines, and predictive analytics into your systems."
  },
  {
    icon: <AutomationIcon className="w-12 h-12" />,
    title: "Workflow Automations",
    description: "Eliminate repetitive manual tasks, save time, and reduce errors by automating your key business processes."
  }
];

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section
      ref={ref}
      title="[Our Services]"
      subtitle="Tailored solutions to solve your most complex challenges."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 150}>
            <BrutalCard icon={service.icon} title={service.title}>
              <p>{service.description}</p>
            </BrutalCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
});

Services.displayName = 'Services';

export default Services;