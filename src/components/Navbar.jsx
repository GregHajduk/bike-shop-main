import React, { useContext } from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Promo from "./Promo";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  color: darkslategrey;
  font-weight: bold;
  z-index: 100;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
`;
const Input = styled.input`
  flex: 1;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const Center = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const LoginItem = styled.span`
  text-transform: capitalize;
  margin-right: 2rem;
  cursor: pointer;
`;
const Cart = styled(Link)``;
const Navbar = () => {
  const { items } = useContext(CartContext);
  return (
    <>
      <Promo />
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search />
            </SearchContainer>
          </Left>
          <Center to="/">
            <Logo />
          </Center>
          <Right>
            <LoginItem>sign in</LoginItem>
            <LoginItem>log in</LoginItem>
            <Cart to="/shoppingcart">
              <Badge
                badgeContent={items.length}
                color="primary"
                style={{ cursor: "pointer" }}
              >
                <ShoppingCart />
              </Badge>
            </Cart>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
