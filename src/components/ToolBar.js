import React from "react";
import Button from "@material-ui/core/Button";

import MyAccount from "./MyAccount";

const ToolBar = ({ data, fetchData }) => {
  return data.user ? (
    <MyAccount user={data.user} />
  ) : (
    <Button style={{ color: "white" }} onClick={fetchData}>
      Log In
    </Button>
  );
};

export default ToolBar;
