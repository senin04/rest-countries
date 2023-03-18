import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";

const Container = styled.header`
  background-color: ${({ theme }) => theme.elements};
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
