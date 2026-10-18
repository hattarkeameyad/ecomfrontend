import React from "react";
import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiTruck size={32} />,
    title: "Free Shipping",
    description:
      "Enjoy free delivery on all orders above ₹999 anywhere in India.",
  },
  {
    id: 2,
    icon: <FiShield size={32} />,
    title: "Secure Payments",
    description:
      "100% secure checkout with trusted payment gateways.",
  },
  {
    id: 3,
    icon: <FiRefreshCw size={32} />,
    title: "Easy Returns",
    description:
      "7-day hassle-free returns and quick refund process.",
  },
  {
    id: 4,
    icon: <FiHeadphones size={32} />,
    title: "24/7 Support",
    description:
      "Friendly customer support available anytime you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-indigo-600 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Shopping Made Easy & Secure
          </h2>

          <p className="text-gray-500 mt-5 leading-8">
            We provide premium products, secure shopping, fast delivery,
            and outstanding customer service to give you the best shopping
            experience.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200"
                alt="Shopping"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <span className="text-indigo-600 uppercase tracking-widest font-semibold">
                Our Promise
              </span>

              <h2 className="text-4xl font-bold mt-4">
                We Deliver More Than Products
              </h2>

              <p className="text-gray-500 mt-6 leading-8">
                Every order is carefully packed and delivered with quality
                assurance. From checkout to delivery, we ensure a smooth
                shopping experience.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500 text-xl" />
                  <span>Premium Quality Products</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500 text-xl" />
                  <span>Fast & Reliable Delivery</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500 text-xl" />
                  <span>Easy Exchange & Returns</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500 text-xl" />
                  <span>Trusted by 15,000+ Customers</span>
                </div>

              </div>

              <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold w-fit transition">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;