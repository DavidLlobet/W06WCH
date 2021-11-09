import {
  deleteRobotAction,
  loadRobotsAction,
  createRobotAction,
} from "../actions/actionCreators";

const urlApi = "https://robots2.herokuapp.com/robots";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(urlApi, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODkzMGZmYzExYjc4NjcwYWFjN2IyYSIsIm5hbWUiOiJMdWlzIiwiaWF0IjoxNjM2MzkzMzA2LCJleHAiOjE2MzY0Nzk3MDZ9.lWBAESbGPF0M7wA2936il6bA7CbW54pPBnZz1djkqSs",
    },
  });
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
