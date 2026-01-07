import Container from "@/components/Container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const newsData = {
        title: "News Updates",
        description: "Stay tuned for the latest news on Agrovestors Farm Tech's innovations, partnerships, and events.",
    };
    return {
        title: `${newsData.title} | Agrovestors Farm Tech`,
        description: newsData.description,
        openGraph: {
            title: `${newsData.title} - Agrovestors Farm Tech`,
            description: newsData.description,
            url: "https://agrovestors.com/media/news",
            images: [
                {
                    url: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/db0ddae930150a4623a509ac0d894e98a54b12ec-2560x1920.png",
                    width: 2560,
                    height: 1920,
                    alt: "Agrovestors News Updates",
                },
            ],
        },
        alternates: { canonical: "https://agrovestors.com/media/news" },
    };
}

export default function News() {
    const newsData = {
        title: "News Updates Coming Soon",
        description: "At Agrovestors Farm Tech, we’re shaping the future of agriculture. Our team is preparing to share exciting news about our latest agritech innovations, strategic partnerships, and upcoming events. Stay tuned for stories that inspire and inform!",
        ctaText: "Want to stay in the loop? Follow us on social media or join our newsletter for the latest updates.",
        mainImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
        teaserImage: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/db0ddae930150a4623a509ac0d894e98a54b12ec-2560x1920.png",
    };

    const data = newsData;

    return (
        <div className="news-page bg-gradient-to-b from-gray-900 to-green-900 min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.mainImage}
                    alt="Agrovestors Background"
                    width={1080}
                    height={763}
                    className="w-full h-full object-cover opacity-10"
                    style={{ filter: "blur(10px)" }}
                    quality={80}
                    sizes="100vw"
                    priority
                />
            </div>
            <Container className="py-16 px-6 relative z-10">
                <section className="max-w-5xl mx-auto text-center">
                    <div className="animate-float-pulse bg-gray-800 bg-opacity-50 p-10 rounded-xl shadow-xl animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{data.title}</h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8">{data.description}</p>
                        <p className="text-base sm:text-lg text-gray-300 mb-6">{data.ctaText}</p>
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Stay Updated
                        </a>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <div className="bg-gray-900/20 p-4 rounded-xl">
                            <Image
                                src={data.teaserImage}
                                alt="Agrovestors News Teaser"
                                width={2560}
                                height={720}
                                className="max-w-5xl w-full h-auto rounded-lg shadow-2xl border-4 border-green-700 transition-transform duration-300 hover:scale-110 hover:rotate-2 animate-fade-in-up-image aspect-[16/9] object-cover"
                                style={{ animationDelay: "300ms" }}
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 1280px"
                            />
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}