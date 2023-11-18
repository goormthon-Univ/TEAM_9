import styled from "styled-components";

const Wrapper = styled.article`
  background-color: #f7f7f7;
  box-sizing: border-box;
  padding: 40px;
`;
const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 30px;
`;
const OrangeTitle = styled.h3`
  color: #ff6b00;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;
const SubTitle = styled.h4`
  color: balck;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
`;
const Paragraph = styled.p`
  color: black;
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`;

export default function RepresentativeDisease() {
  return (
    <Wrapper>
      <OrangeTitle>독감[인플루엔자] 환자 급증!</OrangeTitle>
      <SubTitle>요즘 유행중인 독감, 감기와 감별방법은?</SubTitle>
      <ParagraphWrapper>
        <Paragraph>
          1. 흔한 감기는 미열이 서서히 시작됩니다. 이와 달리 독감(인플루엔자)은
          갑자기 시작되기 때문에 고열(38~41℃)이 시작된 시점을 정확하게 기억할 수
          있습니다.
        </Paragraph>
        <Paragraph>
          2. 독감(인플루엔자)는 두통, 피로감, 근육통 및 관절통 등 소위 심한
          몸살이라고 표현하는 전신 증상이 뚜렷하여 일상생활이 불가능할 정도로
          감기와 감별할 수 있습니다.
        </Paragraph>
      </ParagraphWrapper>
    </Wrapper>
  );
}
