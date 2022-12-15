import React, { useContext } from "react";
import Input from "../input/Input";
import EditUserContext from "../../aut-context/AuthContext";
const EditSide = () => {
  const context = useContext(EditUserContext);
  function editItemSubmitHandler(e) {
    e.preventDefault();
  }
  function cancelClickHandler() {
    context.setId("");
    context.setName("");
    context.setUserName("");
  }
  function editItemHandler() {}
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
        <Input value={context.name} name="name">
          Name
        </Input>
        <Input value={context.username} name="username">
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
