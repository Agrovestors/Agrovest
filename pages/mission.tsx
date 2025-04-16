import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { BsLinkedin } from "react-icons/bs";
import "../src/app/style/globals.css";

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
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc: "/images/dev.jpg",
    // Fallback: imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    link: "https://www.linkedin.com/in/godwin-adakonye-john/",
  },
];

const Mission: React.FC = () => {
  return (
    <div className="mission-page min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-40 py-20 bg-[#022c22] text-white rounded-lg">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Mission</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed">
              At Agrovestors, we are committed to revolutionizing agriculture in Africa through innovative solutions that empower farmers, enhance productivity, and ensure food security.
            </p>
          </div>
        </div>

        {/* Hero Section with Overlay */}
        <div className="relative w-full h-[400px] flex items-center justify-end overflow-hidden">
          <img
            src="/bg/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg"
            alt="Sustainable farming in Africa"
            className="w-full h-[400px] object-cover"
            loading="eager"
            onError={(e) => {
              console.error("Failed to load hero image, using fallback");
              e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute flex flex-col items-end text-right text-white pr-2 sm:pr-4 ml-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Sustainable Farming for Africa</h2>
            <p className="text-lg sm:text-xl font-medium mb-6">
              We leverage technology and community engagement to create sustainable farming practices, ensuring a resilient and prosperous future for African agriculture.
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">Our Vision</h3>
            <p className="text-lg sm:text-xl font-medium">
              We lead the charge in sustainable agribusiness solutions, global food security, and cost control. Our vision is ambitious and borderless.
            </p>
          </div>
        </div>

        {/* Mission Content Section */}
        <div className="mission-content py-20 px-4 sm:px-10 lg:px-40 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Why We Do It</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              We believe in the power of collaboration, education, and technology to transform the agricultural landscape. Our mission is to increase yields and profitability for farmers while ensuring practices are environmentally sustainable and socially responsible.
            </p>
            <p>
              Agrovestors is dedicated to bridging the gap between traditional farming and modern solutions, empowering communities and fostering food security across the continent.
            </p>
            <p className="font-medium text-gray-800">
              Join us in our journey to make a lasting impact on the agricultural economy, paving the way for a sustainable future for generations to come.
            </p>
          </div>
        </div>

        {/* Vision Content Section */}
        <div className="vision-content py-20 px-4 sm:px-10 lg:px-40 bg-white">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Our Vision in Action</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-gray-600 text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Legacy</h3>
              <p>
                We envision a legacy that stands the test of time—a legacy rooted in innovation, technology, collaboration, and sustainable growth. A profound legacy to be remembered as the pioneers who transformed agriculture in Africa.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Championing Sustainable Agribusiness Solutions</h3>
              <p>
                Our commitment to sustainability goes beyond mere words; it is embedded in our actions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Creating a Thriving Technological Ecosystem</h3>
              <p>
                A collaborative network of investors, visionaries, and communities to foster a vibrant, technology-driven agricultural ecosystem will empower farmers with the knowledge and tools needed to maximize productivity and sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Global Leadership and Boundless Innovation</h3>
              <p>
                By embracing innovation and technology, we break down barriers and create a streamlined vehicle for agricultural progress. Our commitment to quality and efficiency ensures that all stakeholders benefit from our advancements, fostering a global agricultural renaissance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Building a Future of Prosperity</h3>
              <p>
                A future where technology and tradition coexist harmoniously, ensuring that agricultural practices are both productive and environmentally responsible.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section py-20 px-4 sm:px-10 lg:px-40 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105"
              >
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={member.imgSrc}
                    alt={`${member.name}, ${member.role}`}
                    className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-green-500 mx-auto"
                  />
                </a>
                <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{member.role}</p>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin
                    className="text-blue-600 mx-auto mt-3 transition-transform duration-300 hover:scale-110"
                    size={28}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Videos Section */}
        <div className="youtube-videos py-20 px-4 sm:px-10 lg:px-40 bg-white">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Watch Our Videos</h2>
          <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
            <div className="w-full">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Agrovestors Mission Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg transition-all duration-500 hover:scale-102"
                onError={() => console.error("Failed to load YouTube video 1")}
              ></iframe>
            </div>
            <div className="w-full">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/qC0vDKVPCrw"
                title="Agrovestors Mission Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg transition-all duration-500 hover:scale-102"
                onError={() => console.error("Failed to load YouTube video 2")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;