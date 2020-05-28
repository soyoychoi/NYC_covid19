import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class LoginBtn extends Component {
  constructor(props) {
    super(props);
  }

  responseGoogle = (response) => {
    console.log(response);
    if (response["Tt"]["Du"] === process.env.REACT_APP_EMAIL) {
      sessionStorage.setItem("userID", response["Tt"]["Du"]);
      alert("You've successfuly logged in as admin.");
      window.location.href = "/";
    } else {
      alert("Sorry, you need admin credentials to log in. Please try again.");
      sessionStorage.setItem("userID", "");
      window.location.href = "/";
    }
    console.log(sessionStorage.getItem("userID"));
  };

  failureGoogle = (response) => {
    console.log(response);
    alert("Sorry, you need admin credentials to log in. Please try again");
    sessionStorage.setItem("userID", "");
    window.location.href = "/";
  };

  render() {
    const clientId = process.env.REACT_APP_CLIENT_ID;

    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="LOGIN"
          render={(renderProps) => (
            <div>
              <span
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                LOGIN
              </span>
              <div id="underline"></div>
            </div>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.failureGoogle}
          cookiePolicy={"single_host_origin"}
          className="google-login"
        ></GoogleLogin>
      </div>
    );
  }
}

export default LoginBtn;
