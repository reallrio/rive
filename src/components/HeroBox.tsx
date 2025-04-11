import React from 'react';
import GradientButton from './GradientButton';

const HeroBox = () => {
  return (
    <div
      className="relative w-full max-w-7xl mx-auto h-[240px] my-12 rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/back.png')` }}
    >
      {/* تغطية شفافة */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* محتوى متمركز بالكامل */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
          BUILD AND CREATE WITH RIVE
        </h2>
        <GradientButton
          onClick={() => {
            window.location.href = "https://discord.gg/ADAG3MThFm";
          }}
        >
          join Rive
          <img src="/icon.png" alt="icon" className="w-5 h-5" />
        </GradientButton>
      </div>
    </div>
  );
};

export default HeroBox;
