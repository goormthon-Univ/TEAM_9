import styled from "styled-components";
import DiseaseItem from "./DiseaseListItem.jsx";

const ListGrid = styled.div`
  width: 100%;
  max-width: 1180px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
  grid-gap: 100px 80px;
  justify-content: center;
`;

export default function DiseaseList({ resource }) {
  const data = resource().disease_list;

  return (
    <ListGrid>
      {data.map((e) => (
        <DiseaseItem key={e.disease_code} data={e} />
      ))}
    </ListGrid>
  );
}
