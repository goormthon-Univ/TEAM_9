import { SubTitle, Bold } from "../../components/paragraphs.jsx";

export default function MedicineDetail({ resource }) {
  const data = resource();

  return (
    <>
      <div className="summery">
        <div className="descriptions">
          <SubTitle>{data.disease_name}</SubTitle>
          <Bold>의약품 명</Bold>
          <p>{data.medicine_name}</p>
          <Bold>질병소개</Bold>
          <p>(api 미존재, 백엔드와 상의 예정)</p>
        </div>
      </div>
      <article>
        <section>
          <SubTitle>효능</SubTitle>
          <p>(api 미존재, 백엔드와 상의 예정)</p>
        </section>
        <section>
          <SubTitle>용법, 용량</SubTitle>
          <p>{data.medicine_comp}</p>
        </section>
        <section>
          <SubTitle>주의사항</SubTitle>
          <p>(api 미존재, 백엔드와 상의 예정)</p>
        </section>
      </article>
    </>
  );
}
