import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion'; // استيراد framer-motion

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Rive?',
      answer: 'Rive is a team of skilled developers and designers dedicated to creating exceptional digital solutions for businesses and individuals, specializing in UI/UX and custom development.'
    },
    {
      question: 'What services does Rive offer?',
      answer: 'Rive offers web development, mobile app development, UI/UX design, e-commerce solutions, and integration capabilities with platforms like Stripe, PayPal, and more.'
    },
    {
      question: 'How can I contact Rive?',
      answer: 'You can contact us via the contact form on our website, or reach out to us through social media platforms like Instagram, Twitter, and LinkedIn.'
    },
    {
      question: 'Where can I view your portfolio?',
      answer: 'Visit our Projects section on the website to view our latest work, including successful web and mobile app implementations.'
    },
    {
      question: 'Does Rive offer custom project development?',
      answer: 'Yes, we offer custom development services tailored to your needs, whether it’s a website, app, or an integrated solution.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-500 font-medium">FAQ</span>
          <h2 className="text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-4">
            The most common questions asked by the community about Rive team and our services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="project-card rounded-xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}  // Close if already open
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </motion.div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
