import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import profile from "../styles/images/profile.png";
import { destroySession } from "./services/AuthService";

export default Sidebar = (props) => {
  let {
    isOpen
  } = props;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="user-info d-flex align-items-center bg-dark text-white py-2 px-3">
        <img src={profile} alt="User" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <p className="mb-0 fw-bold">John Doe</p>
          <p className="mb-0 title">Administrator</p>
        </div>
      </div>
      <div className="nav-items">
        <div 
          className="nav-item active"
          onClick={() => {
          }}
        >
          <FontAwesomeIcon icon={faDashboard} className="me-2"/>
          <span className="link-name">
            Dashboard
          </span>
        </div>
      </div>
      <div 
        className="bottom clickable"
        onClick={() => {
          destroySession();
          window.location.href = "/";
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="me-2"/>
        <span className="link-name">
          Logout
        </span>
      </div>
    </div>
  );
}
