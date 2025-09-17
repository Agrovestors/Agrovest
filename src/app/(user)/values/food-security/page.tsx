import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const foodSecurity = {
    title: "Food Security",
    description: "Learn about our commitment to food security.",
  };
  return {
    title: foodSecurity.title,
    description: foodSecurity.description,
    openGraph: {
      title: foodSecurity.title,
      description: foodSecurity.description,
      url: "https://agrovestors.com/values/food-security",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.pne",
          width: 1080,
          height: 763,
          alt: "Agrovestors Logo",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/values/food-security" },
  };
}

export default function FoodSecurity() {
  const foodSecurity = {
    title: "Food Security",
    description: "Learn about our commitment to food security.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/227b526492c1d1380554fee0cd525205ef04e9f3-612x408.jpe",
    content: "We aim to ensure sustainable food production for all.",
  };

  const data = foodSecurity;

  return (
    <div className="food-security-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{data.title}</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">{data.description}</p>
          <Image
            src={data.mainImage}
            alt={data.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
          <div className="prose text-gray-200 mt-8">{data.content}</div>
        </section>
      </Container>
    </div>
  );
}