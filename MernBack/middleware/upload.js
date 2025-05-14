// middleware/upload.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary"); // path to cloudinary.js

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const { branch, year, semester, subjectCode, unit } = req.body;

    return {
      folder: `jit_learning_notes/Notes/${branch}/${year}/${semester}/${subjectCode}/${unit}`,
      public_id: `${subjectCode}-unit-${unit}`,
      resource_type: "raw", // PDF = raw
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
