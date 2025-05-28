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
    role: "CEO",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0f339f727afb89556694b6fdaf95eaecf8c995da-1561x1760.png",
    quote: "Passionate about transforming agriculture!",
    speech:
      "The future of Agrovestors Farm-Tech is rooted in transformative innovation, collaborative partnerships, and tech-driven agribusiness. We envision a self-sustaining agricultural ecosystem that bridges the gap between research, practical farming, and intelligent technology—unlocking unprecedented value for farmers, students, investors, and the entire food value chain. With our three-core pillars—Research & Production, Smart Agro-Management Systems, and Media—we are not just solving problems, we are redefining African agriculture.",
  },
  {
    name: "Joseph Enare Ogakwu",
    role: "Head of IT Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/fb5600b633c9385b136b11774edfe18c60a1ea14-4096x2731.png",
    quote: "Innovating for a sustainable future.",
    speech:
      "I'm optimistic about the future of Agriculture in Nigeria and Africa beyond. At Agrovestors, the impossible becomes possible.",
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/026057a75a851bbbf56f7ff92d19d801ade81ea6-1913x2429.png",
    quote: "Enthusiastic about coding for change!",
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
    name: "Dr Akaebubechukwu James-Unueze",
    role: "Project Manager",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/94297a0585bc5ad3220707d35e89347176f6398e-2807x3258.png",
    quote: "Enthusiastic about transforming agriculture!",
    speech:
      "Dr Akaebubechukwu ensures projects align with Agrovest’s mission for sustainable agriculture.",
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
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
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
      <div className="team-section py-12 px-4 sm:px-6 lg:px-20 xl:px-40">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10 text-white">
          What Our Team Has To Say
        </h2>
        <div className="flex justify-center">
          <div
            key={currentMember.name}
            className="w-full min-w-[300px] max-w-[90%] sm:max-w-3xl lg:max-w-4xl bg-white p-4 sm:p-8 lg:p-12 shadow-lg rounded-lg flex flex-col sm:flex-row items-center mx-2 sm:mx-4 animate-slide-in-fade"
          >
            <Image
              src={currentMember.imgSrc}
              alt={currentMember.name}
              width={360}
              height={360}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 360px"
              className="object-cover object-center mb-4 sm:mb-0 sm:mr-8 w-full sm:w-1/3 max-w-[180px] sm:max-w-[280px] lg:max-w-[360px]"
              style={{ transform: "scale(1.3)" }}
              priority
              quality={80}
            />
            <div className="flex-1 pt-4 sm:pt-0 sm:pl-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                {currentMember.name}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">
                {currentMember.role}
              </p>
              <p className="text-blue-600 text-sm sm:text-base italic mt-2 break-words hyphens-auto max-h-16 overflow-y-visible">
                {`"${currentMember.quote}"`}
              </p>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-2 break-words hyphens-auto">
                {currentMember.speech}
              </p>
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
            className="control-button mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base"
            aria-label="Previous team member"
          >
            <span>⏮</span>
            <div className="tooltip">Previous</div>
          </button>
          <button
            onClick={togglePause}
            className="control-button mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            <span>{isPaused ? "▶" : "⏸"}</span>
            <div className="tooltip">{isPaused ? "Play" : "Pause"}</div>
          </button>
          <button
            onClick={() =>
              setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length)
            }
            className="control-button mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base"
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