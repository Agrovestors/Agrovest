import Container from "@/components/Container";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export const metadata: Metadata = {
  title: "FAQ | Agrovestors Farm Tech",
  description: "Answers to common questions about Agrovestors’ sustainable agriculture solutions.",
  keywords: ["Agrovestors FAQ", "agritech questions", "IntelliFeed360 FAQ"],
  openGraph: {
    title: "FAQ - Agrovestors Farm Tech",
    description: "Find answers to your questions about our agritech solutions.",
    url: "https://agrovestors.com/faq",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/faq" },
};

const query = `*[_type == "faq"]{
  question,
  answer
} | order(_createdAt asc)`;

export default async function FAQ() {
  // Fetch data from Sanity (uncomment when schema is set up)
  // const faqs = await client.fetch(query);
  const faqs = [
    {
      question: "What is IntelliFeed360?",
      answer: "IntelliFeed360 is an AI-powered platform that optimizes feed management for livestock, reducing costs and improving sustainability.",
    },
    {
      question: "How does Agrovestors support farmers?",
      answer: "We provide sustainable feed solutions, AI tools, and training to enhance productivity and profitability.",
    },
  ];

  return (
    <div className="faq-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="py-16 px-6">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Find answers to common questions about our agritech solutions.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h2>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
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