import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiArrowUpRight,
  FiShoppingBag,
  FiWatch,
  FiSmartphone,
  FiHeadphones,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const smallCategories = [
  {
    name: "Bags",
    icon: <FiShoppingBag size={30} />,
  },
  {
    name: "Watches",
    icon: <FiWatch size={30} />,
  },
  {
    name: "Electronics",
    icon: <FiSmartphone size={30} />,
  },
  {
    name: "Headphones",
    icon: <FiHeadphones size={30} />,
  },
];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==============================
  // Get Categories API
  // ==============================
  const getCategories = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "http://api.time4hobbies.in/api/categories/get",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Categories API Response:", response.data);

      if (response.data.success) {
        setCategories(response.data.categories || []);
      } else {
        setCategories([]);
        setError("Categories not found");
      }
    } catch (error) {
      console.error("Get Categories Error:", error);

      setError(
        error.response?.data?.message ||
          "Something went wrong while fetching categories"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold uppercase tracking-widest">
            Categories
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our hand-picked collections designed to match every style,
            occasion and lifestyle.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading categories...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Large Cards */}
        {!loading && !error && categories.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((item) => (
              <div
                key={item._id}
                className="group relative rounded-3xl overflow-hidden h-[320px] cursor-pointer"
              >
                <img
                  src={item.CategoriesImage}
                  alt={item.CategoriesName}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <p className="text-gray-200 text-sm">
                    Explore Products
                  </p>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    {item.CategoriesName}
                  </h3>

                  <Link to="/FeaturedProducts" state={{ categoryId: item._id }}>
                    <button className="mt-5 flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white duration-300">
                      Shop Now
                      <FiArrowUpRight />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Categories */}
        {!loading && !error && categories.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No categories available.
            </p>
          </div>
        )}

        {/* Small Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer text-center"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex justify-center items-center mx-auto">
               <img
                  src={item.CategoriesImage}
                  alt={item.CategoriesName}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />
              </div>

              <h4 className="mt-5 text-lg font-semibold">
                {item.CategoriesName}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;