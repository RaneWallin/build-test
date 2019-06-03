import React, { Component } from "react";
import styled from "styled-components";

class SearchForm extends Component {
  state = {
    mls: "",
    type: "",
    location: "",
    error: ""
  };
  onInputChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { mls, type, location } = this.state;

    if (!mls && !type && !location)
      this.setState({ error: "Please add search criteria." });
    else this.setState({ error: "" });
  };
  render() {
    return (
      <FormWrapper>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={e => this.onInputChange(e)}
            value={this.state.name}
            name="mls"
            placeholder="Enter Address or MLS#: "
          />
          <input
            type="text"
            onChange={e => this.onInputChange(e)}
            value={this.state.type}
            name="type"
            placeholder="Property Type: "
          />
          <input
            type="text"
            onChange={e => this.onInputChange(e)}
            value={this.state.location}
            name="location"
            placeholder="Location: "
          />
          <button>SEARCH</button>
        </form>
        <div className="error">{this.state.error}</div>
      </FormWrapper>
    );
  }
}

export default SearchForm;

const FormWrapper = styled.div`
  position: absolute;
  top: 66%;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  .error {
    height: 20px;
    color: red;
    margin: 0.5em 0;
    font-weight: bolder;
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    input {
      margin-right: 0.3em;
      background-color: white;
      border: 1px solid black;
      padding: 0.6em;
      width: 15%;
      font-weight: bolder;
      &:first-of-type {
        width: 25%;
      }
    }
    button {
      background-color: #7d7d7d;
      border: none;
      color: white;
      width: 8%;
      font-weight: bolder;
    }
  }
`;
