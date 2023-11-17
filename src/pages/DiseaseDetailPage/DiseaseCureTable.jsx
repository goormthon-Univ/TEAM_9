import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const Category = styled.div`
  width: 85px;
  height: 85px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff6b00;
  border-radius: 50%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
  word-break: keep-all;
`;

const Caption = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

function TableItem({ category, medicine }) {
  return (
    <Row>
      <Category>{category}</Category>
      <Caption>{medicine}</Caption>
    </Row>
  );
}

export default function DiseaseCureTable({ data }) {
  if (data === null || data.length === 0) return null;

  return (
    <Container>
      {data.map(({ category, medicine }) => (
        <TableItem category={category} medicine={medicine} key={category} />
      ))}
    </Container>
  );
}
