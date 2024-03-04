import React, { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ onMessageSubmit }) => {
  const [userInput, setUserInput] = useState('');
  const [textInput, setTextInput] = useState('');

  async function handleSubmit() {
    // Проверка за празни полета
    if (!userInput.trim() || !textInput.trim()) {
      return;
    }

    // Assume the server is running on localhost:3001
    const apiUrl = 'http://localhost:3001/messages';

    const data = {
      user: userInput,
      id: new Date().toISOString(), // Генериране на временно уникално ID
      text: textInput, // Вземане на съдържанието от второто поле
      userId: 3, // Произволен потребителски ID
    };

    try {
      // Изпращане на POST заявка към сървъра
      const response = await axios.post(apiUrl, data);

      // Обработка на отговора (по желание)
      console.log('Message posted successfully:', response.data);

      // Актуализация на локалното състояние или извършване на други действия
      onMessageSubmit(userInput);

      // Изчистване на полетата за въвеждане
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
