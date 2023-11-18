import HubList from "./HubList.jsx";
import { Section } from "./styles.jsx";
import MedicineItem from "../MedicinePage/MedicineItem.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import { getSeasonString } from "../../utils/utils.js";

export default function MedicineList() {
  return (
    <Section>
      <SectionTitle
        title={`${getSeasonString()} 질병 의약품`}
        link="/medicine/medicine"
      />
      <HubList
        api="/api/medicine/representation"
        mapper={(item) => <MedicineItem key={item.medicine_code} data={item} />}
      />
    </Section>
  );
}
