import { Component } from "react";
import React from "react";
import "../Netflix-LandingPage/Netflix-LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <nav>
          <img src="https://logolook.net/wp-content/uploads/2021/11/Netflix-Logo.png" />
          <div id="LandingPage_buttonsContainer">
            <button className="LandingPage_buttons">Sign In</button>
            <button className="LandingPage_buttons">Register</button>
          </div>
        </nav>
        <div>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
      </div>
    );
  }
}

export default LandingPage;
