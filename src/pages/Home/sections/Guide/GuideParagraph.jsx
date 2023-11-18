import styled from "styled-components";
import { Paragraph } from "../../../../components/paragraphs.jsx";
import { getSeasonCode } from "../../../../utils/utils.js";
import guideData from "../../../../data/guideData.json";

const Section = styled.div`
  width: 100%;
  height: 350px;
  overflow-y: hidden;
`;

export default function GuideParagraph({ type }) {
  const rawData = guideData[getSeasonCode()][type].slice(0, 375) + "...";

  return (
    <Section>
      <Paragraph>{rawData}</Paragraph>
    </Section>
  );
}
