"use client";

import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const navigation = [
    {
      title: "About",
      links: [
        { title: "A.F-Tech", href: "/about/af-tech" },
        { title: "Meet Our Team", href: "/meet-our-team" },
        { title: "Vision and Mission", href: "/mission" },
        { title: "Our Legacy", href: "/about/legacy" },
        { title: "Philosophy", href: "/about/philosophy" },
      ],
    },
    {
      title: "Our Values",
      links: [
        { title: "Research", href: "/values/research" },
        { title: "Animal Production", href: "/values/production" },
        { title: "IntelliFly360", href: "/values/intellifly360" },
        { title: "IntelliFeed360", href: "/values/intellifeed360" },
        { title: "Food Security", href: "/values/food-security" },
      ],
    },
    { title: "Community", links: [{ title: "Community", href: "/community" }] },
    {
      title: "A.F-Tech Center",
      links: [{ title: "A.F-Tech Center", href: "/af-tech-center" }],
    },
    {
      title: "Media",
      links: [
        { title: "The Farmers’ Insight", href: "/media/farmers-insight" },
        { title: "News", href: "/media/news" },
      ],
    },
    { title: "Contact", links: [{ title: "Contact Us", href: "/contact" }] },
    {
      title: "Resources",
      links: [
        { title: "FAQ", href: "/faq" },
        { title: "Careers", href: "/careers" },
        { title: "Case Studies", href: "/case-studies" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

  const socialLinks = [
    {
      Icon: BsFacebook,
      href: "https://www.facebook.com/share/1AWG5ZVeHt/",
      label: "Facebook",
    },
    {
      Icon: BsYoutube,
      href: "https://youtube.com/@agrovestorsfarm-tech?si=uA66iKVW1xqyB7Xo",
      label: "YouTube",
    },
    {
      Icon: BsInstagram,
      href: "https://www.instagram.com/agrovestorsfarmtech?utm_source=qr&igsh=OHZxZ2d0bGJqb3Vn",
      label: "Instagram",
    },
    {
      Icon: BsWhatsapp,
      href: "https://whatsapp.com/channel/0029VbB7L0ND38CSUqHSJy0Q",
      label: "WhatsApp",
    },
  ];



  return (
    <footer
      className="w-full bg-gradient-to-b from-[#022c22] to-[#014d39] py-16 px-6 text-gray-100 relative overflow-hidden"
      aria-label="Footer"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
        .animate-delay-400 { animation-delay: 400ms; }
      `}</style>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/8637c25a4a4f98bd29fbbf0502dea0402560946a-5000x5000.png"
          alt="Leaf background"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
        />
      </div>

      <Container className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        <div className="flex flex-col items-start animate-fade-in-up">
          <Link href="/" className="flex items-center group" aria-label="Agrovestors Farm Tech Home">
            <Image
              src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png"
              alt="Agrovestors Farm Tech Logo"
              width={60}
              height={60}
              priority
              quality={80}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <span className="text-white text-2xl font-bold ml-3 group-hover:text-green-400 transition-colors duration-300">
              Agrovestors
            </span>
          </Link>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-xs">
            Empowering farmers across Africa with sustainable agriculture and cutting-edge technology.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-all duration-300 hover:scale-125 hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]"
                aria-label={`Follow us on ${label}`}
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {navigation.slice(0, 3).map((section, index) => (
          <div key={section.title} className={`flex flex-col animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
            <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm transition-all duration-300 hover:text-green-400 hover:pl-2 hover:drop-shadow-[0_0_4px_rgba(74,222,128,0.3)]"
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col animate-fade-in-up animate-delay-400">
          <h3 className="text-lg font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-300 mb-4 max-w-xs">
            Subscribe for the latest agritech insights and updates from Agrovestors.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
              aria-label="Email for newsletter"
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            {isSubscribed && (
              <p className="text-green-400 text-xs">Subscribed successfully!</p>
            )}
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 hover:scale-105 transition-all duration-200"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
          <h3 className="text-lg font-bold text-white mt-6 mb-4">Resources</h3>
          <ul className="space-y-2">
            {navigation.find((section) => section.title === "Resources")?.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-300 text-sm transition-all duration-300 hover:text-green-400 hover:pl-2 hover:drop-shadow-[0_0_4px_rgba(74,222,128,0.3)]"
                  aria-label={link.title}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="w-full mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 relative z-10">
        <p className="animate-fade-in-up">
          © {new Date().getFullYear()} Agrovestors Farm Tech. All Rights Reserved.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Agrovestors Farm Tech",
            url: "https://agrovestors.com",
            logo: "https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png",
            description: "Agrovestors Farm Tech provides innovative and sustainable agriculture solutions.",
            sameAs: socialLinks.map((link) => link.href),
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@agrovestors.com",
              contactType: "Customer Service",
            },
          }),
        }}
      />
    </footer>
  );
};

export default Footer;