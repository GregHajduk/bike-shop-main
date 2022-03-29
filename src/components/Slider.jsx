import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { bikeModels } from "../data";
import SliderItem from "./SliderItem";

const Container = styled.div`
  position: relative;
  background-color: #0a0f16;
  width: 100%;
  height: calc(100vh - 4rem - 1.7rem);
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  color: white;
  border-radius: 50%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 10;
  transition: 0.2s all ease;
  &:hover {
    background-color: #a5a5a5;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.current * -100}vw);
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrent(current > 0 ? current - 1 : bikeModels.length - 1);
    } else {
      setCurrent(current < bikeModels.length - 1 ? current + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeft />
        </Arrow>
        <Wrapper current={current}>
          <SliderItem bikeModels={bikeModels} />
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRight />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
