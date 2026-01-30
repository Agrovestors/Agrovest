import Image from 'next/image';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PageContainer, PageHeader, PageSection } from '@/components/pages/PageLayout';

export const metadata: Metadata = generatePageMetadata({
  title: 'A.F-Tech Division',
  description: 'Learn about A.F-Tech, a division of Agrovestors Farm Tech dedicated to agricultural innovation.',
  keywords: ['AF-Tech', 'innovation', 'agriculture'],
  url: 'https://agrovestors.com/about/af-tech',
});

const goals = [
  {
    title: '🔬 Research & Production Agenda',
    description:
      'We drive agricultural innovation by developing high-quality, cost-effective livestock feeds through continuous R&D. Our goal is to cut feed costs by up to 40% within five years, using sustainable, locally sourced ingredients while collaborating with top research institutions.',
  },
  {
    title: '🍲 Food Security & Welfare Agenda',
    description:
      'We empower farmers and enhance food security by offering capital support, training, and operational supervision. Through our Community Farming Partnership, we help farmers restart and scale operations, ensuring affordable, nutritious food reaches communities across Africa.',
  },
  {
    title: '🧠 Tech & Smart Management Agenda',
    description:
      'Through IntelliFeed360, our AI-powered feed management platform, we revolutionize farm management with smart monitoring, predictive analytics, and IoT solutions. Our aim is to make data-driven, profitable farming accessible to every smallholder and large-scale farmer.',
  },
  {
    title: '📢 Media & Community Agenda',
    description:
      'We inspire and connect a new generation of farmers by telling authentic stories, creating educational content, and building vibrant digital communities. Our media platforms will amplify success stories, spread innovation, and solidify Agrovestors as Africas leading agri-tech voice.',
  },
];

export default function AFTech() {
  return (
    <PageContainer>
      <PageHeader
        title="About A.F-Tech"
        description="Learn about A.F-Tech, a division of Agrovestors Farm Tech dedicated to advancing agricultural innovation across Africa."
      />

      <section className="mb-12">
        <Image
          src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/1a04f689053a2786f2b16d50724e97a803f998dd-7360x4912.jpg"
          alt="A.F-Tech Division"
          width={800}
          height={533}
          className="w-full h-[400px] object-cover rounded-lg shadow-md mb-8 transition-transform duration-300 hover:scale-105 pulse-hover"
          priority
        />
      </section>

      <PageSection title="Our 4-Goal Agenda">
        <div className="space-y-8 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg fade-in-left hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{goal.title}</h3>
              <p className="text-gray-200 dark:text-gray-300 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'A.F-Tech - Agrovestors Farm Tech',
            description:
              'Learn about A.F-Tech, a division of Agrovestors Farm Tech dedicated to advancing agricultural innovation across Africa.',
            url: 'https://agrovestors.com/about/af-tech',
            publisher: {
              '@type': 'Organization',
              name: 'Agrovestors Farm Tech',
              logo: {
                '@type': 'ImageObject',
                url: 'https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png',
              },
            },
            mainEntity: {
              '@type': 'Organization',
              name: 'A.F-Tech',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Agrovestors Farm Tech',
              },
            },
          }),
        }}
      />
    </PageContainer>
  );
}
