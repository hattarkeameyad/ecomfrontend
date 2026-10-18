import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // =====================================
  // Get Logged-in User Orders
  // =====================================
  const getUserOrders = async () => {
    try {
      setLoadingOrders(true);

      const response = await axios.get(
        "http://api.time4hobbies.in/api/orders/getOrderByUserId",
        {
          withCredentials: true,
        }
      );

      console.log("User Orders:", response.data);

      if (response.data.success) {
        setOrderCount(response.data.totalOrders || 0);
      } else {
        setOrderCount(0);
      }
    } catch (error) {
      console.error(
        "Get User Orders Error:",
        error.response?.data || error.message
      );

      // Agar user login nahi hai
      setOrderCount(0);
    } finally {
      setLoadingOrders(false);
    }
  };

  // =====================================
  // Call API on Navbar Load
  // =====================================
  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="bg-black text-white text-sm">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

          <p>
            🚚 Free Shipping on Orders Over ₹999
          </p>

          <div className="flex gap-5">

            <Link
              to="/login"
              className="hover:text-yellow-400 duration-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-yellow-400 duration-300"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

      {/* Main Navbar */}
      <nav className="backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-extrabold tracking-wide">
              Shop
              <span className="text-indigo-600">
                Hub
              </span>
            </h1>
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex gap-8 font-medium text-gray-700">

            <li className="hover:text-indigo-600 cursor-pointer duration-300">
              <Link to="/">
                Home
              </Link>
            </li>

            <li className="hover:text-indigo-600 cursor-pointer duration-300">
              <Link to="/FeaturedProducts">
                Shop
              </Link>
            </li>

            <li className="hover:text-indigo-600 cursor-pointer duration-300">
              <Link to="/Categories">
                Categories
              </Link>
            </li>

            <li className="hover:text-indigo-600 cursor-pointer duration-300">
              Deals
            </li>

            <li className="hover:text-indigo-600 cursor-pointer duration-300">
              Contact
            </li>

          </ul>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">

            <FiSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none ml-3 w-full"
            />

          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">

            {/* ===============================
                Wishlist
            =============================== */}
            {/* <button
              className="relative hover:text-indigo-600"
            >
              <FiHeart size={22} />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex justify-center items-center">
                2
              </span>
            </button> */}

            {/* ===============================
                Orders / Shopping Icon
            =============================== */}
            <Link
              to="/Orders"
              className="relative hover:text-indigo-600"
            >

              <FiShoppingCart size={22} />

              {orderCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white w-5 h-5 rounded-full text-xs flex justify-center items-center">
                  {orderCount}
                </span>
              )}

            </Link>

            {/* ===============================
                User
            =============================== */}
            <Link
              to="/Profile"
              className="hover:text-indigo-600"
            >
              <FiUser size={22} />
            </Link>

            {/* Mobile Menu */}
            <button className="lg:hidden">
              <FiMenu size={26} />
            </button>

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;