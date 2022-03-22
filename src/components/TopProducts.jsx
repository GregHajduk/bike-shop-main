import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopProductsItem from "./TopProductsItem";

import { urlFor, client } from "../client";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;
const TopProducts = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const topProductsQuery = `*[_type == "product" && best == true]`;
    const categoryQuery = `*[_type == "product" && category == "${category}"]`;
    client.fetch(category ? categoryQuery : topProductsQuery).then((data) => {
      setProducts(data);
    });
  }, [category]);


  return (
    <Container>
      {products.map((product) => (
        <TopProductsItem urlFor={urlFor} product={product} key={product._id} />
      ))}
    </Container>
  );
};

export default TopProducts;
