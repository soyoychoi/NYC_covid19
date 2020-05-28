import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class AppFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="row" id="footer">
        <div class="col-sm-6">
          <a href="/">
            <img id="logo" src="logo.png"></img>
          </a>
        </div>
        <div class="col-sm-6">
          <a href="mailto:nyusomvcovid19@gmail.com">
            <span>
              <h7>nyusomvcovid19@gmail.com</h7>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default AppFooter;
