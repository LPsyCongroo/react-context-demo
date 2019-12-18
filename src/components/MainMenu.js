import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { UserContext } from "./UserContext";

import "./MainMenu.css";

const MainMenu = ({ isOpen, toggleDrawer }) => {
  const { user, logOut } = React.useContext(UserContext);
  return (
    <SwipeableDrawer open={isOpen} onClose={toggleDrawer(false)}>
      <div className="MainMenu">
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
        {user ? (
          <>
            <h1>Bonsoir {user.firstName}</h1>
            <footer>
              <Button
                onClick={logOut}
                style={{ backgroundColor: "crimson", color: "white" }}
              >
                Log Out
              </Button>
            </footer>
          </>
        ) : (
          <p>You should log in</p>
        )}
      </div>
    </SwipeableDrawer>
  );
};

export default MainMenu;
