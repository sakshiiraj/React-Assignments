import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="LandingPage">
        <div className="LandingPage-img">
          <img
            src="https://s3.amazonaws.com/ionic-marketplace/instaclone/icon.png"
            alt=""
          />
        </div>
        <div className="LandingPage-2">
          <h1 className="LandingPageHeading">Welcome to Instaclone</h1>
          <Link to="/Postview">
            <button className="LandingPageBtn">Login/SignUp</button>
          </Link>
        </div>
      </div>
    </>
  );
}
