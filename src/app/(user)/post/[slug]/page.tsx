import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post | Agrovestors Farm Tech",
  description: "Read the latest insights and updates from Agrovestors Farm Tech.",
  openGraph: {
    title: "Post - Agrovestors Farm Tech",
    description: "Read the latest insights and updates from Agrovestors Farm Tech.",
    url: "https://agrovestors.com/post",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.pne",
        width: 1080,
        height: 763,
        alt: "Agrovestors Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/post" },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const posts = [
    {
      _id: "post-1",
      title: "Advancing Sustainable Agriculture in Nigeria",
      description: "How Agrovestors is transforming farming with technology.",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpe",
      slug: { current: "sustainable-agriculture-nigeria" },
      author: { name: "Agrovestors Team" },
      publishedAt: "2025-05-01T12:00:00Z",
      body: [
        {
          _type: "block",
          children: [{ _type: "span", text: "Agrovestors is revolutionizing farming in Nigeria." }],
        },
      ],
    },
    {
      _id: "post-2",
      title: "IntelliFeed360: The Future of Feed Management",
      description: "Our AI platform optimizes livestock feed efficiency.",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpe",
      slug: { current: "intellifeed360-future" },
      author: { name: "Agrovestors Team" },
      publishedAt: "2025-04-15T12:00:00Z",
      body: [
        {
          _type: "block",
          children: [{ _type: "span", text: "IntelliFeed360 uses AI to improve feed efficiency." }],
        },
      ],
    },
  ];

  const post = posts.find((p) => p.slug.current === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen py-16 px-6">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 fade-in-left">
            {post.title}
          </h1>
          <p className="text-lg text-gray-200 mb-4">{post.description}</p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>By {post.author.name}</span>
            <span className="mx-2">•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>
        <div className="relative w-full h-96 mb-8">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            quality={90}
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        <section className="text-gray-200 prose prose-invert prose-lg mx-auto">
          <PortableText value={post.body} />
        </section>
      </article>
    </div>
  );
}