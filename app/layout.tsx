import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    title: "Agrovestors Farm Tech - Sustainable Agriculture Solutions",
    description:
      "Join Agrovestors Farm Tech to explore sustainable farming practices and innovative agricultural technology.",
    url: "https://agrovestors.com",
    siteName: "Agrovestors Farm Tech",
    images: [
      {
        url: "/AGROINVESTORLOGO.png",
        width: 1080,
        height: 763,
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
    images: ["/AGROINVESTORLOGO.png"],
    creator: "@AgrovestorsTech",
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
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://agrovestors.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="font-sans pt-20" suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
