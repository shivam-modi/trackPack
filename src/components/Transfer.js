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
      <h1>Transfer Page</h1>
      <form className="createform">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            TrackId
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            value={input.TrackId}
            onChange={(e) => setInput({ ...input, TrackId: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Wallet
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={input.Wallet}
            onChange={(e) => setInput({ ...input, Wallet: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Coordinates
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={input.Coord}
            onChange={(e) => setInput({ ...input, Coord: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Transfer
        </button>
      </form>
    </div>
    <div class="area" >
            <ul class="circles">
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
