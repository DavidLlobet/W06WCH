import {
  deleteRobotAction,
  loadRobotsAction,
  createRobotAction,
} from "../actions/actionCreators";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch("https://robots2.herokuapp.com/robots");
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (idRobot) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://robots2.herokuapp.com/robots/delete/${idRobot}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();
    dispatch(deleteRobotAction(idRobot));
  };
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://robots2.herokuapp.com/robots/create",
      {
        method: "POST",
        body: JSON.stringify(robot),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newRobot = await response.json();
    dispatch(createRobotAction(newRobot));
  };
};
