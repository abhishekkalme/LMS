import React, { useState } from "react";
import axios from "axios";

const UploadNotes = () => {
  const [formData, setFormData] = useState({
    year: "",
    subjectCode: "",
    unit: "",
    file: null,
  });

  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file || !formData.year || !formData.subjectCode || !formData.unit) {
      return setMessage("Please fill all fields and select a file.");
    }

    try {
      setUploading(true);
      setMessage("");

      const data = new FormData();
      data.append("year", formData.year);
      data.append("subjectCode", formData.subjectCode);
      data.append("unit", formData.unit);
      data.append("file", formData.file);

      const res = await axios.post(
        "https://back-lms.onrender.com/api/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // ✅ IMPORTANT: send cookie (JWT)

        }
      );

      setMessage("Upload successful! 📄");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed ❌");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Upload Notes</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="year"
          placeholder="Enter Year (e.g., FirstYear)"
          value={formData.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="subjectCode"
          placeholder="Enter Subject Code (e.g., BT-101)"
          value={formData.subjectCode}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="unit"
          placeholder="Enter Unit Number"
          value={formData.unit}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="file"
          name="file"
          accept=".pdf"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Notes"}
        </button>
      </form>

      {message && (
        <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
      )}
    </div>
  );
};

export default UploadNotes;
