import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "./paragraphs.jsx";

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const More = styled.span`
  font-size: 1rem;
  color: #828282;
  cursor: pointer;
`;

export default function SectionTitle({
  title = "",
  link = null,
  moreClick = null,
  moreRender = true,
} = {}) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      {link !== null ? (
        <Link to={link}>
          <More hidden={!moreRender}>더보기</More>
        </Link>
      ) : moreClick !== null ? (
        <More onClick={moreClick} hidden={!moreRender}>
          더보기
        </More>
      ) : null}
    </TitleWrapper>
  );
}
