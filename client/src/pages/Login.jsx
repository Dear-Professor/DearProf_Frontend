import React from "react";
import styled from "styled-components";
import EnvelopeImage from "../assets/images/signUpEnvelope.png";

const LoginForm = () => {
  return (
    <>
      <FormContainer>
        <FormHeader>로그인</FormHeader>
        <Form>
          <FormField
            label="아이디(이메일 형식)"
            placeholder="ex. davin00@naver.com"
          />
          <FormField label="비밀번호" placeholder="8~12자리 영어, 숫자 조합" />

          <LoginButton>로그인하기</LoginButton>
        </Form>
      </FormContainer>
      <Envelope src={EnvelopeImage} alt="Envelope Theme" />
    </>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 85%;
  margin: 8rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  //border-radius: 8px;
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
  gap: 1.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 14px;
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
  font-size: 16px;
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

const FormField = ({ label, placeholder }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};

const Envelope = styled.img`
  width: 100%;
`;
