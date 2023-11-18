import styled from "styled-components";
import { SubTitle } from "@/components/paragraphs.jsx";

const Paragraph = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 0.875rem;
`;

export default function CommunityPreviewArticle({ title, content }) {
  return (
    <div>
      <SubTitle>{title}</SubTitle>
      <Paragraph>{content}</Paragraph>
    </div>
  );
}
