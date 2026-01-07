import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  quote: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Stephen T. Onyewuenyi",
    role: "Director",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0f339f727afb89556694b6fdaf95eaecf8c995da-1561x1760.png",
    quote: "Passionate about transforming agriculture!",
    linkedin: "https://www.linkedin.com/in/stephen-onyewuenyi-4ab524232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Joseph Enare Ogakwu",
    role: "Head of IT Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/30c299ef7967efd48300d041d24f83411a5eef1c-2048x2731.png",
    quote: "Innovating for a sustainable future.",
    linkedin: "https://www.linkedin.com/in/joseph-ogakwu",
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/ea6323c3a8b526810c3bbd925ea260af9a9886f2-1727x1996.png",
    quote: "Enthusiastic about coding for change!",
    linkedin: "https://www.linkedin.com/in/godwin-john-15a775287/",
  },
  {
    name: "Augustine C. Ibechukwu",
    role: "Head of the Media Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/809f0220127b5e77d599606f34ce1e75796fd9e9-768x768.png",
    quote: "Enthusiastic about transforming agriculture!",
    linkedin: "https://www.linkedin.com/in/augustine-ibechukwu-41b0ba323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Ngozika Okechukwu-Ezike",
    role: "Lead Researcher",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8264a7b28ffe42ab484298c990989008895eb567-2158x2735.png",
    quote: "Creating a greener future with smart research!",
    linkedin: "https://www.linkedin.com/in/dr-ngozika-okechukwu-ezike-a7a997a0",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Meet Our Team | Agrovestors Farm Tech",
    description: "Meet the dedicated team behind Agrovestors Farm Tech.",
    openGraph: {
      title: "Meet Our Team - Agrovestors Farm Tech",
      description: "Meet the dedicated team behind Agrovestors Farm Tech.",
      url: "https://agrovestors.com/meet-our-team",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
          width: 1080,
          height: 763,
          alt: "Agrovestors Logo",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/meet-our-team" },
  };
}

export default function MeetOurTeam() {
  return (
    <div className="meet-our-team-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-12 text-center">
            Our dedicated team drives innovation in sustainable agriculture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="image-container">
                  {/* <Image
                    src={member.imgSrc}
                    alt={member.name}
                    width={192}
                    height={192}
                    quality={90}
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                    className="object-cover w-full h-full rounded-full"
                    priority
                  /> */}
              {/* //database issue */}

                </div>
                {/* <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-base text-gray-600 mb-2 text-center">{member.role}</p>
                <p className="text-sm text-gray-700 italic mb-4 text-center">{member.quote}</p> */}
                <div className="flex justify-center">
                  {/* <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition-colors duration-300"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                  >
                    <FaLinkedin size={24} />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}