import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const ShadowBox = styled.div`
  background-color: ${({ theme }) => theme.elements};
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  margin-right: 15px;

  ion-icon {
    font-size: 18px;
  }
`;

const TextInput = styled.input`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  text-decoration: none;
  outline: none;
  width: 400px;

  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const SearchBox = () => {
  const [userInput, setUserInput] = useState("Search for a country...");
  return (
    <ShadowBox>
      <SearchButton type="submit">
        <ion-icon name="search"></ion-icon>
      </SearchButton>
      <TextInput type="text" placeholder={userInput}></TextInput>
    </ShadowBox>
  );
};

export default SearchBox;
