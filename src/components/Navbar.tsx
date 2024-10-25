"use client"; // Mark as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../images/AGROINVESTORLOGO.png"; // Adjust the path according to your folder structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Mission", href: "/mission" },
    { title: "About Us", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#022c22] h-20 shadow-md flex items-center justify-between px-4">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="Agroinvestors Logo" width={50} height={50} />
        <span className="text-white text-lg font-bold">Agrovestors</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FiX className="text-2xl text-white" /> : <FiMenu className="text-2xl text-white" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-white">
        {navigation.map((item) => (
          <Link key={item.title} href={item.href} className="hover:text-gray-300">
            {item.title}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#022c22] p-4 flex flex-col z-40">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-white py-2 hover:text-gray-300"
              onClick={() => setIsOpen(false)} // Close the menu on link click
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
