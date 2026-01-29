import { Brain, Briefcase, Users, Sparkles } from 'lucide-react';
import { Service, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEcEW2T4JIX9Qht9s9urt06Acsyu2ODpTpp99uypaVSuWfeWYVfTMzeITZOCIALCpvEPWD7JpPp9wj3SKSZffmYUnWCNYb1bjwAktV07SbCcZuWFlJxa_JYZxUttfaWsuFczA0jsVP0ByPhlwWoog1_j-U_4R1EHkkmTUjQXLVDM3-6dwnW0sw_4H8UwJRg5bt4BRzB-Zc_gqY4XrXGNzQLZyiu3ys6LKpeGWYlFp5mU7eHG5NLV2-s6Evh5m9z4-BnWO2YobCSBqN",
  about: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-Mu05XSn3_n5w87p1HnVdx3lo6tU54M3-DFub8jHMrsMcSt6TM0nQ5kFZj8ghkjBLSS5b8c6dJwWYnMc_h48GrgYanIs4nuWjyi6p5ZOsq1WeCFavHKEqs0Q0PiadocGDbyyRL5dbPGE5vW_PY8xl8rZ2qpijhG3uwvk8nmR_3G1HgxAgy76UdBwT_gCoZNB3VmVPaUpSBB7r6utKDxSDkXTz-eYSioEiSr9UUKZ_6k_ZfijQ6nTL32Xw1AEau3JdaIsYFdJdyMJ"
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Psicoterapia',
    description: 'Sessões individuais focadas no autoconhecimento e tratamento de transtornos emocionais.',
    icon: Brain,
  },
  {
    id: 2,
    title: 'Orientação Profissional',
    description: 'Suporte para transições de carreira e escolhas vocacionais conscientes.',
    icon: Briefcase,
  },
  {
    id: 3,
    title: 'Constelação Familiar',
    description: 'Abordagem sistêmica para identificar e harmonizar dinâmicas familiares profundas.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Hipnoterapia',
    description: 'Técnicas de hipnose clínica para acessar e ressignificar conteúdos do inconsciente.',
    icon: Sparkles,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "As sessões com a Ana Luiza mudaram minha forma de encarar os conflitos familiares. Hoje me sinto muito mais leve e seguro.",
    author: "Mariana S.",
    initial: "M"
  },
  {
    id: 2,
    text: "A hipnoterapia foi um divisor de águas no meu tratamento de ansiedade. Um processo respeitoso e muito eficaz.",
    author: "Ricardo F.",
    initial: "R"
  },
  {
    id: 3,
    text: "Profissional excelente. O acolhimento dela é genuíno e a técnica impecável. Recomendo muito!",
    author: "Juliana M.",
    initial: "J"
  },
];

export const PHONE_NUMBER = "+5511915981506";
export const DISPLAY_PHONE = "(11) 91598-1506";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER.replace(/\D/g,'')}`;