import styled from "styled-components";
import ActionButton from "../components/ActionButton";
import FormComponent from "../components/FormComponent";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
    center/cover no-repeat;
`;
const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 2rem;
`;
const Title = styled.h2``;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>login</Title>
        <FormComponent page="login" />
        <ActionButton btnName="login" />
      </Wrapper>
    </Container>
  );
};

export default Login;
