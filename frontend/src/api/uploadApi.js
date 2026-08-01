// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export const uploadFile = (formData) =>
//   API.post("/upload", formData);

// export const getFiles = () =>
//   API.get("/files");
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const uploadFile = (data) =>
  API.post("/upload", data);

export const getFiles = () =>
  API.get("/files");

export const deleteFile = (id) =>
  API.delete(`/files/${id}`);