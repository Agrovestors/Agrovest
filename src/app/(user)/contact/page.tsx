import { Metadata } from "next";
import ContactContent from "./ContactContent"; // New Client Component
import ContactForm from "./ContactForm"; // Existing Client Component

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
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.pne",
        width: 1080,
        height: 763,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/contact" },
};

export default function Contact() {
  const contactData = {
    title: "Contact Us",
    description: "Have questions about our agritech solutions? Reach out to our team!",
    infoTitle: "We are Here for You!",
    infoDescription:
      "At Agrovestors Farm Tech, we are committed to helping you find the best solutions for your agricultural needs. Whether you have inquiries about our services or need further information, don’t hesitate to reach out.",
    office: {
      title: "Our Office Location",
      address: ["Agrovestors Farm Tech Headquarters", "Umuorie Amachara Avuvu Ikeduru, Imo State, Nigeria."],
    },
    contactInfo: {
      title: "Contact Information",
      email: "info@agrovestorsftech.com",
      phone: "+234 706 445 2265",
    },
  };

  return (
    <ContactContent
      contactData={contactData}
      ContactForm={ContactForm} // Pass ContactForm as a prop
    />
  );
}