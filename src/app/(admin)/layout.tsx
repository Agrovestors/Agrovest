import "../style/globals.css";

export const metadata = {
  title: "Agrovestors Studio",
  description: "Agrovestors Farm Tech Content Management Studio",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
