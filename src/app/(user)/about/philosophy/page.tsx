import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const philosophy = await client.fetch(`*[_type == "about" && slug.current == "philosophy"][0]{title, description}`);
  return {
    title: philosophy?.title || "Our Philosophy | Agrovestors Farm Tech",
    description: philosophy?.description || "Discover the philosophy driving Agrovestors Farm Tech’s mission.",
    openGraph: {
      title: philosophy?.title || "Our Philosophy - Agrovestors Farm Tech",
      description: philosophy?.description || "Discover the philosophy driving Agrovestors Farm Tech’s mission.",
      url: "https://agrovestors.com/about/philosophy",
      images: [{ url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: { canonical: "https://agrovestors.com/about/philosophy" },
  };
}

export default async function Philosophy() {
  const philosophy = await client.fetch(`*[_type == "about" && slug.current == "philosophy"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  const fallback = {
    title: "Our Philosophy",
    description: "Discover the philosophy driving Agrovestors Farm Tech’s mission.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
    content: "Our philosophy is rooted in sustainability, innovation, and community empowerment.",
  };

  const data = philosophy || fallback;

  return (
    <div className="philosophy-page bg-gray-50 min-h-screen">
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