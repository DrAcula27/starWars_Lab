const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const axios = require("axios");

const app = express();

// allow cross origin access
app.use(
  cors({
    origin: "*",
  })
);

// logs the different requests to the server
app.use(logger("dev"));

// parse stringified objects (JSON)
app.use(express.json());

// serve build folder
app.use(express.static(path.join(__dirname, "build")));

// ROUTES
const baseURL = "https://swapi.dev/api/";

// ping SWAPI for all starships
app.get(`/get_starships/`, async (req, res) => {
  const pageFromUrl = req.query.page;

  const config = { params: { page: pageFromUrl } };
  const apiResponse = await axios.get(`${baseURL}starships/`, config);

  res.json(apiResponse.data);
});

// catch-all route, must be last in route list
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// tell server where to listen. Must not be 3000 as React listens there.
app.listen(5000, () => {
  console.log(`Server is Listening on 5000`);
});
