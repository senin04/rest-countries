import React from "react";
import styled from "styled-components";

const ShadowBox = styled.div`
  background-color: ${({ theme }) => theme.elements};
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

const Arrow = styled.button`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  cursor: pointer;
  padding: 0;

  ion-icon {
    color: ${({ theme }) => theme.text};
    transform: ${({ isModalOpen }) =>
      isModalOpen ? "rotate(180deg) !important" : "rotate(0)"};
    transition: transform 0.25s;
  }
`;

const FilterButton = ({ isModalOpen, onOpenModal }) => {
  return (
    <ShadowBox onClick={onOpenModal}>
      <Text>Filter by Region</Text>
      <Arrow isModalOpen={isModalOpen}>
        <ion-icon name={"chevron-down"}></ion-icon>
      </Arrow>
    </ShadowBox>
  );
};

export default FilterButton;
