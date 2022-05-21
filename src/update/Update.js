import React from "react";
import "../update/update.css";
import { useState } from "react";

function UpdateForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
      
    <form
      className="form-update"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Firstname</label>
      <br />
      <input
        id="firstName"
        name="firstName"
        value={firstName}
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Lastname</label>
      <br />
      <input
        id="lastName"
        name="lastName"
        value={lastName}
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input className="submitButton" type="submit" value="Update" />
    </form>
  );
}

export default UpdateForm;
