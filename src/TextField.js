/** @format */

import React from "react";

const TextField = ({ label, ...props }) => {
  const { name } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type="text"
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default TextField;
