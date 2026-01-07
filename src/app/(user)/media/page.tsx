import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default async function Media() {
  const mediaItems = [
    {
      title: "Agrovestors Launches IntelliFeed360",
      description: "Our AI platform revolutionizes feed management in Nigeria.",
      slug: "intellifeed360-launch",
      mainImage: { asset: { url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpg" } },
    },
    {
      title: "Press Release: Sustainable Farming Initiative",
      description: "Agrovestors partners with local farmers for sustainability.",
      slug: "sustainable-farming-initiative",
      mainImage: { asset: { url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpg" } },
    },
  ];

  return (
    <div className="media-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 fade-in-left">Media</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 fade-in-left" style={{ animationDelay: "100ms" }}>
            Stay updated with Agrovestors’ latest news, press releases, and media coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaItems.map((item, index) => (
              <Link
                key={index}
                href={`/media/${item.slug}`}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
                aria-label={item.title}
              >
                <Image
                  src={item.mainImage.asset.url}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Media - Agrovestors Farm Tech",
            description: "Explore Agrovestors’ media coverage and press releases.",
            url: "https://agrovestors.com/media",
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