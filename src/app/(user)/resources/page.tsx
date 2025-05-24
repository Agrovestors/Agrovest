import Container from "@/components/Container";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export const metadata: Metadata = {
  title: "Resources | Agrovestors Farm Tech",
  description: "Download guides, whitepapers, and resources on sustainable agriculture from Agrovestors.",
  keywords: ["Agrovestors resources", "sustainable farming guides", "agritech whitepapers"],
  openGraph: {
    title: "Resources - Agrovestors Farm Tech",
    description: "Access valuable resources to enhance your farming practices.",
    url: "https://agrovestors.com/resources",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/resources" },
};

const query = `*[_type == "resource"]{
  title,
  description,
  slug,
  file{asset->{url}}
} | order(_createdAt desc)`;

export default async function Resources() {
  // Fetch data from Sanity (uncomment when schema is set up)
  // const resources = await client.fetch(query);
  const resources = [
    {
      title: "Sustainable Farming Guide",
      description: "A comprehensive guide to sustainable agriculture practices.",
      slug: "sustainable-farming-guide",
      file: { asset: { url: "#" } },
    },
    {
      title: "IntelliFeed360 Whitepaper",
      description: "Learn how IntelliFeed360 optimizes feed management.",
      slug: "intellifeed360-whitepaper",
      file: { asset: { url: "#" } },
    },
  ];

  return (
    <div className="resources-page bg-gray-50 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Resources</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Download our free guides and whitepapers to advance your farming knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={`/resources/${resource.slug}`}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label={resource.title}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h2>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
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
            name: "Agrovestors Farm Tech Resources",
            description: "Download guides and whitepapers on sustainable agriculture.",
            url: "https://agrovestors.com/resources",
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