import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../src/app/style/globals.css";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://www.linkedin.com/in/john-doe/",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://www.linkedin.com/in/jane-smith/",
  },
  {
    name: "Mark Lee",
    role: "Lead Developer",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    link: "https://www.linkedin.com/in/mark-lee/",
  },
  {
    name: "Sara Khan",
    role: "Product Manager",
    imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    link: "https://www.linkedin.com/in/sara-khan/",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* About Us Section - Now at the Top */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40 py-20 bg-[#022c22] text-white rounded-lg">
        <div className="w-full lg:max-w-[500px] text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl lg:pr-16 leading-relaxed">
            Agrovestors is dedicated to revolutionizing agriculture across Africa.
            Through innovative technology, sustainable practices, and strategic partnerships,
            we empower farmers and agribusinesses to build a more productive future.
          </p>
        </div>
      </div>

      {/* Hero Section with Overlay */}
      <div className="relative w-full max-h-[300px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="https://cdn.shortpixel.ai/spai/q_lossy+w_642+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/circle-bg-05.png"
          alt="About Us"
          width={1280}
          height={300} 
          className="w-full h-full max-h-[300px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute flex flex-col items-center text-center text-white px-6 lg:px-10 w-[90%]">
          <h2 className="text-5xl font-bold mb-6">Empowering African Agriculture</h2>
          <p className="text-xl max-w-3xl">
            We provide farmers with tools, insights, and support to drive agricultural success.
            Our mission is to bridge the gap between traditional farming and modern agribusiness solutions.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section py-20 px-10 lg:px-40">
        <h2 className="text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <a href={member.link} target="_blank" rel="noopener noreferrer">
              <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={112} // Matches w-28 (28 * 4)
                  height={112} // Matches h-28 (28 * 4)
                  className="object-cover rounded-full mb-4 border-4 border-green-500 mx-auto"
                />
              </a>
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="text-blue-600 mx-auto mt-3 transition-transform duration-300 hover:scale-110" size={28} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
