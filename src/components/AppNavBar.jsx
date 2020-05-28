import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LoginBtn from "./LoginBtn";

const AppNavBar = () => {
  const logOut = () => {
    sessionStorage.setItem("userID", "");
    alert("You have successfully logged out.");
    window.location.href = "/";
  };

  return (
    <div class="row">
      <Navbar expand="lg" variant="dark">
        <div class="col" id="nav-left">
          <Navbar.Brand href="/">
            <img id="logo" src="logo.png"></img>
          </Navbar.Brand>
        </div>
        <div class="col" id="nav-right" style={{ textAlign: "right" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">
                <span>HOME</span>
                <div id="underline"></div>
              </Nav.Link>
              <Nav.Link href="/about">
                <span>ABOUT</span>
                <div id="underline"></div>
              </Nav.Link>
              <Nav.Link href="/initiatives">
                <span>INITIATIVES</span>
                <div id="underline"></div>
              </Nav.Link>
              <Nav.Link href="/support">
                <span>SUPPORT</span>
                <div id="underline"></div>
              </Nav.Link>
              <Nav.Link href="/contactus">
                <span>CONTACT US</span>
                <div id="underline"></div>
              </Nav.Link>
              {sessionStorage.getItem("userID") == "" ||
              sessionStorage.getItem("userID") == null ? (
                <Nav.Link>
                  <LoginBtn></LoginBtn>
                </Nav.Link>
              ) : (
                <Nav.Link onClick={logOut}>
                  <span>LOG OUT</span>
                  <div id="underline"></div>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
