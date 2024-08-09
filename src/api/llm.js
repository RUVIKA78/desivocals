const LLM_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBAaeC-AH74Zq6haBCwcO2QCaP4NXSWrg8`;

export const generatePrompt = async (characters, customPrompt) => {
  const text =  `Generate a short rap conversation of 2-3 words each line between two characters. The characters are: ${characters[0]} and ${characters[1]}. Make the conversation lively and engaging.`;
  
  const response = await fetch(LLM_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: text
            }
          ]
        }
      ]
    }),
  });

  const data = await response.json();
  
  const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No text generated";
  console.log(data);
  
  return generatedText;
};

// const DynamicPromptGenerator = ({ characters, onPromptGenerated }) => {
//   const [customPrompt, setCustomPrompt] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     const generatedText = await generatePrompt(characters, customPrompt);
//     onPromptGenerated(generatedText);
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <input
//         type="text"
//         className="p-2 border border-gray-300 rounded-md w-2/3"
//         placeholder="Enter your custom prompt here..."
//         value={customPrompt}
//         onChange={(e) => setCustomPrompt(e.target.value)}
//       />
//       <button
//         className={`mt-4 p-2 px-6 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-500'}`}
//         onClick={handleGenerate}
//         disabled={loading}
//       >
//         {loading ? 'Generating...' : 'Generate'}
//       </button>
//     </div>
//   );
// };

// export default DynamicPromptGenerator;
