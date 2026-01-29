import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-background-light bg-paper transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl mb-4 text-text-main">
            Como posso te ajudar?
          </h2>
          <div className="h-[1px] w-24 bg-primary/40 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white/70 p-10 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-primary/5 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-secondary/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <service.icon className="text-primary group-hover:scale-110 transition-transform" size={28} />
              </div>
              <h3 className="font-display text-xl mb-4 text-text-main">
                {service.title}
              </h3>
              <p className="text-sm text-text-main/60 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;