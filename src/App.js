import React, { useState, useEffect } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/messages');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  function addMessage(message) {
    setMessages([...messages, message]);
  }

  return (
    <div>
      <ChatHeader />
      {messages.map((message) => (
        <ChatMessage key={message.id} user={message.user} text={message.text} />
      ))}
      <ChatInput onMessageSubmit={addMessage} />
    </div>
  );
}

export default App;
