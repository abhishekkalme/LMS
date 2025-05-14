import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const years = ["FirstYear", "SecondYear", "ThirdYear", "FinalYear"];
const subjects = {
  FirstYear: ["BT-101", "BT-102", "BT-103", "BT-104", "BT-105", "BT-106", "BT-107", "BT-108", "BT-201", "BT-202", "BT-203", "BT-204", "BT-205", "BT-206"],
  SecondYear: ["ES-301", "CS-302", "CS-303", "CS-304", "CS-305", "CS-306", "CS-307", "CS-308","BT-401", "CS-402", "CS-403", "CS-404", "CS-405", "CS-406","CS-406.",  "CS-407", "CS-408"],
  ThirdYear: ["CS-501", "CS-502", "CS-503(A)", "CS-503(B)", "CS-503(C)", "CS-504(A)", "CS-504(B)", "CS-504(C)","CS-505", "CS-506", "CS-507", "CS-508", "CS-601", "CS-602", "CS-603(A)", "CS-603(B)", "CS-603(C)", "CS-604(A)", "CS-604(B)", "CS-604(C)", "CS-605", "CS-606",],
  FinalYear: ["CS-701", "CS-702(A)", "CS-702(B)", "CS-702(C)", "CS-702(D)", "CS-703(A)", "CS-703(B)", "CS-703(C)", "CS-703(D)", "CS-801", "CS-802(A)", "CS-802(B)", "CS-802(C)", "CS-802(D)", "CS-803(A)", "CS-803(B)", "CS-803(C)", "CS-803(D)", ],
};
const units = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5" ,"Unit 6", "Unit 7"];

const UploadNotes = () => {
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to upload.");
      return;
    }

    if (!year || !subject || !unit || !selectedFile) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("year", year);
    formData.append("subject", subject);
    formData.append("unit", unit);

    try {
      setLoading(true);
      await axios.post(`${API_BASE_URL}/api/notes`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Note uploaded successfully!");
      setYear("");
      setSubject("");
      setUnit("");
      setSelectedFile(null);
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Toaster position="top-right" />
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          📤 Upload Notes
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Year</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="">-- Select Year --</option>
              {years.map((yr) => (
                <option key={yr} value={yr}>{yr}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              disabled={!year}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 disabled:opacity-50"
            >
              <option value="">-- Select Subject --</option>
              {year && subjects[year]?.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="">-- Select Unit --</option>
              {units.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              required
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        </form>

        <div className="mt-8 text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            {loading ? "Uploading..." : "📤 Upload Note"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNotes;
