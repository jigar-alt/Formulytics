import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UploadExcel from './pages/UploadExcel'; // ✅ IMPORT FIX
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setToken={setToken} />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/home" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/upload" element={token ? <UploadExcel /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
