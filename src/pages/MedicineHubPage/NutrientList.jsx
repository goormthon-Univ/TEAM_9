import HubList from "./HubList.jsx";
import { Section } from "./styles.jsx";
import NutrientItem from "../NutrientPage/NutrientItem.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import { getSeasonString } from "../../utils/utils.js";

export default function MedicineList() {
  return (
    <Section>
      <SectionTitle
        title={`${getSeasonString()} 질병 영양제`}
        link="/medicine/nutrient"
      />
      <HubList
        api="/api/nutrients/representation"
        mapper={(item) => <NutrientItem key={item.id} data={item} />}
      />
    </Section>
  );
}
