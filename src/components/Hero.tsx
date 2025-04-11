import React from 'react';
import GradientButton from './GradientButton';

interface HeroProps {
  onSeeProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSeeProjects }) => {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* الخلفية مع زوايا ناعمة وتدرج محسّن */}
      <div className="absolute inset-0 rounded-b-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#131324] to-[#646bdf] z-0" />
        
        {/* المحتوى */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-[2.5rem] md:text-[2.8rem] font-medium mb-5 leading-snug text-center">
            <span className="text-[#4a4a4a]">Designing</span>{' '}
            <span className="bg-gradient-to-r from-white via-[#d4d4d4] to-white bg-clip-text text-transparent">
              The Feature,
            </span>{' '}
            <span className="bg-gradient-to-r from-white via-[#d4d4d4] to-white bg-clip-text text-transparent">
              Building Digital
            </span>{' '}
            <span className="text-[#4a4a4a]">Success</span>
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto mb-10 text-[13px] md:text-sm text-center leading-relaxed">
  Providing the community from different sectors with digital needs, over more than{' '}
  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-100 bg-clip-text text-transparent font-semibold drop-shadow-[0_1px_4px_rgba(100,100,255,0.4)]">
    2+ large networks
  </span>{' '}
  and different projects.
</p>


          <GradientButton onClick={onSeeProjects}>
            Discover Our Work
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
