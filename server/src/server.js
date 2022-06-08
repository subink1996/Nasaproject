const http = require("http");
const { loadPlanetsData } = require("./models/planet.model");
const app = require("./app");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}.....!!!`);
  });
}
startServer();
