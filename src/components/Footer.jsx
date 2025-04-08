import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-200 dark:bg-black text-gray-800 dark:text-white py-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-3 gap-5 text-center md:text-left md:flex md:flex-row justify-between">
        {/* Left - Brand Info */}
        <div className="space-y-4 text-wrap text-left">
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
            AeroBos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Innovating for a sustainable & green future.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="text-left ">
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="text-left ">
          <h3 className="text-lg font-medium mb-3">Follow Us</h3>
          <div className="grid gap-3 md:grid-cols-1">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-400 dark:hover:text-pink-400 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-700 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} AeroBos. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
