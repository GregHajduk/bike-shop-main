import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${(props) => (props.type === "dark" ? "black" : "#f0d74b")};
  color: ${(props) => (props.type === "dark" ? "#f0d74b" : "black")};
  padding: 1rem 2rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.type === "dark" ? "#505050" : "#fce87a"};
  }
`;
const LinkButton = ({ btnName, type }) => {
  return <Btn type={type}>{btnName}</Btn>;
};

export default LinkButton;
