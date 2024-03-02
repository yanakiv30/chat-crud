import React, { useState } from 'react';

const ChatInput = ({ onMessageSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onMessageSubmit(inputValue);
    setInputValue('');
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