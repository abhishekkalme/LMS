const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const syllabusRoutes = require("./routes/syllabus");
const path = require("path"); // Add this for serving static files

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS configuration for frontend (adjust the origin based on your frontend setup)

const allowedOrigins = [
  "http://localhost:5173", // local development
  "https://back-lms.onrender.com" // deployed frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // 👈 Allow cookies/authorization headers
  })
);

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../MernFront/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../MernFront/dist/index.html"));
});


// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/download", require("./routes/downloadRoutes"));
app.use("/api/", require("./routes/pdfRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/syllabus", syllabusRoutes);



// Define the port
const PORT = process.env.PORT || 9000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
