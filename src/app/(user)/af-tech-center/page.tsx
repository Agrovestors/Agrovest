import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const afTechCenter = await client.fetch(`*[_type == "afTechCenter" && slug.current == "af-tech-center"][0]{title, description}`);
  return {
    title: afTechCenter?.title || "A.F-Tech Center | Agrovestors Farm Tech",
    description: afTechCenter?.description || "Discover our A.F-Tech Center for agricultural innovation.",
    openGraph: {
      title: afTechCenter?.title || "A.F-Tech Center - Agrovestors Farm Tech",
      description: afTechCenter?.description || "Discover our A.F-Tech Center for agricultural innovation.",
      url: "https://agrovestors.com/af-tech-center",
      images: [{ url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/af-tech-center" },
  };
}

export default async function AFTechCenter() {
  const afTechCenter = await client.fetch(`*[_type == "afTechCenter" && slug.current == "af-tech-center"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "A.F-Tech Center",
    description: "Discover our A.F-Tech Center for agricultural innovation.",
    mainImage: "/images/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg",
    content: "The A.F-Tech Center drives cutting-edge agricultural technology.",
  };

  const data = afTechCenter || fallback;

  return (
    <div className="af-tech-center-page bg-gray-50 min-h-screen">
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