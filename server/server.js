// this was run in server folder:
// npm init -y
// npm install express cors

// this file is important for API calls (among other things)
// setting up the backend will route API calls through it, and the server acts as an intermediary, avoiding CORS restrictions
// without it, the browser will directly be making the API calls and could be blocked from the origin e.g. Google Maps API

const express = require("express");
const cors = require("cors");
const axios = require('axios');
require('dotenv').config({ path: '../.env' }); // read in .env from root dir

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get('/api/google-reviews', async (req, res) => {
  const placeId = req.query.placeId;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; 

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );
  
    // console.log(response.data)
    res.json(response.data); // return response to front end in json format
  } catch (error) {
    console.error('Error fetching from Google API:', error);  // Log the error
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
