import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import useRobots from "./hooks/useRobots";
import CreateRobotPage from "./pages/CreateRobotPage/CreateRobotPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UpdateRobotPage from "./pages/UpdatePage/UpdatePage";
import { paths, usersPaths } from "./paths/paths";

function App() {
  const { loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="container">
      <Router>
        <Header />
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
          <Route path={usersPaths.login} exact>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
