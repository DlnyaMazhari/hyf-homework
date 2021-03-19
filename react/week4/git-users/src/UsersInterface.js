import React, { useContext, useState } from "react";
import { userContext } from "./UserContext";

const UserInterface = () => {
  const { user, getUsers } = useContext(userContext);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const userInputHandler = (e) => {
    let element = e.target.value;
    getUsers(element);
  };
  return (
    <div>
      <h3>Github User Searcher</h3>
      <form onSubmit={submitHandler} className="userForm">
        <input
          onChange={userInputHandler}
          type="text"
          name="user"
          className="userInput"
          placeholder="Search for user"
        ></input>
      </form>
    </div>
  );
};

export default UserInterface;
