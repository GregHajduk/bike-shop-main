import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { useLocation } from "react-router";

const ProductContainer = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  min-height: 50vh;
`;
const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  object-fit: contain;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 2;
`;
const Name = styled.h2`
  margin-bottom: 1rem;
  text-transform: capitalize;
`;
const Desc = styled.p`
  margin-bottom: 2rem;
  font-size: 0.875;
  font-weight: 300;
`;
const BuyButton = styled.button`
  margin: 1rem auto 0 0;
  background-color: #f0d74b;
  color: #000000;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 3px;
  cursor: pointer;
  border: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #fff5c5;
  }
`;
const Price = styled.span`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
const AmountContainer = styled.div``;
const Add = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
const Remove = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
const Amount = styled.span`
  margin: 0 0.5rem;
`;

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const singleProductQuery = `*[_type == "product" && _id == "${id}"]`;
    client.fetch(singleProductQuery).then((data) => {
      setProduct(data[0]);
    });
  }, [id]);

  const { name, description, price } = product;
  return (
    <>
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          <Image src={urlFor(product.image)} />
        </ImageContainer>
        <DescriptionContainer>
          <Name>{name}</Name>
          <Desc>{description}</Desc>
          <Price>${price}</Price>
          <AmountContainer>
            <Remove>-</Remove>
            <Amount>0</Amount>
            <Add>+</Add>
          </AmountContainer>
          <BuyButton>add to cart</BuyButton>
        </DescriptionContainer>
      </ProductContainer>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleProduct;
