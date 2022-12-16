import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { name, value, ongetvalue } = props;
  const [inputValue, setInputValue] = useState("");
  function inputChangeHandler(e) {
    ongetvalue(e.target.value);
    setInputValue(e.target.value);
  }
  useEffect(() => {
    ongetvalue(value);
    setInputValue(value);
  }, [value]);
  return (
    <div>
      <label htmlFor={name}>{props.children} </label>
      <br />
      <input
        onChange={inputChangeHandler}
        value={inputValue}
        name={name}
        placeholder={name}
        id={name}
      />
    </div>
  );
};

export default Input;
