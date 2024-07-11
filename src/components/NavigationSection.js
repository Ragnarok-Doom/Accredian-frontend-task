import React, { useRef } from 'react';
import logo from './Assets/logo.png';
import HeroSection from './HeroSection';
import FAQSection from './FaqSection';
import HelpSection from './FooterSection';

function NavigationSection() {
  const referAndEarnRef = useRef(null);
  const faqsRef = useRef(null);
  const helpRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="w-full h-auto flex items-center justify-around pt-5">
        <div className="">
          <img src={logo} className="w-[150px]" alt="Logo" />
        </div>
        <div className="flex gap-8 items-center">
          <h5 className="cursor-pointer" onClick={() => scrollToSection(referAndEarnRef)}>Refer & Earn</h5>
          <h5 className="cursor-pointer" onClick={() => scrollToSection(faqsRef)}>FAQs</h5>
          <h5 className="cursor-pointer" onClick={() => scrollToSection(helpRef)}>Help</h5>
          <h5><button className="bg-gray-200 py-2 px-4 rounded-xl">Login</button></h5>
          <h5><button className="bg-blue-500 py-2 px-4 rounded-xl text-white">Try for free</button></h5>
        </div>
      </div>

      <div ref={referAndEarnRef}>
        <HeroSection />
      </div>
      <div ref={faqsRef}>
        <FAQSection />
      </div>
      <div ref={helpRef}>
        <HelpSection />
      </div>
    </div>
  );
}

export default NavigationSection;
