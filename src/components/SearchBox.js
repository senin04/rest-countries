import React from "react";
import styled from "styled-components";

export const ShadowBox = styled.div`
  background-color: ${({ theme }) => theme.elements};
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-basis: 400px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchButton = styled.div`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  color: ${({ theme }) => theme.text};
  margin-right: 15px;
  display: flex;

  ion-icon {
    font-size: 18px;
  }
`;

const TextInput = styled.input`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  text-decoration: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const SearchBox = ({ userInput, onChangeInput }) => {
  return (
    <ShadowBox>
      <SearchButton>
        <ion-icon name="search"></ion-icon>
      </SearchButton>
      <TextInput
        type="text"
        onChange={(e) => onChangeInput(e.target.value)}
        placeholder={userInput}
      ></TextInput>
    </ShadowBox>
  );
};

export default SearchBox;
