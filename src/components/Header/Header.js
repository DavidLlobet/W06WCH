import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <NavLink className="nav-link" to="/robots" exact>
        HOME
      </NavLink>
      <NavLink className="nav-link" to="/robots/create" exact>
        CREATE ROBOT
      </NavLink>
      <NavLink className="nav-link" to="/robots/update" exact>
        UPDATE ROBOT
      </NavLink>
    </header>
  );
};

export default Header;
