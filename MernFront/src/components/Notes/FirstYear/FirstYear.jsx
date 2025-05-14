import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import firstYearSubjects from "../../Data/subjects"; // ✅

function FirstYear() {
  const [selectedSemester, setSelectedSemester] = useState("all");

  const [subjects, setSubjects] = useState(firstYearSubjects);

  useEffect(() => {
    localStorage.setItem("subjectDownloads", JSON.stringify(subjects));
  }, [subjects]);

  const handleViewNotesClick = (code) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.code === code ? { ...subject, downloads: subject.downloads + 1 } : subject
      )
    );
  };

  const filteredSubjects = subjects.filter(subject =>
    selectedSemester === "all" || subject.semester === selectedSemester
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-600 hover:text-[#6366F1]">
                Home
              </Link>
            </li>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <li>
              <Link to="/notes" className="text-gray-600 hover:text-[#6366F1]">
                Notes
              </Link>
            </li>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <li>
              <NavLink to="/notes/FirstYear" className={({ isActive }) => ` ${isActive ? "text-[#3033f3]" : "text-gray-700"} hover:text-[#7276fd]`}>
                First Year
              </NavLink>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-200">First Year Engineering Notes</h1>
        <p className="text-gray-600 mb-6 dark:text-gray-400">Access comprehensive study materials for all first-year engineering subjects.</p>

        {/* Semester Selection Buttons */}
        <div className="flex gap-4 mb-6">
          {["all", "1", "2"].map((semester) => (
            <button
              key={semester}
              onClick={() => setSelectedSemester(semester)}
              className={`px-4 py-2 rounded-full text-sm ${selectedSemester === semester ? "bg-[#6366F1] text-white" : "bg-white text-gray-600 hover:bg-blue-200 dark:bg-gray-900 dark:text-gray-400"}`}
            >
              {semester === "all" ? "All Subjects" : `Semester ${semester}`}
            </button>
          ))}
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map(subject => (
            <div key={subject.code} className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden dark:bg-gray-900 dark:text-gray-200 border border-[#6366f1]">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary">{subject.code}</span>
                  <span className="text-xs text-gray-00">{subject.updated} </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <div className="flex items-center justify-between">
                  <i className="ri-eye-line  "><span className="text-sm m-1 text-gray-500">{subject.downloads.toLocaleString()} downloads</span>
                  </i>
                    <Link
                      to={`/notes/${subject.code}`}
                      className="text-white bg-[#6366F1] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#4F46E5]"
                      onClick={() => handleViewNotesClick(subject.code)}
                    >
                      View Notes
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FirstYear;
