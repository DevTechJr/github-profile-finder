import React from "react";
import { FaHashtag } from "react-icons/fa";
const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content flex flex-col justify-center items-center">
      <FaHashtag className="text-xl" />
      <p>
        Copyright &copy; Anirudh Bharadwaj Vangara {footerYear} - All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
