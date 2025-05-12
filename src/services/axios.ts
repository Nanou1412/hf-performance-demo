import axios from "axios";

// Faux endpoint, utilisé pour structure future ou maquette
const api = axios.create({
  baseURL: "https://api.hf-performance-demo.fr", // Non utilisé en démo
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
