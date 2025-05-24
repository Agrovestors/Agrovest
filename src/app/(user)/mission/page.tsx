import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BsLinkedin } from "react-icons/bs";
import TeamCarousel from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "Our Mission | Agrovestors Farm Tech",
  description: "At Agrovestors, we are committed to revolutionizing agriculture in Africa through innovative solutions that empower farmers.",
  keywords: ["Agrovestors mission", "sustainable agriculture", "African agritech"],
  openGraph: {
    title: "Our Mission - Agrovestors Farm Tech",
    description: "At Agrovestors, we are committed to revolutionizing agriculture in Africa through innovative solutions that empower farmers.",
    url: "https://agrovestors.com/mission",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/mission" },
};

export default function Mission() {
  const staticContent = {
    title: "Our Mission",
    description: "At Agrovestors, we are committed to revolutionizing agriculture in Africa through innovative solutions that empower farmers.",
    vision: "We lead sustainable agribusiness solutions for global food security.",
    heroImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/3db6a416335d3821493d2a391759cd763d2ba99c-612x408.jpg",
    teamMembers: [
      {
        name: "Stephen T. Onyewuenyi",
        role: "CEO",
        image: "/images/12718aec-f22f-4338-b924-4014d4aeee33.jpeg",
        linkedin: "#",
        quote: "Passionate about transforming agriculture!",
        bio: "Stephen leads Agrovest with a vision to revolutionize farming through technology and sustainable practices.",
      },
      {
        name: "Joseph Ogakwu Enare",
        role: "Head of IT Team",
        image: "/images/97410053-9bf0-42ba-bd35-4aa783147a3a.jpeg",
        linkedin: "#",
      },
      {
        name: "Godwin Adakonye John",
        role: "Fullstack Developer",
        image: "/images/b292af73-c646-43c5-9838-e84f8683b268.jpeg",
        linkedin: "#",
      },
      {
        name: "Augustine C. Ibechukwu",
        role: "Head of Media Team",
        image: "/images/ellen-chege-tea-farm.jpeg",
        linkedin: "#",
      },
      {
        name: "Dr Akaebubechukwu James-Unueze",
        role: "Project Manager",
        image: "/images/landscaping-mistakes.jpeg",
        linkedin: "#",
      },
    ],
    videos: [
      { title: "Mission Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Mission Video 2", url: "https://www.youtube.com/embed/qC0vDKVPCrw" },
    ],
  };

  return (
    <div className="mission-page bg-gray-50 min-h-screen">
      <Container className="pt-16">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 fade-in-left">{staticContent.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed fade-in-left" style={{ animationDelay: "100ms" }}>
              {staticContent.description}
            </p>
          </div>
        </section>

        <section className="relative w-full h-[400px] flex items-center justify-end overflow-hidden mb-12">
          <Image
            src={staticContent.heroImage}
            alt="Sustainable farming in Africa"
            width={612}
            height={408}
            className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105 pulse-hover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute flex flex-col items-end text-right text-white pr-2 sm:pr-4 ml-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 fade-in-left">Sustainable Farming</h2>
            <p className="text-lg sm:text-xl font-medium mb-6 fade-in-left" style={{ animationDelay: "100ms" }}>
              Technology-driven sustainable farming practices.
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 fade-in-left" style={{ animationDelay: "200ms" }}>
              Our Vision
            </h3>
            <p className="text-lg sm:text-xl font-medium fade-in-left" style={{ animationDelay: "300ms" }}>
              {staticContent.vision}
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-gray-800 fade-in-left">Why We Do It</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="fade-in-left" style={{ animationDelay: "100ms" }}>
              We believe in transforming agriculture through collaboration and technology.
            </p>
            <p className="fade-in-left" style={{ animationDelay: "200ms" }}>
              Agrovestors bridges traditional farming with modern solutions.
            </p>
            <p className="font-medium text-gray-800 fade-in-left" style={{ animationDelay: "300ms" }}>
              Join us to impact the agricultural economy.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800 fade-in-left">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300 pulse-hover staggered-fade">
              <Image
                src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/ed26f47bb030446745601a8cc99ccb50718ef713-612x413.jpg"
                alt="Agrovestors Community"
                width={612}
                height={413}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Join our vibrant community to stay connected and share agritech insights.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300 pulse-hover staggered-fade" style={{ animationDelay: "150ms" }}>
              <Image
                src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b7926955c626dd37be4c0f49d268f97d7c0d72f8-612x410.jpg"
                alt="A.F-Tech Center"
                width={612}
                height={410}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">A.F-Tech Center</h3>
              <p className="text-gray-600">Discover our cutting-edge technology solutions for sustainable farming.</p>
            </div>
          </div>
        </section>
      </Container>
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
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
              },
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