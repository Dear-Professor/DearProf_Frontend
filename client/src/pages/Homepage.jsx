import React from "react";
import styled from "styled-components";
import pencil from "../assets/images/Pencil.svg";

const Homepage = () => {
  return <Container></Container>;
};

export default Homepage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor:
    url(${pencil}) 12 12,
    auto;
`;
