import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const JoinStateWrapper = styled.div`
  display: flex;
  margin: 5% 0;
  .line {
    margin-top: 20px;
    width: 60px;
    height: 0;
    border: 1px solid #cecece;
  }
`;
const Circle = styled.div`
  box-sizing: border-box;
  width: 40.78px;
  height: 41.18px;
  border: 2px solid ${(props) => props.color};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 10%;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: ${(props) => props.color};
  }
`;

const StageState = styled.p`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.color};
  margin-top: 10px;
`;

const JoinState = () => {
  const currentStep = useSelector((state: RootState) => state.join.currentStep); // 상태 데이터 가져옴
  return (
    <JoinStateWrapper>
      <div>
        <Circle color={currentStep === 1 ? "#E74C3C" : "#C4C4C5"}>
          <p>1</p>
        </Circle>
        <StageState color={currentStep === 1 ? "#E74C3C" : "#C4C4C5"}>
          이용약관
        </StageState>
      </div>
      <div className="line" />
      <div>
        <Circle color={currentStep === 2 ? "#E74C3C" : "#C4C4C5"}>
          <p>2</p>
        </Circle>
        <StageState color={currentStep === 2 ? "#E74C3C" : "#C4C4C5"}>
          정보입력
        </StageState>
      </div>
      <div className="line" />
      <div>
        <Circle color={currentStep === 3 ? "#E74C3C" : "#C4C4C5"}>
          <p>3</p>
        </Circle>
        <StageState color={currentStep === 3 ? "#E74C3C" : "#C4C4C5"}>
          가입완료
        </StageState>
      </div>
    </JoinStateWrapper>
  );
};

export default JoinState;
