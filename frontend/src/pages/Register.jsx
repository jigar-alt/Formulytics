import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
        
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-10"
        >
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <FaUser className="absolute top-3 left-4 text-gray-400" />
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-green-50 text-gray-800 placeholder-gray-500 border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-4 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-green-50 text-gray-800 placeholder-gray-500 border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute top-3 left-4 text-gray-400" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-green-50 text-gray-800 placeholder-gray-500 border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition"
            >
              Register
            </motion.button>
          </form>

          <p className="text-gray-600 text-center mt-6 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline text-green-700 hover:text-green-900">
              Log in
            </Link>
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block md:w-1/2"
        >
          <img
            src="/register.jpeg" // Place this image in your /public directory
            alt="Register visual"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}   