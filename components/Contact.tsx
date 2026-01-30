import React from 'react';
import { Phone, MapPin, BadgeCheck, CalendarDays } from 'lucide-react';
import { WHATSAPP_LINK, DISPLAY_PHONE, PHONE_NUMBER } from '../constants';
import TreeLogo from './TreeLogo';

const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 bg-[radial-gradient(120%_120%_at_0%_100%,#FDEFE3_0%,#F7F3EB_45%,#EFDCCB_100%)] transition-colors"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div className="absolute -left-10 top-0 w-[380px] h-[380px] -translate-y-20">
          <TreeLogo className="w-full h-full" />
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 bg-white/90 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 border border-primary/5 backdrop-blur-sm">
        <div className="p-12 md:p-16">
          <h2 className="font-display text-3xl mb-6 text-text-main">
            Vamos iniciar sua jornada?
          </h2>
          <p className="text-text-main/60 mb-10 font-light leading-relaxed">
            Escolha o melhor canal para conversarmos e agendar sua primeira sessão, seja
            online ou presencial.
          </p>
          <div className="space-y-8">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-5 text-text-main/80 hover:text-primary transition-colors group"
            >
              <div className="text-primary bg-primary/5 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                <Phone size={24} />
              </div>
              <span className="font-medium text-lg">{DISPLAY_PHONE}</span>
            </a>
            <div className="flex items-center gap-5">
              <div className="text-primary bg-primary/5 p-2 rounded-lg">
                <MapPin size={24} />
              </div>
              <span className="text-text-main/60 font-light">
                Atendimento Online & Presencial (São Paulo)
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-primary bg-primary/5 p-2 rounded-lg">
                <BadgeCheck size={24} />
              </div>
              <span className="text-text-main/60 font-light text-sm uppercase tracking-wider">
                CRP: 41279/6º/SP
              </span>
            </div>
          </div>
        </div>
        <div className="bg-primary p-12 md:p-16 flex flex-col justify-center items-center text-center text-white relative">
          <div className="absolute inset-0 bg-linen opacity-10 pointer-events-none"></div>
          <CalendarDays size={64} className="mb-8 opacity-90" />
          <h3 className="text-2xl font-display mb-10 italic">
            Agende agora pelo WhatsApp
          </h3>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
