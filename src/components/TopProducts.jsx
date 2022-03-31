import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopProductsItem from "./TopProductsItem";

import { urlFor, client } from "../client";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;
const TopProducts = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const topProductsQuery = `*[_type == "product" && best == true]`;
    const categoryQuery = `*[_type == "product" && category == "${category}"]`;
    client.fetch(category ? categoryQuery : topProductsQuery).then((data) => {
      setProducts(data);
    });
  }, [category]);

  useEffect(() => {
    if (category && filters.color === "all") {
      setFilteredProducts(products);
    } else {
      category &&
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    }
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "lowest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "highest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {category
        ? filteredProducts.map((product) => (
            <TopProductsItem
              urlFor={urlFor}
              product={product}
              key={product._id}
            />
          ))
        : products
            .slice(0, 8)
            .map((product) => (
              <TopProductsItem
                urlFor={urlFor}
                product={product}
                key={product._id}
              />
            ))}
    </Container>
  );
};

export default TopProducts;
