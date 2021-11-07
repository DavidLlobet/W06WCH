import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  deleteRobotThunk,
  loadRobotsThunk,
} from "../redux/thunks/robotThunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobot = (idRobot) => {
    dispatch(deleteRobotThunk(idRobot));
  };

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  return { robots, dispatch, loadRobots, deleteRobot, createRobot };
};

export default useRobots;
