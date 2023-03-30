import React from "react";
import styled from "styled-components";
import BorderCountries from "./BorderCountries";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: space-around;
  max-width: 525px;

  @media only screen and (max-width: 1150px) {
    margin-left: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 7px;
  font-size: 14px;
  height: 140px;
  width: 500px;
  margin-top: 20px;

  @media only screen and (max-width: 700px) {
    height: auto;

    .marginer {
      margin-top: 40px;
    }
  }

  span {
    font-weight: 600;
  }
`;

const CountryDetailText = ({ country }) => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  let lang = Object.keys(name.nativeName);
  return (
    <Container>
      <div>
        <h2>{name.common}</h2>
        <Informations>
          <div>
            <span>Native Name: </span>
            {name.nativeName[lang[0]].official}
          </div>
          <div>
            <span>Population: </span>
            {population.toLocaleString()}
          </div>
          <div>
            <span>Region: </span>
            {region}
          </div>
          <div>
            <span>Sub Region: </span>
            {subregion}
          </div>
          <div>
            <span>Capital: </span>
            {capital}
          </div>
          <div className="marginer">
            <span>Top Level Domain: </span>
            {Object.values(tld).join(" ")}
          </div>
          <div>
            <span>Currencies: </span>
            {Object.keys(currencies).join(", ")}
          </div>
          <div>
            <span>Languages: </span>
            {Object.keys(languages).join(", ")}
          </div>
        </Informations>
      </div>

      <BorderCountries borders={borders} name={name} />
    </Container>
  );
};

export default CountryDetailText;
