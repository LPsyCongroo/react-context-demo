import React from "react";

import "./Header.css";
import MenuButton from "./MenuButton";
import MainMenu from "./MainMenu";
import Toolbar from "./ToolBar";

const Header = () => {
  const [state, setState] = React.useState({
    isOpen: false
  });
  const toggleDrawer = isOpen => () => setState({ isOpen });
  return (
    <nav className="Header">
      <MenuButton toggleDrawer={toggleDrawer} />
      <Toolbar />
      <MainMenu isOpen={state.isOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
};

export default Header;
