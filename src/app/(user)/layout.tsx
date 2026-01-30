import type { Metadata } from 'next';
import '../style/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Agrovestors Farm Tech - Sustainable Agriculture Solutions',
  description: 'Discover innovative farming solutions with Agrovestors Farm Tech.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
