import emailjs from "@emailjs/browser";

// Initialize EmailJS with your User ID
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }
    );
    return response;
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw new Error("Failed to send contact email");
  }
};

export const sendSupportEmail = async (formData: {
  productName: string;
  productId: string;
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  problemDetails: string;
}) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_SUPPORT_TEMPLATE_ID,
      {
        product_name: formData.productName,
        product_id: formData.productId,
        company_name: formData.companyName,
        company_phone: formData.companyPhone,
        company_email: formData.companyEmail,
        problem_details: formData.problemDetails,
      }
    );
    return response;
  } catch (error) {
    console.error("Error sending support email:", error);
    throw new Error("Failed to send support email");
  }
};
