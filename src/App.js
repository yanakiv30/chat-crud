
import React, { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
function App() {
  const [messages, setMessages] = useState([]);

  function addMessage (message){
    setMessages([...messages, message]);
  };

  return (
    <div>
      <ChatHeader />
      {messages.map((message, index) => (
        <ChatMessage key={index} text={message} index={index} />
      ))}
      {console.log(messages)}
      <ChatInput onMessageSubmit={addMessage} />
    </div >
  );
}; 

export default App;