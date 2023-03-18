import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";


const Button = styled.button`
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  ion-icon {
    width: 13px;
  }
`;

const DarkMode = ({themeToggler}) => {
  const theme = useTheme()
  return (
    
    <Container>
      <ion-icon name={theme.moon}></ion-icon>
      <Button onClick={themeToggler}>Dark Mode</Button>
      
    </Container>
  );
};

export default DarkMode;
