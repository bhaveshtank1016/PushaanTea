import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo/pushaan2.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg(true);
        setShowTopHeader(false); // Top header hide
      } else {
        setNavbarBg(false);
        setShowTopHeader(true); // Top header show again
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        navbarBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Header (Hide on Scroll) */}
      {showTopHeader && (
        <div className="bg-[#463f3f] text-white flex justify-between items-center px-6 py-2 text-sm transition-all duration-500">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91-97999986623</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>pushaan@greenleaftea.com</span>
            </div>
          </div>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Pushaan Logo"
              className="h-12 w-40 object-contain"
            />
          </div>
        </a>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-xl focus:outline-none"
          >
            {isOpen ? "✕" : <IoMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center text-black font-medium">
          <li>
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#contact">
              <button className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold transition duration-200">
                Need Help
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl rounded-b-xl px-6 py-6 space-y-4 text-base font-medium text-gray-800 animate-slide-down">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            Contact
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block">
            <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition duration-200">
              Need Help
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
