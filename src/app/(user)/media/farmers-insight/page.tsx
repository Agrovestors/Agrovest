import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function FarmersInsight() {
  const insights = [
    {
      title: "Sustainable Farming Practices",
      description: "Farmers share insights on eco-friendly techniques.",
      slug: "sustainable-farming-practices",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpg",
    },
    {
      title: "AI in Agriculture",
      description: "How AI is transforming farming in Nigeria.",
      slug: "ai-in-agriculture",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 fade-in-left">Farmers’ Insights</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 fade-in-left" style={{ animationDelay: "100ms" }}>
            Discover stories and insights from farmers using Agrovestors’ solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((item, index) => (
              <Link
                key={index}
                href={`/media/farmers-insight/${item.slug}`}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
                aria-label={item.title}
              >
                <Image
                  src={item.mainImage}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105 pulse-hover"
                />
                <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                <p className="text-gray-200">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
