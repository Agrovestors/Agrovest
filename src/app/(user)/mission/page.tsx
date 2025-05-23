import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BsLinkedin } from "react-icons/bs";
import TeamCarousel from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "Our Mission | Agrovestors Farm Tech",
  description: "Discover Agrovestors Farm Tech’s mission to revolutionize agriculture in Africa.",
  keywords: ["Agrovestors mission", "sustainable agriculture", "African agritech"],
  openGraph: {
    title: "Our Mission - Agrovestors Farm Tech",
    description: "Learn about our commitment to sustainable farming and food security.",
    url: "https://agrovestors.com/mission",
    images: [{ url: "/images/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
  },
  alternates: { canonical: "https://agrovestors.com/mission" },
};

export default function Mission() {
  const staticContent = {
    title: "Our Mission",
    description: "At Agrovestors, we are committed to revolutionizing agriculture in Africa through innovative solutions that empower farmers.",
    vision: "We lead sustainable agribusiness solutions for global food security.",
    heroImage: "/images/green-tractor-soybean-field.jpeg",
    teamMembers: [
      { name: "Stephen T. Onyewuenyi", role: "CEO", image: "/images/12718aec-f22f-4338-b924-4014d4aeee33.jpeg", linkedin: "#" },
      { name: "Joseph Ogakwu Enare", role: "Head of IT Team", image: "/images/97410053-9bf0-42ba-bd35-4aa783147a3a.jpeg", linkedin: "#" },
      { name: "Godwin Adakonye John", role: "Fullstack Developer", image: "/images/b292af73-c646-43c5-9838-e84f8683b268.jpeg", linkedin: "#" },
      { name: "Augustine C. Ibechukwu", role: "Head of Media Team", image: "/images/ellen-chege-tea-farm.jpeg", linkedin: "#" },
      { name: "Dr Akaebubechukwu James-Unueze", role: "Project Manager", image: "/images/landscaping-mistakes.jpeg", linkedin: "#" },
    ],
    videos: [
      { title: "Mission Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Mission Video 2", url: "https://www.youtube.com/embed/qC0vDKVPCrw" },
    ],
  };

  return (
    <div className="mission-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="pt-16">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{staticContent.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed">{staticContent.description}</p>
          </div>
        </section>

        <section className="relative w-full h-[400px] flex items-center justify-end overflow-hidden mb-12">
          <Image
            src={staticContent.heroImage}
            alt="Sustainable farming in Africa"
            width={1920}
            height={400}
            className="w-full h-[400px] object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute flex flex-col items-end text-right text-white pr-2 sm:pr-4 ml-auto animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Sustainable Farming</h2>
            <p className="text-lg sm:text-xl font-medium mb-6">Technology-driven sustainable farming practices.</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">Our Vision</h3>
            <p className="text-lg sm:text-xl font-medium">{staticContent.vision}</p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-gray-800">Why We Do It</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>We believe in transforming agriculture through collaboration and technology.</p>
            <p>Agrovestors bridges traditional farming with modern solutions.</p>
            <p className="font-medium text-gray-800">Join us to impact the agricultural economy.</p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800">Meet Our Team</h2>
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

        <section className="py-20 bg-white">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-800">Watch Our Videos</h2>
          <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
            {staticContent.videos.map((video, index) => (
              <div key={index} className="w-full animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <iframe
                  width="100%"
                  height="400"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-lg"
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Mission - Agrovestors Farm Tech",
            description: staticContent.description,
            url: "https://agrovestors.com/mission",
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