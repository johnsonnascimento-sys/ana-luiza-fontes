import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div className="bg-linen p-4 rounded-2xl relative shadow-sm">
              <img
                src={IMAGES.about}
                alt="Ana Luiza Fontes"
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-sm border border-primary/10 w-full"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="font-display italic text-primary text-2xl">Ana Luiza Fontes</p>
              <p className="text-xs uppercase tracking-widest text-text-main/50 mt-2">
                CRP: 41279/6º/SP
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-primary/70 font-medium tracking-widest uppercase text-xs mb-4 block">
              Trajetória Profissional
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-2 mb-8 text-text-main">
              Cuidando de histórias com acolhimento e técnica
            </h2>
            <div className="space-y-6 text-text-main/70 leading-relaxed text-lg font-light">
              <p>
                Minha missão é proporcionar um espaço seguro e livre de julgamentos, onde
                cada indivíduo possa explorar suas profundezas e encontrar recursos para
                lidar com os desafios da vida.
              </p>
              <p>
                Acredito que a saúde mental é o alicerce para uma existência plena.
                Através de uma abordagem humanizada e baseada em evidências, trabalho para
                que meus pacientes possam ressignificar suas dores e potencializar suas
                virtudes.
              </p>
            </div>
            <div className="mt-12 flex gap-12 border-t border-primary/10 pt-10">
              <div>
                <span className="block text-4xl font-display text-primary">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-text-main/60 font-medium">
                  Anos de experiência
                </span>
              </div>
              <div>
                <span className="block text-4xl font-display text-primary">500+</span>
                <span className="text-[10px] uppercase tracking-widest text-text-main/60 font-medium">
                  Vidas transformadas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;