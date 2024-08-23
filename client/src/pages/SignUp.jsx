import React from "react";
import styled from "styled-components";
import EnvelopeImage from "../assets/images/signUpEnvelope.svg";
import Header from "../components/Header/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <FormHeader>회원가입</FormHeader>
        <Form>
          <InputWrapper>
            <Label>아이디(이메일 형식)</Label>
            <Input
              type="text"
              placeholder="기존에 이용하시는 이메일 주소를 정확히 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Input type="password" placeholder="8~12자리 영어, 숫자 조합" />
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <Label>이름</Label>
            <Input type="text" placeholder="실명을 입력해주세요." />
          </InputWrapper>
          <InputWrapper>
            <Label>학교</Label>
            <Input type="text" placeholder="ex. 서강대학교" />
          </InputWrapper>
          <InputWrapper>
            <Label>학과</Label>
            <Input type="text" placeholder="학과명을 정확히 입력해주세요." />
          </InputWrapper>
          <InputWrapper>
            <Label>학번</Label>
            <Input
              type="text"
              placeholder="학교에서 제공하는 공식 학번을 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <Label>학년</Label>
            <Input type="text" placeholder="ex. 3" />
          </InputWrapper>

          <SubmitButton>가입하기</SubmitButton>
        </Form>
      </FormContainer>
      <Envelope src={EnvelopeImage} alt="Envelope Theme" />
    </>
  );
};

export default SignUp;

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
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: "PreRegular";
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-family: "PreRegular";
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

  z-index: 100;

  &:hover {
    background-color: #333;
  }
`;

const Envelope = styled.img`
  position: absolute;
  bottom: -55rem; /* 폼의 하단에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  //z-index: 4; 이거 하면 가입하기 버튼이 안 눌린다..
`;
