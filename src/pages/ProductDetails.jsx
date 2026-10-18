import React, { useEffect, useState } from "react";
import {
  FiHeart,
  FiShare2,
  FiTruck,
  FiRefreshCcw,
  FiShield,
  FiMinus,
  FiPlus,
  FiStar,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================
  // Product ID FeaturedProducts se
  // =====================================
  const productId = location.state?.productId;

  console.log("Product ID:", productId);

  // =====================================
  // States
  // =====================================
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const [loading, setLoading] = useState(true);
  const [orderLoading, setOrderLoading] = useState(false);

  // =====================================
  // Product API
  // =====================================
  const getProduct = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://api.time4hobbies.in/api/products/get/${productId}`
      );

      console.log("Product Response:", response.data);

      setProduct(response.data);
    } catch (error) {
      console.error(
        "Get Product Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // Call Product API
  // =====================================
  useEffect(() => {
    if (productId) {
      getProduct();
    } else {
      setLoading(false);
    }
  }, [productId]);

  // =====================================
  // Buy Now / Create Order
  // =====================================
  const handleBuyNow = async () => {
    if (!productId) {
      alert("Product not found");
      return;
    }

    try {
      setOrderLoading(true);

      const response = await axios.post(
        "http://api.time4hobbies.in/api/orders/createOrder",
        {
          items: [
            {
              productId: productId,
              quantity: qty,
            },
          ],
          paymentMode: "COD",
          orderStatus: "Confirmed",
          paymentStatus: "Paid",
          notes: "Deliver together",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },

          // Important:
          // User_token cookie backend ko bhejne ke liye
          withCredentials: true,
        }
      );

      console.log("Order Response:", response.data);

      if (response.data.success) {
        alert("Order placed successfully!");

        console.log("Created Order:", response.data.order);

        // Order success ke baad home par
        navigate("/");
      } else {
        alert(response.data.message || "Order failed");
      }
    } catch (error) {
      console.error(
        "Create Order Error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Unable to place order. Please login first."
      );
    } finally {
      setOrderLoading(false);
    }
  };

  // =====================================
  // Loading
  // =====================================
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Loading product...
        </p>
      </section>
    );
  }

  // =====================================
  // Product ID Not Found
  // =====================================
  if (!productId) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 text-lg mb-5">
          Product not selected.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Go Back
        </button>
      </section>
    );
  }

  // =====================================
  // Product Not Found
  // =====================================
  if (!product) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 text-lg mb-5">
          Product not found.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Go Back
        </button>
      </section>
    );
  }

  // =====================================
  // Main Image
  // =====================================
  const selectedImage = product.productImage;

  return (
    <section className="bg-slate-50 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-8">
          Home /{" "}
          {product.CategoriesId?.CategoriesName || "Products"} /{" "}
          {product.productName}
        </p>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* =====================================
              LEFT - PRODUCT IMAGE
          ===================================== */}
          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <img
                src={selectedImage}
                alt={product.productName}
                className="w-full h-[550px] object-contain hover:scale-105 duration-500"
              />

            </div>

          </div>

          {/* =====================================
              RIGHT - PRODUCT DETAILS
          ===================================== */}
          <div>

            {/* Category */}
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
              {product.CategoriesId?.CategoriesName || "PRODUCT"}
            </span>

            {/* Product Name */}
            <h1 className="text-5xl font-bold mt-5">
              {product.productName}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-5">

              <div className="flex text-yellow-400">

                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />

              </div>

              <span className="font-medium">
                4.9 (248 Reviews)
              </span>

            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-7">

              <span className="text-4xl font-bold text-indigo-600">
                ₹{Number(product.productPrice).toLocaleString("en-IN")}
              </span>

            </div>

            {/* Description */}
            <p className="text-gray-600 leading-8 mt-8">
              {product.productDescription}
            </p>

            {/* Quantity */}
            <div className="mt-10">

              <h3 className="font-bold text-lg mb-4">
                Quantity
              </h3>

              <div className="flex items-center gap-5">

                <div className="flex items-center bg-white rounded-xl shadow">

                  {/* Minus */}
                  <button
                    onClick={() =>
                      qty > 1 && setQty(qty - 1)
                    }
                    className="p-4"
                  >
                    <FiMinus />
                  </button>

                  {/* Quantity */}
                  <span className="px-5 font-bold">
                    {qty}
                  </span>

                  {/* Plus */}
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-4"
                  >
                    <FiPlus />
                  </button>

                </div>

              </div>

            </div>

            {/* Total */}
            <div className="mt-7">

              <p className="text-gray-500">
                Total Amount
              </p>

              <h2 className="text-3xl font-bold text-gray-900">
                ₹
                {(
                  Number(product.productPrice) * qty
                ).toLocaleString("en-IN")}
              </h2>

            </div>

            {/* =====================================
                Buttons
            ===================================== */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              {/* Add To Cart */}
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold transition"
              >
                Add To Cart
              </button>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                disabled={orderLoading}
                className="bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-semibold transition disabled:opacity-50"
              >
                {orderLoading
                  ? "Placing Order..."
                  : "Buy Now"}
              </button>

            </div>

            {/* Wishlist / Share */}
            <div className="flex gap-4 mt-5">

              <button className="flex-1 border rounded-xl py-3 hover:bg-gray-100 transition flex justify-center items-center gap-2">
                <FiHeart />
                Wishlist
              </button>

              <button className="flex-1 border rounded-xl py-3 hover:bg-gray-100 transition flex justify-center items-center gap-2">
                <FiShare2 />
                Share
              </button>

            </div>

            {/* =====================================
                Services
            ===================================== */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <FiTruck className="text-indigo-600 text-2xl" />

                <div>
                  <h4 className="font-semibold">
                    Free Delivery
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Free shipping on orders above ₹999
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <FiRefreshCcw className="text-indigo-600 text-2xl" />

                <div>
                  <h4 className="font-semibold">
                    Easy Returns
                  </h4>

                  <p className="text-gray-500 text-sm">
                    7 Days Return Policy
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <FiShield className="text-indigo-600 text-2xl" />

                <div>
                  <h4 className="font-semibold">
                    Secure Payment
                  </h4>

                  <p className="text-gray-500 text-sm">
                    100% Secure Checkout
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;  