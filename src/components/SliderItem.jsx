import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0 1rem;
  flex: 3;
`;
const Image = styled.img`
  object-fit: contain;
  object-position: center center;
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 0 1rem;
`;

const ModelName = styled.h2`
  color: #f0d74b;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`;
const ModelDesc = styled.p`
  width: 75%;
  color: #fffdf1;
  margin-bottom: 3rem;
  font-size: 1.3rem;
  font-weight: 200;
`;
const SliderItem = ({ bikeModels }) => {
  return (
    <>
      {bikeModels.map((model) => (
        <Slide key={model.id}>
          <ImageContainer>
            <Image src={model.img} alt={model.name} />
          </ImageContainer>
          <InfoContainer>
            <ModelName>{model.name}</ModelName>
            <ModelDesc>{model.desc}</ModelDesc>
            <LinkButton btnName="buy now" />
          </InfoContainer>
        </Slide>
      ))}
    </>
  );
};

export default SliderItem;
