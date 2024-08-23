import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";

const WritePage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
