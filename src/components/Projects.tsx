import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Daino',
      description: `Daino is your go-to all-in-one Discord bot, featuring a powerful system, ticket management, giveaway system, music commands, user profiles, complete server customization, and more...`,
      image: 'https://cdn.discordapp.com/banners/1243227897808945283/4391d3728b85c97226c7f746728a8076.webp?size=1024',
      icon: 'https://cdn.discordapp.com/avatars/1243227897808945283/423bf9d72a0fe96df6f087077ab7fe8b.webp?size=1024',
      status: 'Latest',
      joinLink: 'https://discord.gg/dainobot',
      visitLink: 'https://dainobot.xyz',         
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 text-white font-poppins overflow-hidden">
      {/* خلفية سفلية متدرجة بزاوية مستديرة */}
      <div className="absolute inset-0 rounded-b-[60px] overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f1e] to-[#1c1c3d]" />
      </div>

      {/* العنوان الرئيسي */}
      <div className="relative z-10 mb-16 text-center">
        <span className="text-indigo-500 text-sm font-medium tracking-wide uppercase">WORKS</span>
        <h2 className="text-4xl font-extrabold mt-2">Rive Team Projects</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
          Explore the Rive team’s portfolio. Our experts have successfully delivered over five major projects, consistently ensuring the highest standards of quality and service.
        </p>
      </div>

      {/* البطاقة */}
      <div className="relative z-10 max-w-md mx-auto">
        <div className="bg-[#14142a] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          {/* صورة المشروع */}
          <div className="relative h-48">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 right-3 px-4 py-[6px] text-xs rounded-md font-semibold bg-[#7c4dff] text-white">
              {projects[0].status}
            </span>
          </div>

          {/* المحتوى */}
          <div className="p-8 text-center flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img
                src={projects[0].icon}
                alt="icon"
                className="w-14 h-14 rounded-xl mb-3"
              />
              <h3 className="text-xl font-bold mb-5">{projects[0].title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{projects[0].description}</p>
            </div>

            {/* الأزرار */}
            <div className="flex gap-4 mt-6">
              <a
                href={projects[0].joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-center rounded-md border border-white/10 text-white text-xs bg-white/5 hover:bg-white/10 backdrop-blur-md transition"
              >
                Join Server
              </a>
              <a
                href={projects[0].visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-center rounded-md border border-white/10 text-white text-xs bg-white/5 hover:bg-white/10 backdrop-blur-md transition flex items-center justify-center gap-1"
              >
                Visit Project
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
