import React from "react";
import Country from "./Country";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  column-gap: 20px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};

  @media only screen and (max-width: 736px) {
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const Countries = ({ userInput, activeRegion, data }) => {
  const filteredByRegion = data.filter((country) => {
    if (activeRegion !== "all") {
      return country.region.toLowerCase() === activeRegion;
    } else {
      return country;
    }
  });

  const filteredBySearch = filteredByRegion.filter((country) => {
    if (userInput !== "Search for a country...") {
      return country.name.common
        .toLowerCase()
        .includes(userInput.toLowerCase());
    } else {
      return country;
    }
  });

  return (
    <StyledCountries>
      {filteredBySearch.map((country, index) => (
        <StyledLink key={index} to={`/AllCountries/${country.cca3}`}>
          <Country country={country} />
        </StyledLink>
      ))}
    </StyledCountries>
  );
};

export default Countries;
