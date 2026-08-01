// const File = require("../models/File");

// exports.uploadFile = async (req, res) => {
//   try {
//     const file = req.file;

//     const savedFile = await File.create({
//       originalName: file.originalname,
//       fileName: file.filename,
//       filePath: file.path,
//       mimeType: file.mimetype,
//       size: file.size,
//     });

//     res.status(201).json({
//       success: true,
//       message: "File Uploaded",
//       data: savedFile,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// exports.getFiles = async (req, res) => {
//   try {
//     const files = await File.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json(files);
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
//2
// const File = require("../models/File");
// const fs = require("fs");
// const path= require('path');

// exports.uploadFile = async (req, res) => {
//   try {
//     const file = req.file;

//     const savedFile = await File.create({
//       originalName: file.originalname,
//       fileName: file.filename,
//       // filePath: file.filename,
//       // mimeType: file.mimetype,
//       size: file.size,
//     });

//     res.status(201).json({
//       success: true,
//       data: savedFile,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getFiles = async (req, res) => {
//   try {
//     const files = await File.find().sort({
//       createdAt: -1,
//     });

//     res.json(files);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// exports.deleteFile = async (req, res) => {
//   try {
//     const file = await File.findById(req.params.id);

//     if (!file) {
//       return res.status(404).json({
//         message: "File not found",
//       });
//     }

//     if (fs.existsSync(file.filePath)) {
//       fs.unlinkSync(file.filePath);
//     }

//     await File.findByIdAndDelete(req.params.id);

//     res.json({
//       success: true,
//       message: "File deleted",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

//3
const File = require("../models/File");
const fs = require("fs");
const path = require("path");

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file provided" });
    }

    const duplicateFile = await File.findOne({
      originalName: file.originalname,
      size: file.size,
    });

    if (duplicateFile) {
      if (file.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }

      return res.status(400).json({
        message: "⚠️ This file has already been uploaded.",
      });
    }

    const savedFile = await File.create({
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
    });

    return res.status(201).json({
      success: true,
      data: savedFile,
    });

  } catch (error) {
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    console.error("Upload controller error:", error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find().sort({ createdAt: -1 });
    return res.json(files);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// exports.deleteFile = async (req, res) => {
//   try {
//     const file = await File.findById(req.params.id);

//     if (!file) {
//       return res.status(404).json({ message: "File not found" });
//     }

//     const filePath = path.join(__dirname, "../uploads", file.fileName);

//     if (fs.existsSync(filePath)) {
//       fs.unlinkSync(filePath);
//     }

//     await File.findByIdAndDelete(req.params.id);

//     return res.json({
//       success: true,
//       message: "File deleted successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

exports.deleteFile = async (req, res) => {
  try {
    // 1. Find the document in the database by its unique Mongo _id
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: "File not found in database" });
    }

    // 2. Build the correct path to the storage folder using file.fileName
    // We use path.join to safely absolute-target your 'uploads' directory
    const fileDiskPath = path.join(__dirname, "../uploads", file.fileName);

    // 3. Check if the file physically exists on the disk, and erase it!
    if (fs.existsSync(fileDiskPath)) {
      fs.unlinkSync(fileDiskPath);
      console.log(`Successfully removed file from storage: ${file.fileName}`);
    } else {
      console.log(`File was not found on storage disk, skipping unlink: ${file.fileName}`);
    }

    // 4. Wipe the metadata record completely from MongoDB
    await File.findByIdAndDelete(req.params.id);

    return res.json({
      success: true,
      message: "File successfully removed from both storage and database.",
    });
  } catch (error) {
    console.error("Delete operation failed:", error);
    return res.status(500).json({ message: error.message });
  }
};