import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Dashboard from './Dashboard';


export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/Dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 px-6">
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left image section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block md:w-1/2"
        >
          <img
            src="/login.png" // Replace with your own image
            alt="Login visual"
            className="h-full object-cover"
          />
        </motion.div>

        {/* Login form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-bold text-green-800 text-center mb-2">Login</h2>
          <p className="text-sm text-green-700 text-center mb-4">
            Sign in to explore powerful Excel insights.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 mb-4 border border-green-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 border border-green-300 rounded-xl text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </div>
            </div>

            <div className="text-right mb-4 text-sm">
              <span className="text-green-700">New User? </span>
              <Link to="/register" className="text-green-600 hover:underline font-medium">
                Register
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl text-sm font-medium transition"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}