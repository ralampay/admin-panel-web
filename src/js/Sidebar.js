import React from "react";

export default Sidebar = (props) => {
  let {
    isOpen
  } = props;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="user-info d-flex align-items-center bg-dark text-white py-2 px-3 mb-3">
        <img src="path/to/user-image.jpg" alt="User" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <p className="mb-0 fw-bold">John Doe</p>
          <p className="mb-0">Administrator</p>
        </div>
      </div>
      <div className="menu">
      </div>
    </div>
  );
}
