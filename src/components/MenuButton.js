import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const MenuButton = ({ toggleDrawer }) => (
  <IconButton onClick={toggleDrawer(true)}>
    <MenuIcon style={{ color: "white" }} />
  </IconButton>
);

export default MenuButton;
