import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../src/app/style/globals.css";
import { BsLinkedin } from "react-icons/bs";

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

      {/* Hero Section with Text Overlay */}
      <div className="relative w-full">
        <img
          src="https://cdn.shortpixel.ai/spai/q_lossy+w_642+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/circle-bg-05.png"
          alt="About Us"
          className="w-full object-cover h-[500px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl">
            Welcome to Agrovestors! We are dedicated to revolutionizing
            agriculture in Africa through innovative solutions and a commitment
            to sustainable farming practices.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section py-20 px-10 lg:px-40">
        <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-500"
                />
              </a>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="text-blue-600 mx-auto mt-3" size={24} />
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