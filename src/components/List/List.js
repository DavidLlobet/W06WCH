import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunks/robotThunks";
import Robot from "../Robot/Robot";

const List = () => {
  const robots = useSelector(({ robots }) => robots);
  console.log(robots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  return (
    <ul className="robots-list">
      <h2>My Robots:</h2>
      {robots.map((robot) => (
        <Robot
          key={robot._id}
          name={robot.name}
          image={robot.url}
          speed={robot.characteristics.speed}
          stamina={robot.characteristics.stamina}
          creationDate={robot.characteristics.creationDate}
        />
      ))}
    </ul>
  );
};

export default List;
