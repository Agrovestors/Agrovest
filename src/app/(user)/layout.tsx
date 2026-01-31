import type { Metadata } from "next";
import "../globals.css";
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
};

export default function UserLayout({
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
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
