import React, { useState } from "react";
import TaskList from "./TaskList";
import "../css/styles.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WelcomeNotice from "./WelcomeNotice";
import ActivityFeed from "./ActivityFeed";

const Dashboard = () => {
  return (
    <>
      <body id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}

              <Header />

              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Content Row --> */}
                <WelcomeNotice />

                {/* <!-- Content Row --> */}

                <div className="row">
                  {/* <!-- Area Chart --> */}
                  <div className="col-xl-7 col-lg-7">
                    <div className="card card-all">
                      <TaskList />
                    </div>
                  </div>

                  <ActivityFeed />
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
    </>
  );
};

export default Dashboard;
