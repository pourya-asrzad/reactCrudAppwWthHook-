import React from "react";

const Input = (props) => {
  const { name, value } = props;
  function inputChangeHandler() {}
  return (
    <div>
      <label htmlFor={name}>{props.children} </label>
      <br />
      <input
        onChange={inputChangeHandler}
        value={value ? value : ""}
        name={name}
        placeholder={name}
        id={name}
      />
    </div>
  );
};

export default Input;
