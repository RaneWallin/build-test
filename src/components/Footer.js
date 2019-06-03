import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="nav-links">
        <a href={"#"}>Newsletter</a>
        <a href={"#"}>Site Map</a>
        <a href={"#"}>Opportunities</a>
        <a href={"#"}>Tech Support</a>
      </div>
      <div className="social">
        <FaFacebook />
        <FaTwitter style={{ marginLeft: ".5em" }} />
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  bottom: 0;
  width: 100%;
  background-color: #363636;
  height: 25px;
  margin: 0;
  padding: 0.3em 0;
  a {
    text-transform: uppercase;
    color: #d7d7d7;
    text-decoration: none;
    &:not(:last-of-type):after {
      content: "|";
      margin: 0 0.5em;
    }
  }
  .nav-links {
    margin-left: 3em;
  }
  .social {
    color: #d7d7d7;
    margin-left: 3em;
    font-size: 1.5em;
  }
`;
