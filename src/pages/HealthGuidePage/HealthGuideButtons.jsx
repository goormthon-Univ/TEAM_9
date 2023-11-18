import { Link } from "react-router-dom";
import styles from "styled-components";

const ButtonContainer = styles.div`
  display: flex;
  gap: 28px;
`;

const Button = styles.span(({ $activate = false } = {}) => ({
  display: "inline-block",
  height: "60px",
  padding: "16px 24px",
  boxSizing: "border-box",
  border: $activate ? "none" : "2px solid #FF6B00",
  borderRadius: "32px",
  backgroundColor: $activate ? "#FF6B00" : "white",
  color: $activate ? "white" : "black",
  cursor: "pointer",
}));

export default function HealthGuideButtons({ content, onChange }) {
  return (
    <ButtonContainer>
      <Link to="/healthGuide/food" onClick={onChange}>
        <Button className="button" $activate={content === "food"}>
          식습관 가이드
        </Button>
      </Link>
      <Link to="/healthGuide/living" onClick={onChange}>
        <Button className="button" $activate={content === "living"}>
          생활 수칙
        </Button>
      </Link>
    </ButtonContainer>
  );
}
