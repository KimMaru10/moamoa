import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/images/icon.png";
import styled from "styled-components";
import { initVh } from "../utils/setVh"; // initVh 함수를 가져옵니다.

const StartWrapper = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100); /* 뷰포트 높이를 설정합니다. */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #db3f1e;
  img {
    width: 150px;
    height: 150px;
  }
`;

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = initVh();
    return cleanup; // 컴포넌트 언마운트 시 cleanup 함수 실행
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    };
  }, [navigate]);

  return (
    <StartWrapper>
      <img src={icon} alt="icon" className="start_icon" />
    </StartWrapper>
  );
};

export default Start;
