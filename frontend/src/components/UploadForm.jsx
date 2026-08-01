// import { useState } from "react";
// import { uploadFile } from "../api/uploadApi";

// function UploadForm() {
//   const [file, setFile] = useState(null);

//   const [message, setMessage] =
//     useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) return;

//     const formData = new FormData();

//     formData.append("file", file);

//     try {
//       const res = await uploadFile(
//         formData
//       );

//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage("Upload Failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Upload File</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           onChange={(e) =>
//             setFile(e.target.files[0])
//           }
//         />

//         <button type="submit">
//           Upload
//         </button>
//       </form>

//       <p>{message}</p>
//     </div>
//   );
// }

// export default UploadForm;
import { useState } from "react";
import { uploadFile } from "../api/uploadApi";

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await uploadFile(formData);

      setMessage("✅ File uploaded successfully");

      setFile(null);

      // refresh file history
      if (onUploadSuccess) {
        onUploadSuccess();
      }

      // reset input
      e.target.reset();
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
          "❌ Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Upload Image</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
        />

        {file && (
          <p
            style={{
              marginTop: "10px",
              color: "#555",
            }}
          >
            Selected: {file.name}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Uploading..."
            : "Upload"}
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "15px",
            fontWeight: "500",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default UploadForm;