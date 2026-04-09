import React, { createContext, useState, useEffect } from "react";
import apiService from "../api";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      fetchUserProfile();
    } else {
      localStorage.removeItem("token");
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/siteforce_app/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Error fetching user profile:", err);
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/siteforce_app/login/", {
        username,
        password,
      });
      setToken(res.data.access);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data?.detail || "Login failed" };
    }
  };

  const register = async (username, email, password) => {
    try {
      await axios.post("http://127.0.0.1:8000/siteforce_app/register/", {
        username,
        email,
        password,
      });
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data || "Registration failed" };
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
