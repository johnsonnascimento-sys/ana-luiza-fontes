import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light text-text-main font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Quote />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;