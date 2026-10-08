import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <h2>Gym Menu</h2>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link">
          🏠 Dashboard
        </a>

        <a href="#" className="sidebar-link active">
          👤 Register New Member
        </a>

        <a href="#" className="sidebar-link">
          👥 Members
        </a>

        <a href="#" className="sidebar-link">
          💳 Payments
        </a>

        <a href="#" className="sidebar-link">
          📋 Attendance
        </a>

        <a href="#" className="sidebar-link">
          🔄 Renewals
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;