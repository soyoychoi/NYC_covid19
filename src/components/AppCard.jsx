import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Event } from "./Tracking";

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
      desc: this.props.desc,
      fb: this.props.fb,
      twitter: this.props.twitter,
      ig: this.props.ig,
      url: this.props.url,
      idx: this.props.idx,
    };
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  delete(event) {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete?")) {
      fetch("/deleteCard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: this.props.name, desc: this.props.desc }),
      }).then((response) => {
        window.location.reload();
      });
    }
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSave(event) {
    console.log(this.state);
    event.preventDefault();
    fetch("/updateCard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ card: this.state }),
    }).then(() => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div>
        <Card style={this.props.isAdmin ? { height: "auto" } : null}>
          <a href={this.props.isAdmin ? null : this.props.url}>
            <Card.Img variant="top" src={this.props.image} />
            {this.props.isAdmin ? (
              <div>
                <p>Image URL:</p>
                <input
                  type="text"
                  value={this.state.image}
                  onChange={this.handleChange("image")}
                ></input>
              </div>
            ) : null}
            <Card.Body>
              {this.props.isAdmin ? (
                <Card.Title style={{ textAlign: "left" }}>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                  ></input>
                </Card.Title>
              ) : (
                <Card.Title style={{ textAlign: "left" }}>
                  {this.props.name}
                </Card.Title>
              )}
              <Card.Text style={{ textAlign: "left" }}>
                {this.props.isAdmin ? (
                  <div>
                    <textarea
                      value={this.state.desc}
                      style={{ width: "100%" }}
                      rows="5"
                      onChange={this.handleChange("desc")}
                    ></textarea>
                    <input
                      value={this.state.fb}
                      style={{ width: "100%" }}
                      onChange={this.handleChange("fb")}
                    ></input>
                    <p>Enter Facebook </p>
                    <input
                      value={this.state.twitter}
                      style={{ width: "100%" }}
                      onChange={this.handleChange("twitter")}
                    ></input>
                    <p>Enter Twitter </p>
                    <input
                      value={this.state.ig}
                      style={{ width: "100%" }}
                      onChange={this.handleChange("ig")}
                    ></input>
                    <p>Enter Instagram</p>
                    <input
                      value={this.state.url}
                      style={{ width: "100%" }}
                      onChange={this.handleChange("url")}
                    ></input>
                    <p>Enter Website URL</p>
                  </div>
                ) : (
                  this.props.desc
                )}
              </Card.Text>
              <Button
                href={this.props.url}
                onClick={() =>
                  Event(
                    this.props.name,
                    "Clicked on find out more",
                    "Initiative Page"
                  )
                }
                className="app-card-btn"
              >
                Find out more
              </Button>
              {this.props.isAdmin ? (
                <div style={{ textAlign: "left" }}>
                  <Button className="admin-btn" onClick={this.delete}>
                    Delete
                  </Button>
                  <Button onClick={this.handleSave} className="admin-btn">
                    Save
                  </Button>
                </div>
              ) : null}
            </Card.Body>
            <div className="cardFooter">
              <span>
                {this.props.fb == "" ? (
                  <a
                    href=""
                    style={{ color: "#5F5F5F" }}
                    class="fa fa-lg fa-facebook"
                  ></a>
                ) : (
                  <a
                    href={this.props.fb}
                    onClick={() =>
                      Event(
                        this.props.name,
                        "Clicked on social media",
                        "Initiative Page"
                      )
                    }
                    class="fa fa-lg fa-facebook"
                  ></a>
                )}
              </span>
              <span>
                {this.props.twitter == "" ? (
                  <a
                    href=""
                    style={{ color: "#5F5F5F" }}
                    class="fa fa-lg fa-twitter"
                  ></a>
                ) : (
                  <a
                    href={`https://twitter.com/${this.props.twitter}`}
                    onClick={() =>
                      Event(
                        this.props.name,
                        "Clicked on social media",
                        "Initiative Page"
                      )
                    }
                    class="fa fa-lg fa-twitter"
                  ></a>
                )}
              </span>
              <span>
                {this.props.ig == "" ? (
                  <a
                    href=""
                    style={{ color: "#5F5F5F" }}
                    class="fa fa-lg fa-instagram"
                  ></a>
                ) : (
                  <a
                    href={this.props.ig}
                    onClick={() =>
                      Event(
                        this.props.name,
                        "Clicked on social media",
                        "Initiative Page"
                      )
                    }
                    class="fa fa-lg fa-instagram"
                  ></a>
                )}
              </span>
            </div>
          </a>
        </Card>
      </div>
    );
  }
}

export default AppCard;
