import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styled, { keyframes } from "styled-components";
import LetterBack from "../assets/images/LetterBack.svg";
import LetterFront from "../assets/images/LetterFront.svg";
import Letter from "../assets/images/Letter.svg";

const Templates = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const isFormComplete = email.trim() !== "" && subject.trim() !== "";
  const [submitted, setSubmitted] = useState(false); // 버튼 클릭 상태 추가
  const isPurposeSelected = selectedPurpose !== "";
  const handleSubmit = () => {
    if (isFormComplete && isPurposeSelected) {
      setSubmitted(true); // 폼이 완료되면 상태 업데이트
    }
  };
  const handlePurposeClick = (purpose) => {
    setSelectedPurpose(selectedPurpose === purpose ? "" : purpose);
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
                  <Title>작성 목적을</Title>
                  <SubTitle>&nbsp;선택해주세요.</SubTitle>
                </TitleWrapper>
                <PurposeGrid>
                  {[
                    "수강 정정 신청",
                    "추천서 부탁",
                    "수업 내용 질문",
                    "출결 인정",
                  ].map((purpose) => (
                    <PurposeBox
                      key={purpose}
                      onClick={() => handlePurposeClick(purpose)}
                      isSelected={selectedPurpose === purpose}
                    >
                      <BoxTitle>{purpose}</BoxTitle>
                      <Description>
                        {purpose === "수강 정정 신청" ? (
                          <>
                            수강신청에 실패한 당신. <br /> 교수님께 빌어보세요!
                          </>
                        ) : purpose === "추천서 부탁" ? (
                          <>
                            추천서가 필요한 당신.
                            <br />
                            사유와 목적을 말씀드리고
                            <br />
                            교수님의 답변을 기다려봅시다!
                          </>
                        ) : purpose === "수업 내용 질문" ? (
                          <>
                            열혈 학생인 당신!
                            <br />
                            수업과 관련된 내용으로
                            <br />
                            교수님께 질문 폭격을 해보아요
                          </>
                        ) : purpose === "출결 인정" ? (
                          <>
                            지각, 결석, 공결 등 출결과 <br />
                            관련된 모든 것들을 처리해드릴게요.
                          </>
                        ) : null}
                      </Description>
                    </PurposeBox>
                  ))}
                </PurposeGrid>
                <CreateBtn
                  disabled={!isFormComplete || !isPurposeSelected}
                  onClick={handleSubmit}
                >
                  이메일 생성하기
                </CreateBtn>
              </>
            ) : (
              <SubmittedContent>
                <Title style={{ fontSize: "30px" }}>완성된 메일입니다!</Title>
                <Message>자유롭게 수정하신 후 전송하세요.</Message>
                <TextArea />
                <BtnWrapper>
                  <CreateBtn>이메일 저장하기</CreateBtn>
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
export default Templates;

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
  margin-top: 60px;
  z-index: 100 !important;
  pointer-events: auto;
  width: 16rem;
  height: 3.2rem;
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#1661c1")};
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
