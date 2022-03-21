import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
const Title = styled.h2`
  color: white;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
`;
const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <TitleContainer>
        <Title>{category.title}</Title>
        <Link to={`/products/${category.category}`}>
          <LinkButton btnName="shop now" />
        </Link>
      </TitleContainer>
    </Container>
  );
};

export default CategoryItem;
