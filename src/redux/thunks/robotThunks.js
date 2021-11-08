import axios from "axios";
import {
  deleteRobotAction,
  loadRobotsAction,
  createRobotAction,
} from "../actions/actionCreators";

export const loadRobotsThunk = () => async (dispatch) => {
  const { token } = JSON.stringify(
    localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)
  );
  const robots = await axios.get(process.env.REACT_APP_URL + robotPaths.get, {
    headers: { Authorization: "Bearer " + token },
  });
  dispatch(loadRobotsAction(robots.data));
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
