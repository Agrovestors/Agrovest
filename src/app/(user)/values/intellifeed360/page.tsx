import Container from "@/components/Container";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IntelliFeed360 | Agrovestors Farm Tech",
  description: "Discover IntelliFeed360, our innovative solution for sustainable agriculture.",
  keywords: ["IntelliFeed360", "agritech", "sustainable farming"],
  openGraph: {
    title: "IntelliFeed360 - Agrovestors Farm Tech",
    description: "Discover IntelliFeed360, our innovative solution for sustainable agriculture.",
    url: "https://agrovestors.com/values/intellifeed360",
    images: [{ url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
  },
  alternates: { canonical: "https://agrovestors.com/values/intellifeed360" },
};

export default function IntelliFeed360() {
  const staticContent = {
    title: "IntelliFeed360",
    description: "Discover IntelliFeed360, our innovative solution for sustainable agriculture.",
    heroImage: "/images/green-tractor-soybean-field.jpeg", // Fixed path
  };

  return (
    <div className="intellifeed360-page bg-gray-50 min-h-screen">
      
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
            alt="IntelliFeed360 in action"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>IntelliFeed360 leverages advanced technology to optimize farming practices.</p>
          </div>
        </section>
      </Container>
      
    </div>
  );
}