import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import useRobots from "./hooks/useRobots";
import CreateRobotPage from "./pages/CreateRobotPage/CreateRobotPage";
import HomePage from "./pages/HomePage/HomePage";
import UpdateRobotPage from "./pages/UpdatePage/UpdatePage";
import paths from "./paths/paths";

function App() {
  const { loadRobots } = useRobots();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(robots, null, 2)}</pre> */}
      <Router>
        <Switch>
          <Route path={paths.homePage} exact>
            <HomePage />
          </Route>
          <Route path={paths.createRobot} exact>
            <CreateRobotPage />
          </Route>
          <Route path={paths.updateRobot} exact>
            <UpdateRobotPage />
          </Route>
          <Route path="/" exact>
            <Redirect to={paths.homePage} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
