import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
`;

const ShadowBox = styled.button`
  background-color: ${({ theme }) => theme.elements};
  padding: 4px 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border: none;
  width: 60px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const BorderCountries = ({ borders}) => {
  return (
    <Container>
      <div>Border Countries: </div>
      {Object.values(borders).map((border) => (
        <StyledLink key={border} to={`/AllCountries/${border}`}>
          <ShadowBox>{border}</ShadowBox>
        </StyledLink>
      ))}
    </Container>
  );
};

export default BorderCountries;
