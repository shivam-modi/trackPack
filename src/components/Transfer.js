import React, { useState } from "react";

const Transfer = (props) => {
  const { contract, account } = props;
  const [input, setInput] = useState({
    TrackId: "",
    Wallet: "",
    Coord: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    contract.methods
      .transferAsset(input.TrackId, input.Wallet, input.Coord)
      .send({ from: account })
      .then((res) => console.log(res))
      .catch((err) => alert("transfer Failed"));
  };
  return (
    <>
    <div className="create container" style={{ padding: "50px" }}>
      <h1>Transfer Asset</h1>
      <form className="createform">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            TrackId
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={input.TrackId}
            onChange={(e) => setInput({ ...input, TrackId: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Wallet
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={input.Wallet}
            onChange={(e) => setInput({ ...input, Wallet: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Coordinates
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={input.Coord}
            onChange={(e) => setInput({ ...input, Coord: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Transfer
        </button>
      </form>
    </div>
    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </>
  );
};

export default Transfer;
