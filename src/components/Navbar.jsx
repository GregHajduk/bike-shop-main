import React from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Promo from "./Promo";
import Logo from "./Logo";

const Container = styled.div`
  height: 4rem;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  color: darkslategrey;
  font-weight: bold;
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
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
const Navbar = () => {
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
          <Center>
            <Logo />
          </Center>
          <Right>
            <LoginItem>sign in</LoginItem>
            <LoginItem>log in</LoginItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
