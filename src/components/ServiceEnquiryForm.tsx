import React, { useState } from "react";

interface ServiceEnquiryFormData {
  productName: string;
  productId: string;
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  problemDetails: string;
}

interface ServiceEnquiryFormProps {
  onSubmit: (data: ServiceEnquiryFormData) => void;
  className?: string;
}

export const ServiceEnquiryForm: React.FC<ServiceEnquiryFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const [formData, setFormData] = useState<ServiceEnquiryFormData>({
    productName: "",
    productId: "",
    companyName: "",
    companyPhone: "",
    companyEmail: "",
    problemDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      productName: "",
      productId: "",
      companyName: "",
      companyPhone: "",
      companyEmail: "",
      problemDetails: "",
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-center mb-8">Service Enquiry</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Product ID */}
        <div>
          <label
            htmlFor="productId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product ID
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Company Phone */}
        <div>
          <label
            htmlFor="companyPhone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Phone
          </label>
          <input
            type="tel"
            id="companyPhone"
            name="companyPhone"
            value={formData.companyPhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Company Email */}
        <div>
          <label
            htmlFor="companyEmail"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Email
          </label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Problem Details */}
        <div>
          <label
            htmlFor="problemDetails"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Problem Details
          </label>
          <textarea
            id="problemDetails"
            name="problemDetails"
            value={formData.problemDetails}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
