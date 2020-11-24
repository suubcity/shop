import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
    <div id="spacer"></div>
      <div id="navContainer">
        <div id="innerNavContainer">
          <nav>
            <ul id="navigation">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Shop">
                <li>Shop</li>
              </Link>
            </ul>
          </nav>
          <h3 id="logo">Audecca</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
