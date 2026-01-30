import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const legacy = {
    title: "Our Legacy",
    description: "We envision a legacy that stands the test of time—a legacy rooted in innovation, technology, collaboration, and sustainable growth.",
  };
  return {
    title: legacy.title,
    description: legacy.description,
    openGraph: {
      title: legacy.title,
      description: legacy.description,
      url: "https://agrovestors.com/about/legacy",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
          width: 1080,
          height: 763,
          alt: "Agrovestors Logo",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/about/legacy" },
  };
}

export default function Legacy() {
  const legacy = {
    title: "Our Legacy",
    description: "We envision a legacy that stands the test of time—a legacy rooted in innovation, technology, collaboration, and sustainable growth.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/5ffd6b019f945fb3a621e2af1be028b9309038c5-612x408.jpg",
    content: "Our legacy is built on innovation, sustainability, and collaboration in transforming African agriculture.",
  };

  const data = legacy;

  const sections = [
    {
      title: "Championing Sustainable Agribusiness Solutions",
      description: "Our commitment to sustainability goes beyond mere words; it is embedded in our actions.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/d9cdf74d4fe8e3184571a05ab16cd1e9e52d8703-612x409.jpg",
      link: "/community",
    },
    {
      title: "Creating a Thriving Technological Ecosystem",
      description:
        "A collaborative network of investors, visionaries, and communities to foster a vibrant, technology-driven agricultural ecosystem, will empower farmers with the knowledge and tools needed to maximize productivity and sustainability.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8ceae45fbac6a7a65d5cba07a31daa5dbac1a8cb-612x344.jpg",
      link: "/af-tech-center",
    },
    {
      title: "Global Leadership and Boundless Innovation",
      description:
        "By embracing innovation and technology, we break down barriers and create a streamlined vehicle for agricultural progress. Our commitment to quality and efficiency ensures that all stakeholders benefit from our advancements, fostering a global agricultural renaissance.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/bb80b0718aabff1a4487ed9ae2fab6448c2dab8a-612x323.jpg",
    },
    {
      title: "Building a Future of Prosperity",
      description:
        "A future where technology and tradition coexist harmoniously, ensuring that agricultural practices are both productive and environmentally responsible.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/227b526492c1d1380554fee0cd525205ef04e9f3-612x408.jpg",
    },
  ];

  return (
    <div className="legacy-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen text-white">
      <Container className="py-20 px-6">
        <section className="relative max-w-5xl mx-auto mb-16">
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={data.mainImage}
              alt={data.title}
              width={1200}
              height={500}
              className="w-full h-full object-cover transform transition-transform duration-1000"
              style={{ transform: "translateY(calc(-50px + var(--scroll-y, 0) * 0.1))" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h1 className="text-5xl sm:text-6xl font-extrabold fade-in-left">{data.title}</h1>
              <p
                className="text-xl sm:text-2xl mt-4 max-w-lg fade-in-left"
                style={{ animationDelay: "100ms" }}
              >
                {data.description}
              </p>
              <p
                className="text-3xl sm:text-4xl font-extrabold mt-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent bounce-in"
                style={{ animationDelay: "200ms" }}
              >
                A profound legacy to be remembered as the pioneers who transformed agriculture, in Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={612}
                  height={
                    section.image.includes("8ceae45")
                      ? 344
                      : section.image.includes("bb80b07")
                      ? 323
                      : section.image.includes("227b526")
                      ? 408
                      : 409
                  }
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 pulse-hover"
                />
              </div>
              <div className="w-full md:w-1/2">
                {section.link ? (
                  <Link
                    href={section.link}
                    className="block cursor-pointer transition-transform duration-300 hover:scale-105 glow-hover tilt-hover"
                  >
                    <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:underline">
                      {section.title}
                    </h2>
                    <p className="text-gray-200">{section.description}</p>
                  </Link>
                ) : (
                  <>
                    <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      {section.title}
                    </h2>
                    <p className="text-gray-200">{section.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto mt-16 relative">
          <Image
            src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/d3952bcd7335e54eca85a7db4699b1895cc1b4df-612x405.jpg"
            alt="Agrovestors Legacy"
            width={1200}
            height={500}
            className="w-full h-[500px] object-cover rounded-xl shadow-2xl pulse-hover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl font-bold text-white text-center fade-in-left">
              Join us in shaping a sustainable future for agriculture.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
