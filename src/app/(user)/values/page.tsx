import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PageContainer, PageHeader, PageSection } from '@/components/pages/PageLayout';
import Container from '@/components/layout/Container';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Values & Services',
  description:
    'Discover Agrovestors innovative services, including IntelliFeed360, research, and sustainable animal production.',
  keywords: ['services', 'IntelliFeed360', 'animal production', 'research'],
  url: 'https://agrovestors.com/values',
});

const services = [
  {
    title: 'Research',
    slug: 'research',
    description: 'Advanced feed and nutrition research for fish, poultry, and swine.',
    mainImage: { asset: { url: '/bg/large-green-rice-field-with-green-rice-plants-rows.jpg' } },
  },
  {
    title: 'Animal Production',
    slug: 'production',
    description: 'Sustainable production of catfish, tilapia, broilers, and more.',
    mainImage: { asset: { url: '/bg/countryside-workers-out-field.jpg' } },
  },
  {
    title: 'IntelliFly360',
    slug: 'intellifly360',
    description: 'AI-driven pest management for farms.',
    mainImage: { asset: { url: '/drones.webp' } },
  },
  {
    title: 'IntelliFeed360',
    slug: 'intellifeed360',
    description: 'AI-powered feed optimization platform.',
    mainImage: { asset: { url: '/bg/medium-shot-smiley-farmer-cornfield.jpg' } },
  },
  {
    title: 'E-commerce Solutions',
    slug: 'ecommerce',
    description: 'Digital marketplace for agricultural products and services.',
    mainImage: { asset: { url: '/bg/businessman-presenting-empty-clipboard.jpg' } },
  },
];

export default function Values() {
  return (
    <PageContainer>
      <PageHeader
        title="Our Values & Services"
        description="Explore our cutting-edge agritech services for sustainable farming."
      />

      <PageSection title="Our Core Services" id="services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/values/${service.slug}`}
              className="group bg-gray-800 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-green-600 to-emerald-800">
                <Image
                  src={service.mainImage.asset.url}
                  alt={service.title}
                  width={400}
                  height={200}
                  quality={90}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection title="Why Choose Agrovestors" id="why">
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4 text-lg text-gray-200 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">✓</span>
              <span>Innovative technology-driven solutions for modern farming</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">✓</span>
              <span>Sustainable practices that improve profitability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">✓</span>
              <span>Expert team with years of agricultural experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">✓</span>
              <span>Dedicated support and continuous innovation</span>
            </li>
          </ul>
        </div>
      </PageSection>
    </PageContainer>
  );
}
