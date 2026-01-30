import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PageContainer, PageHeader } from '@/components/pages/PageLayout';

export const metadata: Metadata = generatePageMetadata({
  title: 'Media & News',
  description: 'Stay updated with Agrovestors latest news, press releases, and media coverage.',
  keywords: ['news', 'press releases', 'media', 'updates'],
  url: 'https://agrovestors.com/media',
});

const mediaItems = [
  {
    title: 'Agrovestors Launches IntelliFeed360',
    description: 'Our AI platform revolutionizes feed management in Nigeria.',
    slug: 'intellifeed360-launch',
    mainImage: {
      asset: {
        url: 'https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpg',
      },
    },
  },
  {
    title: 'Press Release: Sustainable Farming Initiative',
    description: 'Agrovestors partners with local farmers for sustainability.',
    slug: 'sustainable-farming-initiative',
    mainImage: {
      asset: {
        url: 'https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpg',
      },
    },
  },
];

export default function Media() {
  return (
    <PageContainer>
      <PageHeader
        title="Media & News"
        description="Stay updated with Agrovestors latest news, press releases, and media coverage."
      />

      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaItems.map((item, index) => (
            <Link
              key={index}
              href={`/media/${item.slug}`}
              className="group bg-gray-800 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.mainImage.asset.url}
                  alt={item.title}
                  width={400}
                  height={200}
                  quality={90}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
