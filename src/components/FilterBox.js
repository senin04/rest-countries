import React from "react";
import styled from "styled-components";
import RegionMenu from "./RegionMenu";

const Container = styled.div`
  width: 190px;
`;

const ShadowBox = styled.div`
  background-color: ${({ theme }) => theme.elements};
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  font-size: 14px;
`;

const Arrow = styled.button`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  cursor: pointer;
  padding: 0;

  ion-icon {
    color: ${({ theme }) => theme.text};
  }
`;

const FilterBox = ({onChangeRegion}) => {
  return (
    <Container>
      <ShadowBox>
        <Text>Filter by Region</Text>
        <Arrow>
          <ion-icon name="chevron-up"></ion-icon>
        </Arrow>
      </ShadowBox>
      <RegionMenu onChangeRegion={onChangeRegion}/>
    </Container>
  );
};

export default FilterBox;
