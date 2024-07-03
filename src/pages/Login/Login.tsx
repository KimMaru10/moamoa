import React from "react";
import "./Login.scss";
import icon from "../../assets/images/icon.png";
const Login = () => {
  return (
    <div className="login">
      <div className="login-text">
        <p>로그인</p>
      </div>
      <div className="login-inner"></div>
      <img src={icon} alt="icon" className="login-img" />
      <div className="login-form">
        <form>
          <div className="login-form-id">
            <p>아이디</p>
            <input type="text" placeholder="아이디" />
          </div>
          <div className="login-from-pw">
            <p>비밀번호</p>
            <input type="text" placeholder="비밀번호" />
          </div>
          <div>
            <input type="submit" value="로그인" />
          </div>
          <div>
            <p>회원가입</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
