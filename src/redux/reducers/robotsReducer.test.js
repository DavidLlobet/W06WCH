import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives a list of robots and a loadRobotsAction", () => {
    test("Then it should return a new list of robots", () => {
      const initialRobots = [];
      const robots = [
        {
          characteristics: {
            speed: 3,
            stamina: 6,
            creationDate: 4189,
          },
          _id: "618579be9712904c2b990e1c",
          name: "Mecha Koopa",
          url: "https://static.wikia.nocookie.net/mario/images/9/9d/Mecakoopa.jpg/revision/latest?cb=20171229002147&path-prefix=es",
        },
        {
          characteristics: {
            speed: 6,
            stamina: 10,
            creationDate: 4189,
          },
          _id: "61857b9b9712904c2b990e1d",
          name: "ROBO",
          url: "https://static.wikia.nocookie.net/chrono-trigger/images/b/b8/Robo2.jpg/revision/latest/scale-to-width-down/250?cb=20150920020548&path-prefix=es",
        },
      ];
      const loadRobots = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const result = robotsReducer(initialRobots, loadRobots);

      expect(result).toEqual(robots);
    });
  });
});
