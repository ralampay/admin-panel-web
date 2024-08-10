import React from "react";
import Login from "./Login";
import { isLoggedIn } from "./services/AuthService";

export default App = () => {
  if (!isLoggedIn()) {
    return (
      <Login/>
    );
  }

  return (
    <React.Fragment>
    </React.Fragment>
  );
}
