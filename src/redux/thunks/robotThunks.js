import robotsMock from "../../mocks/robotsMock";
import { loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => {
  return (dispatch) => {
    const robots = robotsMock;
    dispatch(loadRobotsAction(robots));
  };
};
