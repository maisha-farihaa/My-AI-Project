require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Groq client using the API key from the .env file
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Maps each complexity level to a tailored system prompt.
// This is what makes the explanation actually change based on the selected level.
const LEVEL_PROMPTS = {
  child: "Explain the following topic as if you are talking to a curious 5-year-old child. Use very simple words, short sentences, and a fun, relatable analogy (like toys, animals, or everyday objects). Avoid technical terms completely.",
  teen: "Explain the following topic as if you are talking to a teenager in high school. Use clear, everyday language, relatable examples, and keep some structure, but avoid heavy technical jargon.",
  college: "Explain the following topic as if you are talking to a college student. You can use proper terminology and a bit more depth, but the explanation should still be clear, well-structured, and easy to follow without being overly academic."
};

// Main endpoint: frontend sends a topic and a level, backend returns a tailored explanation
app.post('/api/explain', async (req, res) => {
  try {
    const { topic, level } = req.body;

    if (!topic || !topic.trim()) {
      return res.status(400).json({ error: 'Please provide a topic to explain.' });
    }

    const selectedLevel = LEVEL_PROMPTS[level] ? level : 'child';
    const systemPrompt = LEVEL_PROMPTS[selectedLevel];

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Explain this topic: ${topic}` }
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const explanation = completion.choices[0].message.content;

    res.json({ result: explanation });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while generating the explanation.' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
