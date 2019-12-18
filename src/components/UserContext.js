/**
 * This file now encapsulates all user-related state logic
 */
import React from "react";
import mockData from "./mockData";

export const UserContext = React.createContext({
  user: null,
  logOut: () => {},
  fetchData: () => {}
});

export const { Consumer: UserConsumer } = UserContext;

export const UserProvider = props => {
  const [user, setUser] = React.useState(null);
  const fetchData = () => setUser(mockData.user);
  const logOut = () => setUser(null);
  return (
    <UserContext.Provider
      value={{
        user,
        logOut,
        fetchData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
