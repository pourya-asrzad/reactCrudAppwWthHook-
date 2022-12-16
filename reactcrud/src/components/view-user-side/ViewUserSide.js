import React, { useState, useContext } from "react";
import Tr from "./Tr";
import EditUserContext from "../../aut-context/AuthContext";
import { usersdata } from "../../data/data";
const ViewUserSide = () => {
  const context = useContext(EditUserContext);
  function itemDeleteHandler(id) {
    context.setUserData((prev) => {
      return prev.filter((elemnt) => elemnt.id !== +id);
    });
  }

  return (
    <div className="ViewUserSide">
      <h1>View Users</h1>
      <div className="tabelparent">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Points</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {context.userData.map((elemnt) => {
              return (
                <Tr
                  onItemDelete={itemDeleteHandler}
                  key={elemnt.id}
                  id={elemnt.id}
                  name={elemnt.name}
                  username={elemnt.username}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUserSide;
