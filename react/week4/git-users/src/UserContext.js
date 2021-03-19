import React, { useState, useEffect, createContext } from "react";

export const userContext = createContext();
// const defaultState = {
//   users: "",
//   loading: false,
// };
const UserProvider = (props) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async (elm) => {
    setLoading(true);
    const url = `https://api.github.com/search/users?q=${elm}`;
    const Api = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const providerObj = {
    user,
    setUser,
    getUsers,
  };
  return (
    <userContext.Provider value={providerObj}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
