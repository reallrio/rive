import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        px-4 py-2 rounded-md 
        text-white text-md font-medium 
        border border-white/20 
        bg-white/5 
        backdrop-blur-sm 
        transition duration-300 ease-in-out
        hover:bg-white/10 
        hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] 
        active:scale-95
      "
    >
      {children}
    </button>
  );
};

export default GradientButton;
