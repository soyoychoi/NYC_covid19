import React, { Component } from "react";
import AppCard from "../components/AppCard";
import AppHero from "../components/AppHero";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PageView, initGA } from "../components/Tracking";

class Initiatives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initiatives: [],
      addCard: {
        name: "",
        image: "",
        desc: "",
        fb: "",
        twitter: "",
        ig: "",
        url: "",
      },
    };
    this.addCard = this.addCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    initGA(process.env.REACT_APP_GA_ID);
    PageView();

    fetch("/initiative", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ initiatives: json.initiatives });
      });
  }

  addCard(event) {
    event.preventDefault();
    document.getElementById("modal").style.display = "block";
  }

  handleChange = (name) => (event) => {
    let obj = this.state.add;
    obj[name] = event.target.value;
    this.setState({ addCard: obj });
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch("/addCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card: this.state.addCard }),
    }).then((response) => {
      alert("You have added one card.");
      window.location.reload();
    });
    document.getElementById("modal").style.display = "none";
  }

  close(event) {
    event.preventDefault();
    document.getElementById("modal").style.display = "none";
  }

  render() {
    var userID = sessionStorage.getItem("userID");
    return (
      <div>
        <AppHero></AppHero>
        <div class="row" id="initiative-row">
          <div class="col-sm-12">
            <h2>Our Initiatives</h2>
            {userID == "" || userID === null ? null : (
              <div>
                <Button onClick={this.addCard} className="admin-btn">
                  Add Card
                </Button>
                <div class="modal-content" id="modal">
                  <Form>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("name")}
                        value={this.state.addCard.name}
                        placeholder="Enter initiative name."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Image URL</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("image")}
                        value={this.state.addCard.image}
                        placeholder="Enter Image URL."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("desc")}
                        value={this.state.addCard.desc}
                        placeholder="Enter initiative description."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Facebook</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("fb")}
                        value={this.state.addCard.fb}
                        placeholder="Enter Facebook ID."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Twitter</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("twitter")}
                        value={this.state.addCard.twitter}
                        placeholder="Enter Twitter handle."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Instagram</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("ig")}
                        value={this.state.addCard.ig}
                        placeholder="Enter Instagram handle."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Website URL</Form.Label>
                      <Form.Control
                        onChange={this.handleChange("url")}
                        value={this.state.addCard.url}
                        placeholder="Enter Website URL."
                      />
                    </Form.Group>
                    <Button
                      onClick={this.handleSubmit}
                      className="about-btn"
                      type="submit"
                    >
                      Add Card
                    </Button>
                    <Button onClick={this.close} className="admin-btn">
                      Close
                    </Button>
                  </Form>
                </div>
              </div>
            )}
          </div>
          {this.state.initiatives.map((initiative, idx) => (
            <div class="col-sm-4">
              <AppCard
                image={initiative.image}
                name={initiative.name}
                desc={initiative.desc}
                fb={initiative.fb}
                twitter={initiative.twitter}
                ig={initiative.ig}
                url={initiative.url}
                idx={idx}
                isAdmin={userID != "" && userID !== null}
              ></AppCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Initiatives;
