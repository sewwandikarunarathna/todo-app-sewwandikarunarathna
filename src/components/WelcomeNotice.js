import React from "react";

const WelcomeNotice = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="text-xs">Welcome back, John Doe</h3>

          <span className=" mb-00">
            The end of the year is coming. Are you planning your performance
            interviews? You can do this super efficiently with Acmy.
            <br />
            <a href="#">Look here for more information</a>
          </span>

          <img className="vector" src="assets/Vector.svg" />
          <img className="close-icon" src="assets/Close.svg" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeNotice;
