import React, { useEffect, useState } from "react";
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
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      if (activeRegion !== "all") {
        const filtered = data.filter((country) => {
          return country.region.toLowerCase() === activeRegion;
        });
        setCountries(filtered);
      } else {
        setCountries(data);
      }
    }
  }, [data, activeRegion]);
  return (
    <>
      <StyledCountries>
        {userInput !== "Search for a country..."
          ? countries
              .filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(userInput.toLowerCase())
              )
              .map((filteredCountry, index) => (
                <StyledLink
                  key={index}
                  to={`/AllCountries/${filteredCountry.cca3}`}
                >
                  <Country country={filteredCountry} />
                </StyledLink>
              ))
          : countries.map((country, index) => (
              <StyledLink key={index} to={`/AllCountries/${country.cca3}`}>
                <Country country={country} />
              </StyledLink>
            ))}
      </StyledCountries>
    </>
  );
};

export default Countries;
