import HubList from "@/pages/MedicineHubPage/HubList.jsx";
import DiseaseItem from "@/pages/DiseasePage/DiseaseListItem.jsx";

export default function RepresentativeDisease() {
  return (
    <HubList
      api="/api/disease/representation"
      mapper={(item) => <DiseaseItem key={item.disease_code} data={item} />}
    />
  );
}
