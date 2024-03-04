import React, { useEffect, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
function App() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/messages");
        if (response.ok) {
          const data = await response.json();
          // setMessages(data);
          console.log( 'data = ',data);  
          //data.map(item=>console.log(item.user))
          setMessages(data.map(item=>item.user)); 
          
           
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error : ", error);
      }
      
    } fetchData();
  }, []); 
  
  console.log('messages= ',messages);

  function addMessage(message) {
    setMessages([...messages, message]);
  }

  return (
    <div>
      <ChatHeader /> 
    
      {messages.map((message ,index) => (
        <ChatMessage key={index} text={message} />
      ))}

      {/* {messages.map((message, index) => (
        // <ChatMessage key={index} text={message} index={index} />
        <ChatMessage key={message.id} text={message } index={index} />
      ))} */}
      
      <ChatInput onMessageSubmit={addMessage} />
    </div>
  );
}

export default App;
