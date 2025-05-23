import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export const metadata: Metadata = {
  title: "Case Studies | Agrovestors Farm Tech",
  description: "Explore success stories from farmers using Agrovestors’ sustainable agriculture solutions.",
  keywords: ["Agrovestors case studies", "sustainable farming success", "agritech case studies"],
  openGraph: {
    title: "Case Studies - Agrovestors Farm Tech",
    description: "Discover how farmers benefit from our agritech solutions.",
    url: "https://agrovestors.com/case-studies",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/case-studies" },
};

const query = `*[_type == "caseStudy"]{
  title,
  description,
  slug,
  mainImage{asset->{url}}
} | order(_createdAt desc)`;

export default async function CaseStudies() {
  // Fetch data from Sanity (uncomment when schema is set up)
  // const caseStudies = await client.fetch(query);
  const caseStudies = [
    {
      title: "Catfish Farm Success in Nigeria",
      description: "How IntelliFeed360 reduced feed costs by 40% for a catfish farm.",
      slug: "catfish-nigeria",
      mainImage: { asset: { url: "/bg/african-people-harvesting-vegetables.jpg" } },
    },
    {
      title: "Poultry Productivity Boost",
      description: "Sustainable feed solutions increased egg production by 30%.",
      slug: "poultry-boost",
      mainImage: { asset: { url: "/bg/countryside-workers-out-field.jpg" } },
    },
  ];

  return (
    <div className="case-studies-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Case Studies</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            See how Agrovestors’ solutions have transformed farms across Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={`/case-studies/${study.slug}`}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label={study.title}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{study.title}</h2>
                <p className="text-gray-600">{study.description}</p>
              </Link>
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
            name: "Agrovestors Farm Tech Case Studies",
            description: "Success stories from farmers using Agrovestors’ sustainable solutions.",
            url: "https://agrovestors.com/case-studies",
            publisher: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
              },
            },
          }),
        }}
      />
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}