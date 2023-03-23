import React from "react";
import styled from "styled-components";

const CountryBox = styled.div`
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  img {
    width: 250px;
    height: 150px;
  }
`;

const StyledTextBox = styled.div`
  padding: 0px 0px 35px 25px;
  div {
    font-weight: 600;
    margin: 3px 0;
    font-size: 14px;
  }
  span {
    font-weight: 300;
  }

  h4{
    margin: 14px 0;
  }
`;
const Country = ({ country }) => {
  const { name, population, region, capital, flags } = country;
  console.log(country);
  return (
    <CountryBox>
      <img src={flags.png} alt="" />
      <StyledTextBox>
        <h4>{name.common}</h4>
        <div>
          Population: <span>{population.toLocaleString()}</span>
        </div>
        <div>
          Region: <span>{region}</span>
        </div>
        <div>
          Capital: <span>{capital}</span>
        </div>
      </StyledTextBox>
    </CountryBox>
  );
};

export default Country;
