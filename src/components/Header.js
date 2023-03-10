import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";

const Container = styled.header`
  background-color: hsl(209, 23%, 22%);
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Container>
      <h3>Where in the world?</h3>
      <DarkMode />
    </Container>
  );
};

export default Header;
