import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import react, { useState, useEffect } from "react";
import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./Home";
import Comments from "./comments";
import Nav from "./Nav";
import User from "./User";
import Login from "./Login";
import comments from "./comments";

const Url = `https://jsonplaceholder.typicode.com/`;

const App = () => {
  const [login, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <Router>
      <Nav
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        login={login}
        exact
      />
      <ProtectedRoutes path="/" Component={Home} login={login} exact />
      <ProtectedRoutes path="/user" Component={User} login={login} exact />
      <ProtectedRoutes
        path="/comments"
        Component={comments}
        login={login}
        exact
      />
      <Route path="/login" exact>
        <Login login={login} />
      </Route>
    </Router>
  );
};

export default App;
