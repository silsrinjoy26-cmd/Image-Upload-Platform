import { useEffect, useState } from "react";
import { getFiles, deleteFile } from "../api/uploadApi";
import { FaTrash } from "react-icons/fa";

function FileHistory() {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await getFiles();
    setFiles(res.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDelete = async (id) => {
    await deleteFile(id);
    setFiles((prev) => prev.filter((file) => file._id !== id));
  };

  return (
    <div>
      <h2>Upload History</h2>

      {files.length === 0 && <p>No uploads found</p>}

      {files.map((file) => { 
        const imageUrl = `http://localhost:5000/api/file/${file._id}`;

        return (
          <div
            key={file._id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
            }}
          >
            {/* LEFT SIDE */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <img
                src={imageUrl}
                alt={file.originalName || "Uploaded image"}
                width="60"
                height="60"
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "1px solid #ddd"
                }}
                onClick={() => window.open(imageUrl, "_blank")}
              />
                  
              <div>
                <p style={{ margin: 0, fontWeight: "600" }}>
                  {file.originalName || "Unnamed File"}
                </p>

                <small style={{ color: "gray" }}>
                  {(file.size / 1024).toFixed(1)} KB
                </small>
              </div>
            </div>

            {/* DELETE */}
            <FaTrash
              color="red"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(file._id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FileHistory;