import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Rocket, Palette, ShoppingCart, Link as LinkIcon } from 'lucide-react';

interface HeroProps {
  onSeeProjects: () => void;
}

const Contact = ({ onSeeProjects }: HeroProps) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_2b9bj4c',
        'template_dg8vhjh',
        form.current,
        'hBGf2BnjwRFNo46jt'
      )
      .then(  
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-4 text-white font-poppins overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#131324] to-[#646bdf]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-medium tracking-wide uppercase">CONTACT US</span>
          <h2 className="text-4xl font-bold mt-2">Our Commitment To Excellence</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            We're here to assist you. Reach out for support, inquiries, or feedback, and we'll respond promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">Let us craft your idea</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 text-white placeholder:text-white/50"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 text-white placeholder:text-white/50"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 text-white placeholder:text-white/50"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0a0a0f] via-[#131324] to-[#646bdf] hover:opacity-90 transition rounded-lg py-3 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            {[ 
              {
                icon: Rocket,
                title: "RAPID PROJECT DELIVERY",
                desc: "We pride ourselves on delivering high-quality digital solutions on time and on budget",
              },
              {
                icon: Palette,
                title: "HIGH QUALITY DESIGNS",
                desc: "Our imagination is unlimited as Rive team have trained UI/UX designers who can deliver your ideas to reality",
              },
              {
                icon: ShoppingCart,
                title: "START GETTING PAID E-COMMERCE",
                desc: "Serve your customers with ideas and high quality e-commerce stores with more than 3 payment methods",
              },
              {
                icon: LinkIcon,
                title: "INTEGRATE YOUR PROJECTS",
                desc: "Our team is integrating with the biggest platforms such as: PayPal, Stripe, Checkout and more",
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#0a0a0f] via-[#131324] to-[#646bdf] shadow-md text-white hover:scale-105 transition">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
