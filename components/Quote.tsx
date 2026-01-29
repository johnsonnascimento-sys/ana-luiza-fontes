import React from 'react';
import TreeLogo from './TreeLogo';

const Quote: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-linen opacity-10 pointer-events-none"></div>
      
      {/* Decorative Tree */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <div className="w-[400px] h-[400px] -translate-y-20 translate-x-20">
           <TreeLogo className="w-full h-full text-white" />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <blockquote className="font-display text-3xl md:text-5xl italic leading-tight mb-10">
          "O que é negado, nos submete. O que é aceito, nos transforma."
        </blockquote>
        <cite className="text-sm uppercase tracking-[0.2em] font-medium not-italic opacity-80">
          — Bert Hellinger
        </cite>
      </div>
    </section>
  );
};

export default Quote;