"use client";

import Container from "@/components/Container";

export default function ContactContent({
  contactData,
  ContactForm,
}: {
  contactData: any;
  ContactForm: React.ComponentType;
}) {
  return (
    <div className="contact-page bg-gray-50 min-h-screen">
      <Container className="py-16 px-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[465px] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{contactData.title}</h1>
            <p className="text-lg sm:text-xl lg:pr-16">{contactData.description}</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white shadow-lg rounded-lg w-full max-w-xl mx-auto p-8 mb-12 animate-fade-in-up">
          <ContactForm />
        </section>

        {/* Contact Info Section */}
        <section className="max-w-4xl mx-auto text-left animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">{contactData.infoTitle}</h2>
          <p className="text-lg text-gray-600 mb-6">{contactData.infoDescription}</p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{contactData.office.title}</h3>
              {contactData.office.address.map((line: string, index: number) => (
                <p key={index} className="text-gray-600">
                  {line}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{contactData.contactInfo.title}</h3>
              <p className="text-gray-600">
                Email:{" "}
                <a href={`mailto:${contactData.contactInfo.email}`} className="text-green-600 hover:underline">
                  {contactData.contactInfo.email}
                </a>
              </p>
              <p className="text-gray-600">Phone: {contactData.contactInfo.phone}</p>
            </div>
          </div>
        </section>
      </Container>
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
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.pne",
              },
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: contactData.contactInfo.email,
              telephone: contactData.contactInfo.phone,
              contactType: "Customer Service",
              areaServed: "Africa",
            },
          }),
        }}
      />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}