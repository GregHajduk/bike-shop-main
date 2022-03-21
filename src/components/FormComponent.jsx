import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  display: ${(props) => (props.page === "login" ? "none" : "block")};
  margin: 1rem 0.5rem 0 0;
  padding: 1rem 1.5rem;
  border: none;
`;

const FormComponent = ({ page }) => {
  return (
    <Form>
      <Input page={page} placeholder="name" />
      <Input page={page} placeholder="last name" />
      <Input placeholder="username" />
      <Input page={page} placeholder="email" />
      <Input placeholder="password" />
      <Input page={page} placeholder="confirm password" />
    </Form>
  );
};

export default FormComponent;
