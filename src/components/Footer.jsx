import styled from "styled-components";
import Icon from "./Icon";
import Logo from "./Logo";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Home,
  PhoneAndroid,
  Email,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  margin: 2rem 0;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
`;
const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  padding-right: 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Desc = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  margin-top: 1rem;
  line-height: 2;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Title = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;
const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const ContactText = styled.span`
  margin-left: 0.5rem;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>Social Links</Title>
        <IconsContainer>
          <Icon
            margin="0 0.5rem 0 0"
            color="white"
            backgroundColor="dodgerBlue"
          >
            <Facebook />
          </Icon>
          <Icon margin="0 0.5rem 0 0" color="white" backgroundColor="tomato">
            <Pinterest />
          </Icon>
          <Icon margin="0 0.5rem 0 0" color="white" backgroundColor="hotpink">
            <Instagram />
          </Icon>
          <Icon color="white" backgroundColor="deepskyblue">
            <Twitter />
          </Icon>
        </IconsContainer>
      </Left>
      <Center>
        <Logo size="small" />
        <Desc>
          Whether you're a beginner rider or seasoned racer, our online bike
          shop has everything you need, including the latest electric bikes,
          mountain bikes and road bikes. Take the road less travelled and hit
          the dirt on a gravel bike, or take to the start line on a cyclocross
          bike and if you’re just looking for a reliable run-around check out
          our hybrid and city bikes.
        </Desc>
      </Center>
      <Right>
        <Title>contact</Title>
        <ContactItemContainer>
          <Icon backgroundColor="#f0d74b">
            <Home />
          </Icon>
          <ContactText>Harrogate</ContactText>
        </ContactItemContainer>
        <ContactItemContainer>
          <Icon backgroundColor="#f0d74b">
            <Email />
          </Icon>
          <ContactText>biikes@co.uk</ContactText>
        </ContactItemContainer>
        <ContactItemContainer>
          <Icon backgroundColor="#f0d74b">
            <PhoneAndroid />
          </Icon>
          <ContactText>696888777</ContactText>
        </ContactItemContainer>
      </Right>
    </Container>
  );
};

export default Footer;
