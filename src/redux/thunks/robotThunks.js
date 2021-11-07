import { loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch("https://robots2.herokuapp.com/robots");
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};
