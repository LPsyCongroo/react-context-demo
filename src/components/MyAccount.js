import React from "react";

import "./MyAccount.css";
import Avatar from "@material-ui/core/Avatar";

const MyAccount = ({ user }) => (
  <div className="MyAccount">
    <p>
      Welcome, {user.firstName} {user.lastName}
    </p>
    <Avatar src={user.avatarUrl} />
  </div>
);

export default MyAccount;
