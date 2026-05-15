import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Dotacje from './components/Dotacje';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Realizacje from './components/Realizacje';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initAnimations } from './hooks/useIntersectionObserver';

export default function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Dotacje />
      <Process />
      <Testimonials />
      <Cta />
      <Realizacje />
      <Contact />
      <Footer />
    </>
  );
}
