const {getPlanents} = require('../../models/planet.model')
async function httpGetAllPlanents(req, res) {
  return res.status(200).json(await getPlanents());
}

module.exports = { httpGetAllPlanents };
