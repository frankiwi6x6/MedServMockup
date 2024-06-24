import React from 'react';

const ChatToggleButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full focus:outline-none"
      onClick={onClick}
    >
      {isOpen ? 'X' : <img src="https://static.thenounproject.com/png/3263196-200.png" alt="Chat Icon" className="w-6 h-6" />}
    </button>
  );
};

export default ChatToggleButton;
