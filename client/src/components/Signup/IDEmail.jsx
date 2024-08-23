import React from "react";
import styled from "styled-components";

const IDEmail = () => {
  return (
    <Container>
      <Label>교수님 이메일</Label>
      <Input
        type="email"
        placeholder="수신자의 이메일 주소를 정확히 입력해주세요."
      />
      <Underline />
    </Container>
  );
};

export default IDEmail;

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  font-size: 16px;
  color: #666;
  border: none;
  outline: none;
  padding: 5px 0;
  &::placeholder {
    color: #999;
  }
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 4px;
`;
