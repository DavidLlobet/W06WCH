import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRobotThunk, loadRobotsThunk } from "../redux/thunks/robotThunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobot = (idRobot) => {
    dispatch(deleteRobotThunk(idRobot));
  };

  return { robots, dispatch, loadRobots, deleteRobot };
};

export default useRobots;
