import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./components/Header.js";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
