const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
    {
        originalName: String,
        fileName: String,
        // filepath: String,
        mimetype: String,
        size: Number 
    },
    {timestamps: true}
);

module.exports = mongoose.model("File",fileSchema);