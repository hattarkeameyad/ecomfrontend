import React, { useEffect, useState } from "react";
import {
  FiHeart,
  FiEye,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const FeaturedProducts = () => {
  const location = useLocation();

  // Category page se state mein bheji hui CategoriesId
  const categoryId = location.state?.categoryId;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Category ID:", categoryId);

  // ==============================
  // Get Products By Category
  // ==============================
  const getProductsByCategory = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://api.time4hobbies.in/api/products/getcatById/${categoryId}`
      );

      console.log("Products API Response:", response.data);

      // Agar API direct array return karti hai
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      }

      // Agar API { success, data } return karti hai
      else if (response.data.success) {
        setProducts(response.data.data || response.data.products || []);
      }
    } catch (error) {
      console.error(
        "Get Products By Category Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory();
    } else {
      setLoading(false);
    }
  }, [categoryId]);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-indigo-600 uppercase font-semibold tracking-widest">
            Featured Collection
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our best-selling premium products handpicked just for you.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Loading products...
            </p>
          </div>
        )}

        {/* No Category ID */}
        {!loading && !categoryId && (
          <div className="text-center py-10">
            <p className="text-red-500">
              Category not selected.
            </p>
          </div>
        )}

        {/* No Products */}
        {!loading && categoryId && products.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No products found in this category.
            </p>
          </div>
        )}

        {/* Product Grid */}
        {!loading && products.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((item) => (

              <div
                key={item._id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl duration-300"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-full h-80 object-cover group-hover:scale-110 duration-500"
                  />

                  {/* Sale Badge */}
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </span>

                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 bg-white w-11 h-11 rounded-full shadow flex items-center justify-center hover:bg-red-500 hover:text-white duration-300">
                    <FiHeart />
                  </button>

                  {/* Hover Icons */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-300 flex gap-3">

                    <button className="w-11 h-11 rounded-full bg-white shadow hover:bg-indigo-600 hover:text-white transition">
                      <FiEye className="mx-auto" />
                    </button>

                    <button className="w-11 h-11 rounded-full bg-indigo-600 text-white shadow hover:scale-110 transition">
                      <FiShoppingCart className="mx-auto" />
                    </button>

                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <p className="text-sm text-gray-500">
                    {item.CategoriesId?.CategoriesName ||
                      item.CategoriesId?.name ||
                      "Product"}
                  </p>

                  <h3 className="font-bold text-xl mt-2">
                    {item.productName}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-3">

                    <div className="flex text-yellow-400">

                      <FiStar fill="currentColor" />
                      <FiStar fill="currentColor" />
                      <FiStar fill="currentColor" />
                      <FiStar fill="currentColor" />
                      <FiStar fill="currentColor" />

                    </div>

                    <span className="text-gray-500 text-sm">
                      (4.8)
                    </span>

                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mt-5">

                    <span className="text-2xl font-bold text-indigo-600">
                      ₹{item.productPrice}
                    </span>

                  </div>

                  {/* Button */}
                  <Link
                    to="/ProductDetails"
                    state={{
                      productId: item._id,
                    }}
                  >
                    <button className="mt-6 w-full bg-gray-900 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                     Buy now
                    </button>
                  </Link>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </section>
  );
};

export default FeaturedProducts;