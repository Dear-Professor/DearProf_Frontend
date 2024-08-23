import React, { useState } from "react";
import styled from "styled-components";
import EnvelopeFrontImage from "../assets/images/envelopeFrontGreen.svg";
import EnvelopeBackImage from "../assets/images/EnvelopeBackImageGreen.png";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

const SpellCheckerCheck = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false); // 플립 상태 관리
  const [ment, setMent] = useState({
    mentOne: "메일 작성을 완료했습니다.",
    mentTwo: "최종 전송을 위해 메일을 클릭해주세요!",
  });

  const handleFlip = () => {
    if (!flipped) {
      // 이미 플립된 상태라면 동작하지 않음
      setFlipped(true); // 플립 상태를 true로 설정
      setMent({
        mentOne: "메일 전송 완료", // 클릭 시 변경될 텍스트
        mentTwo: "눈 감고도 메일을 보낼 그 날까지 파이팅!^^",
      });
    }
  };

  return (
    <>
      <Header />
      <BackButton onClick={() => navigate(-1)}>{`<`}</BackButton>
      <MentContainer>
        <MentOne>{ment.mentOne}</MentOne>
        <MentTwo>{ment.mentTwo}</MentTwo>
      </MentContainer>
      <FlipCard onClick={handleFlip}>
        <FlipCardInner flipped={flipped}>
          <FlipCardFront>
            <Envelope src={EnvelopeFrontImage} alt="Envelope Front" />
          </FlipCardFront>
          <FlipCardBack>
            <Envelope src={EnvelopeBackImage} alt="Envelope Back" />
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </>
  );
};

export default SpellCheckerCheck;

const MentContainer = styled.div`
  width: 85%;
  margin: 8% auto 0;
  position: relative;
  z-index: 2;
`;

const MentOne = styled.div`
  text-align: center;
  font-family: "PreBold";
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

const MentTwo = styled.div`
  text-align: center;
  font-family: "PreRegular";
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 50%;
  margin: 0 auto;
  perspective: 1000px;
  margin: 5% auto;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
const Envelope = styled.img`
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  z-index: -1;
`;
const BackButton = styled.button`
  position: absolute;
  top: 65%;
  left: 6%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  z-index: 3;

  &:hover {
    color: #333;
  }
`;

const Menu = styled.span`
  font-size: 10px;
  color: black;
  font-weight: normal;
`;
