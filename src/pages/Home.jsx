import React, { useState } from 'react';
import CharacterSelection from '../components/CharacterSelection';
import ChatBox from '../components/ChatBox';
import { generatePrompt } from '../api/llm';
import { getAudio } from '../api/tts';

const Home = () => {
  const [conversation, setConversation] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleCharacterSelect = async (characters) => {
    setSelectedCharacters(characters);

    const generatedText = await generatePrompt(characters);
    const dialogues = generatedText.split('\n').filter(line => line.trim() !== '');
    setConversation(dialogues);
  };

  const handleTTS = async (text) => {
    const audioUrl = await getAudio(text);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='bg-gradient-to-bl rounded-br-3xl rounded-bl-3xl to-[#8759a1] from-50%  via-black from-[#0f0f0f]  w-full min-h-screen text-white font-["Inter"]'>
      <CharacterSelection onSelect={handleCharacterSelect} />
      
      <ChatBox conversation={conversation} onTTS={handleTTS} />
    </div>
  );
};

export default Home;
