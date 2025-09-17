import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const livestockResearch = {
    title: "Livestock Production Research",
    description: "We're researching sustainable livestock farming. Stay tuned for updates!",
  };
  return {
    title: `${livestockResearch.title} | Agrovestors Farm Tech`,
    description: livestockResearch.description,
    openGraph: {
      title: `${livestockResearch.title} - Agrovestors Farm Tech`,
      description: livestockResearch.description,
      url: "https://agrovestors.com/values/production/other",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.pne",
          width: 1080,
          height: 763,
          alt: "Agrovestors Livestock Production Research",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/values/production/other" },
  };
}

export default function OtherProduction() {
  const livestockResearch = {
    title: "Livestock Production Research in Progress",
    description: "At Agrovestors, we’re diving deep into sustainable livestock farming innovations. Our team is working tirelessly to develop cutting-edge solutions that enhance productivity while preserving our ecosystems. Stay tuned—exciting updates are on the way!",
    ctaText: "Want to be the first to know? Follow us on social media or join our newsletter for the latest breakthroughs.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.pne",
  };

  const data = livestockResearch;

  return (
    <div className="other-production-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.mainImage}
          alt="Agrovestors Background"
          width={1080}
          height={763}
          className="w-full h-full object-cover opacity-10"
          style={{ filter: "blur(8px)" }}
          quality={80}
          sizes="100vw"
          priority
        />
      </div>
      <Container className="py-16 px-6 relative z-10">
        <section className="max-w-4xl mx-auto text-center">
          <div className="float-pulse bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{data.title}</h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">{data.description}</p>
            <p className="text-base sm:text-lg text-gray-300 mb-6">{data.ctaText}</p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Stay Updated
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
