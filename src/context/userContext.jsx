import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const xContext = createContext();

const UserContext = (props) => {
  const [loggedin, setLoggedin] = useState(0);
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState();
  const [months, setMonths] = useState();
  const [email, setEmail] = useState();

  const updateUser = (token) => {
    setToken(token);
  };

  const updateMonths = (months) => {
    setMonths(months);
  };

  const updateAmount = (amount) => {
    setAmount(amount);
  };

  const updateEmail = (email) => {
    setEmail(email);
  };

  return (
    <React.Fragment>
      <xContext.Provider
        value={{
          updateUser,
          loggedin,
          token,
          amount,
          months,
          email,
          updateAmount,
          updateMonths,
          updateEmail,
        }}
      >
        {props.children}
      </xContext.Provider>
    </React.Fragment>
  );
};

export default UserContext;
