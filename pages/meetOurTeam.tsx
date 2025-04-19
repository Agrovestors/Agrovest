import React from "react";
import Navbar from "../src/components/Navbar"; // Ensure the path is correct
import Footer from "../src/components/Footer"; // Adjust the path based on your project structure
import "../src/app/style/globals.css"; // Ensure this CSS file is correctly linked
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image"; // Ensure you have next/image installed

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

const MeetOurTeam = () => {
    return (
        <div className="meet-our-team-page">
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40 py-20 bg-[#022c22] text-white rounded-lg">
                <div className="w-full lg:max-w-[465px] text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4">Meet Our Senior Team</h1>
                    <p className="text-lg lg:pr-16">
                        Our senior management team, including the directors based in various locations, handle the day-to-day operations of our organization.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="team-section py-20 px-10 lg:px-40">
                <h2 className="text-3xl font-semibold text-center mb-10">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                            <a href={member.link} target="_blank" rel="noopener noreferrer" className="group">
                                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-500">
                                    <Image
                                        src={member.imgSrc}
                                        alt={member.name}
                                        width={128} // Matches w-32 (32 * 4)
                                        height={128} // Matches h-32 (32 * 4)
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                                    />
                                </div>
                            </a>
                            <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                            <a href={member.link} target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="text-blue-600 mx-auto mt-3 transition-transform duration-300 hover:scale-110" size={24} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MeetOurTeam;