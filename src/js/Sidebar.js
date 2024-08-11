import React from "react";

export default Sidebar = (props) => {
  let {
    isOpen
  } = props;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      Sidebar
    </div>
  );
}
