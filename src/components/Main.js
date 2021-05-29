import React, { Component } from "react";
import Maps from "./widgets/Map";
import Create from "./Create";

class Main extends Component {
  render() {
    return (
      <div className="cont text-monospace">
        <form>
          <label htmlFor="name">Track Id</label>
          <input
            type="text"
            aria-label="tackid"
            placeholder="Enter tack id"
            name="id"
          />
        </form>
        <Maps />
      </div>
    );
  }
}

export default Main;
