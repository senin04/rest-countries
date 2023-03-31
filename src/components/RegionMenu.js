import React from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
from {
  transform: scaleY(0);
}

to {
  transform: scaleY(1);
}
`;
const slideOut = keyframes`
from {
  transform: scaleY(1);
}

to {
  transform: scaleY(0);
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
  animation: ${slideIn} 0.2s linear;
  transform-origin: top;

  &.closing {
    animation: ${slideOut} 0.2s linear;
  }
`;

const Region = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  background-color: transparent;
  border: none;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

const RegionMenu = React.forwardRef(
  ({ onChangeRegion, openMenu, activeRegion }, ref) => {
    const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

    return (
      <ShadowBox className={openMenu ? "opening" : "closing"} ref={ref}>
        {regions.map((region) => {
          return (
            <Region
              key={region}
              onClick={() => onChangeRegion(region)}
              isActive={region.toLocaleLowerCase() === activeRegion}
            >
              {region}
            </Region>
          );
        })}
      </ShadowBox>
    );
  }
);

export default RegionMenu;
