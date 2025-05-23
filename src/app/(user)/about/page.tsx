import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Agrovestors Farm Tech",
  description: "Learn about Agrovestors Farm Tech’s commitment to sustainable agriculture.",
  keywords: ["Agrovestors about", "agritech company", "sustainable farming"],
  openGraph: {
    title: "About Agrovestors Farm Tech",
    description: "Discover our story and innovative farming solutions.",
    url: "https://agrovestors.com/about",
    images: [{ url: "/images/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
  },
  alternates: { canonical: "https://agrovestors.com/about" },
};

export default function About() {
  const staticContent = {
    title: "About Agrovestors Farm Tech",
    description: "Agrovestors Farm Tech is a leading agritech company dedicated to revolutionizing agriculture in Africa.",
    heroImage: "/images/A green tractor is driving through a field of soybeans_ _ Premium AI-generated image.jpeg",
    content: [
      { title: "Our Story", text: "Founded to empower farmers with technology and expertise." },
      { title: "Our Commitment", text: "Promoting food security and sustainable farming practices." },
    ],
  };

  return (
    <div className="about-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="pt-16">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{staticContent.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16 leading-relaxed">{staticContent.description}</p>
          </div>
        </section>

        <section className="mb-12">
          <Image
            src={staticContent.heroImage}
            alt="Agrovestors Farm Tech in action"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-600 text-lg leading-relaxed">
            {staticContent.content.map((item, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
            <p>
              Learn more about our <Link href="/mission" className="text-green-600 hover:underline">mission</Link> or{" "}
              <Link href="/meet-our-team" className="text-green-600 hover:underline">meet our team</Link>.
            </p>
          </div>
        </section>
      </Container>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Agrovestors Farm Tech",
            description: staticContent.description,
            url: "https://agrovestors.com/about",
            publisher: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              logo: { "@type": "ImageObject", url: "/images/AGROINVESTORLOGO.png" },
            },
          }),
        }}
      />
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}