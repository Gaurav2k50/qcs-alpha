import React from "react";
import { NewsCard } from "../components/LatestNews";
// import mobileAppMarketingImage from "../assets/images/mobileAppMarketingImage.jpg";
// import businessNeedsAppImage from "../assets/images/businessNeedsAppImage.jpg";
// import chatgptExplainedImage from "../assets/images/chatgptExplainedImage.jpg";
import aboutImg from "../assets/images/About page img.jpg";
import { PageBanner } from "../components/PageBanner";

const blogPosts = [
  {
    title: "How to create a successful Mobile App Marketing Strategy in 2025",
    date: "Saturday 31 May 2025",
    // imageSrc: mobileAppMarketingImage,
    link: "/blog/mobile-app-marketing-strategy-2025",
  },
  {
    title: "7 Reasons Why Your Business Needs a Mobile App",
    date: "Saturday 31 May 2025",
    // imageSrc: businessNeedsAppImage,
    link: "/blog/7-reasons-business-needs-mobile-app",
  },
  {
    title: "ChatGPT by OpenAI Explained",
    date: "Saturday 31 May 2025",
    // imageSrc: chatgptExplainedImage,
    link: "/blog/chatgpt-by-openai-explained",
  },
];

export const LatestNews: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageBanner
        title="Latest News"
        // description="Quantic at a Glance"
        backgroundImage={aboutImg}
      />
      {/* <h2 className="text-3xl font-bold mb-6">Blogs</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <NewsCard
            key={index}
            title={post.title}
            date={post.date}
            // imageSrc={post.imageSrc}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};
