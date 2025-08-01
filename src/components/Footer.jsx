
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import FloatingCTAButton from "../pages/FloatingCTAButton";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-black px-6 py-12">
      <FloatingCTAButton />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">P</span>{" "}
            PUSHAAN
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black">
            From handpicked leaves to expertly crafted blends — we deliver purity,
            aroma, and heritage in every cup. Experience the art of tea with Chaivatika.
          </p>
          <div className="flex gap-4 mt-5 text-xl ">
            <a href="#" className="hover:text-yellow-400 transition" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400 transition" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-black/50 pb-1">
            Company
          </h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="#home" className="hover:text-blue-600 ">{'\u203A'} Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">{'\u203A'} About Us</a></li>
            <li><a href="#products" className="hover:text-blue-600">{'\u203A'} Products</a></li>
            <li><a href="#factory" className="hover:text-blue-600">{'\u203A'} Factory Tour</a></li>
            <li><a href="#contact" className="hover:text-blue-600">{'\u203A'} Contact</a></li>
          </ul>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-black/50 pb-1">
            Our Offerings
          </h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="#green-tea" className="hover:text-blue-600">Green Tea</a></li>
            <li><a href="#black-tea" className="hover:text-blue-600">Black Tea</a></li>
            <li><a href="#herbal-tea" className="hover:text-blue-600">Herbal Blends</a></li>
            <li><a href="#exports" className="hover:text-blue-600">Bulk Export</a></li>
            <li><a href="#custom" className="hover:text-blue-600">Private Labeling</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-black/50 pb-1">
            Newsletter
          </h3>
          <p className="text-sm text-black mb-3">
            Stay updated with our latest tea blends, offers, and insights.
          </p>
          <input
            type="email"
            className="p-2 rounded text-black  border w-full mb-3 focus:outline-none"
            placeholder="Email Address"
          />
          <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 w-full font-medium transition-all">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-black/60">
        © {new Date().getFullYear()} PUSHAAN — All rights reserved.
      </div>
    </footer>
  );
}
