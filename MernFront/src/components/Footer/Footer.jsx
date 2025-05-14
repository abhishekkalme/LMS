import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 Add framer-motion import

function Footer() {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white border-t border-gray-200 mt-12 dark:bg-gray-900"
      >
        <div className="max-w-18xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <div className="space-y-2 ">
                <NavLink
                  to="/"
                  className="block text-sm text-gray-600 dark:hover:text-[#6366F1] dark:text-white"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/subjects"
                  className="block text-sm text-gray-600 dark:hover:text-[#6366F1] dark:text-white"
                >
                  Subjects
                </NavLink>
                <NavLink
                  to="/notes"
                  className="block text-sm text-gray-600 dark:hover:text-[#6366F1] dark:text-white"
                >
                  Notes
                </NavLink>
                <NavLink
                  to="/about"
                  className="block text-sm text-gray-600 dark:hover:text-[#6366F1] dark:text-white"
                >
                  About Us
                </NavLink>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contact
              </h3>
              <div className="space-y-2">
                <Link to ="mailto:abhishekkalme0@gmail.com">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Email: abhishekkalme0@gmail.com
                </p>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Phone: (Update Soon)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Address: (Update Soon)
                </p>
              </div>
            </div>

            {/* Follow Us (Social Media) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition transform hover:scale-110 hover:-rotate-6 duration-300"
                >
                  <i className="ri-facebook-fill text-2xl"></i>
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1DA1F2] transition transform hover:scale-110 hover:-rotate-6 duration-300"
                >
                  <i className="ri-twitter-fill text-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E1306C] transition transform hover:scale-110 hover:-rotate-6 duration-300"
                >
                  <i className="ri-instagram-fill text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-kalme-289a7430a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0077B5] transition transform hover:scale-110 hover:-rotate-6 duration-300"
                >
                  <i className="ri-linkedin-fill text-2xl"></i>
                </a>
              </div>
            </div>


            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Subscribe to get updates on new study materials
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <button className="bg-[#6366F1] text-white px-4 py-2 text-sm font-medium rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-[#4F46E5] whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* Footer */}
          <footer className="bg-indigo-600 text-white rounded  mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
              <p>© {new Date().getFullYear()} JIT Learning System. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
