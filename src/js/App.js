import React from "react";
import Login from "./Login";
import { isLoggedIn } from "./services/AuthService";
import TopNavigation from "./TopNavigation";

export default App = () => {
  if (!isLoggedIn()) {
    return (
      <Login/>
    );
  }

  return (
    <React.Fragment>
      <TopNavigation/>
    </React.Fragment>
  );
}
