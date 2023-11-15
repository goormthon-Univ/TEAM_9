import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const ListItemThumb = styled.div`
  width: 262px;
  height: 262px;
  background-color: #d9d9d9;
`;

const ListItemMedicine = styled.h3`
  margin-bottom: 0;
`;

const ListItemName = styled.p``;

export default function MedicineItem({ data }) {
  return (
    <Link to={data.disease_code}>
      <ListItem>
        <ListItemThumb />
        <ListItemMedicine>{data.medicine_name}</ListItemMedicine>
        <ListItemName>여기에 질병명 들어가야 하는데 api가 없음</ListItemName>
      </ListItem>
    </Link>
  );
}
