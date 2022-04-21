/** @format */

import React from "react";
import TextField from "./TextField";
import { useEffect, useState, useRef } from "react";

const NewForm = () => {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleData = (e) => {
    e.preventDefault();

    console.log(users);
  };
  const handleDits = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUsers({ ...users, [name]: value });
  };
  const validateName = () => {};
  return (
    <div className="form">
      <TextField
        value={users.firstName}
        onChange={handleDits}
        onBlur={validateName}
        label="First Name"
        name="firstName"
        type="text"
      />
      <TextField label="Last Name" name="lastName" type="text" />
      <TextField label="Email" name="email" type="email" />
      <TextField label="Password" name="password" type="text" />
      <TextField label="Confirm Password" name="confirmPassword" type="text" />

      <button onClick={handleData} className="btn">
        Submit
      </button>
    </div>
  );
};

export default NewForm;
