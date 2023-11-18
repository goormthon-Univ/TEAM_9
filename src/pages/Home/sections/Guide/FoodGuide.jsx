import { Link } from "react-router-dom";
import GuideStyle from "./GuideStyle.jsx";
import GuideParagraph from "./GuideParagraph.jsx";
import { Bold } from "@/components/paragraphs.jsx";

export default function FoodGuide() {
  return (
    <GuideStyle>
      <Link to="/healthGuide/food">
        <div className="titleWrapper">
          <Bold className="title">식습관 가이드</Bold>
          <img
            alt="Frame"
            src="https://c.animaapp.com/ULZ0sU3D/img/frame-181.svg"
          />
        </div>
      </Link>
      <img
        className="icon"
        alt="Frame"
        src="https://c.animaapp.com/ULZ0sU3D/img/frame-183.svg"
      />
      <GuideParagraph type="food" />
    </GuideStyle>
  );
}
