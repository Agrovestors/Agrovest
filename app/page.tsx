'use client';

import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen pt-20">
        <Hero />
        <section className="py-16 px-6" aria-labelledby="team-heading">
          <TeamCarousel />
        </section>
      </main>
      <Footer />
    </>
  );
}
