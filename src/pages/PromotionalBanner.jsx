import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PromotionalBanner = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-indigo-600 uppercase tracking-widest font-semibold">
            Exclusive Offers
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Grab The Best Deals
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Upgrade your wardrobe with our latest premium collections and enjoy
            exclusive discounts for a limited time.
          </p>
        </div>

        {/* Banner Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Large Banner */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl group h-[450px]">

            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200"
              alt="Sale"
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-md">

              <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-semibold">
                🔥 Limited Time
              </span>

              <h2 className="text-5xl font-extrabold mt-5 leading-tight">
                Summer Collection
              </h2>

              <p className="mt-5 text-lg text-gray-200">
                Flat <span className="font-bold text-yellow-300">50% OFF</span>
                {" "}on premium fashion. Hurry before the offer ends.
              </p>

              <button className="mt-8 bg-white text-black hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl flex items-center gap-2 font-semibold duration-300">
                Shop Now
                <FiArrowRight />
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Banner 1 */}
            <div className="relative overflow-hidden rounded-3xl h-[210px] group">

              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900"
                alt="Women"
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">

                <p className="uppercase text-sm tracking-wider">
                  New Arrival
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  Women's Fashion
                </h3>

                <button className="mt-5 text-sm flex items-center gap-2 font-semibold">
                  Explore
                  <FiArrowRight />
                </button>

              </div>

            </div>

            {/* Banner 2 */}
            <div className="relative overflow-hidden rounded-3xl h-[210px] group">

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                alt="Shoes"
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-indigo-900/50"></div>

              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">

                <p className="uppercase text-sm tracking-wider">
                  Trending
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  Sneakers
                </h3>

                <button className="mt-5 text-sm flex items-center gap-2 font-semibold">
                  Shop Now
                  <FiArrowRight />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PromotionalBanner;