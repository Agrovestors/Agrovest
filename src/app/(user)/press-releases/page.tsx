import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const media = {
    title: "Press Releases | Agrovestors Farm Tech",
    description: "Read Agrovestors’ latest press releases about our sustainable agriculture initiatives.",
  };

  return {
    title: media.title,
    description: media.description,
    keywords: ["Agrovestors press releases", "agritech news", "sustainable farming news"],
    openGraph: {
      title: media.title,
      description: media.description,
      url: "https://agrovestors.com/media/press-releases",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
          width: 1080,
          height: 763,
          alt: "Agrovestors Farm Tech Logo",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/media/press-releases" },
  };
}

const query = `*[_type == "media" && slug == "press-releases"]{
  mainImage{asset->{url}}
}[0]`;

export default async function PressReleases() {
  // Placeholder data (replace with Sanity fetch when schema is set up)
  // const media = await client.fetch(query);
  const media = {
    mainImage: { asset: { url: "/bg/photorealistic-woman-organic-sustainable-garden-harvesting-produce.jpg" } },
  };
  const staticContent = {
    title: "Press Releases",
    description: "Stay informed with Agrovestors’ official press releases on our latest initiatives and achievements.",
    content: "Our press releases highlight our commitment to sustainable agriculture, including partnerships with local farmers and the launch of IntelliFeed360. Check back regularly for updates on our impact across Africa.",
  };

  return (
    <div className="press-releases-page bg-gray-50 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">{staticContent.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">{staticContent.description}</p>
          <div className="mb-8">
            <Image
              src={media.mainImage.asset.url}
              alt={staticContent.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
              priority
            />
          </div>
          <div className="prose text-gray-600">
            <p>{staticContent.content}</p>
            <p>
              For media inquiries, please{" "}
              <Link href="/contact" className="text-green-600 hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </section>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: staticContent.title,
            description: staticContent.description,
            url: "https://agrovestors.com/media/press-releases",
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
    </div>
  );
}
