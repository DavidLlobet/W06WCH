import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotAction = (idRobot) => ({
  type: actionTypes.deleteRobot,
  idRobot,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.logoutUser,
});

export const userIsLoggedAction = (user) => ({
  type: actionTypes.userIsLogged,
  user,
});
