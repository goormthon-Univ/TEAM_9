import styled from "styled-components";
import RepresentativeDisease from "./RepresentativeDisease.jsx";
import FoodGuideBox from "./FoodGuide.jsx";
import LifeGuideBox from "./LifeGuide.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";

const DiseaseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  .disease_thumb {
    height: 320px;
  }
  .healthGuideWrapper {
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;

export default function CurrentDiseaseGuide() {
  return (
    <DiseaseWrapper>
      <SectionTitle title="현재 계절에 많이 발생하는 질병" link="/disease" />
      <RepresentativeDisease />
      <div className="healthGuideWrapper">
        <FoodGuideBox />
        <LifeGuideBox />
      </div>
    </DiseaseWrapper>
  );
}
