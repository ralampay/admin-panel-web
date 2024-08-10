import React from "react";
import Login from "./Login";
import { isLoggedIn, destroySession } from "./services/AuthService";

export default App = () => {
  if (!isLoggedIn()) {
    return (
      <Login/>
    );
  }

  return (
    <React.Fragment>
      <button
        className="btn btn-danger"
        onClick={() => {
          destroySession();
        }}
      >
        Logout
      </button>
    </React.Fragment>
  );
}
