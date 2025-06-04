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
        background: backgroundImage
          ? `linear-gradient(to right, rgba(30, 58, 138, 0.95), rgba(30, 58, 138, 0.8)), url(${backgroundImage})`
          : "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

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
