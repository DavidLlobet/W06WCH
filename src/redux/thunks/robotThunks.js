import { deleteRobotAction, loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch("https://robots2.herokuapp.com/robots");
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(`https://robots2.herokuapp.com/robots/${id}`);
    const deletedRobot = await response.json();
    dispatch(deleteRobotAction(deletedRobot));
  };
};
