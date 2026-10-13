# React Blog

A small blog front end built while learning React. You can list posts, search them by title or body, open a post, and create, edit or delete posts. Posts are stored in a local JSON REST API served by `json-server` from `data/db.json`.

Built with React 18, React Router 6 (nested routes for `/post/:id` and `/edit/:id`), Easy Peasy for global state, Axios for API calls, and date-fns for timestamps.

## Run it

```bash
npm install

# Terminal 1: the mock API on port 3500 (the app expects http://localhost:3500)
npx json-server -p 3500 -w data/db.json

# Terminal 2: the app on http://localhost:3000
npm start
```
