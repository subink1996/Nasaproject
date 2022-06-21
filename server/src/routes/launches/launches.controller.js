const {
  getAllLaunches,
  addLaunch,
  abortLaunchById,
  existsLaunchWithId,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  res.status(200).json(getAllLaunches());
}
function httpAddLaunch(req, res) {
  let launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing Required Properties",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Launch date is invalid",
    });
  }
  addLaunch(launch);
  res.status(201).json(launch);
}
function httpAbordLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpGetAllLaunches,
  httpAddLaunch,
  httpAbordLaunch,
};
