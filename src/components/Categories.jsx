import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  height: 60vh;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
 