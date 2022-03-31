import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { useParams } from "react-router";
import CartContext from "../contexts/CartContext";

const ProductContainer = styled.div`
  max-width: 65rem;
  min-height: 70vh;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
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
  font-size: 0.875rem;
  font-weight: 300;
  color: #4b4b4b;
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
const FiltersContainer = styled.div`
  width: 50%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Color = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const SelectSize = styled.select`
  padding: 0.3rem 0.5rem;
`;
const Option = styled.option`
  height: 100%;
`;

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const { items, addToCart } = useContext(CartContext);
  const [size, setSize] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };
  const { id } = useParams();

  const handleClick = () => {
    addToCart(name, price, quantity, color, image, size);
  };
  console.log(items);

  useEffect(() => {
    const singleProductQuery = `*[_type == "product" && _id == "${id}"]`;

    client.fetch(singleProductQuery).then((data) => {
      setProduct(data[0]);
    });
  }, [id]);

  const { name, description, price, color, image } = product;

  return (
    <>
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          {image && <Image src={urlFor(image)} />}
        </ImageContainer>
        <DescriptionContainer>
          <Name>{name}</Name>
          <Desc>{description}</Desc>
          <Price>£{price}</Price>
          <FiltersContainer>
            <AmountContainer>
              <Remove onClick={handleDecreaseQuantity}>-</Remove>
              <Amount>{quantity}</Amount>
              <Add onClick={handleIncreaseQuantity}>+</Add>
            </AmountContainer>
            <Color color={color} />
            <SelectSize onChange={(e) => setSize(e.target.value)} name="size">
              <Option disabled defaultValue>
                size
              </Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </SelectSize>
          </FiltersContainer>
          <BuyButton onClick={handleClick}>add to cart</BuyButton>
        </DescriptionContainer>
      </ProductContainer>
    </>
  );
};

export default SingleProduct;
