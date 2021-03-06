import React, { useState } from "react";
import styled from "styled-components";
import { urlFor } from "../client";
import formatCurrency from "format-currency";

const ProductContainer = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
`;
const ProductWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  max-width: 15rem;
  max-height: 100%;
  object-fit: contain;
  object-position: center center;
`;
const InfoItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    flex: 3;
  }
  &:not(:first-child) {
    justify-content: flex-end;
  }
`;
const Info = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.span``;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Increase = styled.button`
  padding: 0.25rem;
  cursor: pointer;
`;
const Decrease = styled.button`
  padding: 0.25rem;
  cursor: pointer;
`;
const Quantity = styled.span`
  margin: 0 0.75rem;
`;
const Size = styled.span`
  padding: 0.5rem;
`;
const Color = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: ${(props) => props.color === "white" && "1px solid grey"};
  background-color: ${(props) => props.color};
`;
const Price = styled.span`
  font-weight: 600;
`;

const ShoppingCartItem = ({ name, price, color, quantity, image, size }) => {
  const [checkoutQuantity, setCheckoutQuantity] = useState(quantity);

  const handleDecreaseQuantity = () => {
    if (checkoutQuantity > 1) setCheckoutQuantity(checkoutQuantity - 1);
  };

  const handleIncreaseQuantity = () => {
    if (checkoutQuantity < 5) setCheckoutQuantity(checkoutQuantity + 1);
  };
  let opts = { format: "%v %c", code: "GBP" };

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductDetails>
          {image && <Image src={urlFor(image)} />}
          <Info>
            <InfoItem>
              <Name>{name}</Name>
            </InfoItem>
            <InfoItem>
              <QuantityContainer>
                <Decrease onClick={handleDecreaseQuantity}>-</Decrease>
                <Quantity>{checkoutQuantity}</Quantity>
                <Increase onClick={handleIncreaseQuantity}>+</Increase>
              </QuantityContainer>
            </InfoItem>
            <InfoItem>
              <Color color={color} />
            </InfoItem>
            <InfoItem>
              <Size>{size}</Size>
            </InfoItem>
            <InfoItem>
              <Price>{formatCurrency(`${price}`, opts)}</Price>
            </InfoItem>
          </Info>
        </ProductDetails>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ShoppingCartItem;
