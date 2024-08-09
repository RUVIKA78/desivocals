const TTS_API_URL = 'https://ezmh9t6vbvhitgly.us-east-1.aws.endpoints.huggingface.cloud';

export const getAudio = async (text) => {
  const response = await fetch(TTS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`,
    },
    body: JSON.stringify({
      inputs: {
        text,
        language: 'en',
        model_id: '3ccb64b4-8a8b-4abe-ab73-40a2ea307b08'
      }
    }),
  });

  const data = await response.json();
  return data.audio_url;
};
