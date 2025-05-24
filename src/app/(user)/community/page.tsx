import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Agrovestors Farm Tech",
  description: "Join the Agrovestors Farm Tech community to support sustainable agriculture.",
  keywords: ["Agrovestors community", "agritech", "sustainable farming"],
  openGraph: {
    title: "Community - Agrovestors Farm Tech",
    description: "Join the Agrovestors Farm Tech community to support sustainable agriculture.",
    url: "https://agrovestors.com/community",
    images: [{ url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
  },
  alternates: { canonical: "https://agrovestors.com/community" },
};

export default function Community() {
  const staticContent = {
    title: "Community",
    description: "Join the Agrovestors Farm Tech community to support sustainable agriculture.",
    heroImage: "/images/green-tractor-soybean-field.jpeg",
  };

  return (
    <div className="community-page bg-gray-50 min-h-screen">
      <Container className="pt-16">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{staticContent.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed">{staticContent.description}</p>
          </div>
        </section>

        <section className="mb-12">
          <Image
            src={staticContent.heroImage}
            alt="Community in action"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>Our community is dedicated to fostering sustainable agricultural practices.</p>
          </div>
        </section>
      </Container>
    </div>
  );
}