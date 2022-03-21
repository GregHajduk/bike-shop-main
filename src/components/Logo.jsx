import React from "react";
import styled from "styled-components";

const LogoName = styled.h2`
  font-weight: bold;
  font-size: ${(props) => (props.size === "small" ? "1.5rem" : "2.5rem")};
  text-transform: uppercase;
  cursor: pointer;
`;
const Logo = ({ size }) => {
  return <LogoName size={size}>.biikes</LogoName>;
};

export default Logo;
