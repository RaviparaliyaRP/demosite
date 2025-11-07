import React from 'react';

export const Section: React.FC<{id: string; className?: string; children: React.ReactNode; style?: React.CSSProperties}> = ({ id, className, children, style }) => (
    <section id={id} className={`py-8 sm:py-12 md:py-16 lg:py-24 ${className || ''}`} style={style}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
);

export const SectionTitle: React.FC<{subtitle: string; children: React.ReactNode}> = ({ subtitle, children }) => (
    <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <p className="text-rose-500 font-semibold tracking-wider text-sm sm:text-base uppercase mb-2">{subtitle}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brown-heading mt-2 px-2 leading-tight">{children}</h2>
    </div>
);
