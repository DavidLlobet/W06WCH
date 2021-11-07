import useRobots from "../../hooks/useRobots";
import Robot from "../Robot/Robot";

const List = () => {
  const { robots, deleteRobot } = useRobots();

  const onDelete = (idRobot) => {
    deleteRobot(idRobot);
  };
  return (
    <>
      <h2>My Robots:</h2>
      <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {robots.map((robot) => (
          <Robot
            key={robot._id}
            _id={robot._id}
            name={robot.name}
            image={robot.url}
            speed={robot.characteristics.speed}
            stamina={robot.characteristics.stamina}
            creationDate={robot.characteristics.creationDate}
            onDeleteClick={onDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
