import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Container = styled.div`
  height: 1.7rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PromoText = styled.p`
  font-size: 0.8rem;
  color: white;
`;
const Promo = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      {display && (
        <Container>
          <CloseIcon
            style={{
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              marginRight: "1rem",
            }}
            onClick={()=> setDisplay(false)}
          />
          <PromoText>Free shipping for over 100 GBP spent.</PromoText>
        </Container>
      )}
    </>
  );
};

export default Promo;
