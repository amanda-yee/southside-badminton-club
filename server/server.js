// this was run in server folder:
// npm init -y
// npm install express cors

// this file is important for API calls (among other things)
// setting up the backend will route API calls through it, and the server acts as an intermediary, avoiding CORS restrictions
// without it, the browser will directly be making the API calls and could be blocked from the origin e.g. Google Maps API

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
  console.log('yep')
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
