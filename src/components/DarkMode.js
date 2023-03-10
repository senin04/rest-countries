import React from "react";
import styled from "styled-components";


const Button = styled.button`
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  ion-icon {
    width: 13px;
  }
`;

const DarkMode = () => {
  return (
    <Container>
      <ion-icon name="moon"></ion-icon>
      <Button>Dark Mode</Button>
    </Container>
  );
};

export default DarkMode;
