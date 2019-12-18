import React from "react";
import Button from "@material-ui/core/Button";

import MyAccount from "./MyAccount";
import { UserConsumer } from "./UserContext";

const ToolBar = () => (
  <UserConsumer>
    {({ user, fetchData }) =>
      user ? (
        <MyAccount user={user} />
      ) : (
        <Button style={{ color: "white" }} onClick={fetchData}>
          Log In
        </Button>
      )
    }
  </UserConsumer>
);

export default ToolBar;
