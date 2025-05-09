import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaUpload, FaChartBar, FaHistory, FaDownload, FaBrain, FaCog, FaThLarge } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userData = JSON.parse(localStorage.getItem('user'));
  const userName = userData?.name || 'User';

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-green-200 to-green-400">

      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-green-700 text-white flex flex-col items-start px-6 py-8 space-y-6"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
      >
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 mb-8">
          <div className="text-white text-3xl font-bold">F</div>
          <h1 className="text-xl font-semibold text-white tracking-wide">Formulytics</h1>
        </div>

        {/* Navigation */}
        <SidebarButton icon={<FaThLarge />} label="Dashboard" />
        <SidebarButton icon={<FaUpload />} label="Upload Excel" onClick={() => navigate('/upload')} />

        <SidebarButton icon={<FaChartBar />} label="Analyze Data" />
        <SidebarButton icon={<FaHistory />} label="History" />
        <SidebarButton icon={<FaDownload />} label="Downloads" />
        <SidebarButton icon={<FaBrain />} label="AI Insights" />
        <SidebarButton icon={<FaCog />} label="Settings" />
      </motion.aside>

      {/* Main Content */}
      <motion.main
        className="flex-1 px-8 py-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top-right Logout */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <span className="text-gray-700 font-medium">{userName}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-green-700 border border-green-700 px-4 py-2 rounded-lg hover:bg-green-100 hover:scale-105 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Welcome Box */}
        <motion.div
  className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-3xl mx-auto mt-10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, type: 'spring', stiffness: 50 }}
>
  <h2 className="text-3xl font-semibold text-gray-800 mb-2">
    Welcome {userName}!
  </h2>
  <p className="text-gray-600 mb-6">
    You have successfully logged in. Your analytics and uploads will appear here.
  </p>

  {/* Features Grid */}
  <motion.div
    className="grid grid-cols-2 gap-6 mt-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      { title: '2D/3D Charts', img: '/2D.jpg' },
      { title: 'AI Insights', img: '/AI.jpg' },
      { title: 'Upload History', img: '/history.webp' },
      { title: 'Excel Upload', img: '/upload.jpg' },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-green-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-md transition"
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.img} alt={item.title} className="w-16 h-16 mb-3" />
        <p className="text-gray-700 font-medium">{item.title}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

      </motion.main>
    </div>
  );
}

function SidebarButton({ icon, label, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center w-full gap-3 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-100 transition-all duration-300 font-medium"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </motion.button>
  );
}

