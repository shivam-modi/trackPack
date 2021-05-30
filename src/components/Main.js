import React, { useState } from "react";
import Maps from "./Map";

const Main = (props) => {
  const { contract, account } = props;
  const [shipment, setShipment] = useState({});
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // console.log(Number(input));
    if (input) {
      contract.methods
        .getAssetByUUID(input)
        .call()
        .then((details) => {
          setShipment(details);
        })
        .catch((err) => {
          alert("incorrect tracking id");
        });
    }
  };
  const handleSubmit1 = () => {
    contract.methods
      .getCount()
      .call({ from: account })
      .then((val) => {
        console.log(val);
      });
  };
  return (
    <div className="cont text-monospace">
      <form className="trackid"> 
        <label htmlFor="name">Track your package</label><br/>
        <input
          type="text"
          aria-label="tackid"
          placeholder="Enter tracking Id"
          name="id"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" class="btn btn-info" onClick={handleSubmit}>
          Info
        </button>
        <button type="button" class="btn btn-info" onClick={handleSubmit1}>
          Count
        </button>
      </form>
      <div className="trackdata">{JSON.stringify(shipment)}</div>
      <Maps path={shipment[3]} />
    </div>
  );
};

export default Main;
