import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import User from "../assets/images/user.svg";
import Cart from "../assets/images/cart.svg";

function Navbar(props) {
  return (
    <div className="container">
      <div className="navbar d-flex justify-content-between">
        <img src={Logo} />
        <div className="nav">
          <Nav className={`nav_bar justify-content-end`}>
            <Nav.Item>
              <Nav.Link to="/watches" style={{ color: "black" }}>
                Watches
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/eyewear" style={{ color: "black" }}>
                Eyewear
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/accessories" style={{ color: "black" }}>
                Accessories
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/news" style={{ color: "black" }}>
                News
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="user_area d-flex">
          <img src={Search} />

          <Nav.Item>
            <Nav.Link to="/news" style={{ color: "black" }}>
              <img src={User} /> Log In
            </Nav.Link>
          </Nav.Item>
          <div
            style={{
              width: "43px",
              height: "43px",
              background: "#F1DDC9",
              borderRadius: "50%",
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={Cart} style={{color:"#F7F6F4"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
