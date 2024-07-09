import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../redux/joinSlice"; //슬라이스를 가져옴
import { RootState } from "../redux/store"; //store의 타입을 가져옴
import Accordion from "../components/Accordion";
import JoinState from "../components/JoinState";
import JoinForm from "../components/JoinForm";
import JoinSuccess from "../components/JoinSuccess";
import { useNavigate } from "react-router-dom";

const JoinWrapper = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 25% 5% 5% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinTitle = styled.div`
  width: 70%;
  height: 10%;
  border-bottom: 1px solid #cecece;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: #6f6f6f;
  }
`;

interface JoinButtonProps {
  backgroundColor: string;
  borderColor: string;
}
const JoinButton = styled.button<JoinButtonProps>`
  box-sizing: border-box;
  margin: 5px 0;
  width: 100%;
  height: 48px;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  p {
    color: ${(props) => props.color};
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`;

const Join = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //상태 데이터 새로고침하는 역할
  const currentStep = useSelector((state: RootState) => state.join.currentStep); // 상태 데이터 가져옴

  const handleNext = () => {
    dispatch(setStep(currentStep + 1));
  };

  const handlePrev = () => {
    dispatch(setStep(currentStep - 1));
  };

  const handleLogin = () => {
    navigate("/login");
    dispatch(setStep(1));
  };

  let stepContent = null;

  switch (currentStep) {
    case 1:
      stepContent = <Accordion />;
      break;
    case 2:
      stepContent = <JoinForm />;
      break;
    case 3:
      stepContent = <JoinSuccess />;
      break;
    default:
      stepContent = <Accordion />;
  }

  return (
    <JoinWrapper>
      <JoinTitle>
        <p>회원가입</p>
      </JoinTitle>
      <JoinState />
      {stepContent}
      {currentStep < 3 ? (
        <>
          <JoinButton
            onClick={handleNext}
            backgroundColor="#E74C3C"
            borderColor="#E74C3C"
            color="white"
          >
            <p>다음</p>
          </JoinButton>

          <JoinButton
            onClick={handlePrev}
            backgroundColor="#FFFFF"
            borderColor="#C4C4C5"
            color="#C4C4C5"
          >
            <p>취소</p>
          </JoinButton>
        </>
      ) : (
        <JoinButton
          onClick={handleLogin}
          backgroundColor="#E74C3C"
          borderColor="#E74C3C"
          color="white"
        >
          <p>로그인</p>
        </JoinButton>
      )}
    </JoinWrapper>
  );
};

export default Join;
