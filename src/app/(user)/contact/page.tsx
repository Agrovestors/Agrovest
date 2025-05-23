import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import ContactForm from "./ContactForm"; // Separate client component for form

export const metadata: Metadata = {
  title: "Contact Us | Agrovestors Farm Tech",
  description: "Get in touch with Agrovestors Farm Tech for sustainable agriculture solutions and support.",
  keywords: ["Agrovestors contact", "agritech support", "sustainable farming contact"],
  openGraph: {
    title: "Contact Agrovestors Farm Tech",
    description: "Reach out for inquiries about our agritech solutions.",
    url: "https://agrovestors.com/contact",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/contact" },
};

export default function Contact() {
  return (
    <div className="contact-page bg-gray-50 min-h-screen">
      <Navbar />
      <Container className="py-16 px-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[465px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg sm:text-xl lg:pr-16">
              Have questions about our agritech solutions? Reach out to our team!
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white shadow-lg rounded-lg w-full max-w-xl mx-auto p-8 mb-12 animate-fade-in-up">
          <ContactForm />
        </section>

        {/* Contact Info Section */}
        <section className="max-w-4xl mx-auto text-left animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">We are Here for You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Agrovestors Farm Tech, we are committed to helping you find the best solutions for your agricultural needs. Whether you have inquiries about our services or need further information, don’t hesitate to reach out.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Our Office Location</h3>
              <p className="text-gray-600">Agrovestors Farm Tech Headquarters</p>
              <p className="text-gray-600">1234 Agro Street, Farmville, Abuja, Nigeria</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
              <p className="text-gray-600">
                Email: <a href="mailto:info@agrovestors.com" className="text-green-600 hover:underline">info@agrovestors.com</a>
              </p>
              <p className="text-gray-600">Phone: +234 123 456 7890</p>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Agrovestors Farm Tech",
            description: "Get in touch with Agrovestors for sustainable agriculture solutions.",
            url: "https://agrovestors.com/contact",
            publisher: {
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
              },
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@agrovestors.com",
              telephone: "+2341234567890",
              contactType: "Customer Service",
              areaServed: "Africa",
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