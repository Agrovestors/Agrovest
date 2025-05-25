import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export default function PostPage({ params }: { params: { slug: string } }) {
  const posts = [
    {
      _id: "post-1",
      title: "Advancing Sustainable Agriculture in Nigeria",
      description: "How Agrovestors is transforming farming with technology.",
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6eebda830b2c46d839a20b7b9f0a5667a99f5cf2-5616x3744.jpg",
      slug: { current: "sustainable-agriculture-nigeria" },
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
      mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpg",
      slug: { current: "intellifeed360-future" },
      body: [
        {
          _type: "block",
          children: [{ _type: "span", text: "IntelliFeed360 uses AI to improve feed efficiency." }],
        },
      ],
    },
  ];

  const post = posts.find((p) => p.slug.current === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-white mb-4 fade-in-left">{post.title}</h1>
      <div className="text-gray-200 prose prose-invert">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}