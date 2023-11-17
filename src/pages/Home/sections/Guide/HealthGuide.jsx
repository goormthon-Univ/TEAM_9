import GuideStyle from "./GuideStyle.jsx";
import { Bold } from "../../../../components/paragraphs.jsx";

export default function HealthGuide() {
  return (
    <GuideStyle>
      <div className="titleWrapper">
        <Bold className="title">건강가이드</Bold>
        <img
          alt="Frame"
          src="https://c.animaapp.com/ULZ0sU3D/img/frame-181.svg"
        />
      </div>
      <img
        className="icon"
        alt="Frame"
        src="https://c.animaapp.com/ULZ0sU3D/img/frame-183.svg"
      />
      <p className="paragraph">대충 내용. 여기다 데이터 렌더링.</p>
    </GuideStyle>
  );
}
