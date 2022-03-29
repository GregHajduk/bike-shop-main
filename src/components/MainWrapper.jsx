import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
const Container = styled.div`
  padding-top: 4rem;
`;

const MainWrapper = ({ children }) => {
  return (
    <Container>
      {children}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default MainWrapper;
