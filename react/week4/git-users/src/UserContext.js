import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [hasResult, setHasResult] = useState(true);
  const getUsers = async (elm) => {
    setLoading(true);
    try {
      const userData = await axios.get(
        `https://api.github.com/search/users?q=${elm}`
      );
      const {
        data: { items },
        data: { total_count },
      } = await userData;
      let userList = [];
      items.forEach((item) => {
        const { login } = item;
        userList.push(login);
      });
      if (total_count > 0) {
        setUser(userList);
      } else {
        setUser(["No Results!"]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    // const url = `https://api.github.com/search/users?q=${elm}`;
    // const Api = await fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    // .then((data) => {
    //   const { items } = data;
    //   let userList = [];
    //   items.forEach((item) => {
    //     const { login } = item;
    //     userList.push(login);
    //   });
    //   if (data.total_count > 0) {
    //     setUser(userList);
    //   } else {
    //     setUser(["No Results!"]);
    //   }

    //   setLoading(false);
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.log("error");
    // });
  };

  const providerObj = {
    user,
    getUsers,
    loading,
    setLoading,
  };
  return (
    <userContext.Provider value={providerObj}>{children}</userContext.Provider>
  );
};

export default UserProvider;
