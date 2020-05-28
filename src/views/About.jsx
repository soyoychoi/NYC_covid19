import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { PageView, initGA } from "../components/Tracking";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    initGA(process.env.REACT_APP_GA_ID);
    PageView();
  }

  render() {
    return (
      <div class="row">
        <div>
          <img src="about.png" style={{ width: "100%" }}></img>
        </div>
        <div class="col-sm-12" id="about-col">
          <div className="about">
            <h2>Who We Are</h2>
            <p>
              We are a coalition of medical and graduate students from New York
              University, first formed in early March 2020 to coordinate and
              develop the student response to COVID-19. We are working in
              collaboration with hospitals around NYC, community efforts, and
              other medical school efforts to ensure a strong and unified
              response to help out NYC during this time of need.
            </p>
            <p>
              Our current efforts aim to source personal protective equipment
              for healthcare workers, support the mental health of our
              healthcare workers, and make vital medical and social information
              accessible to the entire community of New York City.
            </p>
          </div>
          <div className="impact">
            <h2>Our Impact</h2>
            <p>
              We currently have a community guide that is translated into 7
              languages, have distributed over 250,000 PPE items to hospitals to
              NYC, and have brought countless food and beverage donations to our
              staff on the frontlines.
            </p>
          </div>

          <div className="team">
            <h2>Central Coordination Team</h2>
            <div className="teammates">
              <p>
                <span>Volunteer Coordinator: </span>
                Noah Rosenberg, MS4 NYU Grossman School of Medicine
              </p>
              <p>
                <span>Administrative Coordinator: </span>
                Elyse Berlinberg, MS3, NYU Grossman School of Medicine
              </p>
              <p>
                <span>Clinical Support Coordinator: </span>
                Christina Boada, MS4, NYU Grossman School of Medicine
              </p>
              <p>
                <span>Communications Coordinator: </span> Megan Marshall, MS4,
                NYU Grossman School of Medicine
              </p>
              <p>
                <span>External Outreach Coordinator: </span>Jeremy Ziring, MS4,
                NYU Grossman School of Medicine
              </p>
              <p>
                <span>Internal Outreach Coordinator: </span>Kush Fansiwala, MS4,
                NYU Grossman School of Medicine
              </p>
            </div>
          </div>
          <p>Web Design and Development: So-Young Choi and Selamawit Moges</p>
        </div>
      </div>
    );
  }
}

export default About;
