import React, { useState } from "react";
import styled from "styled-components";
import EnvelopeImage from "../assets/images/signUpEnvelope.png";

const FormField = ({ label, placeholder }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};

const SignUp = () => {
  return (
    <>
      <FormContainer>
        <FormHeader>회원가입</FormHeader>
        <Form>
          <FormField
            label="아이디(이메일 형식)"
            placeholder="기존에 이용하시는 이메일 주소를 정확히 입력해주세요."
          />
          <FormField label="비밀번호" placeholder="8~12자리 영어, 숫자 조합" />
          <FormField
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
          />
          <FormField label="이름" placeholder="실명을 입력해주세요." />
          <FormField label="학교" placeholder="ex. 서강대학교" />
          <FormField label="학과" placeholder="학과명을 정확히 입력해주세요." />
          <FormField
            label="학번"
            placeholder="학교에서 제공하는 공식 학번을 입력해주세요."
          />
          <FormField label="학년" placeholder="ex. 3" />

          <SubmitButton>가입하기</SubmitButton>
        </Form>
        <Envelope src={EnvelopeImage} alt="Envelope Theme" />
      </FormContainer>
    </>
  );
};

export default SignUp;

const Envelope = styled.img`
  position: absolute;
  bottom: -10rem; /* 폼의 하단에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  z-index: -1;
`;

const FormContainer = styled.div`
  width: 85%;
  margin: 8rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
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

const SubmitButton = styled.button`
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
