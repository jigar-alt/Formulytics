import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import axios from 'axios';

export default function UploadExcel() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false); // Analysis state
  const navigate = useNavigate(); // Initialize navigate function

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) return setMessage('Please choose a file first.');

    const formData = new FormData();
    formData.append('excel', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(res.data.message || 'File uploaded successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Upload failed.');
    }
  };

  // Start data analysis
  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setMessage('Analyzing data...');
    
    // Simulating an analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setMessage('Analysis complete!'); // You can replace this with your real analysis logic
    }, 3000); // Simulate an analysis time (3 seconds for demo)
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-6">🅕 Formulytics</h1>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/Dashboard')} // Navigate to Dashboard
        >
          🧭 Dashboard
        </button>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/UploadExcel')} // Navigate to UploadExcel page
        >
          ⬆️ Upload Excel
        </button>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/AnalyzeData')} // Navigate to Analyze Data page
        >
          📊 Analyze Data
        </button>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/History')} // Navigate to History page
        >
          🔁 History
        </button>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/Downloads')} // Navigate to Downloads page
        >
          ⬇️ Downloads
        </button>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/AIInsights')} // Navigate to AI Insights page
        >
          🧠 AI Insights
        </button>
        <button
          className="bg-white text-green-800 px-4 py-2 rounded-md text-left"
          onClick={() => navigate('/Settings')} // Navigate to Settings page
        >
          ⚙️ Settings
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-end items-center p-4 bg-transparent">
          <span className="mr-4 text-green-800 font-semibold">User</span>
          <button
            onClick={() => {
              localStorage.removeItem('token');
            }}
            className="border border-green-700 text-green-700 px-4 py-1 rounded-md hover:bg-green-600 hover:text-white transition"
          >
            Logout
          </button>
        </div>

        {/* Upload Box */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Upload Excel File</h2>
            <p className="text-sm text-gray-600 mb-6">Supported formats: .xls, .xlsx</p>

            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition"
            >
              Choose File
              <input
                id="file-upload"
                type="file"
                accept=".xls,.xlsx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {file && <p className="mt-2 text-sm text-gray-700">{file.name}</p>}

            <button
              onClick={handleUpload}
              className="mt-6 bg-teal-600 hover:bg-teal-700 text-white w-full py-2 rounded-xl font-medium transition"
            >
              Upload
            </button>

            {message && <p className="mt-4 text-sm text-green-600">{message}</p>}

            {/* Show Analyze button after successful upload */}
            {file && !isAnalyzing && !message.includes('failed') && (
              <button
                onClick={handleStartAnalysis}
                className="mt-4 bg-teal-600 hover:bg-teal-700 text-white w-full py-2 rounded-xl font-medium transition"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Now'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
