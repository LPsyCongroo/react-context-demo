import React from "react";

import "./Header.css";
import MenuButton from "./MenuButton";
import MainMenu from "./MainMenu";
import Toolbar from "./ToolBar";

const Header = ({ data, fetchData }) => {
  const [state, setState] = React.useState({
    isOpen: false
  });
  const toggleDrawer = isOpen => () => setState({ isOpen });
  return (
    <nav className="Header">
      <MenuButton toggleDrawer={toggleDrawer} />
      <Toolbar fetchData={fetchData} data={data} />
      <MainMenu
        isOpen={state.isOpen}
        toggleDrawer={toggleDrawer}
        userName={data.user && data.user.firstName}
      />
    </nav>
  );
};

export default Header;
