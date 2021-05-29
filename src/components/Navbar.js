import React from "react";
import { Link } from "react-router-dom";
import Identicon from "identicon.js";

const Navbar = () => {
  return (
    <nav className="center navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow text-monospace">
      <h3>Tracking Dapp</h3>
      <Link to="/create">
        {" "}
        <h4>Create Asset</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
