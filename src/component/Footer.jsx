import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiSend,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Subscribe to our Newsletter
            </h2>

            <p className="text-gray-400 mt-2">
              Get exclusive offers, new arrivals & latest updates.
            </p>
          </div>

          <div className="flex w-full lg:w-[500px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-l-xl bg-gray-900 border border-gray-700 outline-none text-white"
            />

            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-r-xl transition">
              <FiSend size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-4xl font-extrabold text-white">
            Shop<span className="text-indigo-500">Hub</span>
          </h1>

          <p className="mt-5 text-gray-400 leading-7">
            Discover premium fashion, electronics, accessories and more at
            unbeatable prices with secure shopping.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Shop
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Kids</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
            <li className="hover:text-white cursor-pointer">Sale</li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Customer
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">
              My Account
            </li>

            <li className="hover:text-white cursor-pointer">
              Wishlist
            </li>

            <li className="hover:text-white cursor-pointer">
              Cart
            </li>

            <li className="hover:text-white cursor-pointer">
              Track Order
            </li>

            <li className="hover:text-white cursor-pointer">
              Returns
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Company
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Careers
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Contact
          </h3>

          <p className="mb-3">
            📍 Mumbai, Maharashtra
          </p>

          <p className="mb-3">
            📞 +91 9876543210
          </p>

          <p className="mb-6">
            ✉ support@shophub.com
          </p>

          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition">
              <FiFacebook />
            </button>

            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition">
              <FiInstagram />
            </button>

            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition">
              <FiTwitter />
            </button>

            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition">
              <FiYoutube />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ShopHub. All Rights Reserved.
          </p>

          <div className="flex gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-7 bg-white rounded p-1"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-7 bg-white rounded p-1"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-7 bg-white rounded p-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;