import React from "react";
import { destroySession } from "./services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default TopNavigation = () => {

  return (
    <div className="top-navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <FontAwesomeIcon 
              icon={faBars}
              size="2x"
              className="clickable ms-2"
            />
          </div>
          <div className="col text-end">
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
        </div>
      </div>
    </div>
  )
}
