import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Agrovestors Farm Tech for sustainable agriculture solutions and support.',
  keywords: ['contact', 'support', 'inquiries'],
  url: 'https://agrovestors.com/contact',
});

const contactData = {
  title: 'Contact Us',
  description: 'Have questions about our agritech solutions? Reach out to our team!',
  infoTitle: 'We are Here for You!',
  infoDescription:
    'At Agrovestors Farm Tech, we are committed to helping you find the best solutions for your agricultural needs. Whether you have inquiries about our services or need further information, dont hesitate to reach out.',
  office: {
    title: 'Our Office Location',
    address: [
      'Agrovestors Farm Tech Headquarters',
      'Umuorie Amachara Avuvu Ikeduru, Imo State, Nigeria.',
    ],
  },
  contactInfo: {
    title: 'Contact Information',
    email: 'info@agrovestorsftech.com',
    phone: '+234 706 445 2265',
  },
};

export default function Contact() {
  return <ContactContent contactData={contactData} ContactForm={ContactForm} />;
}
