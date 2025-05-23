import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const farmersInsight = await client.fetch(`*[_type == "media" && slug.current == "farmers-insight"][0]{title, description}`);
  return {
    title: farmersInsight?.title || "The Farmers’ Insight | Agrovestors Farm Tech",
    description: farmersInsight?.description || "Read insights from farmers at Agrovestors Farm Tech.",
    openGraph: {
      title: farmersInsight?.title || "The Farmers’ Insight - Agrovestors Farm Tech",
      description: farmersInsight?.description || "Read insights from farmers at Agrovestors Farm Tech.",
      url: "https://agrovestors.com/media/farmers-insight",
      images: [{ url: "/images/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/media/farmers-insight" },
  };
}

export default async function FarmersInsight() {
  const farmersInsight = await client.fetch(`*[_type == "media" && slug.current == "farmers-insight"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "The Farmers’ Insight",
    description: "Read insights from farmers at Agrovestors Farm Tech.",
    mainImage: "/images/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg",
    content: "Stories and insights from our farming community.",
  };

  const data = farmersInsight || fallback;

  return (
    <div className="farmers-insight-page bg-gray-50 min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  );
}