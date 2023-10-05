import React from "react";

const ActivityFeed = () => {
  return (
    <div>
      <div className="col-xl-5 col-lg-5">
        <div className="card card-feed">
          <div className="card-header tasks d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0">Activity Feed</h6>
          </div>
          <div className="feed-content">
            <img className="feed-icon" src="assets/Avatar-1.svg" />
            <span className="feed-txt">
              <span style={{ color: "#000000", fontWeight: "700" }}>
                Kushantha Charuka{" "}
              </span>
              created{" "}
              <span style={{ color: "#BC006D", fontWeight: "700" }}>
                Contract #00124 need John Beige’s signature
              </span>
              <br />
              <span className="feed-date">Sep 16, 2022 at 11:30 AM</span>
            </span>
          </div>
          <br />
          <hr />
          <div className="feed-content">
            <img className="feed-icon" src="assets/Avatar-2.svg" />
            <span className="feed-txt">
              Lorem ipsum{" "}
              <span style={{ color: "#000000", fontWeight: "700" }}>
                dolor sit amet
              </span>
              , consectetur adipiscing elit.
              <span style={{ color: "#000000", fontWeight: "700" }}>
                Maecenas
              </span>{" "}
              pretium neque
              <br />
              <span className="feed-date">Sep 16, 2022 at 11:30 AM</span>
            </span>
          </div>
          <br />
          <hr />
          <div className="feed-content">
            <img className="feed-icon" src="assets/Avatar-2.svg" />
            <span className="feed-txt">
              Lorem ipsum{" "}
              <span style={{ color: "#000000", fontWeight: "700" }}>
                dolor sit amet
              </span>
              , consectetur adipiscing elit.
              <span style={{ color: "#000000", fontWeight: "700" }}>
                Maecenas
              </span>{" "}
              pretium neque
              <br />
              <span className="feed-date">Sep 16, 2022 at 11:30 AM</span>
            </span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
