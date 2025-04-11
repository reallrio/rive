import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import GradientButton from './GradientButton';

interface NavbarProps {
  onSeeProjects: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSeeProjects }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b  to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:block">
  <GradientButton
    onClick={() => {
      window.location.href = "https://discord.gg/ADAG3MThFm";
    }}
  >
    join Rive
  </GradientButton>

          </div>

          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#faq" className="text-white hover:text-purple-400 transition">FAQ</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition">Contact Us</a>
            <a href="#team" className="text-white hover:text-purple-400 transition">Our Team</a>
            <a href="#projects" className="text-white hover:text-purple-400 transition">Projects</a>
            <a href="#home" className="text-white hover:text-purple-400 transition">Home</a>
          </div>

          <div className="flex items-center space-x-3">
  <img src="/icon.png" alt="Rive Logo" className="w-15 h-14" />
  <span className="text-white text-[22px] font-extrabold tracking-[0.2em] uppercase">RIVE</span>
</div>




          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f] backdrop-blur-sm px-4 py-4 space-y-2">
          <a href="#home" className="block text-white hover:text-purple-400">Home</a>
          <a href="#projects" className="block text-white hover:text-purple-400">Projects</a>
          <a href="#team" className="block text-white hover:text-purple-400">Our Team</a>
          <a href="#contact" className="block text-white hover:text-purple-400">Contact Us</a>
          <a href="#faq" className="block text-white hover:text-purple-400">FAQ</a>
          <GradientButton onClick={onSeeProjects}>
            Discover Our Work
          </GradientButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
