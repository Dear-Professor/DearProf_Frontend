import React from "react";
import styled from "styled-components";

const FormField = ({ label, placeholder }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};

export default FormField;

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
  margin-bottom: 1%;
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
