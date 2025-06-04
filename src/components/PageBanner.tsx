import React from "react";
import { Link, useLocation } from "react-router-dom";

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <div
      className="relative min-h-[300px] flex items-center justify-center overflow-hidden"
      style={{
        background: backgroundImage ? `url(${backgroundImage})` : "#1E3A8A",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative container mx-auto px-6 py-16 text-center">
        {/* Breadcrumb navigation */}
        <nav className="mb-6">
          <ol className="flex justify-center space-x-2 text-sm text-blue-100/80">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => (
              <React.Fragment key={segment}>
                <li className="text-blue-100/60">/</li>
                <li
                  className={
                    index === pathSegments.length - 1 ? "text-white" : ""
                  }
                >
                  <Link
                    to={`/${pathSegments.slice(0, index + 1).join("/")}`}
                    className="hover:text-white transition-colors capitalize"
                  >
                    {segment.replace(/-/g, " ")}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        {/* Title and description with enhanced typography */}
        <h1
          className="text-5xl font-bold text-white mb-4 transform transition-all duration-300 ease-out"
          style={{
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
