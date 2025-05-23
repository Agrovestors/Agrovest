import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const foodSecurity = await client.fetch(`*[_type == "values" && slug.current == "food-security"][0]{title, description}`);
  return {
    title: foodSecurity?.title || "Food Security | Agrovestors Farm Tech",
    description: foodSecurity?.description || "Learn about our commitment to food security.",
    openGraph: {
      title: foodSecurity?.title || "Food Security - Agrovestors Farm Tech",
      description: foodSecurity?.description || "Learn about our commitment to food security.",
      url: "https://agrovestors.com/values/food-security",
      images: [{ url: "/images/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/values/food-security" },
  };
}

export default async function FoodSecurity() {
  const foodSecurity = await client.fetch(`*[_type == "values" && slug.current == "food-security"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "Food Security",
    description: "Learn about our commitment to food security.",
    mainImage: "/images/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg",
    content: "We aim to ensure sustainable food production for all.",
  };

  const data = foodSecurity || fallback;

  return (
    <div className="food-security-page bg-gray-50 min-h-screen">
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