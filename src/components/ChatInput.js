import React, { useState } from "react";

function ChatInput({ onMessageSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit() {
    onMessageSubmit(inputValue);
    setInputValue("");
  }

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
}

export default ChatInput;
