import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../src/app/style/globals.css";
import Image from "next/image";

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
    speech: "Dr Akaebubechukwu ensures projects align with Agrovest’s mission to transform agriculture."
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

const MeetOurTeam = () => {
  return (
    <div className="meet-our-team-page bg-gray-50 min-h-screen">
      {preloadImages}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-40 py-20 bg-gradient-to-r from-[#022c22] to-[#065f46] text-white">
        <div className="w-full lg:max-w-[465px] text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Meet Our Senior Team</h1>
          <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed">
            Our senior management team, including directors across various locations, drives the day-to-day operations with passion and expertise.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section py-20 px-6 sm:px-10 lg:px-40">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden border-4 border-green-600 mb-4">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm italic mb-4">&quot;{member.quote}&quot;</p>
              <p className="text-gray-700 text-sm">{member.speech}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MeetOurTeam;