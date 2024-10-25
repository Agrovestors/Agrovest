import React from "react";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="about-footer">
      <div className="about-footer-logo">Agrovestors</div>
      
      <div className="about-footer-social-links">
        <a href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA" target="_blank" rel="noopener noreferrer">
          <BsYoutube className="about-footer-social-icon" />
        </a>
        <a href="https://github.com/noorjsdivs" target="_blank" rel="noopener noreferrer">
          <BsGithub className="about-footer-social-icon" />
        </a>
        <a href="https://www.facebook.com/Agrovestors" target="_blank" rel="noopener noreferrer">
          <BsFacebook className="about-footer-social-icon" />
        </a>
        <a href="https://www.instagram.com/Agrovestors" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="about-footer-social-icon" />
        </a>
      </div>

      <p className="about-footer-copyright">
        © {new Date().getFullYear()} All rights reserved{" "}
        <Link href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA" target="_blank" rel="noopener noreferrer" className="about-footer-link">
          @Agrovestors
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
