import React, { useRef, useState } from "react";
import styled from "styled-components";
import RegionMenu from "./RegionMenu";
import useOnClickOutside from "../hooks/useOnclickOutside";
import FilterButton from "./FilterButton";

const Container = styled.div`
  width: 190px;
`;

const FilterRegion = ({ onChangeRegion, activeRegion }) => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useOnClickOutside(ref, () => {
    setOpenMenu(false);
    setModalOpen(false);
  });

  const handleOpenModal = () => {
    setOpenMenu(!openMenu);
    setModalOpen(!isModalOpen);
  };

  console.log(openMenu);
  return (
    <Container ref={ref}>
      <FilterButton
        isModalOpen={isModalOpen}
        onOpenModal={handleOpenModal}
      ></FilterButton>
      {isModalOpen && (
        <div>
          <RegionMenu
            activeRegion={activeRegion}
            openMenu={openMenu}
            onChangeRegion={onChangeRegion}
          ></RegionMenu>
        </div>
      )}
    </Container>
  );
};

export default FilterRegion;
