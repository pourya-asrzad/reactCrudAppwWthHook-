import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { name, value, ongetvalue } = props;
  const [inputValue, setInputValue] = useState("");
  const [invalid, setInvalid] = useState(true);
  function inputChangeHandler(e) {
    setInvalid(true);
    if (value && inputValue.trim().length < 5) {
      setInvalid(false);
      return;
    }
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
        className={!invalid ? "invalidinput" : ""}
        onChange={inputChangeHandler}
        value={inputValue}
        name={name}
        placeholder={name}
        id={name}
      />

      {!invalid ? <span className="errormssege">invalid {name}</span> : ""}
    </div>
  );
};

export default Input;
