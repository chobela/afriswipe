import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const xContext = createContext();

const UserContext = (props) => {
  const [loggedin, setLoggedin] = useState(0);

  const updateUser = () => {
    setLoggedin(1);
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
        }}
      >
        {props.children}
      </xContext.Provider>
    </React.Fragment>
  );
};

export default UserContext;
