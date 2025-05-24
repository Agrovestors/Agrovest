import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const legacy = await client.fetch(`*[_type == "about" && slug.current == "legacy"][0]{title, description}`);
  return {
    title: legacy?.title || "Our Legacy | Agrovestors Farm Tech",
    description: legacy?.description || "Explore the legacy of Agrovestors Farm Tech in transforming agriculture.",
    openGraph: {
      title: legacy?.title || "Our Legacy - Agrovestors Farm Tech",
      description: legacy?.description || "Explore the legacy of Agrovestors Farm Tech in transforming agriculture.",
      url: "https://agrovestors.com/about/legacy",
      images: [{ url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/about/legacy" },
  };
}

export default async function Legacy() {
  const legacy = await client.fetch(`*[_type == "about" && slug.current == "legacy"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "Our Legacy",
    description: "Explore the legacy of Agrovestors Farm Tech in transforming agriculture.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
    content: "Our legacy is built on decades of innovation in sustainable agriculture.",
  };

  const data = legacy || fallback;

  return (
    <div className="legacy-page bg-gray-50 min-h-screen">
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