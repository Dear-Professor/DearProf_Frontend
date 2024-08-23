import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pencil from "../assets/images/Pencil.svg";
import homeUI from "../assets/images/homeUI.svg";
import letterDummy from "../assets/images/letterDummy.svg";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <homeUI src={homeUI} alt="Envelope Theme" />
      <Title>Dear Prof.</Title>
      <Button>
        <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
        <SubmitButton onClick={() => navigate("/signup")}>
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
  font-size: 4rem;
  //text-align: center;
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정중앙에 위치하게 조정 */
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
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 10rem;

  &:hover {
    background-color: #333;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  font-family: "PreBold";
  font-size: 1rem;
  color: black;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  width: 10rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;
