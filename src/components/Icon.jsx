import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.75;
  }
`;
const Icon = ({ children, color, backgroundColor, margin }) => {
  return (
    <Container margin={margin} color={color} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Icon;
