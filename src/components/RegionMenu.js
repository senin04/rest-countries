import React from "react";
import styled, { keyframes } from "styled-components";

const slidein = keyframes`
from {
  transform: translatex(-100%);
}

to {
  transform: translatey(0%);
}
`;
const slideout = keyframes`
from {
  transform: translatey(0%);
}

to {
  transform: translatex(200%);
}
`;

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
  animation: ${slidein} 0.2s linear;

  /* &.closing {
    animation: ${slideout} 0.2s linear;
  } */
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

const RegionMenu = React.forwardRef(({ onChangeRegion, openMenu }, ref) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <ShadowBox className={openMenu ? "" : "closing"} ref={ref}>
      {regions.map((region) => (
        <Region key={region} onClick={onChangeRegion}>
          {region}
        </Region>
      ))}
    </ShadowBox>
  );
});

export default RegionMenu;
