import React, { useState } from "react";
import Maps from "./Map";
import DataFormat from "./formatData";

const Main = (props) => {
  const { contract, account } = props;
  const [shipment, setShipment] = useState({});
  const [issearch, setIssearch] = useState(false);
  const [input, setInput] = useState("");

  const data = {
    0: shipment[0],
    1: shipment[1],
    2: shipment[2],
    3: shipment[3],
    4: shipment[4],
    5: shipment[5],
  };

  const handleSubmit = () => {
    // console.log(Number(input));
    if (input) {
      contract.methods
        .getAssetByUUID(input)
        .call()
        .then((details) => {
          setShipment(details);
          setIssearch(true);
        })
        .catch((err) => {
          alert("incorrect tracking id");
        });
    }
  };
  const handleSubmit1 = () => {
    contract.methods
      .getCount()
      .call()
      .then((val) => {
        console.log(val);
      });
  };
  return (
    <div className="cont text-monospace">
      <form className="trackid">
        <label htmlFor="name">Track your package</label>
        <br />
        <input
          type="text"
          aria-label="tackid"
          placeholder="Enter tracking Id"
          name="id"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="button" className="btn btn-info" onClick={handleSubmit}>
          Info
        </button>
        <button type="button" className="btn btn-info" onClick={handleSubmit1}>
          Count
        </button>
      </form>
      {issearch ? (
        <div className="trackdata">
          <DataFormat data={data} />
        </div>
      ) : null}
      <Maps path={shipment[3]} />
    </div>
  );
};

export default Main;
// JSON.stringify(shipment)
