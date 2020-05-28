import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { PageView, initGA } from "../components/Tracking";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Home extends Component {
  constructor(props) {
    super(props);
    this.beforeAnimation = this.beforeAnimation.bind(this);
    this.beforeAnimateRight = this.beforeAnimateRight.bind(this);
  }

  componentDidMount() {
    initGA(process.env.REACT_APP_GA_ID);
    PageView();
  }

  animate() {
    const leftCol = document.getElementById("left-col");
    leftCol.style.animation = "moveLeft 0.2s linear";
  }

  beforeAnimation() {
    const leftCol = document.getElementById("left-col");
    leftCol.style.animation = "";
    this.props.history.push("/initiatives");
  }

  animateRight() {
    const rightCol = document.getElementById("right-col");
    rightCol.style.animation = "moveRight 0.2s linear";
  }

  beforeAnimateRight() {
    const rightCol = document.getElementById("right-col");
    rightCol.style.animation = "";
    this.props.history.push("/support");
  }

  originalStyle() {
    const jumbotron = document.getElementsByClassName("jumbotron")[0];
    jumbotron.style.background =
      'linear-gradient(rgba(0, 0, 0, 0.345), rgba(50, 50, 50, 0.352)), url("homebackground.png") no-repeat center center';
    jumbotron.style.backgroundSize = "cover";
  }

  changeLeftStyle() {
    const jumbotron = document.getElementsByClassName("jumbotron")[0];
    jumbotron.style.background =
      'linear-gradient(90deg, #71309177 50%, rgba(50, 50, 50, 0.352) 50%), url("homebackground.png") no-repeat center center';
    jumbotron.style.backgroundSize = "cover";
  }

  changeRightStyle() {
    const jumbotron = document.getElementsByClassName("jumbotron")[0];
    jumbotron.style.background =
      'linear-gradient(-90deg, #71309177 50%, rgba(50, 50, 50, 0.352) 50%), url("homebackground.png") no-repeat center center';
    jumbotron.style.backgroundSize = "cover";
  }

  render() {
    return (
      <div class="row">
        <div class="col-sm-12" id="home-col">
          <Carousel>
            <Carousel.Item id="carousel-left">
              <a href="/initiatives">
                <div class="row">
                  <div class="col-sm-8">
                    <h2>Find Out How You Can Help</h2>
                    <p>
                      Join us in the fight against COVID-19. Here are some
                      organizations and initiatives that need your help.
                    </p>
                  </div>
                </div>
              </a>
            </Carousel.Item>
            <Carousel.Item id="carousel-right">
              <a href="/support">
                <div class="row">
                  <div class="col-sm-8">
                    <h2> Collaborate With Us</h2>
                    <p>
                      If you are an organization or a healthcare worker seeking
                      for help, tell us about your initiative and collaborate
                      with us.
                    </p>
                  </div>
                </div>
              </a>
            </Carousel.Item>
          </Carousel>
          <Jumbotron>
            <div class="row">
              <div
                onMouseEnter={this.changeLeftStyle}
                onMouseLeave={this.originalStyle}
                onClick={this.animate}
                onAnimationEnd={this.beforeAnimation}
                class="col-sm-6"
                style={{ textAlign: "left" }}
                id="left-col"
              >
                <div class="row">
                  <div class="col-sm-2">
                    <i class="fa fa-angle-double-left"></i>
                  </div>
                  <div class="col-sm-10" id="left-col-10">
                    <h2>Find Out How You Can Help</h2>
                    <p>
                      Join us in the fight against COVID-19. Here are some
                      organizations and initiatives that need your help.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-6"
                id="right-col"
                style={{ textAlign: "right" }}
                onMouseEnter={this.changeRightStyle}
                onMouseLeave={this.originalStyle}
                onClick={this.animateRight}
                onAnimationEnd={this.beforeAnimateRight}
              >
                <div class="row">
                  <div class="col-sm-10">
                    <h2 style={{ paddingBottom: "2.6rem" }}>
                      Collaborate With Us
                    </h2>
                    <p>
                      If you are an organization or a healthcare worker seeking
                      for help, tell us about your initiative and collaborate
                      with us.
                    </p>
                  </div>
                  <div class="col-sm-2">
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
        <div class="col-sm-6" id="left-col-6">
          <h3>A Student-Led Effort To Fight Against COVID-19</h3>
          <p>
            We are a group of NYU med and Sackler PhD students, leading the
            effort to volunteer and find ways to help in COVID-19.
          </p>
          <Button className="about-btn" href="/about">
            Find out more about us
          </Button>
        </div>
        <div class="col-sm-6" id="right-col-6">
          <img width="100%" src="effort.png"></img>
        </div>
        <div id="line"></div>
        <div class="col-sm-12" id="update-col">
          <h3>Covid-19 Updates</h3>
        </div>
        <div class="col-sm-12">
          <div class="row" id="tweet-row">
            <div class="col-sm-6" id="tweet-col">
              <div className="tweet-card">
                <div>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="litcovid_nyu"
                    options={{ height: "70vh", width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-6" id="tweet-col">
              <div className="tweet-card">
                <div>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ppe2nyc"
                    options={{ height: "70vh", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
