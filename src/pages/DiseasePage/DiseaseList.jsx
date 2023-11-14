function DiseaseItem({ data }) {
  return (
    <div className="list-item">
      <div>코드 : {data.disease_code}</div>
      <div>이름 : {data.disease_name}</div>
    </div>
  );
}

export default function DiseaseList({ resource }) {
  const data = resource().disease_list;

  return (
    <div className="list-grid">
      {data.map((e) => (
        <DiseaseItem key={e.disease_code} data={e} />
      ))}
    </div>
  );
}
