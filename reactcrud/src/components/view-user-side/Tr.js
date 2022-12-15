import React, { useContext } from "react";
import EditUserContext from "../../aut-context/AuthContext";
const Tr = ({ id, name, username, onItemDelete }) => {
  const ctx = useContext(EditUserContext);

  function itemDeleteHandler(e) {
    onItemDelete(e.target.id);
  }
  function editItemHandler(e) {
    ctx.setId(e.target.id);
    ctx.setName(name);
    ctx.setUserName(username);
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>
        <button onClick={itemDeleteHandler} id={id}>
          DELETE
        </button>
        <button id={id} onClick={editItemHandler}>
          EDIT
        </button>
      </td>
    </tr>
  );
};

export default Tr;
