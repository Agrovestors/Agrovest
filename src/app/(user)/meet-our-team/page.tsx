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
      "https://cdn.sanity.io/images/mlakfsrt/production/0f339f727afb89556694b6fdaf95eaecf8c995da-1561x1760.png",
    quote: "Passionate about transforming agriculture!",
    speech:
      "Stephen leads Agrovest with a vision to revolutionize farming through technology and sustainable practices.",
  },
  {
    name: "Joseph Ogakwu Enare",
    role: "Head of IT Team",
    imgSrc:
      "https://cdn.sanity.io/images/mlakfsrt/production/fb5600b633c9385b136b11774edfe18c60a1ea14-4096x2731.png",
    quote: "Innovating for a sustainable future.",
    speech:
      "Joseph drives the development of cutting-edge IT solutions to empower farmers.",
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc:
      "https://cdn.sanity.io/images/mlakfsrt/production/809f0220127b5e77d599606f34ce1e75796fd9e9-768x768.png", // Placeholder; replace with correct URL
    quote: "Enthusiastic about coding for change!",
    speech:
      "Godwin builds robust applications to support Agrovest’s mission of agricultural innovation.",
  },
  {
    name: "Augustine C. Ibechukwu",
    role: "Head of the Media Team",
    imgSrc:
      "https://cdn.sanity.io/images/mlakfsrt/production/809f0220127b5e77d599606f34ce1e75796fd9e9-768x768.png",
    quote: "Enthusiastic about transforming agriculture!",
    speech:
      "Augustine crafts compelling stories to promote Agrovest’s impact in the agricultural sector.",
  },
  {
    name: "Dr Akaebubechukwu James-Unueze",
    role: "Project Manager",
    imgSrc:
      "https://cdn.sanity.io/images/mlakfsrt/production/94297a0585bc5ad3220707d35e89347176f6398e-2807x3258.png",
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
          url: "https://cdn.sanity.io/images/mlakfsrt/production/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
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
    <div className="meet-our-team-page bg-gray-50 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 text-center">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center">
            Our dedicated team drives innovation in sustainable agriculture.
          </p>
          <TeamGrid teamMembers={teamMembers} />
        </section>
      </Container>
    </div>
  );
}
