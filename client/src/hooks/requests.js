const APIURL = "http://localhost:8000";
// TODO: Once API is ready.
async function httpGetPlanets() {
  const planets = await fetch(`${APIURL}/planets`);
  return await planets.json();
}
// TODO: Once API is ready.
// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const launches = await fetch(`${APIURL}/launches`);
  const fetchedLaunches = await launches.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}
// TODO: Once API is ready.
// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${APIURL}/launches`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}
// TODO: Once API is ready.
// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${APIURL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
