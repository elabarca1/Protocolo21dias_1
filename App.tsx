
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImageCarousel } from './components/ImageCarousel';
import { Objectives } from './components/Objectives';
import { ProtocolPhases } from './components/ProtocolPhases';
import { Facilitator } from './components/Facilitator';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-slate-50 to-emerald-50 text-slate-700">
      <Header />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <ImageCarousel />
        </FadeInSection>
        <FadeInSection>
          <Objectives />
        </FadeInSection>
        <FadeInSection>
          <ProtocolPhases />
        </FadeInSection>
        <FadeInSection>
          <Facilitator />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <Schedule />
        </FadeInSection>
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        <FadeInSection>
          <CallToAction />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
