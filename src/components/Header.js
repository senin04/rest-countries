import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";

const Container = styled.header`
  background-color: ${({ theme }) => theme.elements};
  padding: 0 100px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const SecondContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ themeToggler }) => {
  return (
    <Container>
      <SecondContainer>
        <h3>Where in the world?</h3>
        <DarkMode themeToggler={themeToggler} />
      </SecondContainer>
    </Container>
  );
};

export default Header;
