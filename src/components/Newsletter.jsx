import styled from "styled-components";
import ActionButton from "./ActionButton";

const Container = styled.div`
  background-color: #0a0f16;
  color: white;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  &::first-letter {
    text-transform: capitalize;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40rem;
  margin-top: 1rem;
`;
const Input = styled.input`
  flex: 1;
  height: 100%;
  border: white;
  padding-left: 1rem;
  outline: none;
  color: grey;
  font-size: 1.125rem;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>newsletter</Title>
      <Desc>subscribe to receive discount vouchers from us</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <ActionButton btnName="send" />
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
