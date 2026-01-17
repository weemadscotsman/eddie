import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  borderTop?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '', id, borderTop = true }) => {
  return (
    <section id={id} className={`w-full py-16 md:py-24 px-4 md:px-8 relative scroll-mt-24 ${className}`}>
      {borderTop && (
        <div className="absolute top-0 left-0 w-full h-px bg-sys-gray/50 max-w-7xl mx-auto right-0" />
      )}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {title && (
          <div className="md:col-span-3">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-sys-white opacity-80 sticky top-24 font-mono">
              {title}
            </h2>
          </div>
        )}
        <div className={`${title ? 'md:col-span-9' : 'md:col-span-12'} text-sys-white`}>
          {children}
        </div>
      </div>
    </section>
  );
};