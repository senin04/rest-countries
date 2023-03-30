import React, { useRef, useState } from "react";
import styled from "styled-components";
import RegionMenu from "./RegionMenu";
import useOnClickOutside from "../hooks/useOnclickOutside";
import FilterButton from "./FilterButton";

const Container = styled.div`
  width: 190px;
`;

const FilterRegion = ({ onChangeRegion }) => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useOnClickOutside(ref, () => {
    setOpenMenu(false);
    setTimeout(() => {
      setModalOpen(false);
    }, 200);
  });

  const handleOpenModal = () => {
    setOpenMenu(true);
    setModalOpen(true);
  };

  return (
    <Container>
      {isModalOpen ? (
        <div>
          <FilterButton
            isModalOpen={isModalOpen}
            onOpenModal={handleOpenModal}
          ></FilterButton>
          <RegionMenu
            openMenu={openMenu}
            ref={ref}
            onChangeRegion={onChangeRegion}
          />
        </div>
      ) : (
        <FilterButton
          isModalOpen={isModalOpen}
          onOpenModal={handleOpenModal}
        ></FilterButton>
      )}
    </Container>
  );
};

export default FilterRegion;
