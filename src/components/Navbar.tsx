"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";

interface NavDropdown {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

const NAV_LINKS: NavDropdown[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Values",
    items: [
      { label: "Our Mission", href: "/values" },
      { label: "Research & Production", href: "/values/research" },
      { label: "Intellifeed360", href: "/values/intellifeed360" },
      { label: "IntelliPy360", href: "/values/intellifly360" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "A.F-Tech", href: "/af-tech-center" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-gradient-to-r from-green-900 to-green-700 dark:from-green-950 dark:to-green-800 shadow-lg z-50 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Agrovestors Home"
          >
            <Image
              src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png"
              alt="Agrovestors Logo"
              width={40}
              height={40}
              priority
              className="w-10 h-10"
            />
            <span className="hidden sm:block text-white font-bold text-sm md:text-base whitespace-nowrap">
              Agrovestors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center px-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200 flex items-center gap-1">
                    {link.label}
                    <FiChevronDown className="w-4 h-4" />
                  </button>
                )}

                {/* Dropdown Menu */}
                {link.items && (
                  <div className="hidden group-hover:block absolute left-0 mt-0 bg-green-800 dark:bg-green-900 rounded-md shadow-lg py-2 min-w-48 z-50">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-green-700 dark:hover:bg-green-800 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-white" />
              ) : (
                <FiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-green-900 dark:bg-green-950 border-t border-white/10 absolute top-16 md:top-20 left-0 w-full shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                    >
                      {link.label}
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && link.items && (
                      <div className="bg-green-800 dark:bg-green-900 rounded-md py-2 ml-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-green-700 dark:hover:bg-green-800 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
