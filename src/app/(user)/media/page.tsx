import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export const metadata: Metadata = {
  title: "Media | Agrovestors Farm Tech",
  description: "Explore Agrovestors’ media coverage, press releases, and news about sustainable agriculture.",
  keywords: ["Agrovestors media", "agritech news", "sustainable farming press"],
  openGraph: {
    title: "Media - Agrovestors Farm Tech",
    description: "Stay updated with our latest news and media coverage.",
    url: "https://agrovestors.com/media",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/media" },
};

const query = `*[_type == "media"]{
  title,
  description,
  slug,
  mainImage{asset->{url}}
} | order(_createdAt desc)`;

export default async function Media() {
  // Fetch data from Sanity (uncomment when schema is set up)
  // const mediaItems = await client.fetch(query);
  const mediaItems = [
    {
      title: "Agrovestors Launches IntelliFeed360",
      description: "Our AI platform revolutionizes feed management in Nigeria.",
      slug: "intellifeed360-launch",
      mainImage: { asset: { url: "/bg/medium-shot-smiley-farmer-cornfield.jpg" } },
    },
    {
      title: "Press Release: Sustainable Farming Initiative",
      description: "Agrovestors partners with local farmers for sustainability.",
      slug: "sustainable-farming-initiative",
      mainImage: { asset: { url: "/bg/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg" } },
    },
  ];

  return (
    <div className="media-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Media</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Stay updated with Agrovestors’ latest news, press releases, and media coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaItems.map((item, index) => (
              <Link
                key={index}
                href={`/media/${item.slug}`}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label={item.title}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
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
            name: "Media - Agrovestors Farm Tech",
            description: "Explore Agrovestors’ media coverage and press releases.",
            url: "https://agrovestors.com/media",
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