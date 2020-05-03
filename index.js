const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "5000";
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World!");
})

app.get("/distance", async (req, res, next) => {
  const origin = req.body.origin;
  const destination = req.body.destination;
  const API_KEY = "fewrwr232r23r3w4tef34e5r";

  var raw_data = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${API_KEY}`);
  var response_json = await raw_data.json();
  res.json(response_json);
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
