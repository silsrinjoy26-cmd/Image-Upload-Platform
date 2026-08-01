// const express = require("express");

// const upload = require("../middleware/uploadMiddleware");

// const {
//   uploadFile,
//   getFiles,
// } = require("../controllers/uploadController");

// const router = express.Router();

// router.post(
//   "/upload",
//   upload.single("file"),
//   uploadFile
// );

// router.get("/files", getFiles);

// module.exports = router;
const express = require("express");

const router = express.Router();

const path = require("path");
const fs = require("fs");

const File = require("../models/File");

const upload = require("../middleware/uploadMiddleware");

const {
  uploadFile,
  getFiles,
  deleteFile,
} = require("../controllers/uploadController");

router.post(
  "/upload",
  upload.single("file"),
  uploadFile
);

router.get("/files", getFiles);

router.delete("/files/:id", deleteFile);

// GET IMAGE BY ID
router.get("/file/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    const filePath = path.join(
      __dirname,
      "../uploads",
      file.fileName
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        message: "File missing on server",
      });
    }

    res.sendFile(filePath);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;