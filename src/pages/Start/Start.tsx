import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.scss";
import icon from "../../assets/images/icon.png";

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    };
  }, [navigate]);

  return (
    <div className="start">
      <img src={icon} alt="icon" className="start_icon" />
    </div>
  );
};

export default Start;
