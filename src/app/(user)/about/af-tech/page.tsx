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
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/about/af-tech" },
};

export default function AFTech() {
  const goals = [
    {
      title: "🔬 Research & Production Agenda",
      description:
        "We drive agricultural innovation by developing high-quality, cost-effective livestock feeds through continuous R&D. Our goal is to cut feed costs by up to 40% within five years, using sustainable, locally sourced ingredients while collaborating with top research institutions.",
    },
    {
      title: "🍲 Food Security & Welfare Agenda",
      description:
        "We empower farmers and enhance food security by offering capital support, training, and operational supervision. Through our Community Farming Partnership, we help farmers restart and scale operations, ensuring affordable, nutritious food reaches communities across Africa.",
    },
    {
      title: "🧠 Tech & Smart Management Agenda",
      description:
        "Through IntelliFeed360, our AI-powered feed management platform, we revolutionize farm management with smart monitoring, predictive analytics, and IoT solutions. Our aim is to make data-driven, profitable farming accessible to every smallholder and large-scale farmer.",
    },
    {
      title: "📢 Media & Community Agenda",
      description:
        "We inspire and connect a new generation of farmers by telling authentic stories, creating educational content, and building vibrant digital communities. Our media platforms will amplify success stories, spread innovation, and solidify Agrovestors as Africa’s leading agri-tech voice.",
    },
  ];

  return (
    <div className="af-tech-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 fade-in-left">About A.F-Tech</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 fade-in-left" style={{ animationDelay: "100ms" }}>
            Learn about A.F-Tech, a division of Agrovestors Farm Tech.
          </p>
          <Image
            src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/1a04f689053a2786f2b16d50724e97a803f998dd-7360x4912.jpg"
            alt="A.F-Tech"
            width={800}
            height={533}
            className="w-full h-[400px] object-cover rounded-lg shadow-md mb-8 transition-transform duration-300 hover:scale-105 pulse-hover"
            priority
          />
          <div className="text-gray-200 mb-12 fade-in-left" style={{ animationDelay: "200ms" }}>
            <p>A.F-Tech is a division of Agrovestors Farm Tech, dedicated to advancing agricultural innovation across Africa.</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-8 bounce-in" style={{ animationDelay: "200ms" }}>
              Our 4-Goal Agenda
            </h2>
            <div className="space-y-8">
              {/* {goals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg fade-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">{goal.title}</h3>
                  <p className="text-gray-200">{goal.description}</p>
                </div>
              ))} */}
              {/* //database issue */}

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
            name: "A.F-Tech - Agrovestors Farm Tech",
            description: "Learn about A.F-Tech, a division of Agrovestors Farm Tech.",
            url: "https://agrovestors.com/about/af-tech",
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
              name: "A.F-Tech",
              parentOrganization: {
                "@type": "Organization",
                name: "Agrovestors Farm Tech",
              },
            },
          }),
        }}
      />
    </div>
  );
}