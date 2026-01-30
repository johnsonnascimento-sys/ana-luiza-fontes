import React from 'react';
import { TESTIMONIALS } from '../constants';
import TreeLogo from './TreeLogo';

const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden py-24 bg-[radial-gradient(120%_120%_at_10%_100%,#FFF2E6_0%,#FFFFFF_55%,#F2E5D6_100%)] transition-colors"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div className="absolute right-0 bottom-0 w-[420px] h-[420px] translate-x-20 translate-y-16">
          <TreeLogo className="w-full h-full" />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary/70 font-medium tracking-widest uppercase text-xs mb-3 block">
            Experiências
          </span>
          <h2 className="font-display text-4xl text-text-main">
            Relatos de quem já floresceu
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-background-light/80 p-10 rounded-2xl border border-primary/5 shadow-sm backdrop-blur-sm"
            >
              <p className="mb-8 text-text-main/70 italic font-light leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-10 h-10 rounded-full bg-secondary border border-primary/10 flex items-center justify-center font-display text-primary">
                    {t.initial}
                </div>
                <span className="font-medium text-sm text-text-main">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
