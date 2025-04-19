import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Passionate about transforming agriculture!",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "Innovating for a sustainable future.",
  },
  {
    name: "Mark Lee",
    role: "Lead Developer",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "Building tools to empower farmers.",
  },
  {
    name: "Sara Khan",
    role: "Product Manager",
    imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    quote: "Driven to create impactful solutions.",
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc: "/dev.jpg",
    quote: "Enthusiastic about coding for change!",
  },
];

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main>
      <Hero />
      <BlogContent posts={posts} />

      <div className="team-section py-20 px-10 lg:px-40">
        <h2 className="text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="inline-block w-96 bg-white p-8 shadow-lg rounded-lg text-center mx-6"
              >
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={112} // 28 * 4 (to match w-28)
                  height={112} // 28 * 4 (to match h-28)
                  className="object-cover rounded-full mb-4 border-4 border-green-500 mx-auto"
                />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-600 text-lg">{member.role}</p>
                <p className="text-blue-600 text-base italic mt-2 px-4 break-words hyphens-auto max-h-16 overflow-y-visible">
                  &quot;{member.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}