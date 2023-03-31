import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import styled from "styled-components";
import CountryDetailText from "../components/CountryDetailText";

const CountryDetail = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  text-align: start;

  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    margin-top: 70px;
  }

  @media only screen and (max-width: 7000px) {
    margin-bottom: 40px;
  }

  img {
    width: 550px;
    height: 350px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 1150px) {
      margin-bottom: 40px;
    }

    @media only screen and (max-width: 7000px) {
      height: auto;
      width: auto;
    }
  }
`;

const CountryDetails = ({ data }) => {
  const { id } = useParams();
  const country = data.find((country) => country.cca3 === id);

  return (
    <>
      <BackButton />
      {country ? (
        <CountryDetail>
          <img src={country.flags.png} alt="" />
          <CountryDetailText country={country} />
        </CountryDetail>
      ) : (
        <div>Country not found!</div>
      )}
    </>
  );
};

export default CountryDetails;
