import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "./MainMenu.css";

const MainMenu = ({ isOpen, toggleDrawer, userName }) => (
  <SwipeableDrawer open={isOpen} onClose={toggleDrawer(false)}>
    <div className="MainMenu">
      <IconButton onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      {userName ? <h1>Bonsoir {userName}</h1> : <p>You should log in</p>}
    </div>
  </SwipeableDrawer>
);

export default MainMenu;
