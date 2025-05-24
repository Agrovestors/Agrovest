import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Metadata } from "next";

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->,
  "mainImage": mainImage.asset->url,
  publishedAt,
  slug
} | order(_createdAt desc)`;

export async function generateMetadata(): Promise<Metadata> {
  const posts = await client.fetch(query);
  const latestPost = posts[0] || {};

  return {
    title: "Agrovestors Farm Tech",
    description:
      latestPost?.title
        ? `Explore the latest in sustainable agriculture: ${latestPost.title}`
        : "Discover innovative farming solutions with Agrovestors Farm Tech.",
    openGraph: {
      title: "Agrovestors Farm Tech - Latest in Agriculture",
      description:
        latestPost?.title
          ? `Read our latest post: ${latestPost.title}`
          : "Sustainable agriculture and farm technology insights.",
      url: "https://agrovestors.com",
      images: latestPost?.mainImage
        ? [
            {
              url: latestPost.mainImage,
              width: 1200,
              height: 630,
              alt: latestPost.title || "Agrovestors Farm Tech",
            },
          ]
        : [{ url: "/AGROINVESTORLOGO.png", width: 1080, height: 763, alt: "Agrovestors Logo" }],
    },
    alternates: {
      canonical: "https://agrovestors.com",
    },
  };
}

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main>
      <Hero />
      <section aria-labelledby="blog-heading">
        <h2 id="blog-heading" className="sr-only">
          Latest Blog Posts
        </h2>
        <BlogContent posts={posts} />
      </section>
      <section aria-labelledby="team-heading">
        <h2 id="team-heading" className="sr-only">
          Our Team
        </h2>
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
            blogPost: posts.map((post: any) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.publishedAt,
              author: {
                "@type": "Person",
                name: post.author?.name,
              },
              image: post.mainImage,
              url: `https://agrovestors.com/post/${post.slug?.current}`,
              description: post.description || post.title,
            })),
          }),
        }}
      />
    </main>
  );
}
