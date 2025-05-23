import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/lib/createClient";

export const metadata: Metadata = {
  title: "Careers | Agrovestors Farm Tech",
  description: "Join Agrovestors Farm Tech to innovate in sustainable agriculture. Explore our job openings.",
  keywords: ["Agrovestors careers", "agritech jobs", "sustainable agriculture jobs"],
  openGraph: {
    title: "Careers at Agrovestors Farm Tech",
    description: "Explore opportunities to join our agritech team.",
    url: "https://agrovestors.com/careers",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/careers" },
};

const query = `*[_type == "job"]{
  title,
  description,
  slug
} | order(_createdAt desc)`;

export default async function Careers() {
  // Fetch data from Sanity (uncomment when schema is set up)
  // const jobs = await client.fetch(query);
  const jobs = [
    {
      title: "Agritech Developer",
      description: "Develop AI-driven solutions for sustainable farming.",
      slug: "agritech-developer",
    },
    {
      title: "Field Agronomist",
      description: "Support farmers with sustainable practices and training.",
      slug: "field-agronomist",
    },
  ];

  return (
    <div className="careers-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Careers</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Join our team to drive innovation in sustainable agriculture across Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <Link
                key={index}
                href={`/careers/${job.slug}`}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label={job.title}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h2>
                <p className="text-gray-600">{job.description}</p>
              </Link>
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
            "@type": "WebPage",
            name: "Careers at Agrovestors Farm Tech",
            description: "Explore job opportunities with Agrovestors Farm Tech.",
            url: "https://agrovestors.com/careers",
            publisher: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
              },
            },
            jobPosting: jobs.map((job) => ({
              "@type": "JobPosting",
              title: job.title,
              description: job.description,
              hiringOrganization: {
                "@type": "Organization",
                name: "Agrovestors Farm Tech",
              },
              employmentType: "FULL_TIME",
              datePosted: new Date().toISOString(),
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