import styled from "styled-components";
import logoWhite from "../assets/seasonwell-logo-white.svg";

const FooterWrapper = styled.footer`
  margin-top: 10px;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const FooterBox = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const FooterImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const FooterLeft = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
`;

const FooterText = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterText className="left">
          이용약관 | 개인정보보호방침
          <br />
          상호명 : 시즌웰
          <br />
          copyright @ 구름톤 All rights reserved
        </FooterText>
        <FooterText className="right">
          PM : 정다운
          <br />
          DE : 임채현
          <br />
          BE : 이정현, 주현정
          <br />
          FE : 박병영, 이근우, 한기종
        </FooterText>
      </FooterBox>
    </FooterWrapper>
  );
}
