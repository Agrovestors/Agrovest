import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="w-full max-w-6xl mx-auto bg-[#022c22] py-20 px-10 text-gray-100 flex flex-col md:flex-row items-start justify-between rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/topography.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <Container className="flex flex-col md:flex-row justify-between w-full space-y-10 md:space-y-0 md:space-x-10">
        {/* Logo and About */}
        <div className="md:w-1/4 flex flex-col items-start">
          <Logo title="Agrovestors" className="text-white text-2xl font-bold" />
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Empowering farmers through sustainable agriculture and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-400 duration-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-400 duration-200">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-400 duration-200">Services</Link></li>
            <li><Link href="/blog" className="hover:text-green-400 duration-200">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-green-400 duration-200">FAQ</Link></li>
            <li><Link href="/careers" className="hover:text-green-400 duration-200">Careers</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-400 duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-green-400 duration-200">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to get updates on our latest news and insights.</p>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-md text-black focus:outline-none" />
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 duration-200">Subscribe</button>
          </form>
        </div>
      </Container>

      {/* Footer Bottom Section */}
      <div className="w-full mt-10 border-t border-gray-700 pt-6 flex flex-col items-center text-center text-sm text-gray-400 space-y-4">
        <p>&copy; {new Date().getFullYear()} Agrovestors. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-green-400"><BsFacebook size={20} /></Link>
          <Link href="#" className="hover:text-green-400"><BsYoutube size={20} /></Link>
          <Link href="#" className="hover:text-green-400"><BsInstagram size={20} /></Link>
          <Link href="#" className="hover:text-green-400"><BsGithub size={20} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
