import React from 'react';
import { Share2, AtSign } from 'lucide-react';
import TreeLogo from './TreeLogo';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden py-16 bg-[radial-gradient(120%_120%_at_30%_0%,#FFF3E8_0%,#F7F3EB_60%,#F0E3D5_100%)] border-t border-primary/10 transition-colors">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="absolute right-0 top-0 w-[360px] h-[360px] translate-x-20 -translate-y-16">
          <TreeLogo className="w-full h-full" />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            <TreeLogo />
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-bold text-primary">
              Ana Luiza Fontes
            </span>
            <span className="text-text-main/30 hidden sm:inline text-xl">|</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-main/50 hidden sm:inline font-medium">
              Psicóloga Clínica
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-text-main/40 hover:text-primary transition-colors"
            aria-label="Share"
          >
            <Share2 size={24} />
          </a>
          <a
            href="#"
            className="text-text-main/40 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <AtSign size={24} />
          </a>
        </div>
        <p className="text-xs uppercase tracking-widest text-text-main/40">
          © {new Date().getFullYear()} Ana Luiza Fontes. Autenticidade e Cuidado.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
