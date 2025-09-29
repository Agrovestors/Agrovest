import Image from "next/image";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={value.url}
            alt="Post image"
            width={700}
            height={700}
            className="object-contain py-6"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5 text-gray-200">{children}</ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="ml-10 py-5 list-decimal text-gray-200">{children}</ol>
  ),
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold text-white">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold text-white">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold text-white">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold text-white">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-green-400 border-l-4 pl-5 py-5 my-5 text-gray-200">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-200 py-2">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href?.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline text-green-400 hover:text-green-300">
          {children}
        </Link>
      );
    },
  },
};