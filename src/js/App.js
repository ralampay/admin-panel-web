import React, { useState } from "react";
import Login from "./Login";
import { isLoggedIn } from "./services/AuthService";
import TopNavigation from "./TopNavigation";
import Sidebar from "./Sidebar";

export default App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isLoggedIn()) {
    return (
      <Login/>
    );
  }

  return (
    <React.Fragment>
      <div className="app-container">
        <Sidebar
          isOpen={isSidebarOpen}
        />
        <div className={`app-content ${isSidebarOpen ? 'open' : ''}`}>
          <TopNavigation
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main>
            Content
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
