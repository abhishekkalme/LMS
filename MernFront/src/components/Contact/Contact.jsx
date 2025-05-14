import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can connect backend later here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-[100dvh]"
      >
        {/* Breadcrumb */}
        <nav
          className="bg-transparent px-4 py-6 max-w-7xl mx-auto"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-indigo-500">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-indigo-500 font-medium">Contact</li>
          </ol>
        </nav>

        {/* Hero Section */}

        <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-[40vh] flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              We'd love to hear from you! Fill out the form below and we'll get back to you soon.
            </p>
          </div>
        </section>


        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 flex-grow">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"
            >
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {submitted ? "Sent ✅" : "Send Message"}
              </motion.button>
            </form>
          </div>
        </section>
        {/* Social Links Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-6">
              {/* GitHub */}
              <motion.a
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <i className="ri-github-fill text-3xl"></i>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/yourlinkedinprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <i className="ri-linkedin-box-fill text-3xl"></i>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:support@jitlearning.com"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <i className="ri-mail-fill text-3xl"></i>
              </motion.a>

              {/* Instagram (Optional) */}
              <motion.a
                href="https://instagram.com/yourinstagramprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
              >
                <i className="ri-instagram-fill text-3xl"></i>
              </motion.a>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Contact;
