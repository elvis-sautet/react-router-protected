import react from "react";
import { NavLink, withRouter } from "react-router-dom";
const Nav = ({ login, handleLogout, handleLogin }) => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          activeStyle={{
            color: "white",
            borderBottom: "2px solid blue",
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            color: "white",
            borderBottom: "2px solid blue",
          }}
          to="/user"
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            color: "white",
            borderBottom: "2px solid blue",
          }}
          to="/comments"
        >
          comments
        </NavLink>
      </li>
      <li>
        {login ? (
          <button onClick={() => handleLogout()}>Logout</button>
        ) : (
          <button onClick={() => handleLogin()}>Login</button>
        )}
      </li>
    </ul>
  );
};
export default withRouter(Nav);
