import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";

const Container = styled.header`
  background-color: ${({ theme }) => theme.elements};
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:0 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const Header = ({themeToggler}) => {
  return (
    <Container>
      <h3>Where in the world?</h3>
      <DarkMode themeToggler={themeToggler} />
      
    </Container>
  );
};

export default Header;
