"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { ThemeToggle } from "../theme/ThemeToggle";

interface NavItem {
  title: string;
  href: string;
  dropdown?: SubNavItem[];
}

interface SubNavItem {
  title: string;
  href: string;
  items?: SubSubNavItem[];
}

interface SubSubNavItem {
  title: string;
  href: string;
  items?: { title: string; href: string }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [subDropdownTimeout, setSubDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    {
      title: "About",
      href: "/about",
      dropdown: [
        { title: "A.F-Tech", href: "/about/af-tech" },
        { title: "Meet Our Team", href: "/meet-our-team" },
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
                { title: "Food By-Product Production", href: "/values/research/other/food-byproduct" },
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
                { title: "Catfish", href: "/values/research/fish/catfish" },
                { title: "Tilapia", href: "/values/research/fish/tilapia" },
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
        { title: "Gallery", href: "/media/gallery" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }
  };

  const toggleDropdown = (identifier: string) => {
    // If the identifier matches a sub-dropdown (contains a hyphen), toggle sub-dropdown
    if (identifier.includes('-')) {
      setOpenSubDropdown(openSubDropdown === identifier ? null : identifier);
    } else {
      // Toggle top-level dropdown
      setOpenDropdown(openDropdown === identifier ? null : identifier);
      // Close sub-dropdown if a different top-level dropdown is opened
      if (openDropdown !== identifier) setOpenSubDropdown(null);
    }
  };

  const handleMouseEnter = (title: string, isSubDropdown: boolean = false) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    if (subDropdownTimeout) {
      clearTimeout(subDropdownTimeout);
      setSubDropdownTimeout(null);
    }
    if (isSubDropdown) {
      setOpenSubDropdown(title);
    } else {
      setOpenDropdown(title);
      setOpenSubDropdown(null);
    }
  };

  const handleMouseLeave = (isSubDropdown: boolean = false) => {
    const timeout = setTimeout(() => {
      if (isSubDropdown) {
        setOpenSubDropdown(null);
      } else {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    }, 2000);
    if (isSubDropdown) {
      setSubDropdownTimeout(timeout);
    } else {
      setDropdownTimeout(timeout);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
      if (subDropdownTimeout) clearTimeout(subDropdownTimeout);
    };
  }, [dropdownTimeout, subDropdownTimeout]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 z-50 transition-all duration-500 ease-in-out 
      ${isScrolled ? "bg-[#022c22e6] backdrop-blur-lg shadow-md" : "bg-[#022c22f2] backdrop-blur-md"}`}
      aria-label="Main navigation"
    >
      <style jsx>{`
        @keyframes bounceIn {
          0% { transform: scale(0.95) translateY(-8px); opacity: 0; }
          60% { transform: scale(1.05) translateY(2px); opacity: 0.9; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes hamburgerToXTop {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(6px) rotate(50deg); }
          100% { transform: translateY(6px) rotate(45deg); }
        }
        @keyframes hamburgerToXBottom {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-50deg); }
          100% { transform: translateY(-6px) rotate(-45deg); }
        }
        @keyframes hamburgerMiddleFade {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0; transform: scale(0); }
          100% { opacity: 0; transform: scale(0); }
        }
        @keyframes hamburgerPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .hamburger-icon {
          position: relative;
          width: 20px;
          height: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hamburger-line {
          width: 100%;
          height: 2.5px;
          background: white;
          border-radius: 2px;
          transition: background 0.4s ease;
        }
        .hamburger-open .hamburger-line:nth-child(1) {
          animation: hamburgerToXTop 0.4s forwards cubic-bezier(0.68ഗ, -0.05, 0.32, 1.6);
          background: #4ade80;
        }
        .hamburger-open .hamburger-line:nth-child(2) {
          animation: hamburgerMiddleFade 0.4s forwards cubic-bezier(0.68, -0.05, 0.32, 1.6);
        }
        .hamburger-open .hamburger-line:nth-child(3) {
          animation: hamburgerToXBottom 0.4s forwards cubic-bezier(0.68, -0.05, 0.32, 1.6);
          background: #4ade80;
        }
        .hamburger-closed .hamburger-line {
          animation: none;
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          background: white;
        }
        .hamburger-button.hamburger-open {
          animation: hamburgerPulse 0.4s ease;
        }
        .mobile-menu-enter {
          transform: translateY(-100%) scale(0.95);
          opacity: 0;
        }
        .mobile-menu-enter-active {
          transform: translateY(0) scale(1);
          opacity: 1;
          transition: transform 0.5s cubic-bezier(0.68, -0.05, 0.32, 1.6), opacity 0.5s ease-out, scale 0.5s ease-out;
        }
        .mobile-menu-exit {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        .mobile-menu-exit-active {
          transform: translateY(-100%) scale(0.95);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.68, -0.05, 0.32, 1.6), opacity 0.5s ease-out, scale 0.5s ease-out;
        }
        .mobile-menu-item {
          opacity: 0;
          transform: translateY(-10px);
        }
        .mobile-menu-enter-active .mobile-menu-item {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .mobile-menu-exit-active .mobile-menu-item {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .hamburger-button {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .hamburger-button:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 6px rgba(74, 222, 128, 0.5));
        }
        .hamburger-button:active {
          transform: scale(0.95);
        }
        .animate-bounce-in {
          animation: bounceIn 0.3s ease-out forwards;
        }
      `}</style>

      <Link href="/" className="flex items-center group" aria-label="Agrovestors Farm Tech Home">
        <Image
          src="https://cdn.sanity.io/media-libraries/mlaKfSRt1EzA/images/7faef82b68d41a7082c4b7d22b828abe30a138cf-1080x763.png"
          alt="Agrovestors Farm Tech Logo"
          width={48}
          height={48}
          priority
          quality={100}
          className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
        />
        <span className="text-white text-xl font-bold ml-3 group-hover:text-green-400 transition-colors duration-300">
          Agrovestors Farm-Tech
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-4">
        <ThemeToggle />
      </div>

      <div className="block lg:hidden flex items-center gap-2">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className={`p-1.5 rounded-full hover:bg-green-500/30 hamburger-button ${isOpen ? "hamburger-open" : ""}`}
        >
          <div className={`hamburger-icon ${isOpen ? "hamburger-open" : "hamburger-closed"}`}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </button>
      </div>

      <ul className="hidden lg:flex gap-0.5 text-white font-medium items-center" role="list">
        {navigation.map((item) => (
          <li key={item.title} className="relative">
            {item.dropdown ? (
              <div
                className="group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <button
                  className={`flex items-center py-2 px-2 rounded-md transition-all duration-300 hover:bg-green-500/30 hover:text-green-400 hover:shadow-[0_0_8px_rgba(74,222,128,0.5)] text-base ${pathname && pathname.startsWith(item.href)
                    ? "text-green-400 font-semibold"
                    : ""
                    }`}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.title}
                >
                  {item.title}
                  <FiChevronDown className="ml-1 transform transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                </button>
                <ul
                  className={`absolute left-0 top-full w-56 bg-[#022c22] text-white shadow-lg rounded-md transition-all duration-300 ease-out origin-top ${openDropdown === item.title
                    ? "opacity-100 visible pointer-events-auto animate-bounce-in"
                    : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  role="list"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.title} className="relative">
                      {subItem.items ? (
                        <div
                          className="group/sub"
                          onMouseEnter={() => handleMouseEnter(`${item.title}-${subItem.title}`, true)}
                          onMouseLeave={() => handleMouseLeave(true)}
                        >
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-green-500/30 hover:text-green-400 hover:shadow-[0_0_8px_rgba(74,222,128,0.3)] rounded-md transition-all duration-300 flex justify-between items-center text-sm"
                            aria-haspopup="true"
                            aria-expanded={openSubDropdown === `${item.title}-${subItem.title}`}
                          >
                            {subItem.title}
                            <FiChevronDown className="transform transition-transform duration-300 group-hover/sub:scale-125 group-hover/sub:-rotate-12" />
                          </button>
                          <ul
                            className={`absolute left-full top-0 w-56 bg-[#022c22] text-white shadow-lg rounded-md transition-all duration-300 ease-out origin-top-left ${openSubDropdown === `${item.title}-${subItem.title}`
                              ? "opacity-100 visible pointer-events-auto animate-bounce-in"
                              : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                              }`}
                            role="list"
                            onMouseEnter={() => handleMouseEnter(`${item.title}-${subItem.title}`, true)}
                            onMouseLeave={() => handleMouseLeave(true)}
                          >
                            {subItem.items.map((subSubItem, index) => (
                              <li
                                key={subSubItem.title}
                                className="transition-opacity duration-300 ease-in"
                                style={{ transitionDelay: `${index * 50}ms` }}
                              >
                                <Link
                                  href={subSubItem.href}
                                  className="block px-4 py-2 hover:bg-green-500/30 hover:text-green-400 hover:shadow-[0_0_8px_rgba(74,222,128,0.3)] rounded-md transition-all duration-300 text-sm"
                                  aria-current={
                                    pathname === subSubItem.href ? "page" : undefined
                                  }
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
                          className="block px-4 py-2 hover:bg-green-500/30 hover:text-green-400 hover:shadow-[0_0_8px_rgba(74,222,128,0.3)] rounded-md transition-all duration-300 text-sm"
                          aria-current={pathname === subItem.href ? "page" : undefined}
                        >
                          {subItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`py-2 px-2 rounded-md transition-all duration-300 hover:bg-green-500/30 hover:text-green-400 hover:shadow-[0_0_8px_rgba(74,222,128,0.5)] text-base ${pathname === item.href ? "text-green-400 font-semibold" : ""
                  }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <ul
        className={`fixed top-20 left-0 w-full bg-[#022c22] p-6 flex flex-col z-40 lg:hidden ${isOpen
          ? "mobile-menu-enter-active"
          : "mobile-menu-exit-active mobile-menu-exit hidden"
          }`}
        role="list"
      >
        {navigation.map((item, index) => (
          <li
            key={item.title}
            className="border-b border-green-500/20 last:border-b-0 mobile-menu-item"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full text-left text-white py-3 flex justify-between items-center text-base hover:text-green-400 transition-colors duration-300"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.title}
                >
                  {item.title}
                  <FiChevronDown
                    className={`transform transition-transform duration-300 ${openDropdown === item.title ? "scale-125 -rotate-12" : ""
                      }`}
                  />
                </button>
                {openDropdown === item.title && (
                  <ul className="pl-4 space-y-2" role="list">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.title} className="border-l border-green-500/20 pl-2">
                        {subItem.items ? (
                          <>
                            <button
                              onClick={() =>
                                toggleDropdown(`${item.title}-${subItem.title}`)
                              }
                              className="w-full text-left text-white py-2 flex justify-between items-center text-sm hover:text-green-400 transition-colors duration-300"
                              aria-haspopup="true"
                              aria-expanded={
                                openSubDropdown === `${item.title}-${subItem.title}`
                              }
                            >
                              {subItem.title}
                              <FiChevronDown
                                className={`transform transition-transform duration-300 ${openSubDropdown === `${item.title}-${subItem.title}`
                                  ? "scale-125 -rotate-12"
                                  : ""
                                  }`}
                              />
                            </button>
                            {openSubDropdown === `${item.title}-${subItem.title}` && (
                              <ul className="pl-6 space-y-1" role="list">
                                {subItem.items.map((subSubItem) => (
                                  <li key={subSubItem.title}>
                                    <Link
                                      href={subSubItem.href}
                                      className="block text-white py-1.5 text-sm hover:text-green-400 transition-colors duration-300"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                      aria-current={
                                        pathname === subSubItem.href ? "page" : undefined
                                      }
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
                            className="block text-white py-2 text-sm hover:text-green-400 transition-colors duration-300"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
                            }}
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
                className="block text-white py-3 text-base hover:text-green-400 transition-colors duration-300"
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                  setOpenSubDropdown(null);
                }}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
