import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // ============================
  // Get Banners API
  // ============================
  const getBanners = async () => {
    try {
      const response = await axios.get(
        "http://api.time4hobbies.in/api/banner/getBanner"
      );

      console.log("Banner Response:", response.data);

      if (response.data.success) {
        setBanners(response.data.banners || []);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  // ============================
  // Next Banner
  // ============================
  const nextBanner = () => {
    if (banners.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  // ============================
  // Previous Banner
  // ============================
  const previousBanner = () => {
    if (banners.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // ============================
  // Current Banner
  // ============================
  const currentBanner = banners[currentIndex];

  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ============================
              Left Content
          ============================ */}
          <div>

            <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-4 py-2 text-sm font-semibold">
              🔥 {currentBanner?.BannerName || "Summer Sale 2026"}
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Discover
              <span className="text-indigo-600"> Premium </span>
              Fashion
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Shop the latest trends with exclusive collections crafted for
              comfort, elegance and everyday style.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 flex items-center gap-2">
                Shop Now
                <FiArrowRight />
              </button>

              <button className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold transition duration-300">
                Explore Collection
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  15K+
                </h3>

                <p className="text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  500+
                </h3>

                <p className="text-gray-500">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  4.9★
                </h3>

                <p className="text-gray-500">
                  Customer Rating
                </p>
              </div>

            </div>
          </div>

          {/* ============================
              Right Banner Image
          ============================ */}
          <div className="relative flex justify-center">

            {/* Discount Card
            <div className="absolute left-0 top-16 bg-white shadow-xl rounded-2xl p-5 z-20">
              <p className="text-sm text-gray-500">
                Limited Offer
              </p>

              <h2 className="text-3xl font-bold text-red-500">
                70% OFF
              </h2>
            </div> */}

            {/* Main Banner */}
            <div className="relative w-full">

              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>

              {loading ? (
                <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
                  <p className="text-gray-500">
                    Loading banner...
                  </p>
                </div>
              ) : currentBanner ? (
                <img
                  src={currentBanner.BannerImage}
                  alt={currentBanner.BannerName}
                  className="relative w-full max-w-lg mx-auto object-contain rounded-2xl"
                />
              ) : (
                <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
                  <p className="text-gray-500">
                    No banner available
                  </p>
                </div>
              )}

            </div>

            {/* Floating Card */}
            {/* <div className="absolute bottom-10 right-0 bg-white rounded-2xl shadow-xl px-6 py-4">

              <p className="text-gray-500 text-sm">
                New Arrival
              </p>

              <h4 className="font-bold text-gray-900">
                Luxury Sneakers
              </h4>

              <span className="text-indigo-600 font-semibold">
                ₹2,999
              </span>

            </div> */}

          </div>
        </div>

        {/* ============================
            Bottom Navigation
        ============================ */}
        <div className="flex justify-between items-center mt-16">

          {/* Previous / Next */}
          <div className="flex gap-3">

            <button
              onClick={previousBanner}
              className="w-12 h-12 rounded-full border hover:bg-indigo-600 hover:text-white transition"
            >
              <FiChevronLeft className="mx-auto" />
            </button>

            <button
              onClick={nextBanner}
              className="w-12 h-12 rounded-full border hover:bg-indigo-600 hover:text-white transition"
            >
              <FiChevronRight className="mx-auto" />
            </button>

          </div>

          {/* Slider Dots */}
          <div className="flex gap-3">

            {banners.map((banner, index) => (
              <button
                key={banner._id}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "w-10 h-2 bg-indigo-600"
                    : "w-2 h-2 bg-gray-300"
                }`}
              ></button>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;