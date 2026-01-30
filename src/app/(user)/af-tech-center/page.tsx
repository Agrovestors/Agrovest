import Container from "@/components/layout/Container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const afTechCenter = {
    title: "A.F-Tech Center",
    description: "Discover our A.F-Tech Center for agricultural innovation.",
  };
  return {
    title: afTechCenter.title,
    description: afTechCenter.description,
    openGraph: {
      title: afTechCenter.title,
      description: afTechCenter.description,
      url: "https://agrovestors.com/af-tech-center",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
          width: 1080,
          height: 763,
          alt: "Agrovestors Logo",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/af-tech-center" },
  };
}

export default function AFTechCenter() {
  const afTechCenter = {
    title: "A.F-Tech Center",
    description: "Discover our A.F-Tech Center for agricultural innovation.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8ceae45fbac6a7a65d5cba07a31daa5dbac1a8cb-612x344.jpg",
    content: "The A.F-Tech Center drives cutting-edge agricultural technology.",
  };

  const data = afTechCenter;

  return (
    <div className="af-tech-center-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{data.title}</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">{data.description}</p>
          <Image
            src={data.mainImage}
            alt={data.title}
            width={800}
            height={344}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
          <div className="prose text-gray-200 mt-8">{data.content}</div>
        </section>
      </Container>
    </div>
  );
}
