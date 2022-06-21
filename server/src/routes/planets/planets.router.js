const express = require("express");
const planetContorller = require("./planets.controller");
const planetRouter = express.Router();
planetRouter.get("/", planetContorller.httpGetAllPlanents);

module.exports = planetRouter;
