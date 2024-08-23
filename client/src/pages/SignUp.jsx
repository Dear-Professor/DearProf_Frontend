import React from "react";
import styled from "styled-components";
import LetterBack from "../assets/images/LetterBackBlack.png";
import Header from "../components/Header/Header";
import LetterFront from "../assets/images/LetterFrontBlack.svg";

const SignUp = () => {
  return (
    <>
      <Header />
      <Envelope src={LetterBack} alt="Envelope Theme" />
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
            <SubmitButton>가입하기</SubmitButton>
          </InputWrapper>
          <Envelope1 src={LetterFront} alt="Envelope Theme" />
        </Form>
      </FormContainer>
    </>
  );
};

export default SignUp;

const FormContainer = styled.div`
  width: 60%;
  height: 100%;
  margin: 8rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const FormHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
  font-family: "GmarketSansBold";
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  gap: 1.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: "PreRegular";
  font-weight: bold;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 21.563rem;
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
  width: 21.563rem;
  margin-left: auto;
  margin-right: auto;

  z-index: 1;

  &:hover {
    background-color: #333;
  }
`;

const Envelope = styled.img`
  position: fixed;
  bottom: -8rem; /* 폼의 하단에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  z-index: 1;
`;
const Envelope1 = styled.img`
  position: fixed;
  bottom: -7rem; /* 폼의 하단에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
`;
