import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const philosophy = {
    title: "Our Philosophy",
    description: "We believe that the future of agriculture lies in our ability to integrate cutting-edge technology with sustainable practices.",
  };
  return {
    title: philosophy.title,
    description: philosophy.description,
    openGraph: {
      title: philosophy.title,
      description: philosophy.description,
      url: "https://agrovestors.com/about/philosophy",
      images: [
        {
          url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
          width: 1080,
          height: 763,
          alt: "Agrovestors Logo",
        },
      ],
    },
    alternates: { canonical: "https://agrovestors.com/about/philosophy" },
  };
}

export default function Philosophy() {
  const philosophy = {
    title: "Our Philosophy",
    description: "We believe that the future of agriculture lies in our ability to integrate cutting-edge technology with sustainable practices.",
    mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/cf85c9e65303dcb4c9dcc48b3a4c1bb870983cb7-612x408.jpg",
    content: "Our philosophy is rooted in sustainability, innovation, and community empowerment.",
  };

  const data = philosophy;

  const values = [
    {
      title: "Innovation",
      description: "Innovation is a catalyst for change, a driving force behind agricultural transformation.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b664142d398bd64801f26ada8a734fcf5a3a4d69-3840x2160.jpg",
    },
    {
      title: "Sustainability",
      description: "Sustainability is the cornerstone of operations.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8a8a4733fb9667c2eac02312a57f81ea12d937fd-612x408.jpg",
    },
    {
      title: "Collaboration",
      description: "True progress is achieved through Collaboration.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/f18981f2509046f3559876ebc166fefe97a72240-612x390.jpg",
    },
    {
      title: "Ethical Integrity and Excellence",
      description: "A vision without Ethical Integrity and Excellence is a waste of energy and resources.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/0c695d1b3e40801dcdac42f48d979d1223df18dc-612x344.jpg",
    },
    {
      title: "Adaptability and Resilience",
      description: "Adaptability and Resilience are essential tools that drive refined success.",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/6b3d894fd7fd758af876268da283dea64dc311bc-612x408.jpg",
    },
    {
      title: "Visioned Leadership",
      description: "With all these, a Visioned Leadership is POSSIBLE!",
      image: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/49afe0f77b6ffa21dba5b2fdca906477730e0f09-612x422.jpg",
    },
  ];

  return (
    <div className="philosophy-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="py-16 px-6">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 fade-in-left">{data.title}</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 fade-in-left" style={{ animationDelay: "100ms" }}>
            {data.description}
          </p>
          <p
            className="text-2xl sm:text-3xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent bounce-in"
            style={{ animationDelay: "200ms" }}
          >
            “When we invest in the future and cultivate innovation, we harvest prosperity.”
          </p>
          <Image
            src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/cf85c9e65303dcb4c9dcc48b3a4c1bb870983cb7-612x408.jpg"
            alt="Philosophy Quote"
            width={612}
            height={408}
            className="w-full h-[400px] object-cover rounded-lg shadow-md mb-8 transition-transform duration-300 hover:scale-105 pulse-hover"
            priority
          />
          <p className="text-lg sm:text-xl text-gray-200 mb-8 fade-in-left" style={{ animationDelay: "300ms" }}>
            We believe that the future of agriculture lies in our ability to integrate cutting-edge technology with sustainable practices, fostering an ecosystem that benefits not only the present generation but also those to come.
          </p>
        </section>

        <section className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8 fade-in-left">Our Core Values</h2>
          <div className="space-y-8 sm:space-y-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  width={800}
                  height={
                    value.image.includes("b664142") ? 450 :
                    value.image.includes("f18981f") ? 406 :
                    value.image.includes("0c695d1") ? 358 :
                    value.image.includes("49afe0f") ? 439 :
                    425
                  }
                  className="w-full h-[300px] sm:h-[450px] object-contain rounded-lg mb-0 sm:mb-6 transition-transform duration-300 hover:scale-105 pulse-hover"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8 fade-in-left">Our Cultural Value</h2>
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <Image
              src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/deb21cf37fbda2bcaa6094856b123ec009ff7f29-612x408.jpg"
              alt="Our Cultural Value"
              width={800}
              height={408}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md mb-0 sm:mb-6 transition-transform duration-300 hover:scale-105 pulse-hover"
            />
            <p className="text-lg sm:text-xl text-gray-200 fade-in-left" style={{ animationDelay: "100ms" }}>
              Our culture is built on a commitment to sustainability, innovation, and community empowerment, driving us to create a lasting impact in agriculture.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}