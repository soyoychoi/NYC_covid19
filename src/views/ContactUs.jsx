import React, { Component } from "react";
import { PageView, initGA } from "../components/Tracking";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
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
      this.state.message === ""
    ) {
      alert("Please enter in all the fields! ");
    } else {
      const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
      this.sendFeedback(templateId, {
        message_html: `<p>First Name: ${this.state.first}, Last Name: ${this.state.last},  Email: ${this.state.email}, Message: ${this.state.message}</p>`,
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
        console.log("Email successfully sent!");
        this.setState({
          first: "",
          last: "",
          email: "",
          message: "",
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
          <h2>Contact Us</h2>
          <p>Thank you for your interest!</p>
          <p>
            Please email us at{" "}
            <a href="mailto:nyusomvcovid19@gmail.com">
              nyusomvcovid19@gmail.com.
            </a>
          </p>
        </div>
        <div class="col-sm-6">
          <form>
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
            <div class="form-group" id="mobile-form">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                value={this.state.message}
                style={{ backgroundColor: "#C8C6D7" }}
                onChange={this.handleChange("message")}
              ></textarea>
            </div>
            <button
              id="form-submit-btn"
              type="submit"
              onClick={this.handleSubmit}
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm-6">
          <div class="form-group" id="browser-form">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="8"
              value={this.state.message}
              style={{ backgroundColor: "#C8C6D7" }}
              onChange={this.handleChange("message")}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
