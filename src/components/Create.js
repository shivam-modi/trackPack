import React, { useState, useEffect } from "react";

const Create = (props) => {
  const { contract, account } = props;
  const [input, setInput] = useState({
    title: "",
    desc: "",
  });
  useEffect(() => {
    const event = contract?.events.AssetCreated();
    if (event) {
      event.subscribe((err, result) => {
        if (!err) {
          const id = result.returnValues["uuid"];
          alert(`Asset generated with UUID : ${id}`);
        } else {
          console.log(err);
        }
      });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    contract.methods
      .createAsset(input.title, input.desc)
      .send({ from: account });
  };
  return (
    <>
      <div className="create container" style={{ padding: "50px" }}>
        <h1>Create new asset</h1>
        <form className="createform">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              description
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={input.desc}
              onChange={(e) => setInput({ ...input, desc: e.target.value })}
            />
          </div>
          {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              manufacturer
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={input.manf}
              onChange={(e) => setInput({ ...input, manf: e.target.value })}
            />
          </div> */}
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div class="area">
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
      </div>
    </>
  );
};

export default Create;
