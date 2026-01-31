"use client";

import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home() {
  const posts = [
    {
      _id: "post-1",
      _type: "post",
      _createdAt: "2025-05-01T12:00:00Z",
      _updatedAt: "2025-05-01T12:00:00Z",
      _rev: "rev-1",
      title: "Advancing Sustainable Agriculture in Nigeria",
      description: "How Agrovestors is transforming farming with technology.",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpg",
      publishedAt: "2025-05-01T12:00:00Z",
      slug: { current: "sustainable-agriculture-nigeria", _type: "slug" },
      author: { name: "Agrovestors Team", _type: "author" },
      body: [],
      categories: [{ title: "Sustainability", _id: "cat-1", _type: "category" }],
    },
    {
      _id: "post-2",
      _type: "post",
      _createdAt: "2025-04-15T12:00:00Z",
      _updatedAt: "2025-04-15T12:00:00Z",
      _rev: "rev-2",
      title: "IntelliFeed360: The Future of Feed Management",
      description: "Our AI platform optimizes livestock feed efficiency.",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpg",
      publishedAt: "2025-04-15T12:00:00Z",
      slug: { current: "intellifeed360-future", _type: "slug" },
      author: { name: "Agrovestors Team", _type: "author" },
      body: [],
      categories: [{ title: "Technology", _id: "cat-2", _type: "category" }],
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Hero />

      <section className="py-16 px-6" aria-labelledby="team-heading">

        <TeamCarousel />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Agrovestors Farm Tech Blog",
            url: "https://agrovestors.com",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.publishedAt,
              author: {
                "@type": "Person",
                name: post.author.name,
              },
              image: post.mainImage,
              url: `https://agrovestors.com/post/${post.slug.current}`,
              description: post.description,
            })),
          }),
        }}
      />
    </main>
  );
}
