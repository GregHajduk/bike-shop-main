import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  height: 50vh;
  margin: 2rem;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;
const Name = styled.h4`
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;
const Desc = styled.p`
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
const Price = styled.span``;
const AmountContainer = styled.div``;
const Add = styled.button``;
const Remove = styled.button``;
const Amount = styled.span``;

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <DescriptionContainer>
          <Name>product</Name>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            explicabo voluptate nemo laborum error commodi, cumque unde soluta?
            Enim doloremque aspernatur reprehenderit aliquid nemo aliquam
            reiciendis, est sed. Quidem, qui.
          </Desc>
          <Price>10$</Price>
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
