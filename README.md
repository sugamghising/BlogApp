# BlogApp
Simple Blog application using MERN.

## Prerequisites
- Node.js 18+
- MongoDB database (Atlas or local)

## Environment Variables
Create a `.env` file in `server/` with the following variables:

```
# Server
PORT=5000

# Session
SESSION_SECRET=your-strong-secret

# Database (required)
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
```

Notes:
- `MONGO_URI` is required at runtime. The server will fail fast if it's missing.
- Use a long, random value for `SESSION_SECRET`.

## Install Dependencies
From the repository root:

```bash
cd server
npm install
```

## Run the Server (Development)
```bash
cd server
npm run dev
```
The server starts on `http://localhost:5000` by default.

## Build and Run (Production)
```bash
cd server
npm run build
npm start
```

## API Overview
- `GET /` — health check
- `GET /api/articles` — articles routes
- `POST /api/admin/...` — admin routes

See files under `server/src/routes/` for full route definitions.

## Project Structure
```
BlogApp/
  client/            # (placeholder)
  server/
    src/
      config/        # DB connection
      controller/     # Controllers
      middleware/     # Auth/session middleware
      models/         # Mongoose models
      routes/         # Express routes
      index.ts        # App entrypoint
```

## Troubleshooting
- If you see a type error about `mongoUrl` or runtime error about `MONGO_URI`, ensure `.env` contains a valid `MONGO_URI`.
- If sessions don't persist, verify `SESSION_SECRET` and that your MongoDB is reachable.
