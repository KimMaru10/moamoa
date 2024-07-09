import React from "react";
import styled from "styled-components";
import circleCheckIcon from "../assets/images/circle-check-regular.png";
const JoinSuccessWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    margin-bottom: 40px;
  }
  h2 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 20px;
  }
  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #8d8d8d;
  }
`;
const JoinSuccess = () => {
  return (
    <JoinSuccessWrapper>
      <img src={circleCheckIcon} alt="Circle Check Icon" />
      <h2>회원가입이 완료되었습니다.</h2>
      <p>지금 바로 MOAMOA에서 혜택을 제공 받을 수 있습니다.</p>
    </JoinSuccessWrapper>
  );
};

export default JoinSuccess;
