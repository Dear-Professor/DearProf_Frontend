import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styled, { keyframes } from "styled-components";
import LetterBack from "../assets/images/LetterBackGreen.svg";
import LetterFront from "../assets/images/LetterFrontGreen.svg";
import Letter from "../assets/images/LetterGreen.png";
import { Link } from "react-router-dom";

const WritePage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [draft, setDraft] = useState(""); // 초안 상태 추가
  const isFormComplete =
    email.trim() !== "" && subject.trim() !== "" && draft.trim() !== "";
  const [submitted, setSubmitted] = useState(false); // 버튼 클릭 상태 추가
  const handleSubmit = () => {
    if (isFormComplete) {
      setSubmitted(true); // 폼이 완료되면 상태 업데이트
    }
  };
  return (
    <Container>
      <Header />
      <BackGround>
        <LetterBackContainer />
        <LetterContainer>
          <ContentWrapper>
            {!submitted ? (
              <>
                <TitleWrapper style={{ marginTop: "40px" }}>
                  <Title>교수님의 정보를</Title>
                  <SubTitle>&nbsp;작성해주세요.</SubTitle>
                </TitleWrapper>
                <InfoContainer>
                  <InfoWrapper>
                    <InputInfo>교수님 이메일</InputInfo>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="수신자의 이메일 주소를 정확히 기입해주세요."
                    />
                  </InfoWrapper>
                  <InfoWrapper>
                    <InputInfo>과목명</InputInfo>
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="ex. 경제학입문, 목 234"
                    />
                  </InfoWrapper>
                </InfoContainer>
                <TitleWrapper>
                  <Title>메일의 초안을</Title>
                  <SubTitle>&nbsp;작성해주세요.</SubTitle>
                </TitleWrapper>
                <TextArea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  style={{ height: "250px" }}
                />
                <BtnWrapper>
                  <CreateBtn disabled={!isFormComplete} onClick={handleSubmit}>
                    이메일 저장하기
                  </CreateBtn>
                </BtnWrapper>
              </>
            ) : (
              <SubmittedContent>
                <Title style={{ fontSize: "30px" }}>완성된 메일입니다!</Title>
                <Message>자유롭게 수정하신 후 전송하세요.</Message>
                <TextArea />
                <BtnWrapper>
                  <Link to="/spellChecker-check">
                    <CreateBtn>이메일 저장하기</CreateBtn>
                  </Link>
                </BtnWrapper>
              </SubmittedContent>
            )}
          </ContentWrapper>
        </LetterContainer>
        <LetterFrontContainer />
      </BackGround>
    </Container>
  );
};
export default WritePage;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(5%);
  }
`;

const slideDown = keyframes`
  100% {
    transform: translateY(80%);
  }
  0% {
    transform: translateY(100%);
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* 전체 화면 높이 */
`;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 중앙 정렬 */
  width: 100%;
  height: 100%;
  margin-top: 200px;
  position: relative;
`;

const LetterBackContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 62rem;
  height: 100rem; /* 편지지의 높이 */
  background: url(${LetterBack});
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${slideDown} 2s ease-out forwards;
  z-index: 1; /* 편지지 뒤에 위치 */
`;

const LetterContainer = styled.div`
  position: relative;
  bottom: 0; /* 봉투 안에서 편지지가 올라오는 애니메이션 */
  width: 900px;
  height: 1000px; /* 편지지의 높이 */
  background: url(${Letter});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2; /* 편지지 뒤와 앞 사이에 위치 */
  animation: ${slideUp} 2.5s ease-out forwards;
`;

const LetterFrontContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 62rem;
  height: 77.875rem; /* 편지지의 높이 */
  background: url(${LetterFront});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 3; /* 편지지 앞에 위치 */
  animation: ${slideDown} 2s ease-out forwards;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-self: left;
  text-align: left;
  margin-bottom: 3rem;
`;

const Title = styled.span`
  font-family: "GmarketSansBold";
  font-size: 1.5rem;
`;

const SubTitle = styled.span`
  font-family: "GmarketSansMedium";
  font-size: 1.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 3.375rem;
  margin-bottom: 6rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.688rem;
  padding-bottom: 0.688rem;
  border-bottom: 1px solid black;
`;

const InputInfo = styled.span`
  font-family: "PreVariable";
  font-size: 0.75rem;
`;

const Input = styled.input`
  color: #666666;
  width: 21.563rem;
  border: none;
  font-family: "PreVariable";
`;

const PurposeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const PurposeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  width: 12rem;
  font-size: 12px;
  height: 6rem;
  background-color: #f6f6f6;
  font-family: "PreRegular";
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#d1e7fd" : "#f6f6f6")};
`;

const CreateBtn = styled.button`
  margin-top: 90px;
  z-index: 100 !important;
  pointer-events: auto;
  width: 16rem;
  height: 3.2rem;
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#9DC400")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: white;
`;

const BoxTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding-bottom: 5px;
  padding-left: 10px;
  font-family: "PreBold";
`;

const Description = styled.span`
  font-size: 12px;
  text-align: left;
  padding-left: 10px;
  font-weight: 400;
`;
const SubmittedContent = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
`;

const Message = styled.p`
  font-size: 1.5rem;
  padding-top: 10px;
  font-family: "PreRegular";
`;
const TextArea = styled.textarea`
  background-attachment: local;
  border: none;
  resize: none;
  width: 650px;
  overflow-y: auto;
  outline: none;
  height: 400px;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #ccc 30px,
      #ccc 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
