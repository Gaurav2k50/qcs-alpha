import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {/* <li>App Development</li>
            <li>ERP Development</li>
            <li>Web Development</li>
            <li>Maintenance & Support</li>
            <li>App/Website Upgradation</li> */}
            <p>
              Quantic Control System is a trusted name in the world of
              instrumentation with a legacy of excellence we’ve been at a
              forefront of the industry offering cutting edge technology and
              unmatched expertise .At Quantic Control System we specialize in a
              delivering precision instrumentational solution tailored to your
              specific needs to accuracy reliability and innovation, we provide
              advanced tools for the analysis of gases and liquid across various
              industries.
            </p>
          </ul>
        </div>

        {/* Explore */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Blog</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div> */}

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                3D Radar Level Transmitter
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                3D Acoustic Level Scanner
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                3D Stockpile Measurement
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Nucleonic Density Meter
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Solid Flow Meters
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Liquid Flow Meters
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Knife Gate Valves
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-white" />
              <a
                href="https://maps.google.com/?q=Shantiniketan+Jamshedpur+Jharkhand+832108"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Shantiniketan Jamshedpur Jharkhand-832108
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="flex-shrink-0 text-white" />
              <a
                href="tel:+918084354194"
                className="hover:text-white transition-colors"
              >
                +91-8084354194
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="flex-shrink-0 text-white" />
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:info@quanticcontrol.in"
                  className="hover:text-white transition-colors"
                >
                  info@quanticcontrol.in
                </a>
                <a
                  href="mailto:quanticcontrol@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  quanticcontrol@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="col-span-1 flex items-center justify-center md:justify-start">
          <Link to="/">
            <img
              src={logo}
              alt="Quantic Control System Logo"
              className="h-70 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dashed mt-12 pt-4 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <span className="mb-2 md:mb-0">All rights reserved.</span>
          <span>Copyright © Quantic Control System 2025</span>
        </div>
      </div>
    </footer>
  );
};
