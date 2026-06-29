# My AI Project — Ask the Sky

A simple full-stack AI web app where users can type a question and get an instant answer powered by Groq's AI models. Built with Express.js on the backend and a clean, sky-blue themed frontend.

## Live Demo

**[https://my-ai-project-4s137w821-maisha-fariha-s-projects.vercel.app](https://my-ai-project-4s137w821-maisha-fariha-s-projects.vercel.app)**

Try it out — type any question and the AI will respond in real time.

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
Response returned to user
```

## Project Structure

```
my-ai-project/
├── backend/
│   ├── server.js       # Express server with the /api/analyze endpoint
│   ├── package.json
│   └── .env             # Environment variables (not committed to GitHub)
├── frontend/
│   └── index.html       # Single-page UI that calls the backend API
└── README.md
```

## How It Works

1. The user types a question into the input box on the frontend.
2. The frontend sends a POST request to the backend's `/api/analyze` endpoint.
3. The backend forwards the question to the Groq API.
4. Groq returns an AI-generated response.
5. The backend sends that response back to the frontend, where it's displayed to the user.

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
