// this was run in server folder:
// npm init -y
// npm install express cors

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
