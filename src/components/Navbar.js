import React, { Component } from "react";
import Identicon from "identicon.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="center navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-monospace">
         <h3>Tracking Dapp</h3> 
      </nav>
    );
  }
}

export default Navbar;
