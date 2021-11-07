import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/robots" exact>
        HOME
      </NavLink>
      <NavLink to="/robots/create" exact>
        CREATE ROBOT
      </NavLink>
      <NavLink to="/robots/update" exact>
        UPDATE ROBOT
      </NavLink>
    </header>
  );
};

export default Header;
