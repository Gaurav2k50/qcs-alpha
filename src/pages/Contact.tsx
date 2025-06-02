import React from "react";
import ContactForm from "../components/ContactForm";
import contactIllustration from "../assets/images/contact-illustration.jpg";

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            We'd love to hear from you! Whether you have a question about
            features, pricing, need a demo, or anything else, our team is ready
            to answer all your questions.
          </p>
          <ul className="mb-4">
            <li>
              <strong>Address:</strong> 1st Floor, Gamharia, Jamshedpur,
              Jharkhand 832108
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:contact@stackLoop.com" className="text-blue-600">
                contact@stackLoop.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +91-1234567891
            </li>
          </ul>
          <img
            src={contactIllustration}
            alt="Contact Illustration"
            className="w-full h-auto mt-4"
          />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
