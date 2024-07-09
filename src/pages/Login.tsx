import React, { useEffect, useState } from "react";
import icon from "../assets/images/icon.png";
import styled from "styled-components";
import { initVh } from "../utils/setVh";
import { Link } from "react-router-dom";
import { postLogin } from "../apis/axios";

const LoginWrapper = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100); /* 뷰포트 높이를 설정합니다. */
  background-color: #db3f1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25% 5%;
`;
const IconImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 10%;
`;
const LoginForm = styled.form`
  width: 90%;
  input {
    width: 100%;
    height: 48px;
    padding: 2%;
  }
`;

const InputWrapper = styled.div`
  border-radius: 7px;
  width: 100%;
  overflow: hidden;
`;
const SubmitButton = styled.button`
  margin: 5% 0;
  width: 100%;
  height: 48px;
  background-color: #542307;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border-radius: 4px;
`;
const LoginMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 10% 0;
  p,
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 17px;
    color: #ececec;
  }
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const cleanup = initVh();
    return cleanup;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postLogin({ id, password });
      alert("로그인 성공");
      // 로그인 성공 시 추가적인 작업을 수행할 수 있습니다.
    } catch (error) {
      alert(
        (error as any).response
          ? (error as any).response.data.message
          : "로그인 실패"
      );
    }
  };
  return (
    <LoginWrapper>
      <IconImg src={icon} alt="icon" width={"150px"} height={"150px"} />
      <LoginForm onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        <SubmitButton>로그인</SubmitButton>
      </LoginForm>
      <LoginMenu>
        <Link to="/">비밀번호 찾기</Link>
        <p> | </p>
        <Link to="/join">회원가입</Link>
      </LoginMenu>
    </LoginWrapper>
  );
};

export default Login;
