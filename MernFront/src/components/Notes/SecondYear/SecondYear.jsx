import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";


function SecondYear () {
  const [selectedSemester2, setSelectedSemester2] = useState("all");

  // Load downloads from localStorage (or use default values if not found)
  const initialSubjects = () => {
    const storedData = localStorage.getItem("subjectDownloads2");
    return storedData ? JSON.parse(storedData) : [
      { code: "ES-301", name: "Energy & Environmental Engineering", semester: "3", downloads: 2300, updated: "Mar 15, 2025", description: "Water treatment, boiler problems, lubrication, polymers, phase equilibrium, corrosion, spectroscopy, and periodic properties, essential for understanding industrial and chemical processes." },
      { code: "CS-302", name: "Discrete Structure", semester: "3", downloads: 3100, updated: "Mar 18, 2025", description: "Calculus, sequences and series, vector spaces, matrices, Rolle’s and Mean Value theorems, Taylor series, multiple integrals, Fourier series, linear transformations, and matrix operations." },
      { code: "CS-303", name: "Data Structure", semester: "3", downloads: 1800, updated: "Mar 20, 2025", description: "Language and communication skills, covering grammar, vocabulary, reading comprehension, writing techniques, and business correspondence essential for technical and professional settings."},
      { code: "CS-304", name: "Digital Systems", semester: "3", downloads: 2500, updated: "Mar 19, 2025", description: "Electrical circuits, machines, transformers, and basic electronics, including circuit theorems, AC/DC analysis, induction motors, and semiconductor devices." },
      { code: "CS-305", name: "Object Oriented Programming & Methodology", semester: "3", downloads: 2000, updated: "Mar 17, 2025", description: "Engineering drawing principles, orthographic and isometric projections, CAD tools, and building design concepts. It includes technical drafting, 3D modeling, sectional views, and an introduction to BIM." },
      { code: "CS-306", name: "Computer Workshop", semester: "3",downloads: 1, updated: "Mar 17, 2025", description: "Engineering Workshop Practice is intended to expose engineering students to different types of manufacturing / fabrication processes"},
      { code: "BT-107", name: "Evaluation of Internship-I completed at I year level", semester: "3",downloads: 1, updated: "Mar 17, 2025", description: "(60 Hrs Duration) at the Institute level"},
      { code: "BT-308", name: "90 hrs Internship based on using various softwares –Internship -II", semester: "3",downloads: 1, updated: "Mar 17, 2025", description: "((100Hrs)/Rural Outreach"},


      { code: "BT-401", name: "Mathematics- III", semester: "4", downloads: 2600, updated: "Mar 21, 2025", description: "Quantum mechanics, wave optics, solid-state physics, lasers, and electrostatics. Topics include the Schrödinger equation, interference and diffraction, semiconductor physics, laser principles, and Maxwell’s equations." },
      { code: "CS-402", name: "Analysis Design of Algorithm", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "Differential equations, partial differential equations, complex variables, and vector calculus. Topics include first and second-order ODEs, PDEs, analytic functions, and vector theorems like Gauss and Stokes." },
      { code: "CS-403", name: "Software Engineering", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "Engineering materials, measurement techniques, production processes, fluid mechanics, thermodynamics, and reciprocating machines, including steam engines, boilers, and internal combustion engines." },
      { code: "CS-404", name: "Computer Org. & Architecture", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "Building materials, surveying techniques, mapping, and engineering mechanics. Topics include construction elements, leveling, remote sensing, force equilibrium, trusses, and beam analysis." },
      { code: "CS-405", name: "Operating Systems", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "Fundamental computer concepts, operating systems, programming, networking, cybersecurity, databases, and cloud computing. Topics include algorithms, OOP in C++, data structures, networking models, cyber threats, DBMS, and cloud infrastructure."},
      { code: "CS-406", name: "Programming Practices", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "This course intends to impart practical training in the use of English Language for Communicative purposes and aims to develop students’ personality through language Laboratory" },
      { code: "CS-406.", name: "Programming Practices", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "This course intends to impart practical training in the use of English Language for Communicative purposes and aims to develop students’ personality through language Laboratory" },
      { code: "CS-407", name: "90 hrs Internship based on using various software’s –Internship -II", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "This course intends to impart practical training in the use of English Language for Communicative purposes and aims to develop students’ personality through language Laboratory" },
      { code: "CS-408", name: "Cyber Security", semester: "4", downloads: 3000, updated: "Mar 22, 2025", description: "This course intends to impart practical training in the use of English Language for Communicative purposes and aims to develop students’ personality through language Laboratory" }



    ];
  };

  const [subjects, setSubjects] = useState(initialSubjects);

  // Save updates to localStorage when downloads are incremented
  useEffect(() => {
    localStorage.setItem("subjectDownloads2", JSON.stringify(subjects));
  }, [subjects]);

  // Function to handle View Notes click (Increase Downloads)
  const handleViewNotesClick = (code) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.code === code ? { ...subject, downloads: subject.downloads + 1 } : subject
      )
    );
  };

  // Filter subjects based on selected semester
  const filteredSubjects = subjects.filter(subject =>
    selectedSemester2 === "all" || subject.semester === selectedSemester2
  );

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb flex mb-8" aria-label="Breadcrumb">
        <ol className="breadcrumb inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="ml-1 text-gray-600 hover:text-primary md:ml-4 hover:text-[#6366F1] cursor-pointer">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/notes" className="ml-1 text-gray-600 hover:text-primary md:ml-1 hover:text-[#6366F1] cursor-pointer">
              Notes
            </Link>
          </li>
          <li>/</li>
          <li>
            <NavLink to="/notes/SecondYear" className={({ isActive }) => ` ${isActive ? "text-indigo-500 " : "text-gray-700"} hover:text-[#7276fd] cursor-pointer ml-1 text-primary font-medium md:ml-4`}>
              Second Year
            </NavLink>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-200 ">Second Year Engineering Notes</h1>
      <p className="text-gray-600 mb-6 dark:text-gray-400 ">Access comprehensive study materials for all first-year engineering subjects.</p>

      {/* Semester Selection Buttons */}
      <div className="flex gap-4 mb-6">
        {["all", "3", "4"].map((semester) => (
          <button
            key={semester}
            onClick={() => setSelectedSemester2(semester)}
            className={`px-4 py-2 rounded-full text-sm ${selectedSemester2 === semester ? "bg-[#6366F1] text-white" : "bg-white text-gray-600 hover:bg-blue-200 dark:bg-gray-900 dark:text-gray-400"}`}
            >
            {semester === "all" ? "All Subjects" : `Semester ${semester}`}
          </button>
        ))}
      </div>

      {/* Subject List */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6  ">
        {filteredSubjects.map(subject => (
          <div key={subject.code} className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden subject-card dark:bg-gray-900 dark:hover:shadow-blue-800 dark:hover:scale-105 dark:transition-all  dark:text-gray-200 dark:border border border-[#6366f1] dark:shadow- ">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary">{subject.code}</span>
                <span className="text-xs text-gray-500  dark:text-gray-300 ">Updated: {subject.updated}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100  ">{subject.name}</h3>
              <p className="text-gray-600 text-sm mb-4  dark:text-gray-400 ">{subject.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500  dark:text-gray-300 ">{subject.downloads.toLocaleString()} downloads</span> {/* ✅ Formats downloads */}
                <Link
                  to={`/notes/${subject.code}`}
                  className="text-white bg-[#6366F1] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#4F46E5]"
                  onClick={() => handleViewNotesClick(subject.code)} // ✅ Increase downloads on click
                >
                  View Notes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}

export default SecondYear;


