import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const news = await client.fetch(`*[_type == "media" && slug.current == "news"][0]{title, description}`);
  return {
    title: news?.title || "News | Agrovestors Farm Tech",
    description: news?.description || "Stay updated with the latest news from Agrovestors Farm Tech.",
    openGraph: {
      title: news?.title || "News - Agrovestors Farm Tech",
      description: news?.description || "Stay updated with the latest news from Agrovestors Farm Tech.",
      url: "https://agrovestors.com/media/news",
      images: [{ url: "/images/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/media/news" },
  };
}

export default async function News() {
  const news = await client.fetch(`*[_type == "media" && slug.current == "news"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "News",
    description: "Stay updated with the latest news from Agrovestors Farm Tech.",
    mainImage: "/images/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg",
    content: "Latest updates and announcements from our team.",
  };

  const data = news || fallback;

  return (
    <div className="news-page bg-gray-50 min-h-screen">
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