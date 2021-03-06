import Navbar from "../components/Navbar";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";

const Container = styled.div`
  padding: 2rem 5rem;
  max-width: 75rem;
  margin: 0 auto;
`;
const Title = styled.h2`
  margin-bottom: 2rem;
  text-transform: capitalize;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ItemsAmount = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
  margin-bottom: 1rem;
`;
const Amount = styled.span``;
const OrderContainer = styled.div`
  margin-top: 2rem;
`;
const SummaryContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;
const SummaryTitle = styled.h3`
  text-transform: uppercase;
  align-self: flex-end;
  width: 30%;
  font-weight: 300;
  margin-bottom: 1rem;
`;
const TotalPriceContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  width: 30%;
  font-size: 1.25rem;
  font-weight: 600;
`;
const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const DeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const SubtotalTitle = styled.span``;
const DeliveryTitle = styled.span``;
const TotalTitle = styled.span``;
const Subtotal = styled.span``;
const Delivery = styled.span``;
const Total = styled.span``;
const Hr = styled.div`
  border-top: 0.5px solid #f8f8f8;
`;

const ShoppingCart = () => {
  const { items } = useContext(CartContext);
  let opts = { format: '%v %c', code: 'USD' }

  const itemPrice = items.map((item) => {
    return item.price * item.quantity;
  });
  console.log(itemPrice);
  let subTotal = itemPrice.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

  let delivery;

  if (subTotal >= 100 || subTotal === 0) {
    delivery = 0;
  } else {
    delivery = 9.5;
  }

  const total = subTotal + delivery;
  console.log(items);
  return (
    <>
      <Navbar />
      <Container>
        <Title>your bag</Title>
        <ItemsAmount>
          Items (<Amount>{items.length}</Amount>)
        </ItemsAmount>
        <Hr />
        <OrderContainer>
          {items.map((item) => {
            const {name, price, color, size, image, quantity} = item
            return (
              <>
                <ShoppingCartItem
                  name={name}
                  price={price}
                  color={color}
                  size={size}
                  image={image}
                  quantity={quantity}
                />
                <Hr />
              </>
            );
          })}
        </OrderContainer>
        <SummaryContainer>
          <SummaryTitle>summary</SummaryTitle>
          <TotalPriceContainer>
            <SubtotalContainer>
              <SubtotalTitle>subtotal:</SubtotalTitle>
              <Subtotal>??{subTotal}</Subtotal>
            </SubtotalContainer>
            <DeliveryContainer>
              <DeliveryTitle>delivery:</DeliveryTitle>
              <Delivery>??{delivery}</Delivery>
            </DeliveryContainer>
            <TotalContainer>
              <TotalTitle>total:</TotalTitle>
              <Total>??{total}</Total>
            </TotalContainer>
            <Buttons>
              <LinkButton btnName="continue shopping" />
              <LinkButton type="dark" btnName="check out" />
            </Buttons>
          </TotalPriceContainer>
        </SummaryContainer>
      </Container>
    </>
  );
};

export default ShoppingCart;
