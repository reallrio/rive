import React, { useEffect, useState } from 'react';
import { Github, Instagram, Link } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  githubUsername: string;
  instagramUsername?: string; // ✅ أضف هذا
  discordId: string;
  avatar?: string;
  decoration?: {
    asset: string;
  };
};


const rawTeam: TeamMember[] = [
  {
    name: 'Adam',
    role: 'MERN Stack',
    githubUsername: '1',
    instagramUsername: '1',
    discordId: '915689279605342218'
  },
  {
    name: 'Rio',
    role: 'Full-Stack Developer',
    githubUsername: 'reallrio',
    instagramUsername: 'reallrio_',
    discordId: '1088896637872640070'
  },
  {
    name: '‘Canàan,',
    role: 'Full-Stack Developer',
    githubUsername: 'iiCanaanDev',
    instagramUsername: 'iicanaan',
    discordId: '1116090856693301258'
  },
  {
    name: 'Léon',
    role: 'Back-End Developer',
    githubUsername: '1',
    instagramUsername: '_dqis',
    discordId: '1155048381677305876'
  }
];

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const updated = await Promise.all(
        rawTeam.map(async (member) => {
          try {
            const res = await fetch(`/api/user/${member.discordId}`)


            const data = await res.json();
            return {
              ...member,
              avatar: data.avatar,
              decoration: data.avatar_decoration_data || null
            };
          } catch {
            return {
              ...member,
              avatar: 'https://via.placeholder.com/150',
              decoration: null
            };
          }
        })
      );
      setTeam(updated);
    };

    fetchData();
  }, []);

  return (
    <section id="team" className="py-20 px-4 text-white font-poppins ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-500 font-medium tracking-wide uppercase">RIVE TEAM</span>
          <h2 className="text-4xl font-bold mt-2">Our Team</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Meet our dedicated team, combining diverse skills and passion to deliver innovative solutions and exceptional results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full border border-white/10 shadow-lg"
                />
                {member.decoration?.asset && (
                  <img
                    src={`https://cdn.discordapp.com/avatar-decoration-presets/${member.decoration.asset}.png`}
                    alt="Decoration"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.05]"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-indigo-500 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-400">
                {member.githubUsername && (
                  <a href={`https://github.com/${member.githubUsername}`} target="_blank" rel="noopener noreferrer">
                    <Github size={20} className="hover:text-white cursor-pointer" />
                  </a>
                )}
                {member.instagramUsername && (
  <a
    href={`https://instagram.com/${member.instagramUsername}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={20} className="hover:text-white cursor-pointer" />
  </a>
)}

                <span className="hover:text-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="currentColor">
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
