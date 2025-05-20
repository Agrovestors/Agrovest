"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../images/AGROINVESTORLOGO.png";

// Define TypeScript interfaces for navigation structure
interface NavItem {
  title: string;
  href: string;
  dropdown?: SubNavItem[];
}

interface SubNavItem {
  title: string;
  href: string;
  items?: SubSubNavItem[]; // Renamed subDropdown to items for consistency
}

interface SubSubNavItem {
  title: string;
  href: string;
  items?: { title: string; href: string }[]; // Allow deeper nesting
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    { title: "Home", href: "/" },
    {
      title: "About",
      href: "/about",
      dropdown: [
        { title: "A.F-Tech", href: "/about/af-tech" },
        { title: "Meet Our Team", href: "/meetOurTeam" },
        { title: "Vision and Mission", href: "/mission" },
        { title: "Our Legacy", href: "/about/legacy" },
        { title: "Philosophy", href: "/about/philosophy" },
      ],
    },
    {
      title: "Our Values",
      href: "/values",
      dropdown: [
        {
          title: "Research",
          href: "/values/research",
          items: [
            {
              title: "Fish Feed & Nutrition",
              href: "/values/research/fish",
              items: [
                { title: "Fries", href: "/values/research/fish/fries" },
                { title: "Fingerlings", href: "/values/research/fish/fingerlings" },
                { title: "Broodstock", href: "/values/research/fish/broodstock" },
                { title: "Parent Stock", href: "/values/research/fish/parent-stock" },
              ],
            },
            {
              title: "Poultry Feed & Nutrition",
              href: "/values/research/poultry",
              items: [
                { title: "Layers", href: "/values/research/poultry/layers" },
                { title: "Broilers", href: "/values/research/poultry/broilers" },
              ],
            },
            {
              title: "Swine & Nutrition",
              href: "/values/research/swine",
              items: [
                { title: "Sows", href: "/values/research/swine/sows" },
                { title: "Piglets", href: "/values/research/swine/piglets" },
                { title: "Grower-Finisher", href: "/values/research/swine/grower-finisher" },
              ],
            },
            {
              title: "Other Sectors",
              href: "/values/research/other",
              items: [
                { title: "Raw Material Quality Check", href: "/values/research/other/raw-material" },
                { title: "Feed Processing/Control", href: "/values/research/other/feed-processing" },
                {
                  title: "Food By-Product Production",
                  href: "/values/research/other/food-byproduct",
                },
              ],
            },
          ],
        },
        {
          title: "Animal Production",
          href: "/values/production",
          items: [
            {
              title: "Fish",
              href: "/values/production/fish",
              items: [
                { title: "Catfish", href: "/values/production/fish/catfish" },
                { title: "Tilapia", href: "/values/production/fish/tilapia" },
              ],
            },
            {
              title: "Poultry",
              href: "/values/production/poultry",
              items: [
                { title: "Layers", href: "/values/production/poultry/layers" },
                { title: "Broilers", href: "/values/production/poultry/broilers" },
              ],
            },
            {
              title: "Swine",
              href: "/values/production/swine",
              items: [
                { title: "Sows", href: "/values/production/swine/sows" },
                { title: "Piglets", href: "/values/production/swine/piglets" },
                { title: "Grower-Finisher", href: "/values/production/swine/grower-finisher" },
              ],
            },
            {
              title: "Other Animals",
              href: "/values/production/other",
              items: [
                { title: "Cows", href: "/values/production/other/cows" },
                { title: "Goat", href: "/values/production/other/goat" },
              ],
            },
          ],
        },
        { title: "IntelliFly360", href: "/values/intellifly360" },
        { title: "IntelliFeed360", href: "/values/intellifeed360" },
        { title: "Food Security", href: "/values/food-security" },
      ],
    },
    { title: "Community", href: "/community" },
    { title: "A.F-Tech Center", href: "/af-tech-center" },
    {
      title: "Media",
      href: "/media",
      dropdown: [
        { title: "The Farmers’ Insight", href: "/media/farmers-insight" },
        { title: "News", href: "/media/news" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setOpenDropdown(null);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 z-50 transition-all duration-300 
      ${isScrolled ? "bg-[#022c22b0] backdrop-blur-md" : "bg-[#022c22d9] backdrop-blur-sm"}`}
      aria-label="Main navigation"
    >
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Agrovestors Farm Tech Logo"
          width={50}
          height={50}
          priority
        />
        <span className="text-white text-lg font-bold ml-2">Agrovestors Farm Tech</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="text-2xl text-white" /> : <FiMenu className="text-2xl text-white" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-white" role="list">
        {navigation.map((item) => (
          <li key={item.title} className="relative group">
            {item.dropdown ? (
              <>
                <button
                  className={`flex items-center hover:text-gray-300 ${
                    pathname && pathname.startsWith(item.href) ? "text-green-400 font-bold" : ""
                  }`}
                  aria-haspopup="true"
                  aria-expanded={pathname ? pathname.startsWith(item.href) : false}
                >
                  {item.title}
                  <FiChevronDown className="ml-1" />
                </button>
                <ul
                  className="absolute left-0 mt-2 w-64 bg-[#022c22] text-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200"
                  role="list"
                >
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.title}>
                      {subItem.items ? (
                        <div className="relative group/sub">
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-[#1a473e]"
                            aria-haspopup="true"
                          >
                            {subItem.title}
                            <FiChevronDown className="inline ml-1" />
                          </button>
                          <ul
                            className="absolute left-full top-0 w-64 bg-[#022c22] text-white shadow-lg opacity-0 group-hover/sub:opacity-100 group-hover/sub:visible invisible transition-all duration-200"
                            role="list"
                          >
                            {subItem.items.map((subSubItem) => (
                              <li key={subSubItem.title}>
                                <Link
                                  href={subSubItem.href}
                                  className="block px-4 py-2 hover:bg-[#1a473e] hover:text-gray-300"
                                  aria-current={pathname === subSubItem.href ? "page" : undefined}
                                >
                                  {subSubItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-[#1a473e] hover:text-gray-300"
                          aria-current={pathname === subItem.href ? "page" : undefined}
                        >
                          {subItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={item.href}
                className={`hover:text-gray-300 ${pathname === item.href ? "text-green-400 font-bold" : ""}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="fixed top-20 left-0 w-full bg-[#022c22] p-4 flex flex-col z-40" role="list">
          {navigation.map((item) => (
            <li key={item.title}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="w-full text-left text-white py-2 flex justify-between items-center"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.title}
                  >
                    {item.title}
                    <FiChevronDown className="ml-1" />
                  </button>
                  {openDropdown === item.title && (
                    <ul className="pl-4" role="list">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.title}>
                          {subItem.items ? (
                            <>
                              <button
                                onClick={() => toggleDropdown(`${item.title}-${subItem.title}`)}
                                className="w-full text-left text-white py-2 flex justify-between items-center"
                                aria-haspopup="true"
                                aria-expanded={openDropdown === `${item.title}-${subItem.title}`}
                              >
                                {subItem.title}
                                <FiChevronDown className="ml-1" />
                              </button>
                              {openDropdown === `${item.title}-${subItem.title}` && (
                                <ul className="pl-4" role="list">
                                  {subItem.items.map((subSubItem) => (
                                    <li key={subSubItem.title}>
                                      <Link
                                        href={subSubItem.href}
                                        className="block text-white py-2 hover:text-gray-300"
                                        onClick={() => setIsOpen(false)}
                                        aria-current={pathname === subSubItem.href ? "page" : undefined}
                                      >
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block text-white py-2 hover:text-gray-300"
                              onClick={() => setIsOpen(false)}
                              aria-current={pathname === subItem.href ? "page" : undefined}
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block text-white py-2 hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;