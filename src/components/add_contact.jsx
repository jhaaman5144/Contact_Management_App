import React, { useState } from "react";

const AddContact = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    props.addContactHandler(state); // Use props directly
    setState({ name: "", email: "" });
    console.log(state);
    
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
