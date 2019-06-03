import React, { Component } from "react";
import styled from "styled-components";

class DropItem extends Component {
  state = {
    dropShowing: false
  };
  toggleDropShowing = () => {
    this.setState({ dropShowing: !this.state.dropShowing });
    alert("I've been clicked!");
  };
  render() {
    return (
      <DropMenu
        onClick={this.toggleDropShowing}
        dropShowing={this.state.dropShowing}
      >
        {this.props.text}
        <div className="drop-menu">
          {this.state.dropShowing && this.props.children}
        </div>
      </DropMenu>
    );
  }
}

export default DropItem;

const DropMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 2em;
  padding: 0 1em;
  cursor: pointer;
  text-transform: uppercase;
  .drop-menu {
    position: absolute;
    margin-top: 3.3em;
    display: flex;
    flex-direction: column;
    background-color: rgba(196, 198, 197, 0.8);
    color: black;

    color: black;
    width: 150px;
    padding: 0 1em;
    text-transform: uppercase;
    a {
      text-align: center;
      color: black;
      border-bottom: 1px solid black;
      &:last-child {
        border: none;
      }
    }
  }

  background-color: ${props => (props.dropShowing ? "#c4c6c5" : "none")};
`;
