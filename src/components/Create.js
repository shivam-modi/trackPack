import React, { useState } from "react";

const Create = (props) => {
  const contract = props.contract;
  const account = props.account;
  const [input, setInput] = useState({
    title: "",
    desc: "",
    manf: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    contract.methods
      .createAsset(input.title, input.desc, input.manf)
      .send({ from: account });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h1>Create Page</h1>
      <form>
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
        <div class="mb-3">
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
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
