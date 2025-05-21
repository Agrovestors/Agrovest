import { groq } from "next-sanity";
import { Post } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/Container";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const getAllPostSlugs = groq`*[_type == 'post']{
    slug
  }`;
  const slugs: Post[] = await client.fetch(getAllPostSlugs);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const postBySlug = groq`*[_type == 'post' && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage { asset->{_ref}, alt },
  body,
  publishedAt,
  author->{
    name,
    image { asset->{_ref}, alt },
    description
  }
}`;

const SlugPage = async ({ params: { slug } }: Props) => {
  const post: Post = await client.fetch(postBySlug, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container className="mb-10">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            width={500}
            height={500}
            alt={post?.mainImage?.alt || "main image"}
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            width={200}
            height={200}
            alt={post?.author?.image?.alt || "author image"}
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl text-[#5442ae] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking-wide text-sm">
            {post?.author?.description}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="_blank"
              className="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href={"https://github.com"}
              target="_blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="w-10 h-10 bg-[#3e5b98] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"https://instagram.com"}
              target="_blank"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://linkedin.com"}
              target="_blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;