import React, { Component } from "react";
import styled from "styled-components";

import Logo from "../assets/images/logo.png";
import DropItem from "./DropItem";

class Header extends Component {
  handleClick = e => {
    alert("I've been clicked!");
  };
  render() {
    return (
      <>
        <NavWrapper>
          <a href="#!" className="brand-logo">
            <LogoImage src={Logo} alt="Elite Pacific Poperties" />
          </a>
          <NavItems>
            <a onClick={this.handleClick} className="el-nav-link" href="#">
              Featured Listings
            </a>
            <a onClick={this.handleClick} className="el-nav-link" href="#">
              Island Guide
            </a>
            <a onClick={this.handleClick} className="el-nav-link" href="#">
              Blog
            </a>
            <DropItem
              onClick={this.handleClick}
              className="el-nav-link"
              text="Company"
            >
              <a href="#">Our Story</a>
              <div className="separator" />
              <a href="#">Our Team</a>
              <div className="separator" />
              <a href="#">In the Media</a>
            </DropItem>
            <a onClick={this.handleClick} className="el-nav-link" href="#">
              Contact Us
            </a>
          </NavItems>
        </NavWrapper>
      </>
    );
  }
}

export default Header;

const LogoImage = styled.img`
  width: 100px;
  margin: 0.5em 3em;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: stretch;
  margin-right: 2em;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  background-color: white;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-self: center;
  line-height: 50px;
  .el-nav-link {
    color: black;
    margin-right: 2em;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const DropDown = styled.div`
  .drop-items {
    opacity: 1;
  }
`;
