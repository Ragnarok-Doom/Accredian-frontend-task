import React, { useState } from 'react';
import ReferralModal from './ReferralModal';
import hero from './Assets/hero.png';

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-auto pt-20 flex justify-center items-center hero-section">
      <div className="w-[1100px] h-auto px-[50px] bg-blue-100 rounded-2xl flex relative overflow-hidden">
        <div className="relative w-[50%]">
          <h1 className="text-[70px] leading-tight font-bold w-[350px] mt-[100px]">Let's Learn & Earn</h1>
          <p className="text-[30px] mt-10 w-[300px]">Get a chance to win up to <span className="text-blue-700 text-[40px] font-bold leading-none">Rs. 15,000</span></p>
          <button onClick={openModal} className="mt-20 mb-10 bg-blue-600 rounded-md text-white py-2 px-5">Refer Now</button>
        </div>
        <div className="w-[50%]">
          <img src={hero} className="w-[600px] absolute bottom-[-30px] right-10" alt="Hero" />
        </div>
      </div>
      <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default HeroSection;
