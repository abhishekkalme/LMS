import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
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
        <nav className="bg-transparent px-4 py-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-indigo-500">Home</Link>
            </li>
            <li>/</li>
            <li className="text-indigo-500 font-medium">About</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-[50vh] flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About JIT Learning System</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Empowering students to achieve more with the best academic resources at their fingertips.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* About Text */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                JIT Learning System is an initiative to support students in their academic journey by providing organized, accessible, and high-quality notes, previous year questions, important topics, and more.
              </p>
            </div>

            {/* Mission, Vision, Goals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-flag-line text-indigo-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To make quality education resources accessible to every student, everywhere.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-eye-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To become the most trusted learning companion for students globally.
                </p>
              </motion.div>

              {/* Goal Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-line text-pink-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Goal</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To provide updated notes, improve learning methods, and boost academic success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

      </motion.div>{/* Team Section */}
<section className="py-16 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Meet Our Team
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        The passionate people behind JIT Learning System who work to make education accessible for everyone.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Team Member 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
      >
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=AK"
          alt="Abhishek Kalme"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Abhishek Kalme
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Founder & Developer</p>
      </motion.div>

      {/* Team Member 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
      >
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=JD"
          alt="John Doe"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          John Doe
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Co-Developer</p>
      </motion.div>

      {/* Team Member 3 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
      >
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=SA"
          alt="Sarah Ahmad"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Sarah Ahmad
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Content Manager</p>
      </motion.div>
    </div>
  </div>
</section>

    </>
  );
}

export default About;
