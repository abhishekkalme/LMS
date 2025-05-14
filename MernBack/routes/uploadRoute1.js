// routes/uploadRoute.js
const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/upload",verifyToken, uploadHandler, upload.single("file"), (req, res) => {
  const { path, filename } = req.file;

  res.status(200).json({
    message: "Uploaded successfully",
    url: path, // direct Cloudinary URL
    filename,
  });
});

module.exports = router;
