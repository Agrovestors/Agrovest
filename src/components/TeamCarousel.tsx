"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Stephen T. Onyewuenyi",
    role: "CEO",
    imgSrc: "/ceo.jpg",
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
    name: "Dr Akaebubechukwu James-Unueze",
    role: "Project Manager",
    imgSrc: "/aka.jpg",
    quote: "Enthusiastic about transforming agriculture!",
    speech: "Augustine crafts compelling stories to promote Agrovest’s impact in the agricultural sector."
  },
];

// Preload all images
const preloadImages = teamMembers.map((member) => (
  <link
    key={member.imgSrc}
    rel="preload"
    href={member.imgSrc}
    as="image"
  />
));

export default function TeamCarousel() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) =>
        (prevIndex + 1) % teamMembers.length
      );
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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
      `}</style>
      <div className="team-section py-12 px-4 sm:px-6 lg:px-20 xl:px-40">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10">What Our Team Has To Say</h2>
        <div className="flex justify-center">
          <div
            key={currentMember.name} // Use name as key to trigger animation
            className="w-full min-w-[300px] max-w-[90%] sm:max-w-3xl lg:max-w-4xl bg-white p-4 sm:p-8 lg:p-12 shadow-lg rounded-lg flex flex-col sm:flex-row items-center mx-2 sm:mx-4 animate-slide-in-fade"
          >
            <Image
              src={currentMember.imgSrc}
              alt={currentMember.name}
              width={360} // Base width for larger screens
              height={360} // Square shape
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 360px"
              className="object-cover object-center mb-4 sm:mb-0 sm:mr-8 w-full sm:w-1/3 max-w-[180px] sm:max-w-[280px] lg:max-w-[360px]"
              style={{ transform: 'scale(1.3)' }} // Zoomed in
              priority // Preload the current image
            />
            <div className="flex-1 pt-4 sm:pt-0 sm:pl-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{currentMember.name}</h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">{currentMember.role}</p>
              <p className="text-blue-600 text-sm sm:text-base italic mt-2 break-words hyphens-auto max-h-16 overflow-y-visible">
              &quot;{currentMember.quote}&quot;
              </p>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-2 break-words hyphens-auto">
                {currentMember.speech}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentMemberIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
            className="mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length)}
            className="mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}