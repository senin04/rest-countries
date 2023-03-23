import React, { useEffect, useState } from "react";
import Country from "./Country";
import styled from "styled-components";

const StyledCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log("Error loading data");
      });
  }, []);

  // console.log(countries[1])

  return (
    <StyledContainer>
      <StyledCountries>
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </StyledCountries>
    </StyledContainer>
  );
};

export default Countries;
