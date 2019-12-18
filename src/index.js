import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./components/Header.js";

const mockData = {
  user: {
    firstName: "Elliot",
    lastName: "Alderson",
    avatarUrl:
      "https://i.pinimg.com/originals/a0/f2/cd/a0f2cd4bd9c07eb05969c84fbb660479.png"
  }
};

function App() {
  const [state, setState] = React.useState({
    data: {}
  });
  const fetchData = () =>
    setState({
      data: mockData
    });
  const logOut = () =>
    setState({
      data: {}
    });
  return <Header data={state.data} fetchData={fetchData} logOut={logOut} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
