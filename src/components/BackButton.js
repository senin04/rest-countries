import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShadowBox = styled.button`
  background-color: ${({ theme }) => theme.elements};
  padding: 12px 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border: none;

  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin-top: 80px;
  width: 120px;

  @media only screen and (max-width: 1150px) {
    margin-top: 40px;
  }
`;

const BackButton = () => {
  return (
    <StyledLink to={`/`}>
      <ShadowBox>
        <ion-icon name="arrow-back"></ion-icon>
        <div>Back</div>
      </ShadowBox>
    </StyledLink>
  );
};

export default BackButton;
