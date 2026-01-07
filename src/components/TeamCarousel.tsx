"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  quote: string;
  speech: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Stephen T. Onyewuenyi",
    role: "Director",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0f339f727afb89556694b6fdaf95eaecf8c995da-1561x1760.png",
    quote: "Passionate about transforming agriculture!",
    speech:
      "The future of Agrovestors Farm-Tech is rooted in transformative innovation, collaborative partnerships, and tech-driven agribusiness. We envision a self-sustaining agricultural ecosystem that bridges the gap between research, practical farming, and intelligent technology, unlocking unprecedented value for farmers, students, investors, and the entire food value chain. With our three-core pillars, which are Research & Production, Smart Agro-Management Systems, and Media. We are not just solving problems, we are redefining African agriculture.",
  },
  {
    name: "Joseph Enare Ogakwu",
    role: "Head of IT Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/30c299ef7967efd48300d041d24f83411a5eef1c-2048x2731.png",
    quote: "Innovating for a sustainable future.",
    speech:
      "I'm optimistic about the future of Agriculture in Nigeria and Africa beyond. At Agrovestors, the impossible becomes possible.",
  },
  {
    name: " John",
    role: "Fullstack Developer",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/ea6323c3a8b526810c3bbd925ea260af9a9886f2-1727x1996.png",
    quote: "Very enthusiastic about coding for change!",
    speech:
      "I’m driven by the power of technology to revolutionize agriculture. My work focuses on crafting seamless, scalable applications that empower farmers, investors, and communities with tools for sustainable growth. By bridging innovation with practical solutions, I’m committed to building a future where African agriculture thrives through smart, tech-driven systems, ensuring prosperity for generations to come.",
  },
  {
    name: "Augustine C. Ibechukwu",
    role: "Head of the Media Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/809f0220127b5e77d599606f34ce1e75796fd9e9-768x768.png",
    quote: "Enthusiastic about transforming agriculture!",
    speech:
      "The visibility and engagement surrounding innovations in sustainable agriculture is communicated through strategic storytelling and stakeholder-focused content. That is our goal: Building trust, inspiring collaboration, and positioning Agrovestors as a leader in Africa’s agricultural transformation.",
  },
  {
    name: "Dr. Ngozika Okechukwu-Ezike",
    role: "Lead Researcher",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8264a7b28ffe42ab484298c990989008895eb567-2158x2735.png",
    quote: "Creating a greener future with smart research!",
    speech:
      "My research lights the way to a sustainable future for African farming. By exploring new ideas and practical solutions, I’m helping farmers grow stronger crops and healthier communities. At Agrovestors, we’re building a world where every harvest feeds hope and prosperity!",
  },
];

const preloadImages = teamMembers.map((member: TeamMember) => (
  <link
    key={member.imgSrc}
    rel="preload"
    href={member.imgSrc}
    as="image"
  />
));

export default function TeamCarousel() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const currentMember = teamMembers[currentMemberIndex];

  return (
    <>
      {preloadImages}
      <style jsx>{`
        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-fade {
          animation: slideInFade 0.8s ease-in-out;
        }
        .control-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .control-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
        .control-button span {
          font-size: 1.5rem;
        }
        .tooltip {
          position: absolute;
          bottom: 100%;
          margin-bottom: 8px;
          background: #1a202c;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          z-index: 10;
        }
        .control-button:hover .tooltip {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      <div className="team-section py-12 px-4 sm:px-6 lg:px-20 xl:px-40 bg-gradient-to-b from-gray-900 to-green-900">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10 text-white fade-in-left">
          What Our Team Has To Say
        </h2>
        <div className="flex justify-center">
          <div
            key={currentMember.name}
            className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-[500px] sm:h-[450px] lg:h-[400px] bg-gray-800 p-3 sm:p-4 lg:p-6 shadow-lg rounded-lg flex flex-col sm:flex-row items-start mx-2 sm:mx-3 lg:mx-4 animate-slide-in-fade overflow-hidden"
          >
            <div className="w-full sm:w-2/5 h-48 sm:h-64 lg:h-80 mb-4 sm:mb-0 sm:mr-4 relative rounded-lg overflow-hidden">
              <Image
                src={currentMember.imgSrc}
                alt={currentMember.name}
                width={360}
                height={360}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 360px"
                className="w-full h-full object-contain max-w-full transition-transform duration-300 pulse-hover"
                priority
                quality={75}
              />
            </div>
            <div className="w-full sm:w-3/5 flex-1 pt-2 sm:pt-0">
              {/* <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white bounce-in">
                {currentMember.name}
              </h3>
              <p className="text-green-400 text-sm sm:text-base mt-1">
                {currentMember.role}
              </p>
              <p className="text-green-400 text-sm sm:text-base italic mt-2 break-words hyphens-auto max-h-12 overflow-y-hidden">
                {`"${currentMember.quote}"`}
              </p>
              <p className="text-gray-200 text-xs sm:text-sm lg:text-base mt-2 break-words hyphens-auto italic max-h-[300px] overflow-y-auto">
                {currentMember.speech}
              </p> */}
              {/* //database issue */}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() =>
              setCurrentMemberIndex(
                (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
              )
            }
            className="control-button mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base glow-hover"
            aria-label="Previous team member"
          >
            <span>⏮</span>
            <div className="tooltip">Previous</div>
          </button>
          <button
            onClick={togglePause}
            className="control-button mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base glow-hover"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            <span>{isPaused ? "▶" : "⏸"}</span>
            <div className="tooltip">{isPaused ? "Play" : "Pause"}</div>
          </button>
          <button
            onClick={() =>
              setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length)
            }
            className="control-button mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base glow-hover"
            aria-label="Next team member"
          >
            <span>⏭</span>
            <div className="tooltip">Next</div>
          </button>
        </div>
      </div>
    </>
  );
}