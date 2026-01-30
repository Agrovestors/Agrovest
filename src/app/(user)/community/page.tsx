import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { PageContainer, PageHeader, PageSection } from '@/components/pages/PageLayout';

export const metadata: Metadata = generatePageMetadata({
  title: 'Community',
  description: 'Join the Agrovestors Farm Tech community to support sustainable agriculture.',
  keywords: ['community', 'farmers', 'agritech network'],
  url: 'https://agrovestors.com/community',
});

export default function Community() {
  return (
    <PageContainer>
      <PageHeader
        title="Join Our Community"
        description="Connect with farmers, agribusiness owners, and enthusiasts to grow together."
      />

      {/* Network Section */}
      <section className="mb-12 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg p-8 md:p-12 fade-in-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Be Part of the Agrovestors Farmers Network
        </h2>
        <p className="text-lg text-gray-200 dark:text-gray-300 mb-6 text-center">
          At Agrovestors, we believe no farmer should grow alone. That's why we've created a space
          where farmers, agribusiness owners, and agricultural enthusiasts can connect, share ideas,
          ask questions, and grow together.
        </p>
        <p className="text-lg text-gray-200 dark:text-gray-300 mb-4 text-center">
          Whether you're just starting out or you're a seasoned grower, our community is here to
          support you with:
        </p>
        <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
          <li>Practical farming tips</li>
          <li>Market updates</li>
          <li>Tech tools and innovations</li>
          <li>Peer-to-peer support</li>
          <li>Access to Agrovestors' updates and opportunities</li>
        </ul>
        <div className="mt-6 text-center fade-in-left" style={{ animationDelay: '200ms' }}>
          <p className="text-xl font-bold text-white mb-2">Ready to grow with us?</p>
          <p className="text-lg text-gray-200 dark:text-gray-300 mb-4">
            Join our WhatsApp community and start connecting with fellow Agrovestors today.
          </p>
          <a
            href="https://whatsapp.com/channel/0029VbB7L0ND38CSUqHSJy0Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-400 font-semibold transition-transform duration-300 hover:scale-105"
            aria-label="Join Agrovestors WhatsApp community"
          >
            <span>Join WhatsApp</span>
            <FaWhatsapp size={32} className="hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center fade-in-left">
          Our Community in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/fff2c70820d03f17c73a7dcfe7ae8f585b5f54d7-612x408.jpg",
              alt: "Community farming activity",
              width: 612,
              height: 408,
            },
            {
              src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/9d96cc2ee6d627bac20572594d1311fc5b32e805-612x397.jpg",
              alt: "Agrovestors farmers collaboration",
              width: 612,
              height: 397,
            },
            {
              src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/e01f7b647fda0227143514c654ac40f5849e9033-612x408.jpg",
              alt: "Men harvesting crops",
              width: 612,
              height: 408,
            },
          ].map((image, index) => (
            <div
              key={image.src}
              className="relative overflow-hidden rounded-lg shadow-md fade-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 pulse-hover"
              />
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
