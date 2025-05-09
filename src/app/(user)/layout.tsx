import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrovestors App | Your blogging guideline",
  description: "This is the Agrovestors app boundary!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-20`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
