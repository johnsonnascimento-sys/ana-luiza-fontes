import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-6">
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
              className="bg-background-light p-10 rounded-2xl border border-primary/5 bg-paper shadow-sm"
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