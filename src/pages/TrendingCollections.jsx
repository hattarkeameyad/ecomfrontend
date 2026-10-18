import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const collections = [
  {
    id: 1,
    title: "Street Style",
    subtitle: "120+ Products",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200",
  },
  {
    id: 2,
    title: "Luxury Watches",
    subtitle: "80+ Products",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200",
  },
  {
    id: 3,
    title: "Modern Sneakers",
    subtitle: "150+ Products",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
  },
];

const TrendingCollections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-end mb-14">

          <div>

            <span className="text-indigo-600 uppercase tracking-widest font-semibold">
              Trending Now
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Trending Collections
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Explore the hottest collections loved by thousands of shoppers.
            </p>

          </div>

          <button className="mt-6 md:mt-0 border border-gray-300 px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition">
            View All Collections
          </button>

        </div>

        {/* Collection Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden h-[520px] cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">

                <span className="text-sm text-gray-200 uppercase tracking-widest">
                  {item.subtitle}
                </span>

                <h3 className="text-4xl font-bold text-white mt-3">
                  {item.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition">
                  Explore Collection
                  <FiArrowUpRight />
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Offer */}

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <span className="uppercase text-indigo-100 tracking-widest">
              Limited Time
            </span>

            <h2 className="text-4xl font-bold text-white mt-3">
              Get Extra 20% OFF
            </h2>

            <p className="text-indigo-100 mt-3">
              Use coupon code <span className="font-bold">TREND20</span> at checkout.
            </p>

          </div>

          <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-black hover:text-white transition">
            Shop Now
          </button>

        </div>

      </div>
    </section>
  );
};

export default TrendingCollections;