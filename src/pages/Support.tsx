import React from "react";
import { PageBanner } from "../components/PageBanner";
import { ServiceEnquiryForm } from "../components/ServiceEnquiryForm";
import supportImg from "../assets/images/Support page img.jpg";

interface ServiceEnquiryFormData {
  productName: string;
  productId: string;
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  problemDetails: string;
}

export const Support: React.FC = () => {
  const handleFormSubmit = (formData: ServiceEnquiryFormData) => {
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Support"
        description="We're here to help you"
        backgroundImage={supportImg}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <ServiceEnquiryForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};
