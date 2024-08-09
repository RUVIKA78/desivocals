import React, { useState } from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const characters = [
  'Donald Trump',
  'Peter Griffin',
  'Kamala Harris',
  'Deadpool',
  'Wolverine'
];

const avatars = [
  "./images/Donald Trump.png",
  "./images/Peter Griffin.jpeg",
  "./images/Kamala Harris.png",
  "./images/Ryan Reynolds (Deadpool).png",
  "./images/Hugh Jackman (Wolverine).png",
];

const CharacterSelection = ({ onSelect }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleSelect = (character) => {
    if (selectedCharacters.includes(character)) {
      setSelectedCharacters(selectedCharacters.filter((c) => c !== character));
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handleSubmit = () => {
    onSelect(selectedCharacters);
  };

  return (
    <div className='relative'>
      <h2 className='flex pt-4 justify-center items-center text-6xl font-medium'>
        <span className='bg-transparent font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 tracking-tight'>
          Select Characters
        </span>
      </h2>
      <ul className='flex justify-between mx-8 mt-10 text-sm'>
        {characters.map((character, index) => {
          const isSelected = selectedCharacters.includes(character);
          return (
            <li key={character}>
              <div
                onClick={() => handleSelect(character)}
                className={`flex bg-white text-black rounded-[36px] border-4  cursor-pointer px-2 py-1 justify-center items-center font-semibold gap-2 transition-all duration-200 ${
                  isSelected ? 'border-purple-800 shadow-sm shadow-gray-300' : 'border-transparent shadow-lg shadow-zinc-300/45'
                } ${selectedCharacters.length === 2 && !isSelected ? 'gray-[1px]' : ''}`}
              >
                <Avatar>
                  <AvatarImage src={avatars[index]} alt={character} />
                  <AvatarFallback>{character.charAt(0)}</AvatarFallback>
                </Avatar>
                {character}
              </div>
            </li>
          );
        })}
      </ul>
      <div className='flex mt-14  justify-center items-center gap-5 px-3'>
        <input
          
          type='text'
          placeholder='write here to start conversation . . .'
          className='w-2/5 p-4 text-xl  border-white border-[1px] h-12 bg-transparent rounded-3xl'
        />
        <button
        className='bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl px-2 py-1 font-semibold tracking-wide'
          onClick={handleSubmit} disabled={selectedCharacters.length !== 2}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default CharacterSelection;
