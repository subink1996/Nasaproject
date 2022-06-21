const express = require("express");
const { httpGetAllLaunches, httpAddLaunch ,httpAbordLaunch } = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddLaunch);
launchesRouter.delete("/:id", httpAbordLaunch);

module.exports = launchesRouter;
