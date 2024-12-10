import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import React Icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-4">
          {/* Left section: Logo or text */}
          <div>
            <h3 className="text-2xl font-bold">Department News</h3>
            <p className="text-sm">Your trusted source for department updates.</p>
          </div>

          {/* Right section: Social media links */}
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={24} /> {/* Use React Icon */}
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook size={24} /> {/* Use React Icon */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={24} /> {/* Use React Icon */}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          {/* Bottom section: Legal links or other info */}
          <div className="flex justify-between text-sm text-gray-400">
            <p>&copy; 2024 Department News. All Rights Reserved.</p>
            <div className="space-x-4">
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
