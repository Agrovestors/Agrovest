import Container from "@/components/Container";
import { Metadata } from "next";
import TeamGrid from "@/components/TeamGrid";

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  quote: string;
  speech: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Stephen T. Onyewuenyi",
    role: "CEO",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0f339f727afb89556694b6fdaf95eaecf8c995da-1561x1760.png",
    quote: "Passionate about transforming agriculture!",
    speech:
      "The future of Agrovestors Farm-Tech is rooted in transformative innovation, collaborative partnerships, and tech-driven agribusiness. We envision a self-sustaining agricultural ecosystem that bridges the gap between research, practical farming, and intelligent technology—unlocking unprecedented value for farmers, students, investors, and the entire food value chain. With our three-core pillars—Research & Production, Smart Agro-Management Systems, and Media—we are not just solving problems, we are redefining African agriculture.",
  },
  {
    name: "Joseph Enare Ogakwu",
    role: "Head of IT Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/fb5600b633c9385b136b11774edfe18c60a1ea14-4096x2731.png",
    quote: "Innovating for a sustainable future.",
    speech:
      "I'm optimistic about the future of Agriculture in Nigeria and Africa beyond. At Agrovestors, the impossible becomes possible.",
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/026057a75a851bbbf56f7ff92d19d801ade81ea6-1913x2429.png",
    quote: "Enthusiastic about coding for change!",
    speech:
      "As a Fullstack Developer at Agrovestors, I’m driven by the power of technology to revolutionize agriculture. My work focuses on crafting seamless, scalable applications that empower farmers, investors, and communities with tools for sustainable growth. By bridging innovation with practical solutions, I’m committed to building a future where African agriculture thrives through smart, tech-driven systems, ensuring prosperity for generations to come.",
  },
  {
    name: "Augustine C. Ibechukwu",
    role: "Head of the Media Team",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/809f0220127b5e77d599606f34ce1e75796fd9e9-768x768.png",
    quote: "Enthusiastic about transforming agriculture!",
    speech:
      "The visibility and engagement surrounding innovations in sustainable agriculture is communicated through strategic storytelling and stakeholder-focused content. That is our goal: Building trust, inspiring collaboration, and positioning Agrovestors as a leader in Africa’s agricultural transformation.",
  },
  {
    name: "Dr Akaebubechukwu James-Unueze",
    role: "Project Manager",
    imgSrc:
      "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/94297a0585bc5ad3220707d35e89347176f6398e-2807x3258.png",
    quote: "Enthusiastic about transforming agriculture!",
    speech:
      "Dr Akaebubechukwu ensures projects align with Agrovest’s mission for sustainable agriculture.",
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
          <TeamGrid teamMembers={teamMembers} />
        </section>
      </Container>
    </div>
  );
}