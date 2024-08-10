import React from "react";
import { destroySession } from "./services/AuthService";

export default TopNavigation = () => {

  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => {
          destroySession();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  )
}
