import React from 'react';

interface BrutalCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const BrutalCard: React.FC<BrutalCardProps> = ({ icon, title, children, className = '' }) => {
  return (
    <div className={`relative group brutal-card ${className}`}>
      <div className="brutal-card-shadow absolute -bottom-2 -right-2 w-full h-full bg-brand-secondary transition-all duration-300 group-hover:-bottom-1 group-hover:-right-1"></div>
      <div className="relative h-full bg-brand-dark border-2 border-brand-light p-6 text-center transition-all duration-300 group-hover:bg-black">
        <div className="flex justify-center mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-press-start text-xl mb-4 text-brand-primary">{title}</h3>
        <div className="text-lg leading-relaxed text-brand-light/90">
            {children}
        </div>
      </div>
    </div>
  );
};

export default BrutalCard;