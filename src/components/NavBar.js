import React, { useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">Cinephiles club</h1>
        <ul className="nav-menu">
          <li className="nav-item">Search</li>
          <li className="nav-item">Ratings</li>
          <li className="nav-item">
            <div className="nav-red">Account</div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
