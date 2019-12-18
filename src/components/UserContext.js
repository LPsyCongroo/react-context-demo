import React from "react";

export const UserContext = React.createContext({
  user: {},
  logOut: () => {},
  fetchData: () => {}
});

export const { Provider: UserProvider, Consumer: UserConsumer } = UserContext;
