import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "@material-ui/icons";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  padding: 2rem;
  border: 1px solid #dbdbdb;
`;
const Image = styled.img`
  height: 50%;
  object-fit: contain;
  object-position: center center;
`;
const InfoContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 1rem;
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
  text-transform: capitalize;
  margin-bottom: 0.25rem;
`;
const Desc = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`;
const Price = styled.p`
  font-size: 1.25rem;
  color: #585858;
`;
const TopProductsItem = ({ product, urlFor }) => {
  const { image, name, description, price, _id } = product;
  return (
    <Container>
      <Image src={urlFor(image)} />
      <IconContainer>
        <ShoppingCart />
      </IconContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Desc>{description.substring(0, 100)} ...</Desc>
        <Price>${price}</Price>
      </InfoContainer>
      <Link  to={`/singleproduct/${_id}`}>
        <ActionButton btnName="read more" />
      </Link>
    </Container>
  )
};

export default TopProductsItem;
