import React from "react";
import styled from "styled-components";

const ShadowBox = styled.div`
  background-color: ${({ theme }) => theme.elements};
  margin-top: 5px;
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 1;
  width: 150px;
`;

const Region = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  background-color: transparent;
  border: none;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const RegionMenu = ({ onChangeRegion }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <ShadowBox>
      {regions.map((region) => (
        <Region key={region} onClick={onChangeRegion}>
          {region}
        </Region>
      ))}
    </ShadowBox>
  );
};

export default RegionMenu;
