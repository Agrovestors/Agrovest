"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Stephen T. Onyewuenyi",
    role: "CEO",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Passionate about transforming agriculture!",
    speech: "Stephen leads Agrovest with a vision to revolutionize farming through technology and sustainable practices."
  },
  {
    name: "Joseph Ogakwu Enare",
    role: "Head of IT Team",
    imgSrc: "/josef.jpg",
    quote: "Innovating for a sustainable future.",
    speech: "Joseph drives the development of cutting-edge IT solutions to empower farmers."
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc: "/dev.jpg",
    quote: "Enthusiastic about coding for change!",
    speech: "Godwin builds robust applications to support Agrovest’s mission of agricultural innovation."
  },
  {
    name: "Augustine C. Ibechukwu",
    role: "Head of the Media Team",
    imgSrc: "/augustinemedia.jpg",
    quote: "Enthusiastic about transforming agriculture!",
    speech: "Augustine crafts compelling stories to promote Agrovest’s impact in the agricultural sector."
  },
  {
    name: "Mark Lee",
    role: "Lead Developer",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "Building tools to empower farmers.",
    speech: "Mark designs scalable systems to enhance Agrovest’s technological capabilities."
  },
  {
    name: "Sara Khan",
    role: "Product Manager",
    imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    quote: "Driven to create impactful solutions.",
    speech: "Sara ensures Agrovest’s products meet the needs of farmers and stakeholders."
  },
];

export default function TeamCarousel() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) =>
        (prevIndex + 1) % teamMembers.length
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const currentMember = teamMembers[currentMemberIndex];

  return (
    <>
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
          animation: slideInFade 0.5s ease-in-out;
        }
      `}</style>
      <div className="team-section py-20 px-4 sm:px-10 lg:px-40">
        <h2 className="text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="flex justify-center">
          <div
            key={currentMember.name} // Use name as key to trigger animation
            className="w-full min-w-[360px] max-w-2xl bg-white p-6 sm:p-8 shadow-lg rounded-lg flex flex-row items-center mx-4 sm:mx-6 animate-slide-in-fade"
          >
            <Image
              src={currentMember.imgSrc}
              alt={currentMember.name}
              width={240} // Larger image
              height={240} // Square shape
              className="object-cover object-center mr-8 w-1/3 max-w-[240px]" // Significant spacing
              style={{ transform: 'scale(1.3)' }} // Zoomed in
            />
            <div className="flex-1 pl-4">
              <h3 className="text-2xl font-bold">{currentMember.name}</h3>
              <p className="text-gray-600 text-lg mt-1">{currentMember.role}</p>
              <p className="text-blue-600 text-base italic mt-2 break-words hyphens-auto max-h-16 overflow-y-visible">
              &quot;{currentMember.quote}&quot;
              </p>
              <p className="text-gray-700 text-base mt-2 break-words hyphens-auto">
                {currentMember.speech}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentMemberIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
            className="mx-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length)}
            className="mx-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray- LIS300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}