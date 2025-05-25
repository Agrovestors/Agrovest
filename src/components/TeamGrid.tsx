"use client";

import Image from "next/image";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  quote: string;
  speech: string;
}

interface TeamGridProps {
  teamMembers: TeamMember[];
}

export default function TeamGrid({ teamMembers }: TeamGridProps) {
  useEffect(() => {
    console.log("TeamGrid: Team Members:", teamMembers);
    teamMembers.forEach((member) => {
      const img = new window.Image();
      img.src = member.imgSrc;
      img.onerror = () => console.error(`Failed to load image for ${member.name}: ${member.imgSrc}`);
    });
  }, [teamMembers]);

  return (
    <div className="team-grid font-sans">
      {teamMembers.length === 0 ? (
        <p className="text-red-600 text-center">
          No team members available. Please check the data source.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.3}>
                <div className="team-card p-6">
                  <div className="image-container">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover border-4 border-green-400"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                      onError={(e) => {
                        console.error(`Image failed for ${member.name}: ${member.imgSrc}`);
                        e.currentTarget.src = "/images/placeholder.png";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                  <p className="text-gray-600 text-center">{member.role}</p>
                  <p className="text-blue-600 italic text-sm mt-2 text-center">{`"${member.quote}"`}</p>
                  <p className="text-gray-600 text-sm mt-2 text-center line-clamp-3">{member.speech}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}