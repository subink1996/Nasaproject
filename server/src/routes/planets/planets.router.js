const express = require('express')
const planetContorller = require('./planets.controller')
const planetRouter = express.Router()
planetRouter.get("/planets", planetContorller.getAllPlanents)

module.exports = planetRouter