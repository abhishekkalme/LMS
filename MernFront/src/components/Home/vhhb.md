import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
const [searchQuery, setSearchQuery] = useState("");

return (
<>
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -30 }}
transition={{ duration: 0.5 }} >
<main className="">
<div className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8 py-8   ">
<div className="text-center mb-8  bg-white dark:bg-gray-900 text-gray-900  ">
<h1 className="text-4xl font-bold text-gray-800 mb-4  dark:text-gray-200">
Find Your Perfect Learning Resources
</h1>
<p className="text-lg text-gray-600  dark:text-gray-400">
Access quality study materials across all subjects and education
levels
</p>
</div>
<div className="relative max-w-3xl mx-auto mb-12 search-wrapper  ">
<div className="relative">
<input
type="text"
placeholder="Search for subjects, topics, or keywords..."
value={searchQuery} // 👈 Controlled input
onChange={(e) => setSearchQuery(e.target.value)} // 👈 Update searchQuery
className="w-full pl-12 pr-4 py-3 text-sm bg-white border border-[rgb(99,102,241)] rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
/>

                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400 w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mb-8  ">
              <div className="relative">
                <button className="bg-white px-4 py-2 rounded-md text-sm font-medium border border-[#6366f1] hover:border-gray-500 text-gray-600 flex items-center whitespace-nowrap dark:bg-gray-900 ">
                  <span>Subject</span>
                  <i className="ri-arrow-down-s-line ml-2 w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
              <div className="relative">
                <button className="bg-white px-4 py-2 rounded-md text-sm font-medium border border-[#6366f1] hover:border-gray-500 text-gray-600 flex items-center whitespace-nowrap dark:bg-gray-900 ">
                  <span>Education Level</span>
                  <i className="ri-arrow-down-s-line ml-2 w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
              <div className="relative">
                <button className="bg-white px-4 py-2 rounded-md text-sm font-medium border border-[#6366f1] hover:border-gray-500 text-gray-600 flex items-center whitespace-nowrap dark:bg-gray-900 ">
                  <span>Sort by: Recent</span>
                  <i className="ri-arrow-down-s-line ml-2 w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-200 ">
                Popular Categories
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   ">
                {/* <Link to ="/notes"> */}

                <div className="  bg-white p-6 rounded-lg shadow-md hover:shadow-xl overflow-hidden subject-card dark:bg-gray-900 dark:hover:shadow-blue-800 dark:hover:scale-105 dark:transition-all  dark:text-gray-200 dark:border border border-[#6366f1] dark:shadow-  ">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to="/notes">
                      <div className="w-12 h-12 bg--100 rounded-full flex items-center justify-center mb-4">
                        <img src="images/school.svg" alt="" />{" "}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200 ">
                        RGPV
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Everything for B. tech. students
                      </p>
                    </Link>
                  </motion.div>
                </div>

                <div className="  bg-white p-6 rounded-lg shadow-md hover:shadow-xl overflow-hidden subject-card dark:bg-gray-900 dark:hover:shadow-blue-800 dark:hover:scale-105 dark:transition-all  dark:text-gray-200 dark:border border border-[#6366f1] dark:shadow-  ">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-black-100 rounded-full flex items-center justify-center mb-4  ">
                      <img src="images/star_.svg" alt="" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200 ">
                      Important Questions
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Unit wise important questions for B. tech. students
                    </p>
                  </motion.div>
                </div>
                <div className="  bg-white p-6 rounded-lg shadow-md hover:shadow-xl overflow-hidden subject-card dark:bg-gray-900 dark:hover:shadow-blue-800 dark:hover:scale-105 dark:transition-all  dark:text-gray-200 dark:border border border-[#6366f1] dark:shadow-  ">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-black-100 rounded-full flex items-center justify-center mb-4">
                      <img src="images/local.svg" alt="" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200 ">
                      Previous Year Questions
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      60% questions repeats from last 5 years papers
                    </p>
                  </motion.div>
                </div>
                <div className="  bg-white p-6 rounded-lg shadow-md hover:shadow-xl overflow-hidden subject-card dark:bg-gray-900 dark:hover:shadow-blue-800 dark:hover:scale-105 dark:transition-all  dark:text-gray-200 dark:border border border-[#6366f1] dark:shadow-  ">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-black-100 rounded-full flex items-center justify-center mb-4">
                      <img src="images/auto_stories.svg" alt="" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200 ">
                      Syllabus \ Scheme
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      It is really very helpful to plan your study
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-200 ">
                  Recent Notes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#6366f1] dark:bg-gray-900 ">
                    <div className="p-6  ">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center ">
                          <i className="ri-function-line text-blue-600 w-4 h-4 flex items-center justify-center "></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300 ">
                          Mathematics
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200 ">
                        Linear Algebra Fundamentals
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 dark:text-gray-400  ">
                        Comprehensive guide to vectors, matrices, and linear
                        transformations.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          College
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="ri-eye-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                          2.1k
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow  border border-[#6366f1] dark:bg-gray-900 ">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <i className="ri-flask-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-600">
                          Biology
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200  ">
                        Cell Biology Essentials
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Detailed notes on cell structure, function, and division
                        processes.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          High School
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="ri-eye-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                          1.8k
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow  border border-[#6366f1] dark:bg-gray-900 ">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <i className="ri-book-open-line text-yellow-600 w-4 h-4 flex items-center justify-center"></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-600">
                          Literature
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-200 ">
                        Shakespeare's Macbeth Analysis
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        In-depth analysis of themes, characters, and literary
                        devices.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          High School
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="ri-eye-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                          1.5k
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 hidden lg:block">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Access
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Popular Subjects
                      </h4>
                      <div className="space-y-2">
                        <Link to="/upload">
                          className="block text-sm text-gray-600
                          hover:text-[#6366F1] hover:text-primary" Mathematics
                        </Link>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Physics
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Chemistry
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Biology
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium  text-gray-900 mb-2">
                        Education Levels
                      </h4>
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          High School
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          College
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Graduate
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Study Tips
                      </h4>
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Effective Note-Taking
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Time Management
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#6366F1] hover:text-primary"
                        >
                          Exam Preparation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </>

);
}

export default Home;
