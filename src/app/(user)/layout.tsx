import { ReactNode } from "react";
import type { Metadata } from "next";
import "../globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Agrovestors Farm Tech - Sustainable Agriculture Solutions",
    template: "%s | Agrovestors Farm Tech",
  },
  description: "Discover innovative farming solutions with Agrovestors Farm Tech. Explore sustainable agriculture, expert insights, and cutting-edge farm technology.",
};

export default function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          <NavbarWrapper />
          <main className="pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
