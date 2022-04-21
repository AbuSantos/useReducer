/** @format */

import React from "react";
import { useEffect, useState, useRef } from "react";

const Form = () => {
  const [disable, setDisable] = useState(false);
  const refButton = useRef(null);
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleDits = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUsers({ ...users, [name]: value });
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log();
    if (
      users.firstName &&
      users.lastName &&
      users.email &&
      users.confirmPassword &&
      users.password
    ) {
      console.log(users);
      setUsers({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("Input cannot be empty");
    }
  };

  //validating each input fields by passing in the name and event params
  const validateName = (e) => {
    const name = e.target;
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(name.value)) {
      name.classList.add("is-invalid");
      setDisable(true);
    } else {
      name.classList.remove("is-invalid");
      setDisable(false);
    }
  };
  const validatePassword = (e) => {
    const password = e.target;
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&|*])(?=.{8,})$/;

    if (!re.test(password.value)) {
      password.classList.add("is-invalid");
      setDisable(true);
    } else {
      password.classList.remove("is-invalid");
      setDisable(false);
    }
  };
  const validateEmail = (e) => {
    const email = e.target;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
      email.classList.add("is-invalid");
      setDisable(true);
    } else {
      email.classList.remove("is-invalid");
      setDisable(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleData}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={users.firstName}
            onChange={handleDits}
            onBlur={validateName}
          />
          <div className="invalid-feedback">
            Firstname must be more than 30 characters
          </div>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={users.lastName}
            onChange={handleDits}
            onBlur={validateName}
          />
          <div className="invalid-feedback">
            Lastname must be more than 30 characters
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={users.email}
            onChange={handleDits}
            onBlur={validateEmail}
          />
          <div className="invalid-feedback">Email is invalid</div>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={users.password}
            onChange={handleDits}
            onBlur={validatePassword}
          />
          <div className="invalid-feedback">
            Password must contain, number, uppercase and a symbol
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            value={users.confirmPassword}
            onChange={handleDits}
            onBlur={validatePassword}
          />
          <div className="invalid-feedback">Password don't match</div>
        </div>

        <button
          type="submit"
          className="btn"
          disabled={disable}
          ref={refButton}
        >
          submit
        </button>
      </form>
    </>
  );
};

export default Form;
