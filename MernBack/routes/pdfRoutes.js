const express = require("express");
const axios = require("axios");
const router = express.Router();

// ✅ Replace with your Cloudinary cloud name
const CLOUDINARY_BASE_URL = "cloudinary://853684377233959:fyueVMsk-K_KN6l-94uqMX1Td5w@di0tlevw3";

router.get("/download/:year/:subjectCode/:unit", async (req, res) => {
  const { year, subjectCode, unit } = req.params;

  // ✅ Construct Cloudinary file path
  const fileUrl = `${CLOUDINARY_BASE_URL}/jit_learning_notes/Notes/${year}/${subjectCode}/${unit}/${subjectCode}-unit-${unit}.pdf`;

  try {
    const response = await axios({
      method: "GET",
      url: fileUrl,
      responseType: "stream",
    });

    // ✅ Stream the PDF back to the client
    res.setHeader("Content-Disposition", `attachment; filename="${subjectCode}-unit-${unit}.pdf"`);
    res.setHeader("Content-Type", "application/pdf");

    response.data.pipe(res);
  } catch (error) {
    console.error("Download error:", error.message);
    res.status(404).json({ message: "File not found in Cloudinary" });
  }
});

module.exports = router;
