import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export async function generateMetadata(): Promise<Metadata> {
  const about = await client.fetch(`*[_type == "about" && slug.current == "af-tech"][0]{title, description}`);
  if (!about) {
    return {
      title: "AF Tech | Agrovestors Farm Tech",
      description: "Learn about AF Tech, a division of Agrovestors Farm Tech.",
      openGraph: {
        title: "AF Tech - Agrovestors Farm Tech",
        description: "Learn about AF Tech, a division of Agrovestors Farm Tech.",
        url: "https://agrovestors.com/about/af-tech",
      },
      alternates: { canonical: "https://agrovestors.com/about/af-tech" },
    };
  }
  return {
    title: about.title || "AF Tech | Agrovestors Farm Tech",
    description: about.description || "Learn about AF Tech, a division of Agrovestors Farm Tech.",
    openGraph: {
      title: about.title || "AF Tech - Agrovestors Farm Tech",
      description: about.description || "Learn about AF Tech, a division of Agrovestors Farm Tech.",
      url: "https://agrovestors.com/about/af-tech",
    },
    alternates: { canonical: "https://agrovestors.com/about/af-tech" },
  };
}

export default async function AFTech() {
  const about = await client.fetch(`*[_type == "about" && slug.current == "af-tech"][0]{title, description, "mainImage": mainImage.asset->url, content}`);
  if (!about) {
    return (
      <div className="af-tech-page bg-gray-50 min-h-screen">
        <Navbar />
        <Container className="py-16 px-6">
          <section className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">AF Tech</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">Learn about AF Tech, a division of Agrovestors Farm Tech.</p>
            <Image
              src="/images/AGROINVESTORLOGO.png" // Fallback image
              alt="AF Tech"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
              priority
            />
            <div className="prose text-gray-600">Content not found. Please check back later.</div>
          </section>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="af-tech-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">{about.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">{about.description}</p>
          <Image
            src={about.mainImage || "/images/AGROINVESTORLOGO.png"}
            alt={about.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
          <div className="prose text-gray-600">{about.content}</div>
        </section>
      </Container>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: about.title,
            description: about.description,
          }),
        }}
      />
    </div>
  );
}