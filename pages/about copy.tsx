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

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40 py-20 bg-[#022c22] text-white rounded-lg">
        <div className="w-full lg:max-w-[465px] text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg lg:pr-16">
            Welcome to Agrovestors! We are dedicated to revolutionizing
            agriculture in Africa through innovative solutions and a commitment
            to sustainable farming practices.
          </p>
        </div>
      </div>

      {/* Who Are We? Section */}
      <section className="flex flex-col lg:flex-row items-center">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="https://cdn.shortpixel.ai/spai/q_lossy+w_642+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/circle-bg-05.png"
            alt="About Us"
            className="w-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-2/3 bg-[#0b3d2e] text-white p-10 relative">
          {/* Top Wave */}
          <div className="absolute top-0 left-0 w-full">
            <img
              src="https://cdn.shortpixel.ai/spai/q_lossy+w_857+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/circle-wave-bg-inverted.png"
              alt="Wave"
              className="w-full"
            />
          </div>

          <div className="relative z-10">
            <p className="text-lg uppercase text-green-300">Who are we?</p>
            <h2 className="text-3xl font-bold mb-3">
              Sustainably Growing Africa’s Food Systems
            </h2>
            <p className="text-lg leading-relaxed">
              Agrovestors is a proudly African-led institution focused on scaling
              agricultural innovations that help smallholder farmers towards increased
              incomes, better livelihoods, and improved food security.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We understand that African farmers need uniquely African solutions to
              the environmental and agricultural challenges they face, enabling them
              to sustainably boost production and gain access to rapidly growing
              agricultural markets.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Since 2006, we have worked with our partners, governments, non-governmental
              organizations, private sector businesses, and more; to deliver a set of
              proven solutions to smallholder farmers and indigenous African agricultural
              enterprises. We put smallholder farmers first on the agenda, recognizing
              that no country has moved from low income to middle income without
              agricultural transformation.
            </p>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <img
              src="https://cdn.shortpixel.ai/spai/q_lossy+w_857+to_webp+ret_img/agra.org/wp-content/themes/agra/assets/img/circle-wave-bg.png"
              alt="Wave"
              className="w-full"
            />
          </div>
        </div>
      </section>

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
