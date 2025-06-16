import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../components/Products";
import { PageBanner } from "../components/PageBanner";
import aboutImg from "../assets/images/About page img.jpg";

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
      <PageBanner title={product.title} backgroundImage={aboutImg} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-xl shadow-lg">
        {/* Image */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Available Ranges */}
          {product.availableRanges && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Available Ranges
              </h3>
              <ul className="space-y-1 text-gray-700">
                {product.availableRanges.map((range, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {range}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology */}
          {product.technology && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Technology
              </h3>
              <p className="text-gray-700">{product.technology}</p>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-8 overflow-y-auto max-h-[800px]">
          <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          {/* General Description */}
          {product.generalDescription && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                General Description
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {product.generalDescription}
              </p>
            </div>
          )}

          {/* Description */}
          {product.details?.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {product.details.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Specification */}
          {product.details?.specifications && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Specification
              </h2>
              <div className="grid grid-cols-1 gap-2 text-gray-700">
                {Object.entries(product.details.specifications).map(
                  ([key, value]) => (
                    <div key={key}>
                      {key === "responseSpeed" ? (
                        <>
                          <span className="font-medium">Response speed:</span>{" "}
                          (90% response)
                          <ul className="list-disc pl-5 mt-1">
                            {typeof value === "object" && (
                              <>
                                <li>Standard: {value.standard}</li>
                                <li>High speed: {value.highSpeed}</li>
                              </>
                            )}
                          </ul>
                        </>
                      ) : (
                        <>
                          <span className="font-medium">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .toLowerCase()
                              .replace(/^\w/, (c) => c.toUpperCase())}
                            :
                          </span>{" "}
                          {value as string}
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Application */}
          {product.details?.applications && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Applications
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {product.details.applications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

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
