import React from "react";
import styled from "styled-components";

import Background from "../assets/images/background.jpg";
import SearchForm from "./SearchForm";

const Body = () => {
  return (
    <BodyWrapper>
      <BodyImage src={Background} />
      <SearchForm />
    </BodyWrapper>
  );
};

export default Body;

const BodyWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const BodyImage = styled.img`
  width: 100%;
`;
