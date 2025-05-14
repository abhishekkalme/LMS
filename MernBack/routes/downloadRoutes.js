const express = require("express");
const axios = require("axios");
const router = express.Router();

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/di0tlevw3/raw/upload";

router.get("/download/:year/:subject/:unit/:filename", async (req, res) => {
  const { year, subject, unit, filename } = req.params;

  const cloudinaryUrl = `${CLOUDINARY_BASE_URL}/jit_learning_notes/Notes/${year}/${subject}/${unit}/${filename}`;

  try {
    const fileStream = await axios({
      method: "GET",
      url: cloudinaryUrl,
      responseType: "stream",
    });

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/pdf");

    fileStream.data.pipe(res);
  } catch (err) {
    console.error("Cloudinary download error:", err.message);
    res.status(500).json({ message: "Failed to download file from Cloudinary" });
  }
});

module.exports = router;


