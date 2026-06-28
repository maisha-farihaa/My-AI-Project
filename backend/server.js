require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Groq client using the API key from .env file
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Main endpoint: frontend sends text here, AI returns a response
app.post('/api/analyze', async (req, res) => {
  try {
    const { userText } = req.body;

    if (!userText) {
      return res.status(400).json({ error: 'Text input is required' });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'user', content: userText }
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const aiResponse = completion.choices[0].message.content;

    res.json({ result: aiResponse });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});