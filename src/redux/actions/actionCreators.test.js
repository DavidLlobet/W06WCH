import { loadRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given an actionCreators", () => {
  describe("When it calls a loadRobotsAction", () => {
    test("Then it should return a list of robots", () => {
      const initialRobots = [
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
      const expected = {
        type: actionTypes.loadRobots,
        robots: initialRobots,
      };

      const result = loadRobotsAction(initialRobots);

      expect(result).toEqual(expected);
    });
  });
});
