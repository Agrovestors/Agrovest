"use client";

import Container from "@/components/Container";

interface ContactData {
  title: string;
  description: string;
  infoTitle: string;
  infoDescription: string;
  office: {
    title: string;
    address: string[];
  };
  contactInfo: {
    title: string;
    email: string;
    phone: string;
  };
}

interface ContactContentProps {
  contactData: ContactData;
  ContactForm: React.ComponentType;
}

export default function ContactContent({
  contactData,
  ContactForm,
}: ContactContentProps) {
  return (
    <div className="contact-page bg-gradient-to-b from-gray-900 to-green-900 dark:from-gray-950 dark:to-green-950 min-h-screen">
      <Container className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-green-900 to-green-700 dark:from-green-950 dark:to-green-800 text-white rounded-lg p-6 sm:p-10 mb-12 animate-fade-in-up">
          <div className="w-full lg:max-w-[465px] text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{contactData.title}</h1>
            <p className="text-base sm:text-lg md:text-xl lg:pr-16">{contactData.description}</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-gray-800 dark:bg-gray-900 shadow-lg rounded-lg w-full max-w-xl mx-auto p-6 sm:p-8 mb-12 animate-fade-in-up border border-gray-700 dark:border-gray-800">
          <ContactForm />
        </section>

        {/* Contact Info Section */}
        <section className="max-w-4xl mx-auto text-left animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white dark:text-gray-100 mb-6">{contactData.infoTitle}</h2>
          <p className="text-base sm:text-lg text-gray-300 dark:text-gray-400 mb-6">{contactData.infoDescription}</p>
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
                url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
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
      
    </div>
  );
}
