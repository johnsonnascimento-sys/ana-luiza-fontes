import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, IMAGES } from '../constants';
import TreeLogo from './TreeLogo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(120%_120%_at_8%_8%,#FDE8D6_0%,#F7F3EB_40%,#F2E4D6_70%,#EAD8C6_100%)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-80 z-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(45% 45% at 85% 20%, rgba(217,142,86,0.25) 0%, rgba(217,142,86,0) 70%), radial-gradient(50% 50% at 15% 65%, rgba(234,228,217,0.9) 0%, rgba(234,228,217,0) 70%), linear-gradient(120deg, rgba(247,243,235,0.6) 0%, rgba(239,226,211,0.9) 45%, rgba(247,243,235,0.5) 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-12 md:py-0">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-tight text-text-main">
            Encontre clareza, viva sua{' '}
            <span className="italic text-primary">essência</span>.
          </h1>
          <p className="text-lg mb-12 text-text-main/70 max-w-lg leading-relaxed font-light">
            Um caminho de autodescoberta e acolhimento para cultivar o equilíbrio
            emocional e a autenticidade natural do seu ser.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:bg-primary/90 transition-all group"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
              Falar no WhatsApp
            </a>
            <button
              type="button"
              className="flex items-center justify-center px-8 py-4 bg-white/60 backdrop-blur-sm border border-primary text-primary rounded-lg font-medium hover:bg-white hover:shadow-md transition-all"
              onClick={() => {
                const target = document.getElementById('servicos');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Conhecer serviços
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-secondary/40 rounded-full scale-105 border border-primary/5"></div>

            {/* Main Image */}
            <img
              src={IMAGES.hero}
              alt="Ana Luiza Fontes - Psicóloga"
              className="relative z-10 w-full h-full object-cover rounded-full border-[12px] border-white/80 shadow-xl"
            />

            {/* Floating Logo Badge */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-xl z-20 p-5 border border-secondary">
              <TreeLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
