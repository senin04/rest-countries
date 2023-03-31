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
    setTimeout(() => {
      setOpenMenu(false);
    }, 400);

    setModalOpen(false);
  });

  const handleOpenModal = () => {
    setOpenMenu(true);
    setModalOpen(true);
  };

  return (
    <Container>
      <FilterButton
        isModalOpen={isModalOpen}
        onOpenModal={handleOpenModal}
      ></FilterButton>
      {isModalOpen && (
        <div>
          <RegionMenu
            activeRegion={activeRegion}
            openMenu={openMenu}
            ref={ref}
            onChangeRegion={onChangeRegion}
          />
        </div>
      )}
    </Container>
  );
};

export default FilterRegion;
