
import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { BsLinkedin } from "react-icons/bs";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://www.linkedin.com/in/john-doe/",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://www.linkedin.com/in/jane-smith/",
  },
  {
    name: "Mark Lee",
    role: "Lead Developer",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    link: "https://www.linkedin.com/in/mark-lee/",
  },
  {
    name: "Sara Khan",
    role: "Product Manager",
    imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    link: "https://www.linkedin.com/in/sara-khan/",
  },
  {
    name: "Godwin Adakonye John",
    role: "Fullstack Developer",
    imgSrc: "/dev.jpg",
    link: "https://www.linkedin.com/in/godwin-john-15a775287/",
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
                className="inline-block w-72 bg-white p-6 shadow-lg rounded-lg text-center mx-4"
              >
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-green-500 mx-auto"
                  />
                </a>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-600 text-lg">{member.role}</p>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin
                    className="text-blue-600 mx-auto mt-3 transition-transform duration-300 hover:scale-110"
                    size={28}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

