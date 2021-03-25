import React, { useContext, useState } from "react";
import { userContext } from "./UserContext";

const UserInterface = () => {
  const { user, getUsers, loading, setLoading } = useContext(userContext);
  const [element, setElement] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getUsers(element);
  };

  const userInputHandler = (e) => {
    setElement(e.target.value);
    // getUsers(element);
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
      {loading ? <p>loading...</p> : <p></p>}

      <div>
        <ul>
          {user.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInterface;
