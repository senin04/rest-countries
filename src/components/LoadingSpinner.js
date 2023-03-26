import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #383636;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <StyledSpinner></StyledSpinner>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
