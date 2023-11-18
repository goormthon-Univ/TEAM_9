import styled from "styled-components";
import { getSeasonCode } from "../../utils/utils.js";
import guideData from "../../data/guideData.json";

const ParagraphBox = styled.p`
  width: 100%;
  min-height: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  padding: 20px 40px;
  margin: 40px 0;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px 0px #00000040;
  display: flex;
  align-items: center;
  .folded &:nth-child(n + 6) {
    display: none;
  }
`;

export default function HealthGuideParagraph({ tap, folded }) {
  const rawData = guideData[getSeasonCode()][tap];
  const paragraphs = rawData
    .split("\n")
    .map((line, i) => (
      <ParagraphBox key={line.substring(0, 5) + "_" + i}>{line}</ParagraphBox>
    ));

  return <article className={folded ? "folded" : ""}>{paragraphs}</article>;
}
