<p align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FF6F00?style=flat)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

</p>

<h1 align="center">📸 Image Upload Platform</h1>

<p align="center">
A modern full-stack web application for uploading and managing image files using React, Node.js, Express.js, and MongoDB.
</p>

<p align="center">
<img src="https://img.shields.io/github/license/silsrinjoy26-cmd/Image-Upload-Platform?style=flat-square">
<img src="https://img.shields.io/github/stars/silsrinjoy26-cmd/Image-Upload-Platform?style=flat-square">
<img src="https://img.shields.io/github/forks/silsrinjoy26-cmd/Image-Upload-Platform?style=flat-square">
<img src="https://img.shields.io/github/issues/silsrinjoy26-cmd/Image-Upload-Platform?style=flat-square">
</p>

---

# 📖 Overview

The **Image Upload Platform** is a full-stack web application that enables users to upload image files through an intuitive web interface. The application uses **Multer** for handling file uploads, **Express.js** for backend APIs, **MongoDB** for storing image metadata, and **React.js** for creating a fast and responsive frontend.

---

# ✨ Features

- 📤 Upload image files
- 📁 Store uploaded files on the server
- 💾 Save image information in MongoDB
- ⚡ REST API architecture
- 📱 Responsive React interface
- 🔄 Axios-based API communication
- 📂 Organized MVC project structure
- 🚀 Fast development using Vite

---

# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js, JavaScript (ES6+), Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| API Communication | Axios |
| File Upload | Multer |
| Development Tools | Git, GitHub, VS Code, Postman |

---

# 📂 Project Structure

```text
project/
│
├── backend/
│   ├── controllers/
│   │   └── uploadController.js
│   │
│   ├── middleware/
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   └── File.js
│   │
│   ├── routes/
│   │   └── uploadRoutes.js
│   │
│   ├── uploads/
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── uploadApi.js
    │   │
    │   ├── components/
    │   │   └── UploadForm.jsx
    │   │
    │   ├── pages/
    │   │   └── Home.jsx
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    └── package.json
```

---

# ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/silsrinjoy26-cmd/Image-Upload-Platform.git

cd Image-Upload-Platform
```

---

### Install Backend Dependencies

```bash
cd backend

npm install
```

---

### Install Frontend Dependencies

```bash
cd ../frontend

npm install
```

---

# ▶️ Running the Application

### Start Backend

```bash
cd backend

npm start
```

or

```bash
npm run dev
```

---

### Start Frontend

```bash
cd frontend

npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=your_port_number

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🔄 Application Workflow

```
User
   │
   ▼
React Frontend
   │
   ▼
Axios API Request
   │
   ▼
Express Server
   │
   ▼
Multer Middleware
   │
   ▼
Upload Controller
   │
   ├────────► uploads/
   │
   ▼
MongoDB
```

---

# 📡 API Endpoint

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/upload` | Upload an image |

---

# 📷 Screenshots

<img width="1917" height="1020" alt="image" src="https://github.com/user-attachments/assets/66ee828d-07d3-4581-b28c-73f26e8bf4d2" />

---

# 🚀 Future Enhancements

- Multiple image uploads
- Drag & Drop Upload
- Image Preview
- Delete Images
- Download Images
- Search Images
- User Authentication
- Cloudinary Integration
- AWS S3 Storage
- Image Compression

---

# 👨‍💻 Author

**Srinjoy Sil**

GitHub: **https://github.com/silsrinjoy26-cmd**

---
## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub!
