import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/robotThunks";
import { useEffect } from "react";

function App() {
  const robots = useSelector(({ robots }) => robots);
  console.log(robots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
