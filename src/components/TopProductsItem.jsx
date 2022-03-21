import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "@material-ui/icons";
import LinkButton from "./LinkButton";

const Container = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 25%;
  height: 50vh;
  border: 1px solid #f5fcfd;
`;
const Image = styled.img`
  height: 60%;
  object-fit: contain;
  object-position: center center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d2eaf1;
  color: darkslategray;
  cursor: pointer;
`;
const Name = styled.h4`
  font-size: 1.25rem;
  text-transform: capitalize;
`;
const Price = styled.p`
  font-size: 1.25rem;
  color: #868686;
  margin-bottom: 1rem;
`;
const TopProductsItem = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <IconContainer>
        <ShoppingCart />
      </IconContainer>
      <InfoContainer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
        <LinkButton btnName="read more" />
      </InfoContainer>
    </Container>
  );
};

export default TopProductsItem;
