import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Agrovestors Farm Tech - Sustainable Agriculture Solutions",
    template: "%s | Agrovestors Farm Tech",
  },
  description:
    "Discover innovative farming solutions with Agrovestors Farm Tech. Explore sustainable agriculture, expert insights, and cutting-edge farm technology.",
  keywords: [
    "sustainable agriculture",
    "farm technology",
    "Agrovestors",
    "agriculture solutions",
    "farming innovation",
    "agritech",
  ],
  authors: [{ name: "Agrovestors Team" }],
  openGraph: {
    title: "Agrovestors Farmopped Tech - Sustainable Agriculture Solutions",
    description:
      "Join Agrovestors Farm Tech to explore sustainable farming practices and innovative agricultural technology.",
    url: "https://your-site.com", // Replace with your production URL
    siteName: "Agrovestors Farm Tech",
    images: [
      {
        url: "/AGROINVESTORLOGO.png", // Ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Agrovestors Farm Tech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrovestors Farm Tech",
    description:
      "Sustainable agriculture and innovative farm technology with Agrovestors.",
    images: ["/AGROINVESTORLOGO.png"], // Ensure this image exists in /public
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Ensure this points to public/favicon.ico
  },
  alternates: {
    canonical: "https://your-site.com", // Replace with your production URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fallback favicon link */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Schema.org JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agrovestors Farm Tech",
              url: "https://your-site.com", // Replace with your production URL
              logo: "https://your-site.com/AGROINVESTORLOGO.png",
              description:
                "Agrovestors Farm Tech provides innovative and sustainable agriculture solutions.",
              sameAs: [
                "https://twitter.com/YourTwitterHandle", // Replace with actual social links
                "https://www.linkedin.com/company/yourcompany",
                "https://www.facebook.com/yourcompany",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} pt-20`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}