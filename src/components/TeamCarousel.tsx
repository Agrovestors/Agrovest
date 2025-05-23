"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

// Define TypeScript interfaces
interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  quote: string;
  speech: string;
  linkedin?: string;
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

export default function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [animationState, setAnimationState] = useState<"entering" | "exiting" | "idle">("idle");

  useEffect(() => {
    if (!isAutoPlay || !teamMembers || teamMembers.length === 0) return;
    const interval = setInterval(() => {
      setAnimationState("exiting");
      setTimeout(() => {
        setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        setAnimationState("entering");
      }, 400);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlay, teamMembers]);

  useEffect(() => {
    if (animationState === "entering") {
      const timer = setTimeout(() => setAnimationState("idle"), 800);
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  if (!teamMembers || teamMembers.length === 0) {
    return <div className="text-center py-12 text-gray-600">No team members available.</div>;
  }

  const currentMember = teamMembers[currentMemberIndex];
  const preloadImages = [
    <link key={currentMember.imgSrc} rel="preload" href={currentMember.imgSrc} as="image" />,
    teamMembers[(currentMemberIndex + 1) % teamMembers.length] && (
      <link
        key={teamMembers[(currentMemberIndex + 1) % teamMembers.length].imgSrc}
        rel="preload"
        href={teamMembers[(currentMemberIndex + 1) % teamMembers.length].imgSrc}
        as="image"
      />
    ),
  ];

  return (
    <>
      {preloadImages}
      <style jsx>{`
        .team-card {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
        .team-card.entering {
          opacity: 0;
          transform: translateX(50px);
        }
        .team-card.exiting {
          opacity: 0;
          transform: translateX(-50px);
        }
      `}</style>
      <section className="team-section py-12 px-4 sm:px-6 lg:px-20 xl:px-40 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10 text-gray-800">
          What Our Team Has To Say
        </h2>
        <div className="flex justify-center">
          <div
            className={`w-full min-w-[300px] max-w-[90%] sm:max-w-3xl lg:max-w-4xl bg-white p-4 sm:p-8 lg:p-12 shadow-lg rounded-lg flex flex-col sm:flex-row items-center mx-2 sm:mx-4 team-card ${animationState}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <Image
              src={currentMember.imgSrc}
              alt={`${currentMember.name}, ${currentMember.role}`}
              width={360}
              height={360}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 360px"
              className="object-cover object-center mb-4 sm:mb-0 sm:mr-8 w-full sm:w-1/3 max-w-[180px] sm:max-w-[280px] lg:max-w-[360px] transform scale-110 transition-transform duration-300 rounded-full"
              priority
              quality={80}
              onError={(e) => {
                console.error(`Failed to load image for ${currentMember.name}`);
                e.currentTarget.src = "/fallback-image.jpg";
              }}
            />
            <div className="flex-1 pt-4 sm:pt-0 sm:pl-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{currentMember.name}</h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">{currentMember.role}</p>
              {currentMember.linkedin && (
                <Link href={currentMember.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile for ${currentMember.name}`}>
                  <BsLinkedin className="text-blue-600 mt-2 hover:scale-110 transition-transform duration-300" size={24} />
                </Link>
              )}
              <p className="text-blue-600 text-sm sm:text-base italic mt-2 break-words hyphens-auto max-h-16 overflow-y-visible">
                "{currentMember.quote}"
              </p>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-2 break-words hyphens-auto">
                {currentMember.speech}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4" role="navigation" aria-label="Team carousel controls">
          <button
            onClick={() => {
              setIsAutoPlay(false);
              setAnimationState("exiting");
              setTimeout(() => {
                setCurrentMemberIndex(
                  (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
                );
                setAnimationState("entering");
              }, 400);
            }}
            className="mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base"
            aria-label="Previous team member"
          >
            Previous
          </button>
          <button
            onClick={() => {
              setIsAutoPlay(false);
              setAnimationState("exiting");
              setTimeout(() => {
                setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length);
                setAnimationState("entering");
              }, 400);
            }}
            className="mx-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base"
            aria-label="Next team member"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}