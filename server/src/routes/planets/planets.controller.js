const {planets} = require('../../models/planet.model')
function getAllPlanents(req, res) {
  return res.status(200).json(planets);
}

module.exports = { getAllPlanents };
