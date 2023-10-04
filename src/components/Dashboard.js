import React, { useState } from "react";
import TaskList from "./TaskList";
import "./styles.css";

const Dashboard = () => {
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
    <div>
      <body id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
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
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
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
                    {/* <!-- Dropdown - Alerts --> */}
                  </li>

                  {/* <!-- Nav Item - User Information --> */}
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
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Content Row --> */}
                <div>
                  {/* <!-- Earnings (Monthly) Card Example --> */}
                  <div>
                    <div className="card">
                      <div className="card-body">
                        
                            <h3 className="text-xs">Welcome back, John Doe</h3>

                            <p className=" mb-00">
                              The end of the year is coming. Are you planning
                              your performance interviews? You can do this super
                              efficiently with Acmy.
                              <br />
                              <a href="#">Look here for more information</a>
                            </p>
                            <img className="vector" src="assets/Vector.svg" />
                            <img
                              className="close-icon"
                              src="assets/Close.svg"
                            />
                          </div>
                        
                    </div>
                  </div>
                </div>

                {/* <!-- Content Row --> */}

                <div className="row">
                  {/* <!-- Area Chart --> */}
                  <div className="col-xl-8 col-lg-7">
                  <div className="card card-all">
                      
                     <TaskList />
                      {/* <!-- Card Body --> */}
                     
                    </div>
                  </div> 
                </div>

               
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper --> */}


        {/* <!-- Bootstrap core JavaScript--> */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Core plugin JavaScript--> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* <!-- Custom scripts for all pages--> */}
        <script src="js/sb-admin-2.min.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="vendor/chart.js/Chart.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>
      </body>
    </div>
  );
};

export default Dashboard;
