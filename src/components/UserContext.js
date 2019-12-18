import React from "react";

export const {
  Provider: UserProvider,
  Consumer: UserConsumer
} = React.createContext({
  user: {},
  logOut: () => {},
  fetchData: () => {}
});
