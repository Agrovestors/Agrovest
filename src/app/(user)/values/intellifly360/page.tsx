import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "IntelliFly360 | Agrovestors Farm Tech",
  description: "Discover IntelliFly360, our innovative solution for sustainable agriculture.",
  keywords: ["IntelliFly360", "agritech", "sustainable farming"],
  openGraph: {
    title: "IntelliFly360 - Agrovestors Farm Tech",
    description: "Discover IntelliFly360, our innovative solution for sustainable agriculture.",
    url: "https://agrovestors.com/values/intellifly360",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/values/intellifly360" },
};

export default function IntelliFly360() {
  return (
    <div className="intellifly360-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="pt-16 pb-20 px-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-8 md:p-12 mb-12 fade-in-left">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bounce-in">
              Intellifly360 – The Future of Sustainable Protein
            </h1>
            <p className="text-lg md:text-xl leading-relaxed fade-in-left" style={{ animationDelay: "100ms" }}>
              Turning waste into wealth through black soldier fly farming.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/918869b06d74f878a136cce82b7465a63901dc95-1755x1240.jpg"
              alt="Black soldier fly larvae in a farm setting"
              width={4160}
              height={6240}
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105 pulse-hover"
              priority
            />
          </div>
        </section>

        {/* Main Content Section */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why Black Soldier Flies?
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            At Agrovestors, we’re revolutionizing agriculture with Intellifly360, our innovation hub for black soldier fly (BSF) farming. BSFs are nature’s cleanup crew, converting organic waste into high-protein animal feed and organic fertilizer, tackling food waste, feed costs, and pollution.
          </p>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
            <li>High-quality larvae rich in protein and fat for poultry, fish, and pigs</li>
            <li>Organic fertilizer (frass) from their castings</li>
            <li>Marketable value for feed producers and farmers</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Benefits</h3>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
            <li>Up to 50% protein content in larvae</li>
            <li>Grows from egg to harvestable larvae in just 14 days</li>
            <li>Can reduce feeding costs by 30–60%</li>
            <li>Cuts methane emissions from waste, fighting climate change</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Our Process</h3>
          <ol className="list-decimal list-inside text-gray-200 space-y-2 max-w-2xl mx-auto">
            <li><span className="text-green-400 font-semibold">Waste Collection:</span> Gather agricultural and organic waste.</li>
            <li><span className="text-green-400 font-semibold">BSF Breeding & Hatching:</span> Hatch eggs in controlled units.</li>
            <li><span className="text-green-400 font-semibold">Feeding & Harvesting:</span> Feed larvae waste until peak protein value.</li>
            <li><span className="text-green-400 font-semibold">Processing:</span> Process larvae into feed; residue becomes fertilizer.</li>
            <li><span className="text-green-400 font-semibold">Distribution:</span> Supply BSF products to farmers and producers.</li>
          </ol>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Benefits to Farmers</h3>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
            <li>Affordable protein source for livestock and fish</li>
            <li>Organic fertilizer for soil health and crop yield</li>
            <li>New income stream through BSF farming</li>
            <li>Eco-friendly farming for climate resilience</li>
          </ul>
        </section>

        {/* Get Involved Section */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Get Involved with Intellifly360
          </h2>
          <p className="text-lg text-gray-200 mb-6 text-center">
            Whether you’re a farmer, agripreneur, student, or investor, there’s a place for you in the Intellifly360 ecosystem.
          </p>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto mb-8">
            <li>Buy BSF larvae or feed for poultry or fish</li>
            <li>Learn to start your own BSF unit</li>
            <li>Partner on waste collection or research</li>
            <li>Attend BSF farming training sessions</li>
          </ul>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://whatsapp.com/channel/0029VbARGiQ1Hspxuq3Izp30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-400 font-semibold transition-transform duration-300 hover:scale-105"
              aria-label="Join Intellifly360 WhatsApp community"
            >
              <span>Join our WhatsApp Community to Learn More</span>
              <FaWhatsapp size={32} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <Link
              href="/contact"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors duration-300 glow-hover"
              aria-label="Request a Starter Kit or Training Info"
            >
              Request a Starter Kit or Training Info
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            What Farmers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg text-gray-200 italic mb-4">
                “Since I started using BSF feed, my poultry feed costs dropped, and my birds look healthier.”
              </p>
              <p className="text-green-400 font-semibold">— Grace, Farmer in Owerri</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg text-gray-200 italic mb-4">
                “The frass fertilizer has boosted my tomato farm yield like never before.”
              </p>
              <p className="text-green-400 font-semibold">— Uche, Urban Farmer in Aba</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg text-gray-200 italic mb-4">
                “BSF feed cut my fish farming costs by half, and my catfish are growing faster.”
              </p>
              <p className="text-green-400 font-semibold">— Chidi, Fish Farmer in Enugu</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg text-gray-200 italic mb-4">
                “Using frass on my maize farm improved soil fertility and doubled my harvest.”
              </p>
              <p className="text-green-400 font-semibold">— Ngozi, Farmer in Imo</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center fade-in-left">
            Intellifly360 in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/4d59c33d9f8734c386351a046b0921ea8f24e740-6000x4000.jpg",
                alt: "Black soldier fly",
                width: 6000,
                height: 4000,
              },
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/accb703336a775c288971512b32beb0ae44ff226-3235x2116.jpg",
                alt: "Zoomed-in black soldier fly",
                width: 3235,
                height: 2116,
              },
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/d282e14da3c3c04325a26ab2733a13900d6e14be-2064x1421.png",
                alt: "Personnel discussing Intellifly360",
                width: 2064,
                height: 1421,
              },
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/b7b4e84be649b48571fcb2f7533733104376a52e-2560x1771.png",
                alt: "Personnel showcasing BSF products",
                width: 2560,
                height: 1771,
              },
            ].map((image, index) => (
              <div
                key={image.src}
                className="relative overflow-hidden rounded-lg shadow-md fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 pulse-hover"
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}