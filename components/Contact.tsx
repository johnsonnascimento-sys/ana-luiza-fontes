import React from 'react';
import { Phone, MapPin, BadgeCheck, CalendarDays } from 'lucide-react';
import { WHATSAPP_LINK, DISPLAY_PHONE, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/20 transition-colors">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 border border-primary/5">
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