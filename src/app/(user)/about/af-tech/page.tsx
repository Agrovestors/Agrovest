import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A.F-Tech | Agrovestors Farm Tech",
  description: "Learn about A.F-Tech, a division of Agrovestors Farm Tech.",
  openGraph: {
    title: "A.F-Tech - Agrovestors Farm Tech",
    description: "Learn about A.F-Tech, a division of Agrovestors Farm Tech.",
    url: "https://agrovestors.com/about/af-tech",
  },
  alternates: { canonical: "https://agrovestors.com/about/af-tech" },
};

export default function AFTech() {
  return (
    <div className="af-tech-page bg-gray-50 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">About A.F-Tech</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Learn about A.F-Tech, a division of Agrovestors Farm Tech.
          </p>
          <Image
            src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpg"
            alt="A.F-Tech"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
          <div className="prose text-gray-600 mb-12">
            <p>A.F-Tech is a division of Agrovestors Farm Tech, dedicated to advancing agricultural innovation across Africa.</p>
          </div>

          {/* 4-Goal Agenda Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our 4-Goal Agenda</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">🔬 Research & Production Agenda</h3>
                <p className="text-gray-600">
                  We drive agricultural innovation by developing high-quality, cost-effective livestock feeds through continuous R&D. Our goal is to cut feed costs by up to 40% within five years, using sustainable, locally sourced ingredients while collaborating with top research institutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">🍲 Food Security & Welfare Agenda</h3>
                <p className="text-gray-600">
                  We empower farmers and enhance food security by offering capital support, training, and operational supervision. Through our Community Farming Partnership, we help farmers restart and scale operations, ensuring affordable, nutritious food reaches communities across Africa.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">🧠 Tech & Smart Management Agenda</h3>
                <p className="text-gray-600">
                  Through IntelliFeed360, our AI-powered feed management platform, we revolutionize farm management with smart monitoring, predictive analytics, and IoT solutions. Our aim is to make data-driven, profitable farming accessible to every smallholder and large-scale farmer.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">📢 Media & Community Agenda</h3>
                <p className="text-gray-600">
                  We inspire and connect a new generation of farmers by telling authentic stories, creating educational content, and building vibrant digital communities. Our media platforms will amplify success stories, spread innovation, and solidify Agrovestors as Africa’s leading agri-tech voice.
                </p>
              </div>
            </div>
          </section>
        </section>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "A.F-Tech",
            description: "Learn about A.F-Tech, a division of Agrovestors Farm Tech.",
          }),
        }}
      />
    </div>
  );
}