import React, { useState } from "react";
import Tr from "./Tr";
import { usersdata } from "../../data/data";
const ViewUserSide = () => {
  const [userData, setUserData] = useState(usersdata);
  function itemDeleteHandler(id) {
    setUserData((prev) => {
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
            {userData.map((elemnt) => {
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
