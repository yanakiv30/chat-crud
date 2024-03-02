
import React, { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <ChatHeader />
      {messages.map((message, index) => (
        <ChatMessage key={index} text={message} />
      ))}
      <ChatInput onMessageSubmit={addMessage} />
    </div>
  );
};

export default App;