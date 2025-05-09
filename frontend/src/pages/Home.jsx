import { Link } from 'react-router-dom';
import React from 'react';
// import '../App.css'; // Optional, if you have custom styles
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200 flex flex-col items-center p-8">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl shadow-lg">
          F
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">Formulytics</h1>
      </div>

      {/* Welcome Section */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-5xl font-semibold text-gray-900 mb-6">Welcome to Formulytics</h2>
        <p className="text-gray-700 text-lg mb-8">
          Upload Excel files, analyze your data with stunning 2D/3D charts, gain AI-powered insights, and download reports—all in one sleek platform.
        </p>

        <div className="mt-6 flex justify-center gap-8">
          <a href="/login">
            <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Register
            </button>
          </a>
        </div>
      </div>

      {/* Dashboard Preview Image */}
      <div className="shadow-xl rounded-xl overflow-hidden mb-16 transform transition-transform duration-200 hover:scale-105">
        <Link to="/login">
          <img
            src="/DashBoard.png" // replace with your local image path
            alt="Dashboard preview"
            className="w-[500px] h-auto rounded-xl shadow-2xl"
          />
        </Link>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Features</h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          viewport={{ once: true }}
        >
          {[
            { icon: '📊', text: 'Generate 2D/3D charts' },
            { icon: '🤖', text: 'AI-powered insights' },
            { icon: '📁', text: 'See upload history' },
            { icon: '📥', text: 'Upload Excel files' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <p className="text-4xl">{feature.icon}</p>
              <p className="font-semibold text-lg mt-4">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
