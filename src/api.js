import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Your backend URL

// Fetch medicines from backend
export const fetchMedicines = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/medicines`);
    return response.data; // Return medicine data
  } catch (error) {
    console.error("Error fetching medicines:", error);
    return [];
  }
};
