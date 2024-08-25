import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EnvelopeImage from "../assets/images/LetterBackBlack.png";
import Header from "../components/Header/Header";
import LetterFront from "../assets/images/LetterFrontBlack.svg";
import { axiosInstance } from "../api/axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/accounts/login/", {
        email,
        password,
      });
      console.log(response.data); // 로그인 성공 시 반환된 데이터
      const { access } = response.data; // 토큰 가져오기

      // 토큰을 localStorage에 저장
      localStorage.setItem("authToken", access);

      // axiosInstance의 기본 헤더에 Authorization 설정
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access}`;

      // 홈 화면으로 리디렉션
      navigate("/");
    } catch (err) {
      setError("로그인 실패! 이메일과 비밀번호를 확인해주세요.");
      console.error(err); // 오류 로그 출력
    }
  };

  return (
    <>
      <Header />
      <Envelope src={EnvelopeImage} alt="Envelope Theme" />
      <FormContainer>
        <FormHeader>로그인</FormHeader>
        <Form onSubmit={handleLogin}>
          <FormField
            label="아이디(이메일 형식)"
            placeholder="ex. davin00@naver.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="비밀번호"
            placeholder="8~12자리 영어, 숫자 조합"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <LoginButton type="submit">로그인하기</LoginButton>
        </Form>
      </FormContainer>
      <Envelope1 src={LetterFront} alt="Envelope Theme" />
    </>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 50%;
  height: 500px;
  margin: 8rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const FormHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2000;
  gap: 1.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1rem;
  font-family: "PreBold";
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const LoginButton = styled.button`
  padding: 15px;
  font-family: "PreBold";
  font-size: 1.2rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #333;
  }
`;

const FormField = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

const ErrorText = styled.p`
  color: red;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const Envelope = styled.img`
  position: absolute;
  bottom: 0rem; /* 폼의 하단에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  z-index: -1;
`;

const Envelope1 = styled.img`
  position: fixed;
  bottom: 0px; /* 폼의 하단에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
`;
