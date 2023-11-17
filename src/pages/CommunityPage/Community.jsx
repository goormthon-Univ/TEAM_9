import { Link } from "react-router-dom";
import styles from "styled-components";
import CommunityBoard from "./CommunityBoard.jsx";

const ButtonContainer = styles.div`
  display: flex;
  gap: 28px;
`;

const Button = styles.span(({ $activate = false } = {}) => ({
  display: "inline-block",
  height: "60px",
  padding: "18px 32px",
  boxSizing: "border-box",
  border: $activate ? "none" : "2px solid #FF6B00",
  borderRadius: "32px",
  backgroundColor: $activate ? "#FF6B00" : "white",
  color: $activate ? "white" : "black",
  cursor: "pointer",
}));

export default function Community({ content }) {
  return (
    <>
      <ButtonContainer>
        <Link to="/community/mainboard">
          <Button className="button" $activate={content === "mainboard"}>
            전체 게시판
          </Button>
        </Link>
        <Link to="/community/consult">
          <Button className="button" $activate={content === "consult"}>
            의료 상담
          </Button>
        </Link>
        <Link to="/community/review">
          <Button className="button" $activate={content === "review"}>
            의약품, 영양제 리뷰
          </Button>
        </Link>
      </ButtonContainer>
      <CommunityBoard tap={content} />
    </>
  );
}
