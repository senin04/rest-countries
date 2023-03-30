import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

const StyledText = styled.div`
  font-weight: 600;
  padding-left: 5px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  transition: 0.2s;
  color: ${({ theme }) => theme.text};
  &:hover {
    transform: scale(1.1);
  }

  ion-icon {
    width: 13px;
  }
`;

const DarkMode = ({ themeToggler }) => {
  const theme = useTheme();
  return (
    <Button onClick={themeToggler}>
      <ion-icon name={theme.moon}></ion-icon>
      <StyledText>Dark Mode</StyledText>
    </Button>
  );
};

export default DarkMode;
