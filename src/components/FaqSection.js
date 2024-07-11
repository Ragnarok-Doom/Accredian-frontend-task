import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'What is the referral program?',
    answer: 'Our referral program allows you to earn rewards by referring friends to join our courses. Each successful referral earns you exciting rewards.',
  },
  {
    question: 'How do I refer a friend?',
    answer: 'Simply click the "Refer Now" button, fill in the referral form with your friend\'s details, and submit it. We will notify you once the referral is successful.',
  },
  {
    question: 'What rewards can I earn?',
    answer: 'You can earn various rewards such as discounts on courses, gift vouchers, and other exclusive offers. Check our referral program page for more details.',
  },
  {
    question: 'How will I know if my referral is successful?',
    answer: 'You will receive an email notification once your referred friend successfully joins our courses and completes the necessary steps.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const newHeights = faqs.reduce((acc, _, index) => {
      acc[index] = refs.current[index]?.scrollHeight;
      return acc;
    }, {});
    setHeights(newHeights);
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 my-[50px] faq-section">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-[80px]">Frequently Asked <span className='text-blue-500'>Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full text-left text-lg font-semibold text-gray-800 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              <div
                ref={(el) => refs.current[index] = el}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  height: activeIndex === index ? `${heights[index]}px` : '0px',
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
