# Ask the Sky

A full-stack AI web app where users pick an explanation level — 5-Year-Old, Teenager, or College Student — type any topic, and get an instant, level-appropriate explanation powered by Groq's AI models. Built with Express.js on the backend and a clean, sky-blue themed frontend.

## Live Demo

**[https://my-ai-project-one-alpha.vercel.app](https://my-ai-project-one-alpha.vercel.app)**

Pick a level, type a topic (try: blockchain, gravity, inflation), and let the AI explain it in a way that matches your selection.

## Features

- **Level-based explanations** — choose how simple or detailed the answer should be:
  - 5-Year-Old: simple words, fun analogies, no jargon
  - Teenager: everyday language with relatable examples
  - College Student: proper terminology with more depth
- **One-click examples** — quick-start buttons for common topics
- **Clean, responsive UI** with a sky-blue theme and subtle animation

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (deployed on Vercel)
- **Backend:** Node.js, Express.js (deployed on Railway)
- **AI Provider:** Groq API (Llama 3.3 70B model)

## Architecture

```
User (Frontend on Vercel)
        |
        v
Backend (Express on Railway)
        |
        v
Groq AI API
        |
        v
Level-appropriate explanation returned to user
```

## Project Structure

```
my-ai-project/
├── backend/
│   ├── server.js       # Express server with the /api/explain endpoint
│   ├── package.json
│   └── .env             # Environment variables (not committed to GitHub)
├── frontend/
│   └── index.html       # Single-page UI with the level selector and explanation flow
└── README.md
```

## How It Works

1. The user selects a complexity level (5-Year-Old, Teenager, or College Student) and types a topic.
2. The frontend sends a POST request to the backend's `/api/explain` endpoint with the topic and selected level.
3. The backend builds a level-specific prompt and forwards it to the Groq API.
4. Groq returns an AI-generated explanation tailored to that level.
5. The backend sends the explanation back to the frontend, where it's displayed to the user.

## Running Locally

### Backend

```bash
cd backend
npm install
node server.js
```

The backend requires a `.env` file inside the `backend` folder with the following variables:

```
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

### Frontend

Open `frontend/index.html` directly in a browser, or serve it with any static file server. Make sure the `BACKEND_URL` constant inside `index.html` points to your running backend (`http://localhost:5000` for local testing, or your deployed backend URL in production).

## Deployment

- **Backend** is deployed on [Railway](https://railway.app), with the root directory set to `backend` and environment variables (`GROQ_API_KEY`, `PORT`) configured in the Railway dashboard.
- **Frontend** is deployed on [Vercel](https://vercel.com), with the root directory set to `frontend`.

## Notes

- The `.env` file is excluded from version control via `.gitignore` to keep the API key secure.
- CORS is enabled on the backend to allow requests from the deployed frontend.

## Author

Built by **Maisha Fariha**.
