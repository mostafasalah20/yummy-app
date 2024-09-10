"use client"; 

import React, { useState } from 'react';

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (inputMessage.trim() === "") return; 

   
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    
   
    console.log("User message:", inputMessage);
    
 
    setInputMessage("");

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages, 
        { text: 'Thanks for your message!', sender: 'bot' }
      ]);
    }, 1000); 
  };

  return (
    <div className='chat'>
      <button className="chat-popup-button" onClick={toggleChat}>
        {isOpen ? ' close chat' : ' open chat'}
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-popup-header">
            <h4> Hello! How can I help you? </h4>
          </div>
          <div className="chat-popup-body">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`chat-popup-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="chat-input"
            placeholder="Write your message here..."
          />
          <button  onClick={handleSend} className="send-button">send</button>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;

