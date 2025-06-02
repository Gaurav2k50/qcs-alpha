import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>App Development</li>
            <li>ERP Development</li>
            <li>Web Development</li>
            <li>Maintenance & Support</li>
            <li>App/Website Upgradation</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Blog</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Blog</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                ChatGPT by OpenAI Explained
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Mobile App Marketing Strategy in 2025
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Why Your Business Needs a Mobile App
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dashed mt-12 pt-4 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <span className="mb-2 md:mb-0">All rights reserved.</span>
          <span>Copyright © stackLoop 2025</span>
        </div>
      </div>
    </footer>
  );
};
