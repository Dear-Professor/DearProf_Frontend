import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styled, { keyframes } from "styled-components";
import LetterBack from "../assets/images/LetterBack.svg";
import LetterFront from "../assets/images/LetterFront.svg";
import Letter from "../assets/images/Letter.svg";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../api/axios";

const Templates = () => {
  const { id } = useParams(); // URL의 {id}를 가져옴
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFormComplete = email.trim() !== "" && subject.trim() !== "";
  const isPurposeSelected = selectedPurpose !== "";
  useEffect(() => {
    // 페이지 로드 시 API 호출로 기존 데이터 가져오기
    const fetchTemplateData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // 토큰을 가져옴
        const response = await axiosInstance.get(`mails/selectOptions`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          const { prof_email, subject } = response.data;
          setEmail(prof_email);
          setSubject(subject);
        }
      } catch (error) {
        console.error("Failed to fetch template data:", error);
      }
    };

    fetchTemplateData();
  }, [id]);
  const handleSubmit = async () => {
    if (isFormComplete && isPurposeSelected) {
      setSubmitted(true);
      // 여기서 API를 호출하여 템플릿을 생성할 수 있음
      try {
        const response = await sendTemplateRequest(
          email,
          subject,
          selectedPurpose
        );
        if (response.status === "success") {
          console.log("Generated Template:", response.data.template);
        } else {
          console.error("Error:", response.data.message);
        }
      } catch (error) {
        console.error("API Request failed:", error);
      }
    }
  };

  const sendTemplateRequest = async (title, prof_email, subject, purpose) => {
    try {
      const token = localStorage.getItem("authToken"); // 토큰을 가져옴
      const response = await axiosInstance.post(
        "mails/selectOptions/",
        {
          title,
          prof_email,
          subject,
          purpose,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.data; // API 응답 반환
    } catch (error) {
      console.error("API Request failed:", error);
      throw error;
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
                    "장학금 관련",
                    "기타",
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
                        ) : purpose === "장학금 관련" ? (
                          <>
                            장학금이 절실한 당신.
                            <br />
                            장학금 관련 메일이 필요하신가요?
                          </>
                        ) : (
                          <>
                            꼭 들어가야 하는 내용을
                            <br />
                            단어 단어로 끊어서 작성해주시면 <br /> 자동으로
                            생성해드릴게요.
                          </>
                        )}
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
                  <Link to="/templates-check">
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

export default Templates;

// 나머지 스타일드 컴포넌트는 기존 코드와 동일

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
