"use client";

import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <Hero />
      <section className="py-16 px-6">
        <TeamCarousel />
      </section>
    </main>
  );
}
