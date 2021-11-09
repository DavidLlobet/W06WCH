import {
  deleteRobotAction,
  loadRobotsAction,
  createRobotAction,
} from "../actions/actionCreators";

const urlApi = "https://robots2.herokuapp.com/robots";

export const loadRobotsThunk = () => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODkzMGZmYzExYjc4NjcwYWFjN2IyYSIsIm5hbWUiOiJMdWlzIiwiaWF0IjoxNjM2NDg4Mzc3LCJleHAiOjE2MzY1NzQ3Nzd9.iTYid9Gxd5_pwVL5KpcyZR6aD4_fGMxJwI3aGt4LLsk";
  /* const token = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  ); */

  const response = await fetch(urlApi, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  debugger;
  const robots = await response.json();

  dispatch(loadRobotsAction(robots));
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
