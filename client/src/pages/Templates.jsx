import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";

const Templates = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Templates;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
