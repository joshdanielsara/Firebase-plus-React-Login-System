import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    alert('You have been logged out.');
    navigate('/login');
  };

  return (
<div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg text-center">
  <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to the Dashboard!</h1>
  <button
    onClick={handleSignOut}
    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
  >
    Sign Out
  </button>
</div>

  );
};

export default Dashboard;
