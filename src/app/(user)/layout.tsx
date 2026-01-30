import type { Metadata } from "next";
import "../style/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Agrovestors Farm Tech - Sustainable Agriculture Solutions",
  description: "Discover innovative farming solutions with Agrovestors Farm Tech.",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="pt-20">
        {children}
      </div>
    </ThemeProvider>
  );
}
