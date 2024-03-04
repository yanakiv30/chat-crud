import React, { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ onMessageSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  async function handleSubmit  () {
    // Assume the server is running on localhost:3001
    const apiUrl = 'http://localhost:3001/messages';

    // Prepare the data to be sent
    const data = { user: inputValue };

    try {
      // Send a POST request to the server
      const response = await axios.post(apiUrl, data);

      // Handle the response (optional)
      console.log('Message posted successfully:', response.data);

      // Update the local state or perform any other actions
      onMessageSubmit(inputValue);
      

      // Clear the input field
      setInputValue('');
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChatInput;
