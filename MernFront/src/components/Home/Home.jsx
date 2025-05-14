import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "NOTES",
      description: "Everything for B. Tech. students",
      link: "/branch",
      icon: "images/school.svg",
    },
    {
      title: "Syllabus \\ Scheme",
      description: "Plan your study smartly",
      link: "/syllabus",
      icon: "images/auto_stories.svg",
    },
    {
      title: "Important Questions",
      description: "Unit-wise preparation guide",
      icon: "images/star_.svg",
      className: "cursor-not-allowed pointer-events-none opacity-50",
    },
    {
      title: "Previous Year Questions",
      description: "60% repeat questions from last 5 years",
      icon: "images/local.svg",
      className: "pointer-events-none opacity-50",
    },
  ];

  const filteredCategories = categories.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <main>
          {/* Hero Section */}
          <section className="relative flex-grow">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 py-24 text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
                Unlock Your Academic Potential
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                Find Your Perfect Learning Resources
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-400 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search for subjects, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-sm bg-white border border-indigo-500 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500 dark:bg-gray-900 dark:text-gray-200"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Popular Categories */}
          <section className="py-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-8xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Popular Categories
              </h2>
              {filteredCategories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCategories.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl overflow-hidden subject-card dark:bg-gray-900 dark:hover:shadow-blue-800 dark:hover:scale-105 dark:transition-all dark:text-gray-200 border border-indigo-500 ${item.className || ""
                        }`}
                    >
                      <Link
                        to={item.link || "#"}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-10 h-10"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                          {item.description}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
                  Oops! No matching category found. 😔
                </div>
              )}
            </div>
          </section>

          {/* Quick Links */}
          <section className="bg-white dark:bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                Quick Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <Link to="/admin" className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white p-4 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-700 transition">
                  📤 Upload Notes (Only Admin)
                </Link>
                <Link to="/admin" className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-white p-4 rounded-lg hover:bg-green-200 dark:hover:bg-green-700 transition">
                  ✅ Manage Syllabus (Only Admin) 
                </Link>
                <Link to="mailto:abhishekkalme0@gmail.com"className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-white p-4 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-700 transition">
                  💬 Feedback & Support
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Why Use JIT Learning System?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 border rounded-lg shadow-lg  hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🎯 Curated Resources</h3>
                  <p className="text-gray-700 dark:text-gray-300">Handpicked notes and questions for every semester.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">⚡ Fast Access</h3>
                  <p className="text-gray-700 dark:text-gray-300">Simple UI and quick search to find what you need.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🔒 Secure Uploads</h3>
                  <p className="text-gray-700 dark:text-gray-300">Verified contributors and admin-approved materials.</p>
                </div>
              </div>
            </div>
          </section>



          
        </main>
      </motion.div>
    </>
  );
}

export default Home;
