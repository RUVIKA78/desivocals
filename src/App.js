// import React, { useState } from 'react';
// import CharacterSelection from './components/CharacterSelection';
// import ChatBox from './components/ChatBox';
// import { generatePrompt } from './api/llm';
// import { getAudio } from './api/tts';

// const App = () => {
//   const [conversation, setConversation] = useState([]);
//   const [selectedCharacters, setSelectedCharacters] = useState([]);

//   const handleCharacterSelect = async (characters) => {
//     // Set the selected characters
//     setSelectedCharacters(characters);

//     // Generate prompts and set the conversation
//     const generatedText = await generatePrompt(characters);
//     const dialogues = generatedText.split('\n').filter(line => line.trim() !== '');
//     setConversation(dialogues);
//   };

//   const handleTTS = async (text) => {
//     const audioUrl = await getAudio(text);
//     const audio = new Audio(audioUrl);
//     audio.play();
//   };

//   return (
//     <div>
//       <CharacterSelection onSelect={handleCharacterSelect} />
//       {/* <button onClick={() => handleCharacterSelect(selectedCharacters)} disabled={selectedCharacters.length === 0}>
//         Generate Prompts
//       </button> */}
//       <ChatBox conversation={conversation} onTTS={handleTTS} />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App