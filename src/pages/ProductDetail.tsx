import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../components/Products";

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = services.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-2xl text-red-500 font-semibold">
        Product not found.
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.desc}
          </p>

          <Link
            to="/products"
            className="inline-block mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
};
