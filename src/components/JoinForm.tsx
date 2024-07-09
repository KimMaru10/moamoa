import React from "react";
import styled from "styled-components";
const JoinFormWrraper = styled.form`
  width: 100%;
`;
const JoinFormItem = styled.div`
  margin-bottom: 20px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #7b7b7b;
    margin-bottom: 10px;
  }
  input[type="text"] {
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #bababa;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 16px;
  }
`;
const JoinForm = () => {
  return (
    <JoinFormWrraper>
      <JoinFormItem>
        <p>아이디</p>
        <input type="text" placeholder="아이디를 입력하세요" />
      </JoinFormItem>
      <JoinFormItem>
        <p>비밀번호</p>
        <input type="text" placeholder="비밀번호를 입력하세요" />
      </JoinFormItem>
      <JoinFormItem>
        <p>비밀번호 확인</p>
        <input type="text" placeholder="비밀번호를 다시 입력하세요" />
      </JoinFormItem>
      <JoinFormItem>
        <p>이메일</p>
        <input type="text" placeholder="이메일을 입력하세요" />
      </JoinFormItem>
    </JoinFormWrraper>
  );
};

export default JoinForm;
