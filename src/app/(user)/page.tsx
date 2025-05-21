import BlogContent from "@/components/BlogContent";
   import Hero from "@/components/Hero";
   import TeamCarousel from "@/components/TeamCarousel";
   import { client } from "@/sanity/lib/client";
   import { urlFor } from "@/sanity/lib/image";
   import { groq } from "next-sanity";
   import { Metadata } from "next";
   import { Post } from "@/sanity/types";

   export const revalidate = 30; // Revalidate every 30 seconds for fresh content

   const getAllPosts = groq`*[_type == 'post']{
     _id,
     _type,
     _createdAt,
     _rev,
     _updatedAt,
     title,
     slug,
     mainImage { asset->{_ref}, alt },
     description,
     publishedAt,
     author->{
       _id,
       _type,
       _createdAt,
       _rev,
       _updatedAt,
       name,
       slug,
       image { asset->{_ref}, alt },
       description
     },
     categories[]->{
       _id,
       title
     }
   } | order(_createdAt desc)`;

   export async function generateMetadata(): Promise<Metadata> {
     const posts: Post[] = await client.fetch(getAllPosts);
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
                 url: urlFor(latestPost.mainImage).width(1200).height(630).url(),
                 width: 1200,
                 height: 630,
                 alt: latestPost.mainImage.alt || "Agrovestors Farm Tech",
               },
             ]
           : [
               {
                 url: "/AGROINVESTORLOGO.png",
                 width: 1200,
                 height: 630,
                 alt: "Agrovestors Farm Tech",
               },
             ],
       },
       alternates: {
         canonical: "https://your-site.com", // Replace with your production URL
       },
     };
   }

   export default async function Home() {
     const posts: Post[] = await client.fetch(getAllPosts);

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
               blogPost: posts.map((post) => ({
                 "@type": "BlogPosting",
                 headline: post.title,
                 datePublished: post.publishedAt,
                 author: {
                   "@type": "Person",
                   name: post.author?.name,
                 },
                 image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
                 url: `https://your-site.com/post/${post.slug?.current}`,
                 description: post.description || post.title,
               })),
             }),
           }}
         />
       </main>
     );
   }