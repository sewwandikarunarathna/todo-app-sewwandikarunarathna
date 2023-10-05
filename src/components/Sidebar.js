import React from "react";

const Sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex" href="index.html">
          <h3 className="sidebar-brand-text mx-3">Acmy Solutions</h3>
        </a>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <img
              className="rounded-circle"
              src="assets/Dashboard.svg"
              alt="..."
            />{" "}
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
