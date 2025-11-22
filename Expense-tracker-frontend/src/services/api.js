import axios from "axios";

// Generate or get device ID
let deviceId = localStorage.getItem("device-id");
if (!deviceId) {
  deviceId = crypto.randomUUID();
  localStorage.setItem("device-id", deviceId);
}

export const api = axios.create({
  baseURL: "https://expense-tracker-2sqw.onrender.com/api/expenses",
  headers: {
    "X-Device-ID": deviceId
  }
});
