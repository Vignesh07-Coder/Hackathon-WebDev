import React from "react";

function Navbar() {
  function handleLogout() {
    console.log("Logout clicked");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="gym-icon">🏋️</span>
        <span>Gym Management System</span>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;