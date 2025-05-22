import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Metadata } from "next";

export const revalidate = 30; // Revalidate every 30 seconds for fresh content

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->,
  mainImage,
  publishedAt,
  slug
} | order(_createdAt desc)`; // Changed to desc for newest posts first

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
      images: latestPost?.mainImage
        ? [
            {
              url: latestPost.mainImage.asset.url,
              width: 1200,
              height: 630,
              alt: latestPost.title || "Agrovestors Farm Tech",
            },
          ]
        : ["/AGROINVESTORLOGO.png"],
    },
    alternates: {
      canonical: "https://your-site.com", // Replace with your production URL
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
      {/* Schema.org JSON-LD for Blog Posts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Agrovestors Farm Tech Blog",
            url: "https://your-site.com", // Replace with your production URL
            blogPost: posts.map((post: any) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.publishedAt,
              author: {
                "@type": "Person",
                name: post.author?.name,
              },
              image: post.mainImage?.asset.url,
              url: `https://your-site.com/post/${post.slug?.current}`,
              description: post.description || post.title,
            })),
          }),
        }}
      />
    </main>
  );
}