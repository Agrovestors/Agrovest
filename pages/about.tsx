import React from "react";
import Navbar from "../src/components/nav"; // Ensure the path is correct
import Footer from "../src/components/foot"; // Adjust the path based on your project structure
import "../src/app/style/about.css"; // Ensure this CSS file is correctly linked
import "../src/components/nav.css"; // Ensure this CSS file is correctly linked

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
    name: "Tom Hanks",
    role: "Designer",
    imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    link: "https://www.linkedin.com/in/tom-hanks/",
  },
  {
    name: "Emily Stone",
    role: "Marketing Lead",
    imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    link: "https://www.linkedin.com/in/emily-stone/",
  },
  {
    name: "Ryan Howard",
    role: "Sales Director",
    imgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
    link: "https://www.linkedin.com/in/ryan-howard/",
  },
  {
    name: "Mia Wong",
    role: "Customer Success",
    imgSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    link: "https://www.linkedin.com/in/mia-wong/",
  },
  {
    name: "James Bond",
    role: "Operations",
    imgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
    link: "https://www.linkedin.com/in/james-bond/",
  },
  {
    name: "Ana Rosa",
    role: "HR Manager",
    imgSrc: "https://randomuser.me/api/portraits/women/10.jpg",
    link: "https://www.linkedin.com/in/ana-rosa/",
  },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Render Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="about-content">
        <h1>About Us</h1>
        <p className="about-description">
          Welcome to Agrovestors! We are dedicated to revolutionizing agriculture in Africa through innovative solutions and a commitment to sustainable farming practices. Our mission is to empower local farmers with the tools and resources they need to thrive in an ever-changing environment. 
          <br /><br />
          We provide cutting-edge technology that helps improve crop yields, optimize resource management, and enhance market access. By leveraging data-driven insights, we aim to build a resilient agricultural ecosystem that not only meets the demands of today but also safeguards the future of farming for generations to come. 
          <br /><br />
          Join us in making a positive impact on food security and the agricultural economy. Together, we can transform the agricultural landscape and foster sustainable practices that benefit both farmers and consumers alike.
        </p>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <img src={member.imgSrc} alt={member.name} className="team-img" />
                </a>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render Footer */}
    
    </div>
  );
};

export default About;
