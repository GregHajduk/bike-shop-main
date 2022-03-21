import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #f0d74b;
  color: #000000;
  border: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #fff5c5;
  }
`;
const ActionButton = ({ btnName }) => {
  return <Btn>{btnName}</Btn>;
};

export default ActionButton;
