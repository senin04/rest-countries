import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import styled from "styled-components";
import FilterBox from "../components/FilterRegion";
import Countries from "../components/Countries";

// const StyledContainer = styled.div`
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   max-width: 1200px;
//   padding: 0 100px;

//   @media only screen and (max-width: 600px) {
//     padding: 0 20px;
//   }
// `;

const StyledTopContainer = styled.div`
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
`;

const AllCountries = ({data}) => {
  const [userInput, setUserInput] = useState("Search for a country...");
  const [activeRegion, setActiveRegion] = useState("all");

  const handleChangeInput = (value) => {
    if (value === "") {
      setUserInput("Search for a country...");
    } else {
      setUserInput(value);
    }
  };

  const handleChangeRegion = (e) => {
    setActiveRegion(e.target.innerText.toLowerCase());
  };

  return (
    <>
      <StyledTopContainer>
        <SearchBox onChangeInput={handleChangeInput} userInput={userInput} />
        <FilterBox onChangeRegion={handleChangeRegion} />
      </StyledTopContainer>
      <Countries data={data} userInput={userInput} activeRegion={activeRegion} />
    </>
  );
};

export default AllCountries;
