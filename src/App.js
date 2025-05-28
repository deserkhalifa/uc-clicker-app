
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClickerApp() {
  const [points, setPoints] = useState(0);
  const [ucBalance, setUcBalance] = useState(0);
  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);
  const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.wav');
  const exchangeSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.wav');

  const handleClick = () => {
    setPoints(points + 1);
    clickSound.play();
  };

  const handleExchange = () => {
    if (points >= 100) {
      setUcBalance(ucBalance + 10);
      setPoints(points - 100);
      exchangeSound.play();
    } else {
      alert('You need at least 100 points to exchange for 10 UC!');
    }
  };

  const handleRegister = () => {
    if (username.trim() !== '') {
      setRegistered(true);
    } else {
      alert('Please enter a username to start!');
    }
  };

  const ucIcon = 'https://i.imgur.com/4cW1X7Y.png';
  const backgroundImage = 'https://i.imgur.com/Bu7QhQk.jpg';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {!registered ? (
        <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-xl flex flex-col items-center">
          <motion.h1 className="text-4xl font-extrabold text-white mb-4" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            Welcome to PUBG UC Clicker
          </motion.h1>
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded mb-4 w-64"
          />
          <button 
            onClick={handleRegister} 
            className="px-8 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
          >
            Start Playing
          </button>
        </div>
      ) : (
        <div className="bg-black bg-opacity-60 p-6 rounded-2xl shadow-xl flex flex-col items-center">
          <motion.h1 className="text-4xl font-extrabold text-yellow-400 mb-4" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            Hello, {username}!
          </motion.h1>
          <p className="text-lg text-yellow-300 mb-2">Points: {points}</p>
          <div className="flex items-center mb-4">
            <img src={ucIcon} alt="UC" className="w-8 h-8 mr-2" />
            <p className="text-lg text-green-300">UC Balance: {ucBalance}</p>
          </div>
          <button 
            onClick={handleClick} 
            className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-md hover:bg-yellow-600 mb-4 transition transform hover:scale-105"
          >
            Tap to Earn Points
          </button>
          <button 
            onClick={handleExchange} 
            className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105"
          >
            Exchange 100 Points for 10 UC
          </button>
          <p className="mt-6 text-sm text-white italic">Invite friends and climb the leaderboard!</p>
        </div>
      )}
    </div>
  );
}
