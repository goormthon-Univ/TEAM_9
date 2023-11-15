import { useState } from "react";
import styles from "styled-components";

const BannerContainer = styles.div`
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
`;

const BannerGroup = styles.div`
  height: 480px;
  position: absolute;
  display: flex;
  gap: 20px;
  transform: translateX( calc( 6.25vw - ${({ $index }) =>
    `${$index * 87.5}vw - ${20 * $index}px`} ) );
  transition: transform 0.5s;
`;

const BannerItem = styles.div`
  width: 87.5vw;
  height: 480px;
  background-color: yellow;
`;

const Button = styles.div`
  position: absolute;
  z-index: 10;
  width: 80px;
  height: 80px;
  top: 200px;
  left: calc(${({ $position }) =>
    $position === "right" ? "93.75vw - 40px" : "6.25vw - 40px"});
  border-radius: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center; 
  box-shadow: 0px 4px 4px 0px #00000080;
`;

export default function Banner({ page }) {
  const bannerId = ["disease", "medicine", "healthGuide"];
  const [index, setIndex] = useState(bannerId.indexOf(page) ?? 0);

  const onTransitionEnd = (e) => {
    if (index === 1 || index === 2) return;
    e.target.style.transition = "none";
    if (index < 0) setIndex(2);
    if (index > 2) setIndex(0);
    setTimeout(() => e.target.removeAttribute("style"), 100);
  };

  return (
    <BannerContainer>
      <Button $position="left" onClick={() => setIndex((index) => index - 1)}>
        left
      </Button>
      <BannerGroup $index={index + 2} onTransitionEnd={onTransitionEnd}>
        <BannerItem>medicine 배너</BannerItem>
        <BannerItem>healthGuide 배너</BannerItem>

        <BannerItem>disease 배너</BannerItem>
        <BannerItem>medicine 배너</BannerItem>
        <BannerItem>healthGuide 배너</BannerItem>

        <BannerItem>disease 배너</BannerItem>
        <BannerItem>medicine 배너</BannerItem>
      </BannerGroup>
      <Button $position="right" onClick={() => setIndex((index) => index + 1)}>
        right
      </Button>
    </BannerContainer>
  );
}
