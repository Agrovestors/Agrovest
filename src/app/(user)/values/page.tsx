import Container from "@/components/Container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Values & Services | Agrovestors Farm Tech",
  description: "Discover Agrovestors’ innovative services, including IntelliFeed360, research, and sustainable animal production.",
  keywords: ["Agrovestors services", "sustainable agriculture solutions", "IntelliFeed360"],
  openGraph: {
    title: "Our Values & Services - Agrovestors Farm Tech",
    description: "Explore our cutting-edge agritech services for sustainable farming.",
    url: "https://agrovestors.com/values",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/values" },
};

const query = `*[_type == "service"]{
  title,
  description,
  slug,
  mainImage{asset->{url}}
} | order(_createdAt desc)`;

export default async function Values() {
  // Fetch data from Sanity (uncomment when schema is set up)
  // const services = await client.fetch(query);
  const services = [
    {
      title: "Research",
      slug: "research",
      description: "Advanced feed and nutrition research for fish, poultry, and swine.",
      mainImage: { asset: { url: "/bg/large-green-rice-field-with-green-rice-plants-rows.jpg" } },
    },
    {
      title: "Animal Production",
      slug: "production",
      description: "Sustainable production of catfish, tilapia, broilers, and more.",
      mainImage: { asset: { url: "/bg/countryside-workers-out-field.jpg" } },
    },
    {
      title: "IntelliFly360",
      slug: "intellifly360",
      description: "AI-driven pest management for farms.",
      mainImage: { asset: { url: "/drones.webp" } },
    },
    {
      title: "IntelliFeed360",
      slug: "intellifeed360",
      description: "AI-powered feed optimization platform.",
      mainImage: { asset: { url: "/bg/medium-shot-smiley-farmer-cornfield.jpg" } },
    },
    {
      title: "Food Security",
      slug: "food-security",
      description: "Initiatives to ensure sustainable food supply chains.",
      mainImage: { asset: { url: "/bg/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg" } },
    },
  ];

  return (
    <div className="values-page bg-gray-50 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Our Values & Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            At Agrovestors, we deliver innovative solutions to empower farmers and promote sustainability.
          </p>
  
        </section>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Values & Services - Agrovestors Farm Tech",
            description: "Explore Agrovestors’ innovative services for sustainable agriculture.",
            url: "https://agrovestors.com/values",
            publisher: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
              },
            },
            mainEntity: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `https://agrovestors.com/values/${service.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}