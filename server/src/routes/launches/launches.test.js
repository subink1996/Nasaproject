const request = require("supertest");
const app = require("../../app");
const completeLaunchData = {
  mission: "New Mission 8",
  rocket: "Explorer IS2",
  launchDate: "December 27, 2022",
  target: "Kepler-442 D",
};
const launchDataWithoutDate = {
  mission: "New Mission 8",
  rocket: "Explorer IS2",
  target: "Kepler-442 D",
};
const completeLaunchDataWithInvalidDate = {
    mission: "New Mission 8",
    rocket: "Explorer IS2",
    launchDate: "Hello",
    target: "Kepler-442 D",
  };
describe("test GET /launches", () => {
  test("It should respond with 200", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  test("should be 201", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);
    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const reponseDate = new Date(response.body.launchDate).valueOf();
    expect(reponseDate).toBe(requestDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
  test("should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing Required Properties",
    });
  });

  test("should Catch missing properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Launch date is invalid",
    });
  });
});
