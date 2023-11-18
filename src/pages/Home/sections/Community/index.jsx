import { useState } from "react";
import styled from "styled-components";
import CommunityPreviewList from "./CommunityPreviewList.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";

const StyledFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 40px;
  .buttonWrapper {
    display: flex;
    gap: 28px;
  }
`;

const Button = styled.span(({ $activate = false } = {}) => ({
  display: "inline-block",
  height: "60px",
  padding: "16px 24px",
  boxSizing: "border-box",
  border: "2px solid #FF6B00",
  borderRadius: "32px",
  backgroundColor: $activate ? "#FF6B00" : "white",
  color: $activate ? "white" : "black",
  cursor: "pointer",
}));

function CommunityPreview() {
  const [query, setQuery] = useState("1");

  return (
    <StyledFrameWrapper>
      <SectionTitle title="커뮤니티" link="/community" />
      <div className="buttonWrapper">
        <Button $activate={query === "1"} onClick={() => setQuery("1")}>
          의료 상담
        </Button>
        <Button $activate={query === "2"} onClick={() => setQuery("2")}>
          리뷰
        </Button>
      </div>
      <CommunityPreviewList query={query} />
    </StyledFrameWrapper>
  );
}

export default CommunityPreview;
