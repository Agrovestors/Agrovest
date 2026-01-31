import type { Metadata } from "next";
import "../src/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agrovestors Farm Tech",
    template: "%s | Agrovestors Farm Tech",
  },
  description: "Sustainable agriculture solutions and farm technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
