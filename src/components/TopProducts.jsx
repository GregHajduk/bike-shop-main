import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopProductsItem from "./TopProductsItem";
import { topproducts } from "../data";

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.5rem;
`;
const TopProducts = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
  
  }, [category]);
  console.log(category, filters, sort);
  return (
    <Container>
      {topproducts.map((product) => (
        <TopProductsItem product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default TopProducts;
