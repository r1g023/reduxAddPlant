import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function NavigationBar() {
  //   signout button that pushes back to home component
  const { push } = useHistory();
  const signOut = (props) => {
    window.localStorage.removeItem("token");
    push("google.com");
    console.log("log out successful");
  };

  return (
    <div className="header">
      <Link to="/signup" className="title">
        Water My Plant App
      </Link>

      {/* NAV BAR LINKS TO ROUTES */}
      <nav className="nav-links">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/plant-list">
          Plant List
        </Link>

        <Link className="nav-link" to="/add-plant">
          Add Plant
        </Link>

        <Link className="nav-link" to="/about-team">
          About Team
        </Link>

        <Link className="nav-link" to="/signout" onClick={signOut}>
          Sign out
        </Link>
      </nav>
    </div>
  );
}
