import Container from "@/components/Container";

import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(`*[_type == "values" && slug.current == "values-research-fish-broodstock"][0]{title, description}`);
  return {
    title: pageData?.title || "Broodstock | Agrovestors Farm Tech",
    description: pageData?.description || "Research on fish broodstock for breeding.",
    openGraph: {
      title: pageData?.title || "Broodstock - Agrovestors Farm Tech",
      description: pageData?.description || "Research on fish broodstock for breeding.",
      url: "https://agrovestors.com/values/research/fish/broodstock",
      images: [{ url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/values/research/fish/broodstock" },
  };
}

export default async function Page() {
  const pageData = await client.fetch(`*[_type == "values" && slug.current == "values-research-fish-broodstock"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "Broodstock",
    description: "Research on fish broodstock for breeding.",
    mainImage: "/images/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg",
    content: "Research on fish broodstock for breeding.",
  };

  const data = pageData || fallback;

  return (
    <div className="values-research-fish-broodstock-page bg-gray-50 min-h-screen">
      
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">{data.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">{data.description}</p>
          <Image
            src={data.mainImage}
            alt={data.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
          <div className="prose text-gray-600 mt-8">{data.content}</div>
        </section>
      </Container>
      
    </div>
  );
}
