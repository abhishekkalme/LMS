import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const AddSyllabus = () => {
  const [form, setForm] = useState({
    name: "",
    code: "",
    program: "B.Tech",
    grading: "Grading System",
    system: "Semester",
    pdfs: Array(8).fill(""),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePDFChange = (index, value) => {
    const updatedPDFs = [...form.pdfs];
    updatedPDFs[index] = value;
    setForm({ ...form, pdfs: updatedPDFs });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const pdfObject = form.pdfs.reduce((acc, url, i) => {
      if (url.trim()) acc[i + 1] = url;
      return acc;
    }, {});

    const payload = { ...form, pdfs: pdfObject };

    try {
      await axios.post(`${API_BASE_URL}/api/syllabus`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("✅ Syllabus added successfully!");
      setForm({
        name: "",
        code: "",
        program: "B.Tech",
        grading: "CBCS",
        system: "Semester",
        pdfs: Array(8).fill(""),
      });
    } catch (err) {
      console.error("❌ Error adding syllabus:", err);
      alert("Failed to add syllabus. Check your permissions.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          ➕ Add New Syllabus
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Department Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Department Code</label>
            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Program</label>
            <select
              name="program"
              value={form.program}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>MCA</option>
              <option>MCA Dual Degree</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">System Type</label>
            <select
              name="system"
              value={form.system}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <option>Semester</option>
              <option>Annual</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Grading System</label>
            <select
              name="grading"
              value={form.grading}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <option>CBCS</option>
              <option>CBGS</option>
              <option>Non Grading System</option>
              <option>Grading System</option>
            </select>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          <label className="block text-sm font-medium mb-2">
            📎 PDF Links (Semesters 1–8)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {form.pdfs.map((link, index) => (
              <input
                key={index}
                type="url"
                placeholder={`Semester ${index + 1} PDF URL`}
                value={link}
                onChange={(e) => handlePDFChange(index, e.target.value)}
                className="px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            ➕ Add Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSyllabus;
