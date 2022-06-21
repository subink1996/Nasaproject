const express = require("express");
const cors = require("cors");
const path = require("path");
const planetRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use('/planets',planetRouter);
app.use('/launches',launchesRouter);

module.exports = app;
