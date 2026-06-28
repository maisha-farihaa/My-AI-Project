# Ask the Sky — Simple AI Chat App

A minimal full-stack project that lets you type a question and get an answer from an AI model, powered by [Groq](https://groq.com)'s fast LLM inference.

## What this project does

1. You type a question in the browser.
2. The frontend sends that question to a backend API.
3. The backend forwards it to Groq's AI model and gets an answer.
4. The answer is shown back on the page.

## Tech Stack

- **Frontend:** Plain HTML, CSS, JavaScript (no framework, no build step)
- **Backend:** Node.js + Express
- **AI:** Groq API (Llama 3.3 70B model)

## Project Structure

```
my-ai-project/
├── backend/
│   ├── server.js        # Express server + Groq API integration
│   ├── package.json
│   ├── .env              # Your secret API key (NOT pushed to GitHub)
│   └── .gitignore
└── frontend/
    └── index.html        # Single-file frontend (HTML + CSS + JS)
```

## Running it locally

### 1. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:

```
GROQ_API_KEY=your_real_groq_api_key_here
PORT=5000
```

Get a free API key from [console.groq.com](https://console.groq.com).

Start the server:

```bash
node server.js
```

You should see: `Server is running on port 5000`

### 2. Frontend setup

Just open `frontend/index.html` directly in your browser — no installation needed.

Make sure the backend is running first, since the frontend calls `http://localhost:5000`.

### 3. Test it

Type a question in the input box and click **Ask AI**. You should see a response appear below.

## API Reference

**POST** `/api/analyze`

Request body:
```json
{ "userText": "What is the capital of Bangladesh?" }
```

Response:
```json
{ "result": "The capital of Bangladesh is Dhaka." }
```

## Deployment Notes

- The **backend** (Express server) needs a Node.js hosting platform — e.g. Railway, Render, or Vercel (using serverless functions).
- The **frontend** (`index.html`) can be deployed as a static site on **Vercel** for free.
- After deploying the backend, update the `BACKEND_URL` constant near the top of the `<script>` tag in `index.html` to point to your live backend URL instead of `http://localhost:5000`.

## Security Note

Never commit your `.env` file or share your API key publicly. The `.gitignore` file in this project already excludes `.env` and `node_modules/` from being pushed to GitHub.