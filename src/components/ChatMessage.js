import React from 'react';

const ChatMessage = ({ user, text }) => {
  return (
    <div>
      <strong>{user}:</strong> {text}
    </div>
  );
};

export default ChatMessage;
