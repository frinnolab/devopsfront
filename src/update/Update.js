import React from "react";
import "../update/update.css";
import { useState } from "react";

function UpdateForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <form className="form-update">
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

      <label>Phonenumber</label>
      <br />
      <input
        id="phone"
        name="phone"
        value={phone}
        type="text"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        className="submitButton"
        type="submit"
        value="Update"
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default UpdateForm;
