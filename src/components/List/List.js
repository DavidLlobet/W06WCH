import useRobots from "../../hooks/useRobots";
import Robot from "../Robot/Robot";

const List = () => {
  const { robots } = useRobots();
  console.log(robots);

  return (
    <>
      <pre>{JSON.stringify(robots, null, 2)}</pre>
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
    </>
  );
};

export default List;
