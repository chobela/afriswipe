import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const xContext = createContext();

const UserContext = (props) => {
  const [loggedin, setLoggedin] = useState(0);
  const [token, setToken] = useState("");

  const updateUser = (token) => {
    // setLoggedin(1);
    setToken(token);
  };

  //   useEffect(() => {
  //     setLoggedin(0)
  //   },[]);

  return (
    <React.Fragment>
      <xContext.Provider
        value={{
          updateUser,
          loggedin,
          token,
        }}
      >
        {props.children}
      </xContext.Provider>
    </React.Fragment>
  );
};

export default UserContext;
