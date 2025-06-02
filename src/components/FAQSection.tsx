import React, { useState } from "react";

const faqs = [
  {
    question: "Why do we need web development services?",
    answer:
      "Website development is crucial to promote any business. Businesses can use it to help customers become aware of the goods or services they are providing, comprehend why they should buy or use those goods, and pinpoint the characteristics that set their organisation apart from rivals.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "The size and complexity of the website will determine this. Every project is launched with a commitment to a deadline. Delays do happen, but they are typically caused by the client’s: i) the project's specifications; ii) taking too long to prepare the content that will provide traffic to the website; and iii) giving delayed answers to inquiries and requests for information.",
  },
  {
    question: "How much does a new website cost?",
    answer:
      "New website can be built for less than $100 or for many thousand dollars annually. The number of pages, complexity, and platform you choose will all affect how much it will ultimately cost to create a website. It is also depends on the methods, resources that are used.",
  },
  {
    question: "Can I update the website myself once it's built?",
    answer:
      "Yes, you can update your website because it is compulsory to keep updated your site with the latest content. If you don’t upload fresh content then it will be difficult for you to keep your online visibility in search engines. We have an experienced team who know how to edit content and how to upload it regularly. If you want any help then you can contact us.",
  },
  {
    question: "Isn’t web development and web design the same thing?",
    answer:
      "While a web designer may design a button, a web developer makes sure that when the button is clicked, something happens. Web designers may concentrate on the front end of the website (more visually; what the user sees) or the back end (more functionally; how the website functions)—or both.",
  },
  {
    question: "How many pages do I need for my website?",
    answer:
      "According to our experience you should add a few web pages to your website because if you develop a single page website then you can not upload enough content and it will affect your online presence on search engines.",
  },
];

const FAQSection: React.FC = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    const updatedStates = openStates.map((open, i) =>
      i === index ? !open : false
    );
    setOpenStates(updatedStates);
  };

  return (
    <section className="mb-16 px-4">
      <h2 className="text-[#1A2954] font-bold text-[28px] mb-6">FAQs</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-[#0066A1] text-white font-semibold text-sm flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{openStates[index] ? "▲" : "▼"}</span>
            </button>
            {openStates[index] && faq.answer && (
              <div className="bg-white text-[#333] text-sm px-4 py-3 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
