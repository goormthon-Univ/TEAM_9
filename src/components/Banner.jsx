import { useState } from "react";
import styles from "styled-components";
import arrowRight from "../assets/arrowRight.svg";
import diseaseBanner from "../assets/disease_banner.png";
import medicineBanner from "../assets/medicine_banner.png";
import lifeBanner from "../assets/life_banner.png";

const BannerContainer = styles.div`
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const BannerGroup = styles.div`
  height: 480px;
  position: absolute;
  display: flex;
  gap: 50px;
  transform: translateX( calc( 6.25vw - ${({ $index }) =>
    `${$index * 87.5}vw - ${50 * $index}px`} ) );
  transition: transform 0.5s;
`;

const BannerItem = styles.div`
  position: relative;
  width: 87.5vw;
  height: 480px;
  border-radius: 32px;
  overflow: hidden;
  background-color: #d0d0d0;
`;

const BannerImage = styles.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
  & img {
    width: 54px;
    height: 54px;
    transform: ${({ $position }) =>
      $position === "right" ? "scaleX(-1)" : "none"}
  }
`;

const BannerBackdrop = styles.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(90deg, #fffc 4%, #fff0 6%, #fff0 94%, #fffc 96%);
`;

const bannerItemData = {
  disease: diseaseBanner,
  medicine: medicineBanner,
  healthGuide: lifeBanner,
};

function makeBannerItems(bannerId) {
  const bannerArr = [
    ...bannerId.slice(-2),
    ...bannerId,
    ...bannerId.slice(0, 2),
  ];
  return bannerArr.map((id, i) => {
    const img = bannerItemData[id];
    return (
      <BannerItem key={`${id}_${i - 2}`}>
        <BannerImage src={img} alt={id} />
      </BannerItem>
    );
  });
}

export default function Banner({ page }) {
  const bannerId = ["disease", "medicine", "healthGuide"];
  const [index, setIndex] = useState(bannerId.indexOf(page) ?? 0);

  const onTransitionEnd = (e) => {
    if (index === 1 || index === 2) return;
    e.target.style.transition = "none";
    if (index < 0) setIndex((index) => (index + 3) % 3);
    if (index > 2) setIndex((index) => index % 3);
    setTimeout(() => e.target.removeAttribute("style"), 100);
  };

  return (
    <BannerContainer>
      <BannerBackdrop />
      <Button $position="left" onClick={() => setIndex((index) => index - 1)}>
        <img src={arrowRight} />
      </Button>
      <BannerGroup $index={index + 2} onTransitionEnd={onTransitionEnd}>
        {makeBannerItems(bannerId)}
      </BannerGroup>
      <Button $position="right" onClick={() => setIndex((index) => index + 1)}>
        <img src={arrowRight} />
      </Button>
    </BannerContainer>
  );
}
