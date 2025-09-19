import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "IntelliFeed360 | Agrovestors Farm Tech",
  description: "Discover IntelliFeed360, our innovative solution for sustainable agriculture.",
  keywords: ["IntelliFeed360", "agritech", "sustainable farming"],
  openGraph: {
    title: "IntelliFeed360 - Agrovestors Farm Tech",
    description: "Discover IntelliFeed360, our innovative solution for sustainable agriculture.",
    url: "https://agrovestors.com/values/intellifeed360",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        width: 1080,
        height: 763,
        alt: "Agrovestors Logo",
      },
    ],
  },
  alternates: { canonical: "https://agrovestors.com/values/intellifeed360" },
};

export default function IntelliFeed360() {
  return (
    <div className="intellifeed360-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Container className="pt-16 pb-20 px-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-8 md:p-12 mb-12 animate-fade-in-up">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bounce-in">
              IntelliFeed360 – Smarter Livestock Feeding, Healthier Farms
            </h1>
            <p className="text-lg md:text-xl leading-relaxed fade-in-left" style={{ animationDelay: "100ms" }}>
              Transforming livestock farming with smart feed formulation and real-time health monitoring.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/77039c41b66e34601d0ac5d1f65de1086c0ffea8-5760x3840.jpg"
              alt="IntelliFeed360 livestock"
              width={5760}
              height={3840}
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
            What Is IntelliFeed360?
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            IntelliFeed360 is a prototype system revolutionizing livestock farming by combining smart feed formulation with IoT-based animal health monitoring. It helps farmers create cost-effective feed, track animal well-being in real time, and make data-driven decisions via a mobile-friendly dashboard.
          </p>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
            <li>Custom, cost-effective feed mixes using local ingredients</li>
            <li>Real-time health monitoring with wearable sensors</li>
            <li>Predictive insights for feed efficiency</li>
            <li>Remote access via mobile dashboard</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Features</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-200"><span className="text-green-400 font-semibold">1. Smart Feed Formulation:</span> Automates feed mixing with load cells, stepper motors, and sensors for precise, nutritionally balanced batches at reduced costs.</p>
            <p className="text-lg text-gray-200"><span className="text-green-400 font-semibold">2. IoT-Enabled Health Monitoring:</span> Non-invasive devices track body temperature, heart rate, hydration, and GPS location, sending instant alerts for anomalies.</p>
            <p className="text-lg text-gray-200"><span className="text-green-400 font-semibold">3. Predictive Feed Insights:</span> Analyzes sensor data to optimize feed rationing, reduce waste, and promote healthy weight gain.</p>
            <p className="text-lg text-gray-200"><span className="text-green-400 font-semibold">4. Real-Time Dashboard & Alerts:</span> Mobile-friendly interface to monitor livestock, environmental conditions, feeding alerts, and animal locations.</p>
          </div>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Technology Behind the System</h3>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
            <li>ESP32 & Raspberry Pi – system core</li>
            <li>Sensors – DHT22 (temperature/humidity), HX711 (weight), GPS, RFID</li>
            <li>LoRa Modules – long-range, low-power communication</li>
            <li>Cloud Gateway – remote access and backup</li>
            <li>Optional Touchscreen – on-site interaction</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why It Matters</h3>
          <ul className="list-disc list-inside text-green-400 font-semibold space-y-2 max-w-2xl mx-auto">
            <li>Lowers feed costs and waste</li>
            <li>Improves animal health and welfare</li>
            <li>Enables data-driven decisions</li>
            <li>Promotes precision livestock farming</li>
          </ul>
        </section>

        {/* Join the Revolution Section */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Join the Revolution
          </h2>
          <p className="text-lg text-gray-200 mb-6 text-center">
            We’re prototyping IntelliFeed360 and seeking pilot users, investors, and partners to shape the future of livestock farming.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://chat.whatsapp.com/INVITE_CODE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-400 font-semibold transition-transform duration-300 hover:scale-105"
              aria-label="Join IntelliFeed360 WhatsApp community"
            >
              <span>Join our WhatsApp Community</span>
              <FaWhatsapp size={32} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <Link
              href="/contact"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors duration-300 glow-hover"
              aria-label="Contact Us to Get Involved"
            >
              Contact Us to Get Involved
            </Link>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center fade-in-left">
            IntelliFeed360 in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/1a04f689053a2786f2b16d50724e97a803f998dd-7360x4912.jpg",
                alt: "Livestock in field",
                width: 7360,
                height: 4912,
              },
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/e1e5765c3d7cbeb3fe977b3b70d92a43b3a3d1aa-3000x2000.jpg",
                alt: "Cows grazing",
                width: 3000,
                height: 2000,
              },
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8974bd59052044aff41629691c332a4ef922942c-3692x2082.jpg",
                alt: "Livestock monitoring",
                width: 3692,
                height: 2082,
              },
              {
                src: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/ea253d7333c0a06a420c6f15ee76e2e4f98eb453-612x394.jpg",
                alt: "Farm animals",
                width: 612,
                height: 394,
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