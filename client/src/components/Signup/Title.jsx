import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Container>
      <Header>회원가입</Header>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  //width: 100%;
  //height: 100%;
`;

const Header = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #333;

  display: flex;
  justify-content: center;
  height: 200px;

  padding: 15px;
  text-align: center;

  //margin-top: 50px; /* 위쪽 여백 추가 */
`;
