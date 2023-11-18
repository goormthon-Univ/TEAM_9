import styled from "styled-components";
import { getSeasonCode } from "@/utils/utils.js";
import guideData from "@/data/guideData.json";

const Section = styled.div`
  width: 100%;
  height: 350px;
  overflow-y: hidden;
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  overflow-y: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  word-wrap: break-word;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  .split {
    display: block;
    margin-top: 20px;
  }
`;

export default function GuideParagraph({ type }) {
  const rawData = guideData[getSeasonCode()][type]
    .split("\n")
    .reduce((arr, cur, i) => {
      if (arr.length === 0) return [cur];
      arr.push(<span className="split" key={i} />);
      arr.push(cur);
      return arr;
    }, []);

  return (
    <Section>
      <Paragraph>{rawData}</Paragraph>
    </Section>
  );
}
