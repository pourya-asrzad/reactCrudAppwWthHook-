import React, { useContext, useEffect, useState } from "react";
import Input from "../input/Input";
import EditUserContext from "../../aut-context/AuthContext";
const EditSide = () => {
  const [namevalue, setNamevalue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const context = useContext(EditUserContext);
  function editItemSubmitHandler(e) {
    e.preventDefault();
  }
  function cancelClickHandler() {
    context.setId("");
    context.setName("");
    context.setUserName("");
  }

  function editItemHandler() {
    let index = context.userData.findIndex((ele) => {
      return ele.id == context.id;
    });
    context.setUserData((prev) => {
      prev[index].name = namevalue;
      prev[index].username = userNameValue;
      return prev;
    });
    context.setId("");
    context.setName("");
    context.setUserName("");
  }

  let editbtn =
    context.name === "" ? (
      <button disabled className="edituserdisabel">
        EDIT USER
      </button>
    ) : (
      <button onClick={editItemHandler} className="edituser">
        EDIT USER
      </button>
    );
  return (
    <div>
      <h1>Edit User </h1>
      <form onSubmit={editItemSubmitHandler}>
        <Input ongetvalue={setNamevalue} value={context.name} name="name">
          Name
        </Input>
        <Input
          ongetvalue={setUserNameValue}
          value={context.username}
          name="username"
        >
          Username
        </Input>
        <div>
          {editbtn}
          <button onClick={cancelClickHandler}>CANCEL</button>
        </div>
      </form>
    </div>
  );
};

export default EditSide;
