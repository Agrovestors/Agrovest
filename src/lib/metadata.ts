import type { Metadata } from 'next';

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
}

const defaultImage = {
  url: 'https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png',
  width: 1080,
  height: 763,
  alt: 'Agrovestors Farm Tech Logo',
};

export function generatePageMetadata(props: PageMetadataProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    url,
    image = defaultImage,
  } = props;

  const fullTitle = title.includes('|') ? title : `${title} | Agrovestors Farm Tech`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, 'Agrovestors', 'agritech', 'sustainable farming'],
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      images: [
        {
          url: image.url,
          width: image.width || 1200,
          height: image.height || 630,
          alt: image.alt,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultMetadata = {
  siteTitle: 'Agrovestors Farm Tech',
  baseUrl: 'https://agrovestors.com',
  siteLogo: defaultImage.url,
};
