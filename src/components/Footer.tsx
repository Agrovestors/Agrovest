import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="w-full max-w-6xl mx-auto bg-[#022c22] py-20 px-10 text-gray-100 flex flex-col md:flex-row items-center justify-between rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/topography.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <Container className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Logo */}
        <Logo title="Agrovestors" className="text-white text-2xl font-bold" />

        {/* Social Media Links */}
        <div className="flex items-center gap-7 my-5 md:my-0">
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="_blank"
          >
            <BsYoutube
              className="text-2xl hover:text-red-500 duration-200"
              style={{ color: "#bcf364" }} // Set the icon color to the light green
            />
          </Link>
          <Link href={"https://github.com/noorjsdivs"} target="_blank">
            <BsGithub
              className="text-2xl hover:text-gray-300 duration-200"
              style={{ color: "#bcf364" }} // Set the icon color to the light green
            />
          </Link>
          <Link href={"https://www.facebook.com/Agrovestors"} target="_blank">
            <BsFacebook
              className="text-2xl hover:text-blue-500 duration-200"
              style={{ color: "#bcf364" }} // Set the icon color to the light green
            />
          </Link>
          <Link href={"https://www.instagram.com/Agrovestors"} target="_blank">
            <BsInstagram
              className="text-2xl hover:text-pink-500 duration-200"
              style={{ color: "#bcf364" }} // Set the icon color to the light green
            />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} All rights reserved{" "}
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="_blank"
            className="hover:text-white font-semibold duration-200"
          >
            @Agrovestors
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
