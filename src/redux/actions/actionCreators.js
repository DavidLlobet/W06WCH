import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotAction = (idRobot) => ({
  type: actionTypes.deleteRobot,
  idRobot,
});
