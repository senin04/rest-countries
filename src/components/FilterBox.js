import React from "react";
import styled from "styled-components";
import { ShadowBox } from "./SearchBox";

const Text = styled.div`
    font-size: 14px;
    text-align: center;
    margin-right: 40px;
`;

const Arrow = styled.button`
  background-color: hsl(209, 23%, 22%);
  border: none;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  padding: 0;
`;

const FilterBox = () => {
  return (
    <ShadowBox>
      <Text>Filter by Region</Text>
      <Arrow><ion-icon name="chevron-up"></ion-icon></Arrow>
      
    </ShadowBox>
  );
};

export default FilterBox;
