// App.js
import React, { useEffect, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import PeopleList from "./components/PeopleList";

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/messages");
        if (response.ok) {
          const data = await response.json();
         // setMessages(data.map(item=>item)); 
          console.log('data from fetchData = ',data);
          //console.log('message from fetchData = ',messages)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    fetchData();
  }, []);

  function addMessage(message) {
    setMessages([...messages, message]);
  }

  function handleSelectPerson(person) {
    setSelectedPerson(person);
  }
  
  return (
    <div>
      <PeopleList onSelectPerson={handleSelectPerson} />
      <ChatHeader selectedPerson={selectedPerson} />
     {/* { console.log('message from return = ', messages)} */}
      {messages.map((message) => (
        <ChatMessage key={message.id} text={message.text} index={message.id} />
      ))}
      <ChatInput onMessageSubmit={addMessage} />
    </div>
  );
}

export default App;
