import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | Agrovestors Farm Tech",
  description: "We lead the charge in sustainable agribusiness solutions, global food security and in cost control.",
  keywords: ["Agrovestors mission", "sustainable agriculture", "African agritech"],
  openGraph: {
    title: "Our Mission - Agrovestors Farm Tech",
    description: "We lead the charge in sustainable agribusiness solutions, global food security and in cost control.",
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
    description: "We lead the charge in sustainable agribusiness solutions, global food security and in cost control.",
    vision: "Our vision is ambitious and borderless. We aim to be the unrivaled global leader in agro-network excellence, spearheading investment, digital mechanization, and e-commerce solutions.",
    tagline: "Making it cheaper… making it better… making it faster!",
    heroImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/3db6a416335d3821493d2a391759cd763d2ba99c-612x408.jpg",
    videos: [
      { title: "Intro Video", url: "https://www.youtube.com/embed/1RmDfbRKSpQ" },
      { title: "The Science of Agri-Sustainability by Agrovestors", url: "https://www.youtube.com/embed/0BSPsWmKuKw" },
    ],
  };

  return (
    <div className="mission-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="pt-16">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 fade-in-left">{staticContent.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed fade-in-left" style={{ animationDelay: "100ms" }}>
              {staticContent.description}
            </p>
            <p
              className="text-2xl sm:text-3xl font-extrabold mt-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent bounce-in"
              style={{ animationDelay: "200ms" }}
            >
              {staticContent.tagline}
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

        <section className="py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-white fade-in-left">Why We Do It</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-200 text-lg leading-relaxed">
            <p className="fade-in-left" style={{ animationDelay: "100ms" }}>
              We believe in transforming agriculture through collaboration and technology.
            </p>
            <p className="fade-in-left" style={{ animationDelay: "200ms" }}>
              Agrovestors bridges traditional farming with modern solutions.
            </p>
            <p className="font-medium text-white fade-in-left" style={{ animationDelay: "300ms" }}>
              Join us to impact the agricultural economy.
            </p>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-white fade-in-left">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/community"
              className="block bg-gray-800 p-6 shadow-lg rounded-lg transition-all duration-300 pulse-hover staggered-fade cursor-pointer"
            >
              <Image
                src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9d96cc2ee6d627bac20572594d1311fc5b32e805-612x397.jpg"
                alt="Agrovestors Community"
                width={612}
                height={397}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:brightness-105"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 hover:underline">Community</h3>
              <p className="text-gray-200">Join our vibrant community to stay connected and share agritech insights.</p>
            </Link>
            <Link
              href="/af-tech-center"
              className="block bg-gray-800 p-6 shadow-lg rounded-lg transition-all duration-300 pulse-hover staggered-fade cursor-pointer"
              style={{ animationDelay: "150ms" }}
            >
              <Image
                src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b7926955c626dd37be4c0f49d268f97d7c0d72f8-612x410.jpg"
                alt="A.F-Tech Center"
                width={612}
                height={410}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:brightness-105"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 hover:underline">A.F-Tech Center</h3>
              <p className="text-gray-200">Discover our cutting-edge technology solutions for sustainable farming.</p>
            </Link>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-white fade-in-left">Our Vision in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {staticContent.videos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-48 rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <h3 className="text-xl font-bold mt-4 text-white">{video.title}</h3>
              </div>
            ))}
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
            },
          }),
        }}
      />
    </div>
  );
}