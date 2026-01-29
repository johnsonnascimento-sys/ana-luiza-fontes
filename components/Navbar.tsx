import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../constants';
import TreeLogo from './TreeLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background-light/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <TreeLogo />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold text-primary tracking-tight">
            Ana Luiza Fontes
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-text-main">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-sm"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-main"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-light border-b border-primary/10 absolute w-full">
          <div className="flex flex-col p-6 space-y-4 text-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-main hover:text-primary py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-sm inline-block"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;