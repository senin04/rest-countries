import React from "react";
import SearchBox from "./SearchBox";
import styled from "styled-components";
import FilterBox from "./FilterBox";
import Countries from "./Countries";

const StyledContainer = styled.div`
  margin: 0 100px;
`;

const StyledTopContainer = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;

`;

const Body = () => {
  return (
    <StyledContainer>
      <StyledTopContainer>
        <SearchBox />
        <FilterBox />
      </StyledTopContainer>
      <Countries />
    </StyledContainer>
  );
};

export default Body;
