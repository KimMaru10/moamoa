import React, { useState } from "react";
import styled from "styled-components";
import angleDown from "../assets/images/angle-down-solid.png";
import checkIcon from "../assets/images/checkIcon.png";

const AccordionWrapper = styled.div`
  width: 100%;
  height: 60%;
  margin: 20px;
  overflow: hidden;
`;

const AccordionItem = styled.div`
  margin: 20px 0;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  img {
    width: 17px;
    height: 22px;
  }
  .header-left {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      display: none;
    }
    input[type="checkbox"] + label {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 24.04px;
      height: 25px;
      background: #ffffff;
      border: 1px solid #969696;
      border-radius: 5px;
    }
    input[id^="check"]:checked + label::after {
      content: url(${checkIcon});
      width: 14px;
      height: 12px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      margin-left: 20px;
    }
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  margin: 20px 0;
  box-sizing: border-box;
  width: 100%;
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: 0px 10px;
  background: #ffffff;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(""); // State to track which accordion item is open

  const toggleAccordion = (id: string) => {
    if (openAccordion === id) {
      setOpenAccordion(""); // If clicked item is already open, close it
    } else {
      setOpenAccordion(id); // Otherwise, open the clicked item
    }
  };

  return (
    <AccordionWrapper>
      <AccordionItem>
        <AccordionHeader onClick={() => toggleAccordion("check1")}>
          <div className="header-left">
            <input type="checkbox" name="accordioncv" id="check1" />
            <label htmlFor="check1"></label>
            <p>MOAMOA 이용약관 및 서비스 제공 (필수)</p>
          </div>
          <img src={angleDown} alt="arrowDown" />
        </AccordionHeader>
        <AccordionContent isOpen={openAccordion === "check1"}>
          이용약관
          <br />
          MOAMOA(이하 '사이트'라 합니다.)는 이용자들의 개인정보를 철저히
          보호하며 불법적인 정보사용, 정보유출 등으로 인한 피해가 발생하지
          않도록 노력하고 있으며, 개인정보와 관련된 법령상의 개인정보보호 규정을
          준수하고 있습니다.
          <br />
          1. 수집하는 개인정보 항목 및 수집방법
          <br />
          1) 수집항목
          <br />
          필수항목: 이메일
          <br />
          2) 개인정보 수집방법 홈페이지를 통한 회원가입
          <br />
          2. 개인정보의
          <br />
          수집 및 이용목적 사이트는 수집한 개인정보를 다음의 목적을 위해
          활용합니다.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader onClick={() => toggleAccordion("check2")}>
          <div className="header-left">
            <input type="checkbox" name="accordioncv" id="check2" />
            <label htmlFor="check2"></label>
            <p>개인정보취급방침 및 개인정보 3자 제공 (필수)</p>
          </div>
          <img src={angleDown} alt="arrowDown" />
        </AccordionHeader>
        <AccordionContent isOpen={openAccordion === "check2"}>
          개인정보취급방침
          <br />
          MOAMOA(이하 '사이트'라 합니다.)는 이용자들의 개인정보를 철저히
          보호하며 불법적인 정보사용, 정보유출 등으로 인한 피해가 발생하지
          않도록 노력하고 있으며, 개인정보와 관련된 법령상의 개인정보보호 규정을
          준수하고 있습니다.
          <br />
          1. 수집하는 개인정보 항목 및 수집방법
          <br />
          1) 수집항목
          <br />
          필수항목: 이메일
          <br />
          2) 개인정보 수집방법 홈페이지를 통한 회원가입
          <br />
          2. 개인정보의
          <br />
          수집 및 이용목적 사이트는 수집한 개인정보를 다음의 목적을 위해
          활용합니다.
        </AccordionContent>
      </AccordionItem>
    </AccordionWrapper>
  );
};

export default Accordion;
