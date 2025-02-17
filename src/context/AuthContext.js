import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_BASE_URL = "http://localhost:5000/api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (name, email, password) => {
    await axios.post(`${API_BASE_URL}/signup`, { name, email, password });
  };

  const login = async (email, password) => {
    const { data } = await axios.post(`${API_BASE_URL}/login`, { email, password });
    setUser(data.user);
    localStorage.setItem("token", data.token);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
