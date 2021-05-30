import React from "react";
import { Link } from "react-router-dom";
import Identicon from "identicon.js";
import logo from './assets/logo.ico'

const Navbar = () => {
  return (
    <nav>
  <h1><Link to="/" className="hm"><img className="logo" src={logo} alt="trackpack" />TrackPack</Link></h1>
  <ul>
    <li><Link data-text="Home" to="/">Home</Link></li>
    <li><Link data-text="Create asset" to="/create">Create Asset</Link></li>
    <li><Link data-text="Transfer Asset" to="/transfer">Transfer Asset</Link></li>
  </ul>
</nav>
  );
};

export default Navbar;
