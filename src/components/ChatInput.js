import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ChatInput = ({ onMessageSubmit }) => {
  const [userInput, setUserInput] = useState('');
  const [textInput, setTextInput] = useState('');

  async function handleSubmit() {
    if (!userInput.trim() || !textInput.trim()) {
      return;
    }

    const apiUrl = 'http://localhost:3001/messages';

    const data = {
      user: userInput,
      id: uuidv4(), // Генериране на уникален идентификатор
      text: textInput,
    };

    try {
      const response = await axios.post(apiUrl, data);
      console.log('Message posted successfully:', response.data);
      onMessageSubmit(data);
      setUserInput('');
      setTextInput('');
    } catch (error) {
      console.error('Error posting message:', error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter message"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChatInput;
