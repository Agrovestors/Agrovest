import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#022c22] py-20 px-10 text-gray-100 flex flex-col items-start justify-between bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/topography.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <Container className="w-full flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
        {/* Logo and About */}
        <div className="md:w-1/4 flex flex-col items-start">
          <Logo title="Agrovestors" className="text-white text-3xl font-bold" />
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Empowering farmers through sustainable agriculture and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Blog", "Contact"].map((text, index) => (
              <li key={index}>
                <Link
                  href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-gray-300 transition-transform duration-200 ease-in-out transform hover:scale-125 hover:text-green-400"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-bold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            {["FAQ", "Careers", "Privacy Policy", "Terms of Service"].map((text, index) => (
              <li key={index}>
                <Link
                  href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 transition-transform duration-200 ease-in-out transform hover:scale-125 hover:text-green-400"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-bold text-white mb-3">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to get updates on our latest news and insights.</p>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-md text-black focus:outline-none" />
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </Container>

      {/* Footer Bottom Section */}
      <div className="w-full mt-10 border-t border-gray-700 pt-6 flex flex-col items-center text-center text-sm text-gray-400 space-y-4">
        <p>&copy; {new Date().getFullYear()} Agrovestors. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4">
          {[BsFacebook, BsYoutube, BsInstagram, BsGithub].map((Icon, index) => (
            <Link key={index} href="#" className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-green-400">
              <Icon size={26} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
