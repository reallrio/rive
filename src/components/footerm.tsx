import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] text-white font-poppins px-6 pt-12 pb-10 rounded-t-3xl shadow-inner">
      {/* زر الرجوع لأعلى */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute -top-6 right-6 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-100 transition"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + وصف */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0a0a0f] to-[#646bdf] bg-clip-text text-transparent mb-4">
              TEAM Rive
            </h3>
            <p className="text-gray-400">
              Building digital excellence together through innovative solutions and creative design.
            </p>
          </div>

          {/* روابط الشركة */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Projects</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://dainobot.xyz" target="_blank" rel="noopener noreferrer">DainoBot</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex items-center justify-between text-sm text-gray-400">
          <p>&copy; 2025 Team Rive. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="https://twitter.com/yourproject" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="text-white" viewBox="0 0 24 24">
                <path d="M22.97 2H18.1l-5.34 7.1L7.68 2H1l8.79 11.95L1.8 22h4.87l5.65-7.14L16.68 22H23l-9-11.94L22.97 2z"/>
              </svg>
            </a>

            <a href="https://discord.gg/ADAG3MThFm" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <a
  href="https://discord.gg/ADAG3MThFm"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:opacity-80"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    className="text-white"
    viewBox="0 0 16 16"
  >
    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
  </svg>
</a>

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
