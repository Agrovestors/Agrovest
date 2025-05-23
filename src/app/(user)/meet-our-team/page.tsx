import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BsLinkedin } from "react-icons/bs";
import TeamCarousel from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "Meet Our Team | Agrovestors Farm Tech",
  description: "Get to know the team driving Agrovestors Farm Tech’s mission.",
  keywords: ["Agrovestors team", "agritech team", "sustainable farming"],
  openGraph: {
    title: "Meet Our Team - Agrovestors Farm Tech",
    description: "Discover the experts leading sustainable agriculture in Africa.",
    url: "https://agrovestors.com/meet-our-team",
    images: [{ url: "/images/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
  },
  alternates: { canonical: "https://agrovestors.com/meet-our-team" },
};

export default function MeetOurTeam() {
  const staticContent = {
    title: "Meet Our Team",
    description: "Our team at Agrovestors Farm Tech is dedicated to transforming agriculture through innovation.",
    teamMembers: [
      { name: "Stephen T. Onyewuenyi", role: "CEO", image: "/images/12718aec-f22f-4338-b924-4014d4aeee33.jpeg", linkedin: "#" },
      { name: "Joseph Ogakwu Enare", role: "Head of IT Team", image: "/images/97410053-9bf0-42ba-bd35-4aa783147a3a.jpeg", linkedin: "#" },
      { name: "Godwin Adakonye John", role: "Fullstack Developer", image: "/images/b292af73-c646-43c5-9838-e84f8683b268.jpeg", linkedin: "#" },
      { name: "Augustine C. Ibechukwu", role: "Head of Media Team", image: "/images/ellen-chege-tea-farm.jpeg", linkedin: "#" },
      { name: "Dr Akaebubechukwu James-Unueze", role: "Project Manager", image: "/images/landscaping-mistakes.jpeg", linkedin: "#" },
    ],
  };

  return (
    <div className="meet-our-team-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="pt-16">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{staticContent.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed">{staticContent.description}</p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
            {staticContent.teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={112}
                    height={112}
                    className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-green-500 mx-auto"
                  />
                </Link>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{member.role}</p>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="text-blue-600 mx-auto mt-3 hover:scale-110 transition-transform duration-300" size={28} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <TeamCarousel />
      </Container>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Meet Our Team - Agrovestors Farm Tech",
            description: staticContent.description,
            url: "https://agrovestors.com/meet-our-team",
            publisher: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              logo: { "@type": "ImageObject", url: "/images/AGROINVESTORLOGO.png" },
            },
            mainEntity: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              member: staticContent.teamMembers.map((member) => ({
                "@type": "Person",
                name: member.name,
                jobTitle: member.role,
                image: member.image,
                sameAs: member.linkedin,
              })),
            },
          }),
        }}
      />
    </div>
  );
}