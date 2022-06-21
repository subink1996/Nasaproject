const http = require("http");
const mongoose = require("mongoose");
const { loadPlanetsData } = require("./models/planet.model");
const app = require("./app");

const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb://localhost:27017/nasa";

mongoose.connection.once("open", () => {
  console.log("MogoDB Connection Ready");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
const server = http.createServer(app);
async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  });
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}.....!!!`);
  });
}
startServer();
