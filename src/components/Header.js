import React, { useState } from "react";

const Header = () => {
  const [style, setStyle] = useState();

  const changeToggle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={changeToggle}
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h4 className="h3 mb-0">Dashboard</h4>
        </div>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle"
                src="assets/Notifications.svg"
                alt="..."
              />
            </a>
          </li>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="img-profile rounded-circle"
                src="assets/Profile.svg"
              />
              <img
                className="img-profile rounded-circle"
                src="assets/Chevron-down.svg"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
