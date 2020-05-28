import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class AppHero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row" id="initiative-col">
        <div class="col-sm-12">
          <Carousel>
            <Carousel.Item
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.598), rgba(0, 0, 0, 0.598)), url('doctors.png') no-repeat center center",
                backgroundSize: "cover",
              }}
            >
              <div class="row">
                <div class="col-sm-6">
                  <h2>Donate to Employee Care and Relief Fund</h2>
                  <h5>Learn More</h5>
                </div>
                <div class="col-sm-6"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.598), rgba(0, 0, 0, 0.598)), url('business2.jpg') no-repeat center center",
                backgroundSize: "cover",
              }}
            >
              <div class="row">
                <div class="col-sm-6">
                  <h2>Support Local Businesses</h2>
                  <h5>Learn More</h5>
                </div>
                <div class="col-sm-6"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.598), rgba(0, 0, 0, 0.598)), url('virus.png') no-repeat center center",
                backgroundSize: "cover",
              }}
            >
              <div class="row">
                <div class="col-sm-6">
                  <h2>COVID-19 Curriculum</h2>
                  <h5>Learn More</h5>
                </div>
                <div class="col-sm-6"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.598), rgba(0, 0, 0, 0.598)), url('news.jpg') no-repeat center center",
                backgroundSize: "cover",
              }}
            >
              <div class="row">
                <div class="col-sm-6">
                  <h2>Current News</h2>
                  <h5>Learn More</h5>
                </div>
                <div class="col-sm-6"></div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default AppHero;
