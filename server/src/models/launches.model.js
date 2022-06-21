const launches = new Map();
let lastFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploreation X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
function getAllLaunches() {
  return Array.from(launches.values());
}
function existsLaunchWithId(id) {
  return launches.has(id);
}
function addLaunch(launch) {
  lastFlightNumber++;
  launches.set(
    lastFlightNumber,
    Object.assign(launch, {
      flightNumber: lastFlightNumber,
      upcoming: true,
      success: true,
      customer: ["NASA", "Zero to mastery"],
    })
  );
}
function abortLaunchById(id) {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}
module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addLaunch,
  abortLaunchById,
};
