import React from "react";
import Counter from "./ClassCounter/ClassCounter";
import LandingPage from "./Netflix-LandingPage/Netflix-LandingPage";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Link to="/Counter">Counter</Link>
      </div>
      <div>
        <Link to="Landingpage">Netflix Landing Page</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
