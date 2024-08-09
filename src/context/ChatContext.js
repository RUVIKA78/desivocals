import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [conversation, setConversation] = useState([]);

  const updateCharacters = (characters) => {
    setSelectedCharacters(characters);
  };

  const updateConversation = (dialogues) => {
    setConversation(dialogues);
  };

  return (
    <ChatContext.Provider value={{ selectedCharacters, updateCharacters, conversation, updateConversation }}>
      {children}
    </ChatContext.Provider>
  );
};
