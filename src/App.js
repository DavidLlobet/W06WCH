import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <pre>{JSON.stringify(robots, null, 2)}</pre> */}
      <Router>
        <Switch>
          <Route path={paths.robots} exact>
            <HomePage />
          </Route>
          <Route path={paths.robots / create} exact>
            <Create />
          </Route>
          <Route path={paths.robots / update} exact>
            <Update />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
