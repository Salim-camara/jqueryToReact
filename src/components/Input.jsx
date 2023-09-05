import React from "react";

const Input = ({ title, value, onChange, type = "text" }) => {
  return (
    <>
      <label for="first-name">{title}</label>
      <input type={type} id="first-name" value={value} onChange={onChange} />
    </>
  );
};

export default Input;
