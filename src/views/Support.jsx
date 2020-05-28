import React, { Component } from "react";
import { PageView, initGA } from "../components/Tracking";

class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      website: "",
      title: "",
      desc: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    initGA(process.env.REACT_APP_GA_ID);
    PageView();
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.first === "" ||
      this.state.last === "" ||
      this.state.email === "" ||
      this.state.website === "" ||
      this.state.title === "" ||
      this.state.desc === ""
    ) {
      alert("Please enter in all the fields! ");
    } else {
      const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
      this.sendFeedback(templateId, {
        message_html: `<p>First Name: ${this.state.first}, Last Name: ${this.state.last},  Email: ${this.state.email}, Website: ${this.state.website}, Initiative's Title: ${this.state.title},  Description: ${this.state.desc}</p>`,
        from_name: `${this.state.first} ${this.state.last}`,
        reply_to: "no-reply",
        to_name: "NYU vs. Covid-19",
      });
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        alert("Thank you for your interest. We will get back to you soon.");
        this.setState({
          first: "",
          last: "",
          email: "",
          website: "",
          title: "",
          desc: "",
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <div class="row" id="form-row">
        <div class="col-sm-12">
          <h2>Collaborate With Us</h2>
          <p>
            If you like to collaborate with us, please tell us more about your
            initiative.
          </p>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="exampleInputPassword1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputText1"
              value={this.state.first}
              onChange={this.handleChange("first")}
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputText1"
              value={this.state.last}
              onChange={this.handleChange("last")}
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange("email")}
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Website</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputText1"
              value={this.state.website}
              onChange={this.handleChange("website")}
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Initiative's Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputText1"
              value={this.state.title}
              onChange={this.handleChange("title")}
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
              value={this.state.desc}
              onChange={this.handleChange("desc")}
            ></textarea>
          </div>
          <button
            type="submit"
            id="form-submit-btn"
            class="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
        <div class="col-sm-6">
          <img src="support3.jpg"></img>
          <h5 style={{ fontSize: "0.05em", textAlign: "left" }}>
            By Deanna Tsang. Submitted for United Nations Global Call Out To
            Creatives - help stop the spread of COVID-19
          </h5>
        </div>
      </div>
    );
  }
}

export default Support;
