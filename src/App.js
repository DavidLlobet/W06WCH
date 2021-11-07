import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import paths from "./paths/paths";

function App() {
  return (
    <div className="container">
      {/* <pre>{JSON.stringify(robots, null, 2)}</pre> */}
      <Router>
        <Switch>
          <Route path={paths.robots} exact>
            <HomePage />
          </Route>
          {/* <Route path={paths.robots / create} exact>
            <Create />
          </Route>
          <Route path={paths.robots / update} exact>
            <Update />
          </Route> */}
          <Route path="/" exact>
            <Redirect to={paths.robots} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
