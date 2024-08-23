import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pencil from "../assets/images/Pencil.svg";
import homeUI from "../assets/images/homeUI.svg";
import EnvelopeFrontGreen from "../assets/images/envelopeFrontGreen.svg";
import EnvelopeFront from "../assets/images/envelopeFrontBlue.svg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <homeUI src={homeUI} alt="Envelope Theme" />
      <Title>Dear Prof.</Title>
      <Navigator>
        <CheckButton onClick={() => navigate("/write")}>
          <img src={EnvelopeFrontGreen} alt="Envelope" />
          <CheckName>메일 교정하기</CheckName>
        </CheckButton>
        <AImailButton onClick={() => navigate("/templates")}>
          <img src={EnvelopeFront} alt="Envelope" />
          <AIName>간편 메일 작성하기</AIName>
        </AImailButton>
      </Navigator>
      <Button>
        <LoginButton onClick={() => navigate("/writes")}>로그인</LoginButton>
        <SubmitButton onClick={() => navigate("/templates")}>
          회원가입
        </SubmitButton>
      </Button>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  background-image: url(${homeUI});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  cursor: url(${pencil}) 12 12, auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.button`
  font-family: "PreBold";
  font-size: 4.3rem;
  //text-align: center;
  margin: 0;
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정중앙에 위치하게 조정 */
`;

const Navigator = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 3rem;
`;

const CheckButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 100px;
    height: auto;
  }

  &:hover img {
    opacity: 0.8;
  }
`;

const CheckName = styled.div`
  text-align: center;
  font-family: "PreRegular";
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;

const AIName = styled.div`
  text-align: center;
  font-family: "PreRegular";
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;

const AImailButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 97px;
    height: auto;
  }

  &:hover img {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 8%;
  right: 11%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginButton = styled.button`
  padding: 0.8rem;
  font-family: "PreBold";
  font-size: 0.8rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 9rem;

  &:hover {
    background-color: #333;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  font-family: "PreBold";
  font-size: 0.8rem;
  color: black;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  width: 9rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;
