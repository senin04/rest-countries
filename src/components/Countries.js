import React, { useEffect, useState } from "react";
import Country from "./Country";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import useFetch from "../hooks/useFetch";

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

const Error = styled.div`
  color: red;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

const Countries = ({ userInput, activeRegion }) => {
  const { data, errorMessage, isLoading } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flags"
  );

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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <StyledCountries>
          {userInput !== "Search for a country..."
            ? countries
                .filter((country) =>
                  country.name.common
                    .toLowerCase()
                    .includes(userInput.toLowerCase())
                )
                .map((filteredCountry, index) => (
                  <Country key={index} country={filteredCountry} />
                ))
            : countries.map((country, index) => (
                <Country key={index} country={country} />
              ))}
        </StyledCountries>
      )}
      {errorMessage && <Error>{errorMessage}</Error>}
    </>
  );
};

export default Countries;
