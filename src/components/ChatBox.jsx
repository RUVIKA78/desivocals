import React, { useEffect, useState } from 'react';
import { SpeakerLoudIcon } from '@radix-ui/react-icons';

const ChatBox = ({ conversation, onTTS }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < conversation.length) {
        setDisplayedMessages((prev) => [...prev, conversation[index]]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // 1000ms delay between each message

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [conversation]);

  return (
    <div className="chatbox relative border-2 border-gray-500 shadow-sm shadow-gray-200 min-h-[60vh] rounded-3xl m-6 p-10">
      {displayedMessages.map((dialogue, index) => {
        const isCharacter1 = dialogue.startsWith('**Character 1:**');
        const text = dialogue
          .replace('**Character 1:** ', '')
          .replace('**Character 2:** ', '');

        return (
          <div
            key={index}
            className={`flex ${isCharacter1 ? 'justify-start' : 'justify-end'} mb-4`}
          >
            <div className="chat-bubble flex gap-3 text-white p-3 items-center">
              <p className="border-[1px] border-purple-600 p-[2px] bg-gradient-to-r from-purple-700 to-blue-500 rounded-2xl px-4 py-2 text-xl">
                {text}
              </p>
              <SpeakerLoudIcon
                onClick={() => onTTS(text)}
                className="text-white cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
