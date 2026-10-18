import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit,
  FiPackage,
  FiLogOut,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // Get User Profile
  // ==========================================
  const getUserProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "http://api.time4hobbies.in/api/user/user",
        {
          withCredentials: true,
        }
      );

      console.log("User Profile Response:", response.data);

      if (response.data.success) {
        setUser(response.data.user);
      } else {
        setError(
          response.data.message || "Unable to get user profile"
        );
      }
    } catch (error) {
      console.error("Get User Profile Error:", error);

      if (error.response?.status === 401) {
        setError("Please login to view your profile.");
      } else {
        setError(
          error.response?.data?.message ||
            "Something went wrong."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  // ==========================================
  // Loading
  // ==========================================
  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="animate-pulse">

            <div className="h-10 bg-gray-200 rounded-lg w-48"></div>

            <div className="h-5 bg-gray-200 rounded-lg w-72 mt-4"></div>

            <div className="bg-white rounded-3xl shadow-sm p-8 mt-10">

              <div className="flex items-center gap-5">
                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>

                <div>
                  <div className="h-6 bg-gray-200 rounded w-48"></div>
                  <div className="h-4 bg-gray-200 rounded w-60 mt-3"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="h-20 bg-gray-200 rounded-xl"></div>
                <div className="h-20 bg-gray-200 rounded-xl"></div>
                <div className="h-20 bg-gray-200 rounded-xl"></div>
                <div className="h-20 bg-gray-200 rounded-xl"></div>

              </div>

            </div>

          </div>

        </div>

      </section>
    );
  }

  // ==========================================
  // Login Required
  // ==========================================
  if (error === "Please login to view your profile.") {
    return (
      <section className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="max-w-xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <FiUser size={36} />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Login Required
            </h2>

            <p className="text-gray-500 mt-3">
              Please login to view your profile.
            </p>

            <Link to="/login">
              <button className="mt-7 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                Login
              </button>
            </Link>

          </div>

        </div>

      </section>
    );
  }

  // ==========================================
  // Error
  // ==========================================
  if (error || !user) {
    return (
      <section className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="max-w-xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <h2 className="text-2xl font-bold">
              Unable to load profile
            </h2>

            <p className="text-gray-500 mt-3">
              {error || "User not found"}
            </p>

            <button
              onClick={getUserProfile}
              className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Try Again
            </button>

          </div>

        </div>

      </section>
    );
  }

  const fullName =
    `${user.FirstName || ""} ${user.LastName || ""}`.trim();

  const firstLetter =
    user.FirstName?.charAt(0)?.toUpperCase() || "U";

  return (
    <section className="min-h-screen bg-slate-50 pt-36 pb-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* ==========================================
            Header
        ========================================== */}
        <div className="mb-10">

          <span className="text-indigo-600 uppercase font-semibold tracking-widest text-sm">
            My Account
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            My Profile
          </h1>

          <p className="text-gray-500 mt-3">
            Manage your personal information and account.
          </p>

        </div>

        {/* ==========================================
            Profile Card
        ========================================== */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          {/* Top Profile Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10">

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-white text-indigo-600 flex items-center justify-center text-4xl font-bold shadow-lg">
                {firstLetter}
              </div>

              {/* Name */}
              <div className="text-center sm:text-left text-white">

                <h2 className="text-3xl font-bold">
                  {fullName || "User"}
                </h2>

                <p className="mt-2 text-indigo-100">
                  {user.email}
                </p>

                <span className="inline-block mt-4 bg-white/20 px-4 py-1.5 rounded-full text-sm">
                  Customer
                </span>

              </div>

            </div>

          </div>

          {/* ==========================================
              User Details
          ========================================== */}
          <div className="p-8">

            <div className="flex items-center justify-between mb-7">

              <h3 className="text-2xl font-bold">
                Personal Information
              </h3>

              <button
                className="flex items-center gap-2 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 px-4 py-2 rounded-xl transition"
              >
                <FiEdit />
                Edit
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* First Name */}
              <div className="border border-gray-100 rounded-2xl p-5">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <FiUser />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      First Name
                    </p>

                    <h4 className="font-semibold text-lg mt-1">
                      {user.FirstName || "Not provided"}
                    </h4>

                  </div>

                </div>

              </div>

              {/* Last Name */}
              <div className="border border-gray-100 rounded-2xl p-5">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <FiUser />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Last Name
                    </p>

                    <h4 className="font-semibold text-lg mt-1">
                      {user.LastName || "Not provided"}
                    </h4>

                  </div>

                </div>

              </div>

              {/* Email */}
              <div className="border border-gray-100 rounded-2xl p-5">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <FiMail />
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm text-gray-500">
                      Email Address
                    </p>

                    <h4 className="font-semibold text-lg mt-1 break-all">
                      {user.email || "Not provided"}
                    </h4>

                  </div>

                </div>

              </div>

              {/* Phone */}
              <div className="border border-gray-100 rounded-2xl p-5">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <FiPhone />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Phone Number
                    </p>

                    <h4 className="font-semibold text-lg mt-1">
                      {user.PhoneNo || "Not provided"}
                    </h4>

                  </div>

                </div>

              </div>

              {/* Address */}
              <div className="border border-gray-100 rounded-2xl p-5 md:col-span-2">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <FiMapPin />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Address
                    </p>

                    <h4 className="font-semibold text-lg mt-1">
                      {user.address || "Not provided"}
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ==========================================
            Quick Actions
        ========================================== */}
        <div className="grid sm:grid-cols-2 gap-5 mt-6">

          {/* Orders */}
          <Link
            to="/Orders"
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition group"
          >

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                <FiPackage size={25} />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  My Orders
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  View your order history
                </p>

              </div>

            </div>

          </Link>

          {/* Logout */}
          <button
            onClick={() => {
              alert("Logout API can be added here");
            }}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition text-left"
          >

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
                <FiLogOut size={25} />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Logout
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Sign out from your account
                </p>

              </div>

            </div>

          </button>

        </div>

      </div>

    </section>
  );
};

export default Profile;