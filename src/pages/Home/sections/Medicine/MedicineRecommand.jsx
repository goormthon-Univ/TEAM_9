import styled from "styled-components";
import SectionTitle from "@/components/SectionTitle.jsx";
import HubList from "@/pages/MedicineHubPage/HubList.jsx";
import MedicineItem from "@/pages/MedicinePage/MedicineItem.jsx";
import { getSeasonString } from "@/utils/utils.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  .topBox {
    width: 100%;
    height: 40px;
    display: flex;
    font-family: Pretendard;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export default function MedicineRecommand() {
  return (
    <Wrapper>
      <SectionTitle title="의약품 추천" link="/medicine" />
      <div className="topBox">{getSeasonString()}철 의약품!</div>
      <HubList
        api="/api/medicine/representation"
        mapper={(item) => <MedicineItem key={item.medicine_code} data={item} />}
      />
    </Wrapper>
  );
}
